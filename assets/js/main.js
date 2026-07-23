document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const cursorGlow = document.querySelector('.cursor-glow');
    const themeToggle = document.querySelector('.theme-toggle');

    // ---- Theme Toggle ----
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        if (theme === 'light') {
            icon.className = 'fas fa-moon';
            themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        } else {
            icon.className = 'fas fa-sun';
            themeToggle.setAttribute('aria-label', 'Toggle light mode');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateThemeIcon(next);
        });
    }

    // ---- Nav Overlay ----
    const overlay = document.createElement('div');
    overlay.classList.add('nav-overlay');
    document.body.appendChild(overlay);

    // ---- Cursor Spotlight ----
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        // Smooth lerp for the glow following cursor
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        if (cursorGlow) {
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
        }
        requestAnimationFrame(animateGlow);
    }
    animateGlow();

    // ---- Mobile Menu ----
    function openMenu() {
        navLinks.classList.add('active');
        overlay.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            isOpen ? closeMenu() : openMenu();
        });
    }

    overlay.addEventListener('click', closeMenu);

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // ---- Smooth Scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            const target = document.getElementById(href.substring(1));
            if (target) {
                e.preventDefault();
                const offset = navbar.offsetHeight + 20;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ---- Section Reveal on Scroll ----
    const sections = document.querySelectorAll('.section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.06,
        rootMargin: '0px 0px -80px 0px'
    });

    sections.forEach(section => revealObserver.observe(section));

    // ---- Active Nav Highlighting ----
    const navItems = document.querySelectorAll('.nav-links a');
    const allSections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        const scrollY = window.scrollY + navbar.offsetHeight + 120;
        let currentId = '';

        allSections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollY >= top && scrollY < top + height) {
                currentId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + currentId) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    // ---- Grid Cell Random Animation ----
    const gridCells = document.querySelectorAll('.grid-cell');
    function randomizeGrid() {
        gridCells.forEach(cell => {
            cell.classList.remove('active');
        });
        // Activate 2-4 random cells
        const count = 2 + Math.floor(Math.random() * 3);
        const indices = [];
        while (indices.length < count) {
            const idx = Math.floor(Math.random() * gridCells.length);
            if (!indices.includes(idx)) indices.push(idx);
        }
        indices.forEach(idx => gridCells[idx].classList.add('active'));
    }

    setInterval(randomizeGrid, 2500);

    // ---- Navbar Scroll Style ----
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
        } else {
            navbar.style.borderBottomColor = 'rgba(255,255,255,0.06)';
        }
    }, { passive: true });

    // ---- Projects Carousel ----
    const track = document.querySelector('.projects-track');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');
    const cards = document.querySelectorAll('.project-card');
    let currentIndex = 0;

    // Create dots
    cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.setAttribute('aria-label', `Go to project ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => scrollToCard(i));
        dotsContainer.appendChild(dot);
    });

    function scrollToCard(index) {
        if (index < 0) index = cards.length - 1;
        if (index >= cards.length) index = 0;
        currentIndex = index;
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        updateDots();
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => scrollToCard(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollToCard(currentIndex + 1));

    // Update dots on manual scroll
    if (track) {
        let scrollTimeout;
        track.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const scrollLeft = track.scrollLeft;
                const cardWidth = cards[0].offsetWidth + 24; // gap
                const newIndex = Math.round(scrollLeft / cardWidth);
                if (newIndex !== currentIndex) {
                    currentIndex = newIndex;
                    updateDots();
                }
            }, 50);
        }, { passive: true });
    }

    // ---- Experience Back-to-Top Button ----
    const expBackBtn = document.querySelector('.exp-back-btn');
    if (expBackBtn) {
        expBackBtn.addEventListener('click', () => {
            const expTop = document.getElementById('exp-top');
            if (expTop) {
                const offset = navbar.offsetHeight + 20;
                const top = expTop.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    }
});

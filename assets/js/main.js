document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const cursorGlow = document.querySelector('.cursor-glow');

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
});

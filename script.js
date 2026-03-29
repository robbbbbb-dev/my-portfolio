// ============================================
// PORTFOLIO DATA - EDIT YOUR PROJECTS HERE
// ============================================

const projects = [
  {
    title: "Plusinv",
    description: "A multi-tenant platform for business rental owners",
    image: "src/project3.png",
    tags: ["React", "Next.js", "tRPC", "Github Actions", "Vercel", "Railway"],
    link: "https://plusinv.online"
  },
  {
    title: "School Information System",
    description: "A comprehensive student information system featuring an interactive 3D school tour powered by Three.js. Manage student records, grades, attendance, and enrollment with robust analytics dashboards and custom reporting tools.",
    image: "src/no_image_provided.png",
    tags: ["PHP", "MySQL", "Vanilla JS", "Three.js", "3D Tour"],
    link: "#"
  },
  {
    title: "School Information System",
    description: "A comprehensive student information system for managing student records, grades, attendance, and enrollment. Features interactive dashboards with Chart.js analytics, custom form builder for data collection, and robust reporting tools.",
    image: "src/no_image_provided.png",
    tags: ["Laravel", "MySQL", "Chart.js", "Form Builder"],
    link: "#"
  },
  {
    title: "HRIS",
    description: "A human resource information system for managing employee data, payroll, leave requests, and performance reviews. Includes interactive analytics dashboards with Chart.js, employee self-service portal, and automated workflows.",
    image: "src/no_image_provided.png",
    tags: ["Laravel", "MySQL", "Chart.js"],
    link: "#"
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "REST API",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "SASS",
  "Git",
  "Docker",
  "Figma",
  "Agile",
  "Claude Code",
  "Opencode",
  "GCP"
];

const certifications = [
  { title: "CCNA: Introduction to Networks", issuer: "Cisco" },
  { title: "Learn JavaScript Course", issuer: "Codecademy" },
  { title: "Learn JavaScript: Error Handling", issuer: "Codecademy" },
  { title: "Learn JavaScript: Asynchronous Programming", issuer: "Codecademy" },
  { title: "OpenAI API Coding with JavaScript", issuer: "OpenAI" },
  { title: "Certificate of Completion: Claude 101", issuer: "Anthropic" },
  { title: "Claude Code in Action", issuer: "Anthropic" },
  { title: "CompTIA IT Fundamentals+ (ITF+)", issuer: "CompTIA" },
];

// ============================================
// PROFILE DATA - EDIT YOUR INFO HERE
// ============================================

const profile = {
  name: "Paolo Robles",
  title: "Web Developer",
  tagline: "Building modern, responsive, and user-friendly web experiences.",
  email: "robles.pfr@gmail.com",
  phone: "+63 939 393 5996",
  location: "Quezon City, Philippines",
  yearsExperience: "3+",
  projectsCompleted: "10+",
  happyClients: "5+"
};

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderProjects() {
  const container = document.getElementById('projects-container');
  
  if (!container) return;

  container.innerHTML = projects.map((project, index) => `
    <article class="project-card">
      <div class="project-image-wrapper">
        <img 
          src="${project.image}" 
          alt="${project.title}" 
          class="project-image"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="project-image-placeholder" style="display: none;">
          Add image at: ${project.image}
        </div>
      </div>
      <div class="project-info">
        <span class="project-number">Project ${String(index + 1).padStart(2, '0')}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <a href="${project.link}" class="project-link">
          View Project
          <span>&rarr;</span>
        </a>
      </div>
    </article>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  const issuerIcons = {
    Cisco: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-4 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm8 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM8 13a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm8 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-4 2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>`,
    Codecademy: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.395 0C5.103 0 0 5.103 0 11.395c0 6.293 5.103 11.396 11.395 11.396C17.688 22.791 22.79 17.688 22.79 11.395 22.791 5.103 17.688 0 11.395 0zM7.31 14.354a.537.537 0 0 1-.358.141.53.53 0 0 1-.377-.157L4.72 12.49a.534.534 0 0 1 0-.754l1.855-1.847a.535.535 0 0 1 .755.757L5.852 12.11l1.478 1.463a.535.535 0 0 1-.02.78zm4.105 1.017a.534.534 0 0 1-.518.404.528.528 0 0 1-.133-.017.535.535 0 0 1-.387-.649l2.106-7.94a.535.535 0 0 1 1.036.263l-2.104 7.94zm4.49-.876a.535.535 0 0 1-.755-.757l1.478-1.47-1.478-1.463a.535.535 0 1 1 .755-.757l1.855 1.847a.534.534 0 0 1 0 .754l-1.855 1.846z"/></svg>`,
    OpenAI: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.8-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.681zm2.010-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.17V6.838a.07.07 0 0 1 .028-.063l4.832-2.786a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.080-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>`,
    Anthropic: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.3 3.4h-3.2L9.5 20.6h3.3l.9-2.8h5.7l.9 2.8h3.3L17.3 3.4zm-2.8 11.6 1.9-5.8 1.9 5.8h-3.8zM6.7 3.4H3.5L0 20.6h3.3L6.7 3.4z"/></svg>`,
    CompTIA: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  };

  const defaultIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;

  container.innerHTML = certifications.map(cert => `
    <div class="cert-card">
      <div class="cert-icon">
        ${issuerIcons[cert.issuer] || defaultIcon}
      </div>
      <div class="cert-info">
        <h3 class="cert-title">${cert.title}</h3>
        <span class="cert-issuer">${cert.issuer}</span>
      </div>
    </div>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  
  if (!container) return;

  container.innerHTML = skills.map(skill => `
    <span class="skill-tag">${skill}</span>
  `).join('');
}

function updateProfile() {
  // Update hero section
  const heroName = document.querySelector('.hero-name');
  const heroTitle = document.querySelector('.hero-title');
  const heroTagline = document.querySelector('.hero-tagline');
  
  if (heroName) heroName.textContent = profile.name;
  if (heroTitle) heroTitle.textContent = profile.title;
  if (heroTagline) heroTagline.textContent = profile.tagline;

  // Update about section stats
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length >= 3) {
    statNumbers[0].textContent = profile.yearsExperience;
    statNumbers[1].textContent = profile.projectsCompleted;
    statNumbers[2].textContent = profile.happyClients;
  }

  // Update contact section
  const contactItems = document.querySelectorAll('.contact-item');
  if (contactItems.length >= 3) {
    contactItems[0].innerHTML = `<span class="contact-icon">&#9993;</span><span>${profile.email}</span>`;
    contactItems[1].innerHTML = `<span class="contact-icon">&#9742;</span><span>${profile.phone}</span>`;
    contactItems[2].innerHTML = `<span class="contact-icon">&#9906;</span><span>${profile.location}</span>`;
  }

  // Update footer
  const footer = document.querySelector('.footer p');
  if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} ${profile.name}. All rights reserved.`;
  }
}

// ============================================
// MOBILE NAVIGATION
// ============================================

function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggle.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      toggle.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      toggle.classList.remove('active');
    }
  });
}

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = 'var(--shadow)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
}

// ============================================
// HERO PARTICLES
// ============================================

function initHeroParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const count = 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    const left = Math.random() * 100;
    const duration = Math.random() * 12 + 8;
    const delay = Math.random() * 10;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: -10px;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
    `;
    container.appendChild(p);
  }
}

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  updateProfile();
  initMobileNav();
  initSmoothScroll();
  initNavbarScroll();
  initHeroParticles();
  renderCertifications();
});

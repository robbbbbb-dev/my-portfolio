// ============================================
// PORTFOLIO DATA - EDIT YOUR PROJECTS HERE
// ============================================

const projects = [
  {
    title: "School Information System",
    description: "A comprehensive student information system featuring an interactive 3D school tour powered by Three.js. Manage student records, grades, attendance, and enrollment with robust analytics dashboards and custom reporting tools.",
    image: "src/no_image_provided.png",
    tags: ["PHP", "MySQL", "Vanilla JS", "Three.js", "3D Tour"],
    link: "#"
  },
  {
    title: "Plusinv",
    description: "A multi-tenant platform for business rental owners",
    image: "src/project3.png",
    tags: ["React", "Next.js", "tRPC", "Github Actions", "Vercel", "Railway"],
    link: "https://plusinv.online"
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
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  updateProfile();
  initMobileNav();
  initSmoothScroll();
  initNavbarScroll();
});

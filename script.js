// ========================================
// Data Configuration
// ========================================
const skillsData = [
    { icon: 'fa-code', title: 'Programming', skills: ['Java', 'Python', 'JavaScript', 'C++', 'C', 'SQL', 'Rust', 'R'] },
    { icon: 'fa-globe', title: 'Web Development', skills: ['React.js', 'Node.js', 'Spring Boot', 'TypeScript', 'Django', 'Flask', 'REST APIs', 'gRPC', 'GraphQL', 'Redux'] },
    { icon: 'fa-database', title: 'Databases & Big Data', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle', 'Redis', 'Apache Kafka', 'Hadoop', 'Spark'] },
    { icon: 'fa-cloud', title: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'Kubernetes', 'GCP', 'Jenkins', 'CI/CD', 'Ansible', 'Git'], featured: 'AWS' },
    { icon: 'fa-brain', title: 'Machine Learning & AI', skills: ['PyTorch', 'TensorFlow', 'LangChain', 'RAG', 'Ollama', 'MCP'] },
    { icon: 'fa-tools', title: 'Tools & Architecture', skills: ['Microservices', 'System Design', 'RabbitMQ', 'JUnit', 'Mockito', 'Postman', 'Linux', 'JIRA'] }
];

const experienceData = [
    {
        title: 'Associate Software Engineer',
        company: 'Light & Wonder',
        date: 'Jan 2023 — Jul 2024',
        points: [
            'Designed and optimized backend microservices using <strong>Java</strong> and <strong>Spring Boot</strong>, increasing request throughput by <strong>70%</strong>.',
            'Built event-driven analytics pipelines using <strong>Apache Kafka</strong> processing millions of player events daily.',
            'Optimized multi-database performance across <strong>PostgreSQL</strong>, Oracle, MongoDB, MySQL, and Redis, reducing query times by <strong>30%</strong>.',
            'Automated CI/CD pipelines using <strong>GitHub Actions</strong>, Jenkins, Docker, and Kubernetes, reducing deployment time by <strong>40%</strong>.',
            'Led migration to <strong>Java 17</strong> and strengthened testing with JUnit/Mockito, achieving <strong>85% coverage</strong>.',
            'Implemented <strong>Role-Based Access Control (RBAC)</strong> for secure, role-scoped access across backend resources.'
        ],
        tags: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes']
    },
    {
        title: 'Software Engineer Intern',
        company: 'Light & Wonder',
        date: 'Aug 2022 — Dec 2022',
        points: [
            'Built user-facing features using <strong>Angular</strong> and TypeScript with component-based UI and error handling.',
            'Developed backend services using <strong>C#</strong> and .NET with REST APIs, reducing data-related errors by <strong>60%</strong>.',
            'Contributed to DevOps workflows using CI/CD pipelines, Docker, and logging/monitoring tools.'
        ],
        tags: ['Angular', 'TypeScript', 'C#', '.NET', 'Redis', 'Docker']
    }
];

const projectsData = [
    {
        title: 'MediPatient — Healthcare Platform',
        description: 'A full-stack healthcare platform with 5 microservices using Java Spring Boot and React. Features API Gateway for REST and gRPC communication, Kafka for event streaming, JWT authentication, and AWS deployment with ECS and ALB.',
        tech: ['Java', 'Spring Boot', 'React', 'AWS', 'Kafka', 'gRPC', 'PostgreSQL'],
        icon: 'fa-hospital',
        featured: true,
        github: 'https://github.com/patanjali-22/MediPatient'
    },
    {
        title: 'Distributed Blog Platform',
        description: 'Production-scale distributed blog platform with Node.js and Express, featuring hybrid data modeling with MongoDB and PostgreSQL, Redis caching, and RabbitMQ for async communication.',
        tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'RabbitMQ'],
        icon: 'fa-blog',
        github: 'https://github.com/patanjali-22/Blog-App-Microservices',
        website: 'https://blogappmicroservices.netlify.app'
    },
    {
        title: 'Video-Audio Converter — DevOps',
        description: 'Microservices architecture for converting MP4 videos to MP3. Deployed on AWS EKS with Helm charts, featuring auth-server, converter-module, notification-server, RabbitMQ for message queuing, and MongoDB/PostgreSQL databases.',
        tech: ['Python', 'AWS EKS', 'Kubernetes', 'Helm', 'RabbitMQ', 'MongoDB', 'Docker'],
        icon: 'fa-video',
        github: 'https://github.com/patanjali-22/Video-audio-converter'
    },
    {
        title: 'RAG App with MCP',
        description: 'Agentic RAG application using Model Context Protocol (MCP) with Qdrant vector database for semantic search. Features F1 FAQ retrieval, Bright Data web search integration, and seamless Cursor IDE integration.',
        tech: ['Python', 'MCP', 'RAG', 'Qdrant', 'Docker', 'LangChain', 'Vector DB'],
        icon: 'fa-brain',
        github: 'https://github.com/patanjali-22/RAG-App-MCP'
    },
    {
        title: 'Code Review Assistant',
        description: 'AI-powered code review assistant using RAG pipelines with embedding-based retrieval. Reduced manual review time by 30% with prompt engineering and model fine-tuning on Vertex AI.',
        tech: ['Python', 'LangChain', 'RAG', 'ChromaDB', 'Vertex AI', 'Streamlit'],
        icon: 'fa-robot',
        github: 'https://github.com/patanjali-22/Code_Reviewer'
    },
    {
        title: 'Pintos Operating System Kernel',
        description: 'Developed core kernel modules for a Unix-like OS including priority donation, MLFQ scheduling, and secured system calls. Achieved 95% success rate on 200+ test scenarios.',
        tech: ['C', 'Operating Systems', 'Multithreading', 'GDB', 'Virtual Memory'],
        icon: 'fa-microchip'
    }
];

// ========================================
// DOM Content Loading
// ========================================
// ========================================
// DOM Content Loading
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTypingEffect();
    renderSkills();
    renderExperience();
    renderProjects();
    initScrollAnimations();
});

// ========================================
// Navigation
// ========================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

// ========================================
// Typing Effect
// ========================================
function initTypingEffect() {
    const titles = ['Software Engineer', 'Backend Developer', 'Cloud Enthusiast', 'Problem Solver'];
    const typingElement = document.getElementById('typing-text');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
            typingElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ========================================
// Render Skills
// ========================================
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = skillsData.map(category => `
        <div class="skill-category">
            <div class="category-header">
                <i class="fas ${category.icon}"></i>
                <h3>${category.title}</h3>
            </div>
            <div class="skill-tags">
                ${category.skills.map(skill => `
                    <span class="skill-tag${category.featured === skill ? ' featured' : ''}">${skill}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ========================================
// Render Experience
// ========================================
function renderExperience() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    timeline.innerHTML = experienceData.map(exp => `
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <div class="timeline-title-wrapper">
                        <h3 class="timeline-title">${exp.title}</h3>
                        <span class="timeline-company">@ ${exp.company}</span>
                    </div>
                    <span class="timeline-date">
                        <i class="far fa-calendar-alt"></i>
                        ${exp.date}
                    </span>
                </div>
                <ul class="timeline-list">
                    ${exp.points.map(point => `
                        <li><i class="fas fa-chevron-right"></i>${point}</li>
                    `).join('')}
                </ul>
                <div class="timeline-tags">
                    ${exp.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// Render Projects
// ========================================
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projectsData.map(project => `
        <article class="project-card${project.featured ? ' featured' : ''}">
            <div class="project-image">
                <div class="project-overlay">
                    <div class="project-links">
                        ${project.github ? `
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View Code">
                            <i class="fab fa-github"></i>
                        </a>` : ''}
                        ${project.website ? `
                        <a href="${project.website}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View Website">
                            <i class="fas fa-external-link-alt"></i>
                        </a>` : ''}
                    </div>
                </div>
                <div class="project-icon"><i class="fas ${project.icon}"></i></div>
            </div>
            <div class="project-content">
                ${project.featured ? '<span class="project-label">Featured Project</span>' : ''}
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="project-buttons">
                    ${project.github ? `
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-btn">
                        <i class="fab fa-github"></i>
                        <span>View Code</span>
                    </a>` : ''}
                    ${project.website ? `
                    <a href="${project.website}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-secondary">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                    </a>` : ''}
                </div>
            </div>
        </article>
    `).join('');
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('animate-ready');
        observer.observe(section);
    });

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-ready { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
        .animate-in { opacity: 1 !important; transform: translateY(0) !important; }
    `;
    document.head.appendChild(style);
}

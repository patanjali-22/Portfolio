// ========================================
// Data Configuration
// ========================================
const skillsData = [
    {
        icon: 'fa-code',
        title: 'Programming',
        skills: ['Java', 'C', 'C++', 'Python', 'C#', 'JavaScript', 'SQL', 'R', 'Rust']
    },
    {
        icon: 'fa-globe',
        title: 'Web Development',
        skills: [
            'HTML', 'CSS', 'TypeScript', 'Bootstrap',
            'React.js', 'Next.js', 'Redux', 'Angular',
            'Node.js', 'Django', 'Flask', 'FastAPI',
            'Spring Boot', 'Hibernate ORM', 'ASP.NET',
            'REST APIs', 'gRPC', 'GraphQL', 'RBAC'
        ]
    },
    {
        icon: 'fa-database',
        title: 'Databases & Big Data',
        skills: [
            'PostgreSQL', 'MySQL', 'Oracle', 'MongoDB',
            'Redis', 'Hadoop', 'Spark',
            'Apache Kafka', 'ChromaDB'
        ]
    },
    {
        icon: 'fa-cloud',
        title: 'Cloud, DevOps & Version Control',
        skills: [
            'AWS (S3, EC2, Lambda, EKS, ECR, SQS, API Gateway, CloudWatch)',
            'Azure', 'GCP',
            'Docker', 'Kubernetes', 'Helm',
            'Terraform (IaC)', 'Jenkins', 'Ansible',
            'Git', 'Shell Scripting'
        ]
    },
    {
        icon: 'fa-brain',
        title: 'Machine Learning & AI',
        skills: [
            'PyTorch', 'TensorFlow', 'Hugging Face',
            'LangChain', 'LangGraph', 'RAG',
            'Pinecone', 'GenAI', 'Ollama'
        ]
    },
    {
        icon: 'fa-tools',
        title: 'Tools & Testing',
        skills: [
            'JUnit', 'Mockito', 'MockMvc', 'Testcontainers',
            'Postman', 'Swagger',
            'RabbitMQ', 'Splunk', 'Prometheus',
            'Linux', 'JIRA'
        ]
    },
    {
        icon: 'fa-layer-group',
        title: 'Other Skills',
        skills: [
            'System Design', 'Microservices',
            'Distributed Systems', 'Event-Driven Architecture',
            'Caching', 'Unit Testing', 'Debugging'
        ]
    }
];

const experienceData = [
    {
        title: 'Software Engineer',
        company: 'Light & Wonder',
        date: 'Sep 2023 — Jul 2024',
        points: [
            'Designed and optimized backend microservices using <strong>Java</strong> and <strong>Spring Boot</strong>, delivering scalable <strong>REST/gRPC APIs</strong> for player, promotion, and transaction workflows, increasing request throughput by <strong>70%</strong>.',
            'Built and operated <strong>event-driven, distributed analytics pipelines</strong> using <strong>Apache Kafka</strong> and <strong>Kafka Streams</strong> to process millions of player events daily, enabling real-time behavior tracking.',
            'Improved multi-database performance across <strong>PostgreSQL</strong>, <strong>Oracle</strong>, <strong>MySQL</strong>, and <strong>Redis</strong> through schema optimization, query tuning, and materialized views, reducing query execution times by <strong>30%</strong>.',
            'Refactored and consolidated multiple microservice API calls into <strong>unified backend workflows</strong>, improving inter-service communication efficiency and reducing end-to-end response latency by <strong>25%</strong>.',
            'Automated and standardized <strong>CI/CD pipelines</strong> using <strong>GitHub Actions</strong>, Jenkins, Docker, and Kubernetes, reducing deployment time by <strong>40%</strong>.',
            'Led the migration to <strong>Java 17</strong> and strengthened automated <strong>unit/API/integration testing</strong> using JUnit/Mockito, MockMvc, and Testcontainers, achieving <strong>85% critical-path coverage</strong>.',
            'Improved production stability by identifying and resolving <strong>critical production issues</strong>, leveraging logging, metrics, and performance profiling to reduce system downtime.'
        ],
        tags: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'REST', 'gRPC', 'Prometheus', 'OpenTelemetry']
    },
    {
        title: 'Software Engineer',
        company: 'HCLTech',
        date: 'Jul 2021 — Aug 2023',
        points: [
            'Built user-facing features with <strong>React</strong> and <strong>TypeScript</strong> using component-based UI, validation, error handling, and loading states, backed by services built with <strong>Java Spring Boot</strong> and <strong>Node.js</strong>, reducing user-reported issues by <strong>25%</strong>.',
            'Designed an API-driven architecture enabling seamless integration across a digital banking ecosystem. Integrated <strong>MySQL</strong> and <strong>MongoDB</strong> with backend services using <strong>JDBC</strong> and <strong>Hibernate ORM</strong>, reducing transaction processing latency by <strong>30%</strong>.',
            'Enhanced system security by integrating <strong>Single Sign-On (SSO)</strong> with <strong>RBAC</strong>, strengthening authentication and authorization workflows across enterprise platforms.',
            'Implemented distributed locking using <strong>Redis</strong> for fault-tolerant request handling, cutting downtime in critical production services from <strong>20 minutes to 5 minutes</strong>.',
            'Integrated <strong>Firebase Cloud Messaging (FCM)</strong> into the notification system, improving push delivery reliability by <strong>28%</strong> and increasing user reach for high-volume campaign notifications.',
            'Improved production reliability of microservices using <strong>Resilience4j</strong> with end-to-end observability via <strong>Splunk</strong> and <strong>Grafana</strong>, reducing incident resolution time by <strong>30%</strong>.',
            'Authored comprehensive technical documentation—API specs via <strong>Swagger</strong>, project artifacts in <strong>JIRA</strong>, and system architecture overviews—supporting cross-team collaboration and faster onboarding.'
        ],
        tags: ['React', 'TypeScript', 'C#', '.NET', 'Node.js', 'Spring Boot', 'MongoDB', 'MySQL', 'Redis', 'AWS', 'Splunk', 'Grafana']
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
        title: 'Code Review Assistant',
        description: 'AI-powered code review assistant using RAG pipelines with embedding-based retrieval. Reduced manual review time by 30% with prompt engineering and model fine-tuning on Vertex AI.',
        tech: ['Python', 'LangChain', 'RAG', 'ChromaDB', 'Vertex AI', 'Streamlit'],
        icon: 'fa-robot',
        github: 'https://github.com/patanjali-22/Code_Reviewer'
    },
    {
        title: 'Smart AI Agent',
        description: 'Agentic AI system built using LLMs and RAG architecture with tool-calling capabilities. Supports autonomous reasoning, web search integration, vector database retrieval, and multi-step task execution using LangChain and LangGraph.',
        tech: ['Python', 'LangChain', 'LangGraph', 'RAG', 'Pinecone', 'GenAI', 'Docker'],
        icon: 'fa-brain',
        github: 'https://github.com/patanjali-22/Smart-AI-Agent'
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
    const titles = ['Software Engineer', 'Full Stack Developer', 'Cloud Enthusiast', 'Problem Solver'];
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

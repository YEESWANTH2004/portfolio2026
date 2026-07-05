// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Enhanced Scroll Animation Observer with Stagger Effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add stagger delay for multiple elements
            const delay = index * 0.1;
            entry.target.style.animationDelay = delay + 's';
            entry.target.style.opacity = '1';
            entry.target.style.animation = getAnimationName(entry.target.dataset.aos) + ' 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const elementsToAnimate = document.querySelectorAll('[data-aos]');
elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

function getAnimationName(aosType) {
    const animations = {
        'fade-up': 'slideUp',
        'fade-down': 'fadeDown',
        'fade-right': 'fadeInRight',
        'fade-left': 'fadeInLeft',
        'zoom-in': 'scaleIn'
    };
    return animations[aosType] || 'slideUp';
}

// Chat Widget Functionality
const chatBubble = document.getElementById('chatBubble');
const chatBox = document.getElementById('chatBox');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');

chatBubble.addEventListener('click', () => {
    chatBox.classList.toggle('active');
});

closeChat.addEventListener('click', () => {
    chatBox.classList.remove('active');
});

// AI Chat Responses
const responses = {
    greeting: [
        "Hey there! 👋 I'm happy to help!",
        "Hello! How can I assist you today?",
        "Hi! What would you like to know?"
    ],
    about: [
        "Yeeswanth is an aspiring software developer with expertise in MERN stack, Java, and AI technologies. Currently pursuing B.E. in Computer Science Engineering with a CGPA of 8.48.",
        "Yeeswanth is passionate about building scalable applications and loves learning new technologies!"
    ],
    skills: [
        "Yeeswanth's main skills include: JavaScript, React, Node.js, Java, MySQL, HTML5, CSS3, Tailwind CSS, Python, YOLOv8, and more!",
        "Strong in both frontend (React, HTML5, CSS3) and backend (Node.js, Express, MongoDB, MySQL) technologies."
    ],
    projects: [
        "Yeeswanth has worked on Smart Trolley Management System (using React, YOLOv8), E-commerce Website, and Student Management System.",
        "Check the Projects section above to see detailed information about each project!"
    ],
    experience: [
        "Yeeswanth interned at Zoho Corporation in Cyber Security and trained at Zoho Schools for Graduate Studies. Currently studying at Parisutham Institute of Technology.",
        "Has hands-on experience with Java, SQL, Data Structures, and Algorithms from various training programs."
    ],
    contact: [
        "You can reach Yeeswanth at:\n📧 yeeswanthlatha@gmail.com\n📱 +91 9865828638\n📍 Coimbatore, India",
        "Feel free to send a message using the contact form or reach out directly via email or phone!"
    ],
    default: [
        "That's a great question! Feel free to check out the different sections of the portfolio, or ask me about Yeeswanth's experience, skills, or projects.",
        "I'm here to help! You can ask me about experience, skills, projects, or how to get in touch."
    ]
};

function getAIResponse(userMessage) {
    const message = userMessage.toLowerCase();

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    }
    if (message.includes('about') || message.includes('who') || message.includes('bio')) {
        return responses.about[Math.floor(Math.random() * responses.about.length)];
    }
    if (message.includes('skill') || message.includes('ability') || message.includes('technology') || message.includes('tech')) {
        return responses.skills[Math.floor(Math.random() * responses.skills.length)];
    }
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
        return responses.projects[Math.floor(Math.random() * responses.projects.length)];
    }
    if (message.includes('experience') || message.includes('internship') || message.includes('work')) {
        return responses.experience[Math.floor(Math.random() * responses.experience.length)];
    }
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
        return responses.contact[Math.floor(Math.random() * responses.contact.length)];
    }

    return responses.default[Math.floor(Math.random() * responses.default.length)];
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;

    // Add user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('chat-message', 'user');
    userMessageDiv.innerHTML = `<p>${escapeHtml(message)}</p>`;
    chatMessages.appendChild(userMessageDiv);

    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate bot typing
    setTimeout(() => {
        const botResponse = getAIResponse(message);
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('chat-message', 'bot');
        botMessageDiv.innerHTML = `<p>${escapeHtml(botResponse)}</p>`;
        chatMessages.appendChild(botMessageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Show success message (you can integrate with email service)
        alert(`Thank you ${name}! Your message has been received. I'll get back to you soon at ${email}`);
        contactForm.reset();
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        // Scrolling up
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Parallax Effect on Hero Section
const heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
        }
    });
}

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '+');
        }
    }, 16);
}

// Trigger counter animation on stats visibility
const statCards = document.querySelectorAll('.stat-card h3');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = parseInt(entry.target.textContent);
            animateCounter(entry.target, number);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statCards.forEach(card => statsObserver.observe(card));

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatBox.classList.contains('active')) {
        chatBox.classList.remove('active');
    }
});

// Active Navigation Link Indicator
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `.nav-link.active { color: #000; font-weight: 700; }`;
document.head.appendChild(style);

console.log('Portfolio loaded successfully! 🚀');

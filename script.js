// ===== DATA STRUCTURES =====

// Colleges by district mapping
const collegesByDistrict = {
    wardha: [
        { value: 'wardha-engg', text: 'Wardha Institute of Technology' },
        { value: 'shri-engg', text: 'Shri Ramdeobaba College of Engineering' },
        { value: 'agri-uni', text: 'Dr. Panjabrao Deshmukh Agricultural University' },
        { value: 'polytechnic', text: 'Government Polytechnic Wardha' }
    ],
    chandrapur: [
        { value: 'chandrapur-engg', text: 'Government Engineering College Chandrapur' },
        { value: 'ballarpur-poly', text: 'Government Polytechnic Ballarpur' },
        { value: 'chandrapur-poly', text: 'Government Polytechnic Chandrapur' }
    ],
    nagpur: [
        { value: 'vnit', text: 'Visvesvaraya National Institute of Technology' },
        { value: 'ycc', text: 'Yeshwantrao Chavan College of Engineering' },
        { value: 'gcoen', text: 'Government College of Engineering Nagpur' },
        { value: 'rkn-poly', text: 'RKN Polytechnic Nagpur' },
        { value: 'nagpur-uni', text: 'Nagpur University' }
    ],
    amravati: [
        { value: 'pote-engg', text: 'Pote College of Engineering' },
        { value: 'sipna-engg', text: 'Sipna College of Engineering' },
        { value: 'amravati-poly', text: 'Government Polytechnic Amravati' },
        { value: 'sgba-uni', text: 'Sant Gadge Baba Amravati University' }
    ]
};

// Courses data
const coursesData = [
    {
        id: 1,
        title: 'Full Stack Web Development',
        description: 'Complete MERN stack development with React, Node.js, MongoDB and modern tools',
        category: 'web-development',
        duration: 'long',
        price: '₹25,000',
        level: 'Beginner to Advanced',
        icon: 'fas fa-code',
        pdfUrl: 'pdfs/course-info.html',
        features: ['React & Redux', 'Node.js & Express', 'MongoDB', 'REST APIs', 'Deployment']
    },
    {
        id: 2,
        title: 'Python Programming Masterclass',
        description: 'Comprehensive Python programming from basics to advanced concepts',
        category: 'programming',
        duration: 'medium',
        price: '₹15,000',
        level: 'Beginner to Advanced',
        icon: 'fab fa-python',
        pdfUrl: 'pdfs/course-info.html',
        features: ['Data Structures', 'OOP', 'Django', 'Data Science', 'Automation']
    },
    {
        id: 3,
        title: 'Data Science & Analytics',
        description: 'Learn data analysis, visualization and machine learning with Python',
        category: 'data-science',
        duration: 'long',
        price: '₹30,000',
        level: 'Intermediate',
        icon: 'fas fa-chart-line',
        pdfUrl: 'pdfs/course-info.html',
        features: ['Pandas & NumPy', 'Matplotlib', 'Machine Learning', 'SQL', 'Tableau']
    },
    {
        id: 4,
        title: 'Cyber Security Fundamentals',
        description: 'Essential cybersecurity skills for protecting digital assets',
        category: 'cyber-security',
        duration: 'medium',
        price: '₹20,000',
        level: 'Beginner to Intermediate',
        icon: 'fas fa-shield-alt',
        pdfUrl: 'pdfs/course-info.html',
        features: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Risk Assessment']
    },
    {
        id: 5,
        title: 'Cloud Computing with AWS',
        description: 'Master Amazon Web Services and cloud architecture',
        category: 'cloud-computing',
        duration: 'medium',
        price: '₹18,000',
        level: 'Intermediate',
        icon: 'fab fa-aws',
        pdfUrl: 'pdfs/course-info.html',
        features: ['EC2 & S3', 'Lambda', 'RDS', 'CloudFormation', 'DevOps']
    },
    {
        id: 6,
        title: 'AI & Machine Learning',
        description: 'Deep dive into artificial intelligence and machine learning algorithms',
        category: 'data-science',
        duration: 'long',
        price: '₹35,000',
        level: 'Advanced',
        icon: 'fas fa-robot',
        pdfUrl: 'pdfs/course-info.html',
        features: ['Neural Networks', 'Deep Learning', 'NLP', 'Computer Vision', 'TensorFlow']
    }
];

// Trainers data
const trainersData = [
    {
        name: 'Dr. Rajesh Kumar',
        role: 'Senior Software Architect',
        specialties: ['Full Stack Development', 'System Design', 'DevOps'],
        experience: '12+ years'
    },
    {
        name: 'Priya Sharma',
        role: 'Data Science Lead',
        specialties: ['Machine Learning', 'Python', 'Big Data'],
        experience: '8+ years'
    },
    {
        name: 'Amit Patel',
        role: 'Cybersecurity Expert',
        specialties: ['Network Security', 'Ethical Hacking', 'Compliance'],
        experience: '10+ years'
    },
    {
        name: 'Sneha Gupta',
        role: 'Cloud Solutions Architect',
        specialties: ['AWS', 'Azure', 'Microservices'],
        experience: '9+ years'
    }
];

// Reviews data
const reviewsData = [
    {
        name: 'Rahul Singh',
        rating: 5,
        course: 'Full Stack Development',
        text: 'Excellent training program! The instructors are knowledgeable and the hands-on projects really helped me understand the concepts.',
        avatar: 'RS'
    },
    {
        name: 'Meera Joshi',
        rating: 5,
        course: 'Data Science',
        text: 'Best investment I made for my career. Got placed in a top company within 3 months of completing the course.',
        avatar: 'MJ'
    },
    {
        name: 'Vikram Rao',
        rating: 5,
        course: 'Python Programming',
        text: 'The teaching methodology is outstanding. Complex topics are explained in a simple and practical way.',
        avatar: 'VR'
    },
    {
        name: 'Anjali Desai',
        rating: 5,
        course: 'Cyber Security',
        text: 'Comprehensive course covering all aspects of cybersecurity. Highly recommended for beginners and professionals alike.',
        avatar: 'AD'
    }
];

// Short course reviews
const shortReviewsData = [
    {
        name: 'Karan Mehta',
        rating: 5,
        course: 'Mini Project ₹9',
        text: 'Got hands-on experience with real projects. Worth every penny!',
        avatar: 'KM'
    },
    {
        name: 'Pooja Agarwal',
        rating: 5,
        course: 'Resume Skills ₹9',
        text: 'Learned essential skills that helped me get my dream job.',
        avatar: 'PA'
    },
    {
        name: 'Rohit Sharma',
        rating: 5,
        course: 'AI Short Webinar',
        text: 'Great introduction to AI concepts. Very informative session.',
        avatar: 'RS'
    }
];

// Gallery images
const galleryImages = [
    'images/classroom-1.jpg',
    'images/classroom-2.jpg',
    'images/workshop-1.jpg',
    'images/students-1.jpg',
    'images/campus-1.jpg',
    'images/event-1.jpg'
];

// ===== UTILITY FUNCTIONS =====

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Theme is always dark - no theme management needed

// Animate counters
function animateCounter(element, target, duration = 2000) {
    if (prefersReducedMotion) {
        element.textContent = target;
        return;
    }

    const start = parseInt(element.textContent) || 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
}

// Download file
function downloadFile(url, filename) {
    // For HTML files, open in new tab instead of downloading
    if (filename.endsWith('.html') || url.endsWith('.html')) {
        window.open(url, '_blank');
        return;
    }

    // For other files, attempt download
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Show modal
function showModal(modalId) {
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}

// Toggle banner
function toggleBanner(bannerId) {
    const banner = document.getElementById(bannerId);
    const floatingBanners = banner.closest('.floating-banners');

    banner.classList.add('hidden');

    // Hide the entire container on mobile
    if (window.innerWidth <= 768 && floatingBanners) {
        floatingBanners.style.display = 'none';
    }

    // Show again after 12 seconds
    setTimeout(() => {
        banner.classList.remove('hidden');
        // Show the container again on mobile
        if (window.innerWidth <= 768 && floatingBanners) {
            floatingBanners.style.display = 'flex';
        }
    }, 5000);
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    // Set dark theme as default
    document.documentElement.setAttribute('data-theme', 'dark');

    // Initialize AOS
    if (!prefersReducedMotion) {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Initialize components
    initializePreloader();
    initializeCounters();
    initializeCourses();
    initializeTrainers();
    initializeReviews();
    initializeGallery();
    initializeContactForm();
    initializeFloatingBanners();
    initializeEventListeners();
});

// ===== PRELOADER =====
function initializePreloader() {
    const preloader = document.getElementById('preloader');
    const progressBar = preloader.querySelector('.loading-progress');

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 25 + 10; // Faster progress increment
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            // Hide preloader immediately when progress completes
            setTimeout(() => {
                const preloader = document.getElementById('preloader');
                preloader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 100);
        }
        progressBar.style.width = progress + '%';
    }, 100); // Faster interval
}

// Theme toggle removed - site is always dark

// ===== ANIMATED COUNTERS =====
function initializeCounters() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-counter'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-counter]').forEach(counter => {
        observer.observe(counter);
    });
}

// ===== COURSES SECTION =====
function initializeCourses() {
    displayCourses(coursesData);
}

function displayCourses(courses) {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';

    courses.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesGrid.appendChild(courseCard);
    });
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-aos', 'fade-up');

    card.innerHTML = `
        <div class="course-image">
            <i class="${course.icon}"></i>
        </div>
        <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <span class="course-duration"><i class="fas fa-clock"></i> ${getDurationText(course.duration)}</span>
                <span class="course-level"><i class="fas fa-signal"></i> ${course.level}</span>
            </div>
            <div class="course-price">${course.price}</div>
            <div class="course-buttons">
                <button class="btn btn-primary" onclick="downloadFile('${course.pdfUrl}', '${course.title.replace(/\s+/g, '_')}.html')">
                    <i class="fas fa-info-circle"></i> Info
                </button>
                <button class="btn btn-outline-primary" onclick="enrollInCourse('${course.id}')">
                    <i class="fas fa-user-plus"></i> Enroll
                </button>
            </div>
        </div>
    `;

    return card;
}

function getDurationText(duration) {
    const durationMap = {
        short: '1-3 months',
        medium: '3-6 months',
        long: '6+ months'
    };
    return durationMap[duration] || duration;
}

// Course filters removed

function enrollInCourse(courseId) {
    const course = coursesData.find(c => c.id == courseId);
    if (course) {
        // Pre-fill form with course
        document.getElementById('course').value = course.title;
        scrollToSection('contact');
    }
}

// ===== TRAINERS SECTION =====
function initializeTrainers() {
    const trainersGrid = document.getElementById('trainersGrid');

    trainersData.forEach((trainer, index) => {
        const trainerCard = document.createElement('div');
        trainerCard.className = 'col-lg-3 col-md-6 col-sm-12';
        trainerCard.setAttribute('data-aos', 'fade-up');
        trainerCard.setAttribute('data-aos-delay', (index * 100).toString());

        trainerCard.innerHTML = `
            <div class="trainer-card">
                <div class="trainer-image">
                    <i class="fas fa-user-tie"></i>
                </div>
                <div class="trainer-info">
                    <h4 class="trainer-name">${trainer.name}</h4>
                    <p class="trainer-role">${trainer.role}</p>
                    <div class="trainer-specialties">
                        ${trainer.specialties.map(specialty =>
                            `<span class="specialty-tag">${specialty}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;

        trainersGrid.appendChild(trainerCard);
    });
}

// ===== REVIEWS SECTION =====
function initializeReviews() {
    // Main reviews carousel
    const reviewsWrapper = document.getElementById('reviewsWrapper');
    reviewsData.forEach(review => {
        const reviewSlide = document.createElement('div');
        reviewSlide.className = 'swiper-slide';

        reviewSlide.innerHTML = `
            <div class="review-card">
                <div class="review-content">
                    <div class="review-rating">
                        ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
                    </div>
                    <p class="review-text">"${review.text}"</p>
                    <div class="review-author">
                        <div class="review-avatar">${review.avatar}</div>
                        <div class="author-info">
                            <h5>${review.name}</h5>
                            <p>${review.course}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        reviewsWrapper.appendChild(reviewSlide);
    });

    // Short reviews carousel
    const shortReviewsWrapper = document.getElementById('shortReviewsWrapper');
    shortReviewsData.forEach(review => {
        const reviewSlide = document.createElement('div');
        reviewSlide.className = 'swiper-slide';

        reviewSlide.innerHTML = `
            <div class="review-card">
                <div class="review-content">
                    <div class="review-rating">
                        ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
                    </div>
                    <p class="review-text">"${review.text}"</p>
                    <div class="review-author">
                        <div class="review-avatar">${review.avatar}</div>
                        <div class="author-info">
                            <h5>${review.name}</h5>
                            <p>${review.course}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        shortReviewsWrapper.appendChild(reviewSlide);
    });

    // Initialize Swiper carousels
    initializeSwipers();
}

function initializeSwipers() {
    // Main reviews carousel
    const reviewsSwiper = new Swiper('.reviewsSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Short reviews carousel
    const shortReviewsSwiper = new Swiper('.shortReviewsSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    });
}

// ===== GALLERY SECTION =====
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');

    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-aos', 'fade-up');
        galleryItem.setAttribute('data-aos-delay', (index * 100).toString());

        galleryItem.innerHTML = `
            <img src="${image}" alt="Campus Gallery ${index + 1}" class="gallery-image" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;

        galleryItem.addEventListener('click', () => openLightbox(image));
        galleryGrid.appendChild(galleryItem);
    });
}

function openLightbox(imageSrc) {
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc;
    showModal('lightboxModal');
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const form = document.getElementById('admissionForm');
    const districtSelect = document.getElementById('district');
    const collegeSelect = document.getElementById('college');
    const courseSelect = document.getElementById('course');

    // Populate courses
    coursesData.forEach(course => {
        const option = document.createElement('option');
        option.value = course.title;
        option.textContent = course.title;
        courseSelect.appendChild(option);
    });

    // Handle district change
    districtSelect.addEventListener('change', function() {
        const selectedDistrict = this.value;
        collegeSelect.innerHTML = '<option value="">Select College *</option>';
        collegeSelect.disabled = !selectedDistrict;

        if (selectedDistrict && collegesByDistrict[selectedDistrict]) {
            collegesByDistrict[selectedDistrict].forEach(college => {
                const option = document.createElement('option');
                option.value = college.value;
                option.textContent = college.text;
                collegeSelect.appendChild(option);
            });
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            const formData = new FormData(form);
            const whatsappMessage = buildWhatsAppMessage(formData);
            sendToWhatsApp(whatsappMessage);
        }
    });
}

function validateForm() {
    const requiredFields = ['name', 'mobile', 'email', 'district', 'college', 'course', 'education', 'mode', 'payment'];
    let isValid = true;

    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const value = field.value.trim();

        if (!value) {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
        }
    });

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        document.getElementById('email').classList.add('is-invalid');
        isValid = false;
    }

    // Mobile validation
    const mobile = document.getElementById('mobile').value;
    const mobileRegex = /^[6-9]\d{9}$/;
    if (mobile && !mobileRegex.test(mobile)) {
        document.getElementById('mobile').classList.add('is-invalid');
        isValid = false;
    }

    return isValid;
}

function buildWhatsAppMessage(formData) {
    const message = `*New Admission Inquiry - Shumatrix Solutions*

👤 *Name:* ${formData.get('name')}
📱 *Mobile:* ${formData.get('mobile')}
📧 *Email:* ${formData.get('email')}
🏛️ *District:* ${formData.get('district')}
🎓 *College:* ${collegesByDistrict[formData.get('district')]?.find(c => c.value === formData.get('college'))?.text || formData.get('college')}
📚 *Course:* ${formData.get('course')}
👨‍🎓 *Education:* ${formData.get('education')}
💻 *Mode:* ${formData.get('mode')}
💰 *Payment:* ${formData.get('payment')}
📝 *Message:* ${formData.get('message') || 'N/A'}

*Source:* Website Form
*Timestamp:* ${new Date().toLocaleString()}`;

    return encodeURIComponent(message);
}

function sendToWhatsApp(message) {
    const whatsappUrl = `https://wa.me/918888234984?text=${message}`;

    // Try to open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Fallback to mailto if WhatsApp fails
    setTimeout(() => {
        const mailtoUrl = `mailto:info@shumatrix.com?subject=Admission Inquiry&body=${message}`;
        window.location.href = mailtoUrl;
    }, 1000);

    // Show success message
    showSuccessMessage();
}

function showSuccessMessage() {
    // Create success alert
    const alert = document.createElement('div');
    alert.className = 'alert alert-success alert-dismissible fade show position-fixed';
    alert.style.cssText = 'top: 20px; right: 20px; z-index: 1050; min-width: 300px;';
    alert.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        <strong>Success!</strong> Your inquiry has been sent. We'll get back to you soon!
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    document.body.appendChild(alert);

    // Auto remove after 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// ===== FLOATING BANNERS =====
function initializeFloatingBanners() {
    // Rotate webinar topics
    const webinarTopics = [
        'AI in Modern Development',
        'Cybersecurity Essentials',
        'Cloud Computing Fundamentals',
        'Data Science Basics'
    ];

    let currentTopicIndex = 0;
    const webinarTitle = document.querySelector('#webinarBanner .banner-body h4');

    if (webinarTitle) {
        setInterval(() => {
            currentTopicIndex = (currentTopicIndex + 1) % webinarTopics.length;
            webinarTitle.textContent = webinarTopics[currentTopicIndex];
        }, 4000);
    }
}

function enrollWebinar() {
    // Pre-fill form with webinar interest
    document.getElementById('course').value = 'AI Short Webinar';
    document.getElementById('message').value = 'Interested in Free AI Short Webinar';
    scrollToSection('contact');
}

function downloadWebinarPDF() {
    downloadFile('pdfs/course-info.html', 'webinar-info.html');
}

function contactForPerk(perkType) {
    const perkMessages = {
        'ai-webinar': 'Interested in AI Short Webinar Free',
        'mini-project': 'Interested in Mini Project ₹9',
        'resume-skills': 'Interested in Resume-Ready Short IT Skills ₹9'
    };

    document.getElementById('course').value = perkType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    document.getElementById('message').value = perkMessages[perkType] || 'Interested in special offer';
    scrollToSection('contact');
}

function downloadPerkPDF(perkType) {
    const pdfFiles = {
        'ai-webinar': 'pdfs/course-info.html',
        'mini-project': 'pdfs/course-info.html',
        'resume-skills': 'pdfs/course-info.html'
    };

    downloadFile(pdfFiles[perkType], `${perkType}-info.html`);
}

// ===== MODALS =====
function showPrivacyModal() {
    showModal('privacyModal');
}

function showTermsModal() {
    showModal('termsModal');
}

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);

            // Close mobile menu
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Location selector
    document.getElementById('locationSelect').addEventListener('change', function() {
        const selectedLocation = this.value;
        // Here you could implement location-specific content changes
        console.log('Location changed to:', selectedLocation);
    });

    // Form validation on blur
    document.querySelectorAll('#admissionForm input, #admissionForm select').forEach(field => {
        field.addEventListener('blur', function() {
            if (this.value.trim()) {
                this.classList.remove('is-invalid');
            }
        });
    });

    // Certificate modal trigger (example)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.certificate-preview')) {
            showModal('certificateModal');
        }
    });

    // Analytics/UTM tracking
    trackUTMParameters();
}

// ===== ANALYTICS & UTM TRACKING =====
function trackUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {
        source: urlParams.get('utm_source'),
        medium: urlParams.get('utm_medium'),
        campaign: urlParams.get('utm_campaign'),
        term: urlParams.get('utm_term'),
        content: urlParams.get('utm_content')
    };

    // Store UTM data in session storage for form submission
    if (Object.values(utmData).some(value => value)) {
        sessionStorage.setItem('utmData', JSON.stringify(utmData));
    }
}

// ===== PERFORMANCE OPTIMIZATION =====

// Lazy load images
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // Could send error to analytics service
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
    // Could send error to analytics service
});

// ===== BROWSER COMPATIBILITY =====

// Check for required features
function checkBrowserSupport() {
    const requiredFeatures = [
        'fetch',
        'Promise',
        'IntersectionObserver',
        'URLSearchParams'
    ];

    const unsupported = requiredFeatures.filter(feature => !(feature in window));

    if (unsupported.length > 0) {
        console.warn('Some features may not work in this browser:', unsupported);
        // Show fallback UI or polyfill loading
    }
}

checkBrowserSupport();

// ===== SERVICE WORKER (PWA READY) =====
// Uncomment to enable PWA functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}
*/

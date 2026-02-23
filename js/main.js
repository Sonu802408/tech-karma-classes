import siteData from './data.js';
import { Navbar, Footer, ClassCard, SubjectCard, ChapterItem, Breadcrumbs, WhatsAppButton, CourseCard, EnrollmentForm, SignupForm, LoginForm, StudentDashboard, AdminLogin, AdminDashboard, PricingCard, BlogCard, BlogPostView, SelectionCard, SectionTabs, ExamPortalSelection, StreamSelectorModal, ExamInterface, ResultModal } from './components.js';


const app = document.getElementById('app');

const render = (html) => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    app.innerHTML = `
        ${Navbar(user)}
        <main>${html}</main>
        ${Footer()}
        ${WhatsAppButton()}
    `;
    window.scrollTo(0, 0);
};

window.scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If not on home page, go to home then scroll
        window.location.hash = '#/';
        setTimeout(() => {
            const retrySection = document.getElementById(sectionId);
            if (retrySection) retrySection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
};



const routes = {
    home: () => {
        const classIcons = {
            '6': '🎒',
            '7': '📝',
            '8': '📗',
            '9': '🔬',
            '10': '📐',
            '11': '⚛️',
            '12': '🏆'
        };
        const classesHtml = siteData.classGroups.map(group => ClassCard(group, classIcons[group])).join('');

        const popularSubjectsHtml = siteData.subjects.map(sub => `
            <div class="card" onclick="window.scrollToSection('classes-section'); alert('Please select a class to view ${sub.name} notes.')">
                <div class="icon">${sub.icon}</div>
                <h3>${sub.name}</h3>
            </div>
        `).join('');

        render(`
            <section class="hero" id="home-hero">
                <div class="container">
                    <div class="hero-content">
                        <h1>Welcome to Tech Karma Classes</h1>
                        <h2 class="hero-subheader">Learn Smart. Grow Fast.</h2>
                        <p class="hero-description">Chapter-wise Notes, Test Series & Concept Clarity for Classes 6–12</p>
                        <div class="hero-actions">
                            <button class="btn btn-primary" onclick="window.scrollToSection('classes-section')">Explore Notes</button>
                        </div>
                        <div class="search-container">
                            <input type="text" id="searchInput" placeholder="Search notes by subject or class group...">
                            <button onclick="window.handleSearch()">Search</button>
                        </div>
                    </div>
                </div>
            </section>


            <section class="stats-section">
                <div class="container">
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-number" data-target="500">500+</div>
                            <div class="stat-label">Students Enrolled</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-target="2000">2000+</div>
                            <div class="stat-label">Notes Delivered</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-target="95">95%</div>
                            <div class="stat-label">Success Rate (%)</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-target="5">5+</div>
                            <div class="stat-label">Years of Excellence</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="features-section container">

                <div class="section-title">
                    <h2>Why Choose Tech Karma Classes?</h2>
                    <p>Designed for excellence, built for your success</p>
                </div>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">📝</div>
                        <h3>Chapter-wise Structured Notes</h3>
                        <p>Detailed, easy-to-understand notes curated by experts for every chapter.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📝</div>
                        <h3>Weekly Test Series</h3>
                        <p>Regular assessments to track your progress and identify areas for improvement.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">💡</div>
                        <h3>Concept Clarity Sessions</h3>
                        <p>Focus on fundamentals to build a strong foundation for advanced learning.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📈</div>
                        <h3>Performance Tracking</h3>
                        <p>Get detailed insights into your learning journey with personalized feedback.</p>
                    </div>
                </div>
            </section>

            <section class="container" id="classes-section">

                <div class="section-title" id="notes-section">
                    <h2>Select Your Class</h2>
                    <p>Browse notes specifically designed for your curriculum</p>
                </div>
                <div class="grid">${classesHtml}</div>
            </section>

            <section class="container" id="courses-section">
                <div class="section-title">
                    <h1>Computer Science & Programming Courses</h1>
                    <p>Build real-world skills with our expert-led curriculum</p>
                </div>

                ${siteData.courseCategories.map(cat => `
                    <div class="category-group" style="margin-bottom: 50px;">
                        <h2 class="category-title" style="margin-bottom: 25px; color: var(--accent-color); font-size: 1.8rem; border-left: 5px solid var(--accent-color); padding-left: 15px;">${cat.title}</h2>
                        <div class="grid">
                            ${cat.courses.map(course => CourseCard(course)).join('')}
                        </div>
                    </div>
                `).join('')}
            </section>
            ${PricingSection()}
            ${BlogSection()}
            ${TestimonialsSection()}
            ${OutreachSection()}
            <section class="container" id="about-section" style="padding: 100px 0; border-top: 1px solid var(--border-color);">
                <div class="section-title">
                    <h2>About Tech Karma Classes</h2>
                    <p>Driving educational excellence through technology</p>
                </div>
                <div style="max-width: 800px; margin: 0 auto; line-height: 1.8; color: var(--text-main); font-size: 1.1rem; text-align: center;">
                    <p>Tech Karma Classes is a premium educational platform dedicated to providing high-quality study resources for students from Class 6 to 12. We combine traditional academic excellence with modern technology to deliver structured notes, interactive test series, and comprehensive programming courses.</p>
                    <p style="margin-top: 20px;">Our mission is to empower the next generation of learners with the concepts and skills they need to succeed in their academic journey and the tech-driven future.</p>
                </div>
            </section>
        `);
    },

    classSelection: (parts) => {
        const classId = parts[2];
        const isHigherSec = ['11', '12'].includes(classId);

        if (isHigherSec) {
            // Class 11/12 logic
            const stream = parts[3];
            const medium = parts[4];
            const section = parts[5];
            const subjectId = parts[6];
            const chapterId = parts[8];

            if (chapterId) {
                const subData = siteData.notes[classId][stream][medium][section][subjectId];
                const chapter = subData.chapters.find(ch => ch.id == chapterId);
                render(`
                    ${Breadcrumbs([
                    { name: 'Home', link: '#/' },
                    { name: `Class ${classId}`, link: `#/class/${classId}` },
                    { name: stream, link: `#/class/${classId}/${stream}` },
                    { name: `${medium} - ${section}`, link: `#/class/${classId}/${stream}/${medium}/${section}` },
                    { name: subData.subjectName, link: `#/class/${classId}/${stream}/${medium}/${section}/${subjectId}` },
                    { name: chapter.title, link: '' }
                ])}
                    <section class="container">
                        <div class="section-title"><h1>${chapter.title}</h1></div>
                        <div class="pdf-viewer-container"><iframe src="${chapter.pdfUrl}#toolbar=0"></iframe></div>
                        <div style="text-align: center; margin-bottom: 40px;"><a href="${chapter.pdfUrl}" class="btn btn-glow" download>Download PDF</a></div>
                    </section>
                `);
            } else if (subjectId) {
                const data = siteData.notes[classId][stream][medium][section][subjectId];
                const chaptersHtml = data.chapters.map(ch => ChapterItem(classId, subjectId, ch)).join('');
                render(`
                    ${Breadcrumbs([
                    { name: 'Home', link: '#/' },
                    { name: `Class ${classId}`, link: `#/class/${classId}` },
                    { name: stream, link: `#/class/${classId}/${stream}` },
                    { name: `${medium} - ${section}`, link: `#/class/${classId}/${stream}/${medium}/${section}` },
                    { name: data.subjectName, link: '' }
                ])}
                    <section class="container">
                        <div class="section-title"><h1>${data.subjectName} (${section})</h1><p>Class ${classId} - ${stream} - ${medium} Medium</p></div>
                        <div class="grid">${chaptersHtml}</div>
                    </section>
                `);
            } else if (section) {
                const subjects = siteData.notes[classId][stream][medium][section];
                const subjectsHtml = Object.keys(subjects).map(id => SubjectCard(subjects[id], `#/class/${classId}/${stream}/${medium}/${section}/${id}`)).join('');
                render(`
                    ${Breadcrumbs([{ name: 'Home', link: '#/' }, { name: `Class ${classId}`, link: `#/class/${classId}` }, { name: stream, link: `#/class/${classId}/${stream}` }, { name: `${medium} Medium`, link: '' }])}
                    <section class="container">
                        <div class="section-title"><h1>Select Subject</h1><p>${classId} ${stream} - ${medium} Medium</p></div>
                        ${SectionTabs(section, `#/class/${classId}/${stream}/${medium}`)}
                        <div class="grid">${subjectsHtml}</div>
                    </section>
                `);
            } else if (medium) {
                window.location.hash = `#/class/${classId}/${stream}/${medium}/Notes`;
            } else if (stream) {
                const mediumsHtml = siteData.mediums.map(m => SelectionCard(m, m === 'Hindi' ? '✍️' : '📚', `#/class/${classId}/${stream}/${m}`)).join('');
                render(`
                    ${Breadcrumbs([{ name: 'Home', link: '#/' }, { name: `Class ${classId}`, link: `#/class/${classId}` }, { name: stream, link: '' }])}
                    <section class="container">
                        <div class="section-title"><h1>Select Medium</h1><p>Class ${classId} - ${stream} Stream</p></div>
                        <div class="grid">${mediumsHtml}</div>
                    </section>
                `);
            } else {
                const streamsHtml = siteData.streams.map(s => SelectionCard(s, s === 'Science' ? '🔬' : s === 'Arts' ? '🎨' : '📊', `#/class/${classId}/${s}`)).join('');
                render(`
                    ${Breadcrumbs([{ name: 'Home', link: '#/' }, { name: `Class ${classId}`, link: '' }])}
                    <section class="container">
                        <div class="section-title"><h1>Select Stream</h1><p>Choose your study path for Class ${classId}</p></div>
                        <div class="grid">${streamsHtml}</div>
                    </section>
                `);
            }
        } else {
            // Class 6-10 logic
            const medium = parts[3];
            const section = parts[4];
            const subjectId = parts[5];
            const chapterId = parts[7];

            if (chapterId) {
                const subData = siteData.notes[classId][medium][section][subjectId];
                const chapter = subData.chapters.find(ch => ch.id == chapterId);
                render(`
                    ${Breadcrumbs([
                    { name: 'Home', link: '#/' },
                    { name: `Class ${classId}`, link: `#/class/${classId}` },
                    { name: `${medium} - ${section}`, link: `#/class/${classId}/${medium}/${section}` },
                    { name: subData.subjectName, link: `#/class/${classId}/${medium}/${section}/${subjectId}` },
                    { name: chapter.title, link: '' }
                ])}
                    <section class="container">
                        <div class="section-title"><h1>${chapter.title}</h1></div>
                        <div class="pdf-viewer-container"><iframe src="${chapter.pdfUrl}#toolbar=0"></iframe></div>
                        <div style="text-align: center; margin-bottom: 40px;"><a href="${chapter.pdfUrl}" class="btn btn-glow" download>Download PDF</a></div>
                    </section>
                `);
            } else if (subjectId) {
                const data = siteData.notes[classId][medium][section][subjectId];
                const chaptersHtml = data.chapters.map(ch => ChapterItem(classId, subjectId, ch)).join('');
                render(`
                    ${Breadcrumbs([
                    { name: 'Home', link: '#/' },
                    { name: `Class ${classId}`, link: `#/class/${classId}` },
                    { name: `${medium} - ${section}`, link: `#/class/${classId}/${medium}/${section}` },
                    { name: data.subjectName, link: '' }
                ])}
                    <section class="container">
                        <div class="section-title"><h1>${data.subjectName} (${section})</h1><p>Class ${classId} - ${medium} Medium</p></div>
                        <div class="grid">${chaptersHtml}</div>
                    </section>
                `);
            } else if (section) {
                const subjects = siteData.notes[classId][medium][section];
                const subjectsHtml = Object.keys(subjects).map(id => SubjectCard(subjects[id], `#/class/${classId}/${medium}/${section}/${id}`)).join('');
                render(`
                    ${Breadcrumbs([{ name: 'Home', link: '#/' }, { name: `Class ${classId}`, link: `#/class/${classId}` }, { name: `${medium} Medium`, link: '' }])}
                    <section class="container">
                        <div class="section-title"><h1>Select Subject</h1><p>Class ${classId} - ${medium} Medium</p></div>
                        ${SectionTabs(section, `#/class/${classId}/${medium}`)}
                        <div class="grid">${subjectsHtml}</div>
                    </section>
                `);
            } else if (medium) {
                window.location.hash = `#/class/${classId}/${medium}/Notes`;
            } else {
                const mediumsHtml = siteData.mediums.map(m => SelectionCard(m, m === 'Hindi' ? '✍️' : '📚', `#/class/${classId}/${m}`)).join('');
                render(`
                    ${Breadcrumbs([{ name: 'Home', link: '#/' }, { name: `Class ${classId}`, link: '' }])}
                    <section class="container">
                        <div class="section-title"><h1>Select Medium</h1><p>Choose your preferred language for Class ${classId}</p></div>
                        <div class="grid">${mediumsHtml}</div>
                    </section>
                `);
            }
        }
    },

    admin: (view = 'stats') => {
        const isAdmin = localStorage.getItem('isAdmin') === 'true';
        if (!isAdmin) {
            render(AdminLogin());
            return;
        }

        const students = Object.keys(localStorage)
            .filter(key => key.startsWith('user_'))
            .map(key => JSON.parse(localStorage.getItem(key)));

        const data = {
            studentCount: students.length,
            courses: siteData.subjects, // Mocking courses list from subjects
            students: students
        };

        render(AdminDashboard(view, data));
    },

    blogPost: (blogId) => {
        const blog = siteData.blogs.find(b => b.id === blogId);
        if (blog) {
            render(BlogPostView(blog));
            window.scrollTo(0, 0);
        } else {
            window.location.hash = '#/';
        }
    },

    admission: () => {
        render(`
            ${EnrollmentForm()}
        `);
    },

    login: () => {
        render(LoginForm());
    },

    signup: () => {
        render(SignupForm());
    },

    dashboard: () => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user) {
            window.location.hash = '#/login';
            return;
        }

        const enrolledSubjects = siteData.subjects.slice(0, 3); // Mock enrolled subjects
        const enrolledCourses = [
            { id: 'python', name: 'Python Mastery', icon: '🐍' },
            { id: 'web', name: 'Web Dev Pro', icon: '💻' }
        ];

        render(StudentDashboard(user, enrolledSubjects, enrolledCourses));
    },

    contact: () => {
        render(`
            <section class="container">
                <div class="section-title" style="margin-top: 50px;">
                    <h1>Contact Us</h1>
                    <p>Have questions? We're here to help!</p>
                </div>
                <div class="contact-container">
                    <form onsubmit="event.preventDefault(); alert('Message sent successfully!');">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your name" required>
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Your message here..." required></textarea>
                        </div>
                        <button type="submit" class="btn" style="width: 100%;">Send Message</button>
                    </form>
                    <div style="margin-top: 30px; text-align: center;">
                        <p style="margin-bottom: 15px;">Or reach us via</p>
                        <a href="https://wa.me/918130550381" class="btn" style="background: #25d366;" target="_blank"><i class="fab fa-whatsapp"></i> Chat on WhatsApp</a>
                    </div>
                </div>
            </section>
        `);
    },

    examPortal: () => {
        const classes = ['6', '7', '8', '9', '10', '11', '12'];
        render(ExamPortalSelection(classes));
    },

    examActive: (examId) => {
        const exam = siteData.exams.find(e => e.id === examId);
        if (!exam) {
            window.location.hash = '#/exam-portal';
            return;
        }
        render(ExamInterface(exam));
        startExamTimer(15); // 15 minutes
    }
};

const startExamTimer = (minutes) => {
    let seconds = minutes * 60;
    const timerElement = document.getElementById('timer');
    if (!timerElement) return;

    const interval = setInterval(() => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        if (document.getElementById('timer')) {
            document.getElementById('timer').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        } else {
            clearInterval(interval);
            return;
        }

        if (seconds <= 0) {
            clearInterval(interval);
            alert('Time Up! Submitting your exam automatically.');
            const form = document.getElementById('examForm');
            if (form) form.dispatchEvent(new Event('submit', { 'cancelable': true }));
        }
        seconds--;
    }, 1000);
    window.currentExamInterval = interval;
};

window.handleExamClassSelect = (cls) => {
    if (['11', '12'].includes(cls)) {
        document.body.insertAdjacentHTML('beforeend', StreamSelectorModal(cls));
    } else {
        const exam = siteData.exams.find(e => e.class === cls);
        if (exam) {
            window.location.hash = `#/exam/${exam.id}`;
        } else {
            alert(`Tests for Class ${cls} will be available soon!`);
        }
    }
};

window.handleExamStreamSelect = (cls, stream) => {
    const exam = siteData.exams.find(e => e.class === cls && e.stream === stream);
    const modal = document.getElementById('streamModal');
    if (modal) modal.remove();

    if (exam) {
        window.location.hash = `#/exam/${exam.id}`;
    } else {
        alert(`Tests for Class ${cls} - ${stream} will be available soon!`);
    }
};

window.handleExamSubmit = (event, examId) => {
    event.preventDefault();
    if (window.currentExamInterval) clearInterval(window.currentExamInterval);

    const exam = siteData.exams.find(e => e.id === examId);
    let score = 0;
    const form = event.target;

    exam.questions.forEach((q, i) => {
        const selected = form.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });

    const percent = (score / exam.questions.length) * 100;
    let message = percent >= 80 ? "Excellent Performance!" : percent >= 50 ? "Good Job! Keep it up." : "Needs Improvement. Practice more!";

    document.body.insertAdjacentHTML('beforeend', ResultModal(score, exam.questions.length, message));
};

const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    const speed = 200;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const dest = +target.getAttribute('data-target');
                let count = 0;
                const inc = dest / speed;

                const updateCount = () => {
                    if (count < dest) {
                        count += inc;
                        target.innerText = Math.ceil(count);
                        setTimeout(updateCount, 1);
                    } else {
                        target.innerText = dest + (dest === 95 ? '%' : '+');
                    }
                };
                updateCount();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
};

const router = () => {
    const hash = window.location.hash || '#/';

    if (hash === '#/') {
        routes.home();
        setTimeout(animateStats, 100);
    } else if (hash === '#/login') {
        routes.login();
    } else if (hash === '#/signup') {
        routes.signup();
    } else if (hash === '#/dashboard') {
        routes.dashboard();
    } else if (hash.startsWith('#/blog/')) {
        const blogId = hash.split('/')[2];
        routes.blogPost(blogId);
    } else if (hash.startsWith('#/admin')) {
        const view = hash.split('/')[2] || 'stats';
        routes.admin(view);
    } else if (hash === '#/admission') {
        routes.admission();
    } else if (hash === '#/contact') {
        routes.contact();
    } else if (hash === '#/exam-portal') {
        routes.examPortal();
    } else if (hash.startsWith('#/exam/')) {
        const examId = hash.split('/')[2];
        routes.examActive(examId);
    } else if (hash === '#courses-section' || hash === '#about-section' || hash === '#notes-section') {
        routes.home();
        setTimeout(() => window.scrollToSection(hash.substring(1)), 100);
    } else if (hash.startsWith('#/class/')) {
        const parts = hash.split('/');
        routes.classSelection(parts);
    } else {
        routes.home();
        setTimeout(animateStats, 100);
    }
};

window.handleSearch = () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) return;

    const matchedGroup = siteData.classGroups.find(g => query.includes(`class ${g}`) || query === g || g.split('-').some(cls => query.includes(cls)));
    const matchedSubject = siteData.subjects.find(s => query.includes(s.name.toLowerCase()) || query === s.id);

    if (matchedGroup && matchedSubject) {
        window.location.hash = `#/class/${matchedGroup}/subject/${matchedSubject.id}`;
    } else if (matchedGroup) {
        window.location.hash = `#/class/${matchedGroup}`;
    } else if (matchedSubject) {
        alert(`Searching for ${matchedSubject.name}. Please select a class to view specific notes.`);
    } else {
        alert('No matching results found. Try searching for "Class 10" or "Science".');
    }
};

window.handleEnrollmentSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // Simulate form submission
    console.log('Enrollment submitted:', {
        name: form.studentName.value,
        class: form.studentClass.value,
        course: form.courseType.value,
        mode: form.studyMode.value,
        phone: form.phoneNumber.value,
        email: form.studentEmail.value,
        message: form.message.value
    });

    document.getElementById('enrollmentForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
};

window.handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const userData = {
        name: form.regName.value,
        email: form.regEmail.value,
        password: form.regPassword.value,
        class: form.regClass.value
    };

    localStorage.setItem(`user_${userData.email}`, JSON.stringify(userData));
    alert('Account created! Please login.');
    window.location.hash = '#/login';
};

window.handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.loginEmail.value;
    const password = form.loginPassword.value;

    const storedUser = JSON.parse(localStorage.getItem(`user_${email}`));

    if (storedUser && storedUser.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(storedUser));
        window.location.hash = '#/dashboard';
    } else {
        alert('Invalid email or password.');
    }
};

window.handleAdminLogin = (event) => {
    event.preventDefault();
    const email = document.getElementById('adminEmail').value;
    const key = document.getElementById('adminKey').value;

    if (email === 'admin@techkarma.com' && key === 'admin123') {
        localStorage.setItem('isAdmin', 'true');
        window.location.hash = '#/admin';
    } else {
        alert('Access Denied: Invalid Admin Credentials');
    }
};

window.handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAdmin');
    window.location.hash = '#/';
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

const PricingSection = () => {
    const featuredCourses = [
        ...siteData.courseCategories[0].courses.slice(0, 3), // Python, C, C++
        siteData.courseCategories[2].courses[0] // AI
    ];

    const pricingCards = featuredCourses.map(course => PricingCard(course)).join('');

    return `
        <section class="pricing-section" id="pricing-section" style="padding: 100px 0; background: #0b1120;">
            <div class="container">
                <div class="section-title">
                    <h2>Course Pricing</h2>
                    <p>Professional training at affordable prices. Invest in your future today.</p>
                </div>
                <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                    ${pricingCards}
                </div>
            </div>
        </section>
    `;
};

const BlogSection = () => {
    const blogCards = siteData.blogs.map(blog => BlogCard(blog)).join('');

    return `
        <section class="blog-home-section" id="blog-section" style="padding: 100px 0;">
            <div class="container">
                <div class="section-title">
                    <h2>Latest from Our Blog</h2>
                    <p>Stay updated with the latest in tech, education, and site news.</p>
                </div>
                <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                    ${blogCards}
                </div>
            </div>
        </section>
    `;
};

const TestimonialsSection = () => `
    <section class="testimonials container" id="testimonials-section" style="padding: 80px 0;">
        <div class="section-title">
            <h2>What Our Students Say</h2>
            <p>Success stories from Tech Karma alumni</p>
        </div>
        <div class="grid">
            <div class="card testimonial-card">
                <div class="stars">★★★★★</div>
                <p class="feedback">"The structured notes and test series completely changed the way I prepare for exams. Highly recommended!"</p>
                <div class="student-name">- Rahul, Class 10</div>
            </div>
            <div class="card testimonial-card">
                <div class="stars">★★★★★</div>
                <p class="feedback">"Concept clarity is the best part. Now I don't just memorize, I actually understand the logic behind formulas."</p>
                <div class="student-name">- Priya, Class 12</div>
            </div>
            <div class="card testimonial-card">
                <div class="stars">★★★★★</div>
                <p class="feedback">"The performance tracking helped me focus on my weak areas. I improved my scores significantly in just 3 months."</p>
                <div class="student-name">- Aman, Class 9</div>
            </div>
        </div>
    </section>
`;

const OutreachSection = () => `
    <section class="cta-section" id="contact-section">
        <div class="container">
            <div class="cta-content">
                <h2>Ready to Boost Your Marks?</h2>
                <p>Join Tech Karma Classes today and start learning smarter.</p>
                <div class="cta-actions">
                    <button class="btn btn-glow" onclick="window.location.hash = '#/contact'">Enroll Now</button>
                    <a href="https://wa.me/918130550381" class="btn btn-glow-orange" target="_blank">
                        <i class="fab fa-whatsapp"></i> Contact on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </section>
`;

const StatsSection = () => `
    <section class="stats-section">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number" data-target="500">500+</div>
                    <div class="stat-label">Students Enrolled</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="2000">2000+</div>
                    <div class="stat-label">Notes Delivered</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="95">95%</div>
                    <div class="stat-label">Success Rate (%)</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="5">5+</div>
                    <div class="stat-label">Years of Excellence</div>
                </div>
            </div>
        </div>
    </section>
`;

const FeaturesSection = () => `
    <section class="features-section container">
        <div class="section-title">
            <h2>Why Choose Tech Karma Classes?</h2>
            <p>Designed for excellence, built for your success</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">📝</div>
                <h3>Chapter-wise Structured Notes</h3>
                <p>Detailed, easy-to-understand notes curated by experts for every chapter.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">📝</div>
                <h3>Weekly Test Series</h3>
                <p>Regular assessments to track your progress and identify areas for improvement.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">💡</div>
                <h3>Concept Clarity Sessions</h3>
                <p>Focus on fundamentals to build a strong foundation for advanced learning.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">📈</div>
                <h3>Performance Tracking</h3>
                <p>Get detailed insights into your learning journey with personalized feedback.</p>
            </div>
        </div>
    </section>
`;

router();

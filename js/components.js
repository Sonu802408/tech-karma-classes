export const Navbar = (user = null) => `
    <div class="top-bar">
        <div class="container top-bar-content">
            <div class="top-bar-info">
                <a href="tel:+918130550381"><i class="fas fa-phone"></i> +91 81305 50381</a>
                <a href="mailto:sonuk802408@gmail.com"><i class="fas fa-envelope"></i> sonuk802408@gmail.com</a>
            </div>
            <div class="top-bar-social">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
    <header>
        <div class="container">
            <nav>
                <a href="#/" class="brand-container">
                    <img src="assets/logo.png" alt="Tech Karma Classes" class="logo-img">
                    <div class="brand-text">
                        <div class="brand-main">
                            <span class="brand-tech">Tech</span>
                            <span class="brand-karma">Karma</span>
                        </div>
                        <div class="brand-sub">Classes</div>
                    </div>
                </a>
                <ul class="nav-links">
                    <li><a href="#/">Home</a></li>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Study Material <i class="fas fa-chevron-down" style="font-size: 0.7rem;"></i></a>
                        <div class="dropdown-content">
                            <a href="#/class/6">Class 6</a>
                            <a href="#/class/7">Class 7</a>
                            <a href="#/class/8">Class 8</a>
                            <a href="#/class/9">Class 9</a>
                            <a href="#/class/10">Class 10</a>
                            <a href="#/class/11">Class 11</a>
                            <a href="#/class/12">Class 12</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Computer Courses <i class="fas fa-chevron-down" style="font-size: 0.7rem;"></i></a>
                        <div class="dropdown-content">
                            <a href="#/courses">All Courses</a>
                            <a href="#/courses/programming">Programming</a>
                            <a href="#/courses/basics">Computer Basics</a>
                        </div>
                    </li>
                    <li><a href="#/exam-portal" style="color: var(--accent-color); font-weight: 600;"><i class="fas fa-edit"></i> Exam Portal</a></li>
                    <li><a href="#/admission">Admission</a></li>
                    ${user ? `
                        <li><a href="#/dashboard" class="btn btn-glow" style="padding: 10px 20px;">Dashboard</a></li>
                    ` : `
                        <li><a href="#/login" class="btn btn-glow" style="padding: 10px 20px;">Login</a></li>
                    `}
                </ul>
            </nav>
        </div>
    </header>
`;



export const Footer = () => `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Tech Karma Classes</h4>
                    <p>Empowering students with technology-driven learning and high-quality study resources for Classes 6 to 12.</p>
                </div>

                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#/">Home</a></li>
                        <li><a href="#/contact">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="https://wa.me/918130550381" target="_blank"><i class="fab fa-whatsapp"></i> +91 81305 50381</a></li>
                        <li><a href="mailto:sonuk802408@gmail.com"><i class="far fa-envelope"></i> sonuk802408@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2026 Tech Karma Classes | All Rights Reserved
            </div>


        </div>
    </footer>
`;

export const ClassCard = (classNum, icon) => `
    <div class="card" onclick="window.location.hash = '#/class/${classNum}'">
        <div class="icon">${icon || '🎓'}</div>
        <h3>Class ${classNum}</h3>
        <p>Expertly curated notes and study materials for students in Class ${classNum}.</p>
        <button class="btn">View Subjects</button>
    </div>
`;


export const CourseCard = (course) => `
    <div class="card" onclick="alert('Course details for ${course.name} coming soon!')">
        <div class="icon">${course.icon}</div>
        <h3>${course.name}</h3>
        <p>${course.description}</p>
        <button class="btn">View Details</button>
    </div>
`;




export const SelectionCard = (title, icon, link, color = 'var(--primary-color)') => `
    <div class="card selection-card" onclick="window.location.hash = '${link}'" style="border-top: 4px solid ${color};">
        <div class="icon" style="font-size: 2.5rem; margin-bottom: 15px;">${icon}</div>
        <h3 style="margin-bottom: 10px;">${title}</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted);">Explore high-quality resources for ${title}.</p>
    </div>
`;

export const SectionTabs = (activeSection, baseUrl) => {
    const sections = ['Notes', 'NCERT Solutions', 'MCQ', 'Books', 'Sample Papers'];
    return `
        <div class="section-tabs-container card" style="padding: 10px; margin-bottom: 30px; display: flex; gap: 10px; overflow-x: auto; white-space: nowrap; background: #0b1120;">
            ${sections.map(s => {
        const isActive = s === activeSection;
        return `
                    <button class="btn ${isActive ? 'btn-glow' : 'btn-outline'}" 
                            onclick="window.location.hash = '${baseUrl}/${s}'"
                            style="padding: 8px 15px; font-size: 0.85rem; ${!isActive ? 'background:transparent; border:1px solid var(--border-color);' : ''}">
                        ${s}
                    </button>
                `;
    }).join('')}
        </div>
    `;
};

export const SubjectCard = (subject, link) => `
    <div class="card" onclick="window.location.hash = '${link}'">
        <div class="icon">${subject.icon}</div>
        <h3>${subject.name}</h3>
        <p>Unlock detailed chapter-wise resources for ${subject.name}.</p>
        <button class="btn btn-glow" style="padding: 8px 20px; font-size: 0.85rem; margin-top: 15px;">Explore</button>
    </div>
`;

export const ChapterItem = (classId, subjectId, chapter) => `
    <div class="card">
        <div style="margin-bottom: 15px; opacity: 0.7; font-size: 0.9rem; font-weight: 600; color: var(--accent-color);">CHAPTER ${chapter.id}</div>
        <h3>${chapter.title}</h3>
        <p>${chapter.description}</p>
        <div style="margin-top: 25px; display: flex; flex-direction: column; gap: 12px; align-items: stretch;">
            <button class="btn btn-glow" onclick="window.location.hash = '#/class/${classId}/subject/${subjectId}/chapter/${chapter.id}'">
                <i class="far fa-eye"></i> View Notes
            </button>
            <a href="${chapter.pdfUrl}" class="btn btn-glow-orange" style="background: #10b981; box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);" download>
                <i class="fas fa-download"></i> Download PDF
            </a>
        </div>
    </div>
`;



export const EnrollmentForm = () => `
    <div class="admission-page container" style="margin-top: 50px; margin-bottom: 80px;">
        <div class="section-title">
            <h1>Admission & Enrollment</h1>
            <p>Join Tech Karma Classes and unlock your full potential</p>
        </div>
        <div class="form-container card" style="max-width: 800px; margin: 0 auto; padding: 40px;">
            <form id="enrollmentForm" onsubmit="window.handleEnrollmentSubmit(event)">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 25px;">
                    <div class="form-group">
                        <label for="studentName" style="display: block; margin-bottom: 8px; font-weight: 500;">Student Name</label>
                        <input type="text" id="studentName" required placeholder="Enter full name" style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                    </div>
                    <div class="form-group">
                        <label for="studentClass" style="display: block; margin-bottom: 8px; font-weight: 500;">Select Class</label>
                        <select id="studentClass" required style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                            <option value="" disabled selected>Select Grade</option>
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                            <option value="10">Class 10</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="courseType" style="display: block; margin-bottom: 8px; font-weight: 500;">Select Course</label>
                        <select id="courseType" required style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                            <option value="" disabled selected>Select Course Category</option>
                            <option value="School Support">School Support (6-12 Notes/Tests)</option>
                            <option value="Programming">Programming & Tech Courses</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="studyMode" style="display: block; margin-bottom: 8px; font-weight: 500;">Study Mode</label>
                        <select id="studyMode" required style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber" style="display: block; margin-bottom: 8px; font-weight: 500;">Phone Number</label>
                        <input type="tel" id="phoneNumber" required placeholder="Your contact number" style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                    </div>
                    <div class="form-group">
                        <label for="studentEmail" style="display: block; margin-bottom: 8px; font-weight: 500;">Email Address</label>
                        <input type="email" id="studentEmail" required placeholder="Enter email" style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                    </div>
                </div>
                <div class="form-group" style="margin-bottom: 25px;">
                    <label for="message" style="display: block; margin-bottom: 8px; font-weight: 500;">Additional Message</label>
                    <textarea id="message" rows="4" placeholder="How can we help you?" style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main); resize: vertical;"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-glow" style="width: 100%; padding: 15px; font-size: 1.1rem;">Submit Admission Form</button>
            </form>
            <div id="formSuccess" style="display: none; text-align: center; padding: 20px;">
                <div style="font-size: 3rem; margin-bottom: 15px;">✅</div>
                <h2 style="color: var(--accent-color); margin-bottom: 10px;">Thank you!</h2>
                <p>We have received your admission request. We will contact you soon.</p>
                <button class="btn" onclick="window.location.hash = '#/'" style="margin-top: 20px;">Back to Home</button>
            </div>
        </div>
    </div>
`;
export const SignupForm = () => `
    <div class="auth-page container" style="margin-top: 50px; margin-bottom: 80px;">
        <div class="section-title">
            <h1>Create Account</h1>
            <p>Join Tech Karma Classes and start your learning journey</p>
        </div>
        <div class="form-container card" style="max-width: 500px; margin: 0 auto; padding: 40px;">
            <form id="signupForm" onsubmit="window.handleSignup(event)">
                <div class="form-group" style="margin-bottom: 20px;">
                    <label for="regName" style="display: block; margin-bottom: 8px; font-weight: 500;">Full Name</label>
                    <input type="text" id="regName" required placeholder="Enter your name" style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                </div>
                <div class="form-group" style="margin-bottom: 20px;">
                    <label for="regEmail" style="display: block; margin-bottom: 8px; font-weight: 500;">Email Address</label>
                    <input type="email" id="regEmail" required placeholder="Enter email" style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                </div>
                <div class="form-group" style="margin-bottom: 20px;">
                    <label for="regPassword" style="display: block; margin-bottom: 8px; font-weight: 500;">Password</label>
                    <input type="password" id="regPassword" required placeholder="Create password" style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                </div>
                <div class="form-group" style="margin-bottom: 30px;">
                    <label for="regClass" style="display: block; margin-bottom: 8px; font-weight: 500;">Your Class</label>
                    <select id="regClass" required style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                        <option value="" disabled selected>Select Grade</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary btn-glow" style="width: 100%; padding: 15px; font-size: 1.1rem;">Sign Up</button>
            </form>
            <p style="text-align: center; margin-top: 20px; color: var(--text-muted);">Already have an account? <a href="#/login" style="color: var(--accent-color);">Login here</a></p>
        </div>
    </div>
`;

export const LoginForm = () => `
    <div class="auth-page container" style="margin-top: 50px; margin-bottom: 80px;">
        <div class="section-title">
            <h1>Student Login</h1>
            <p>Welcome back! Access your classes and notes</p>
        </div>
        <div class="form-container card" style="max-width: 500px; margin: 0 auto; padding: 40px;">
            <form id="loginForm" onsubmit="window.handleLogin(event)">
                <div class="form-group" style="margin-bottom: 20px;">
                    <label for="loginEmail" style="display: block; margin-bottom: 8px; font-weight: 500;">Email Address</label>
                    <input type="email" id="loginEmail" required placeholder="Enter email" style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                </div>
                <div class="form-group" style="margin-bottom: 30px;">
                    <label for="loginPassword" style="display: block; margin-bottom: 8px; font-weight: 500;">Password</label>
                    <input type="password" id="loginPassword" required placeholder="Enter password" style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                </div>
                <button type="submit" class="btn btn-primary btn-glow" style="width: 100%; padding: 15px; font-size: 1.1rem;">Login</button>
            </form>
            <p style="text-align: center; margin-top: 20px; color: var(--text-muted);">Don't have an account? <a href="#/signup" style="color: var(--accent-color);">Sign up here</a></p>
        </div>
    </div>
`;

export const StudentDashboard = (user, subjects, courses) => `
    <div class="dashboard-page container" style="margin-top: 40px; margin-bottom: 80px;">
        <div class="dashboard-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; border-bottom: 1px solid var(--border-color); padding-bottom: 20px;">
            <div>
                <h1 style="font-size: 2.2rem; color: var(--text-main);">Welcome, <span style="color: var(--primary-color);">${user.name}</span>!</h1>
                <p style="color: var(--text-muted);">Class ${user.class} Student • Active learning session</p>
            </div>
            <button class="btn btn-outline" onclick="window.handleLogout()" style="border: 1px solid var(--accent-color); color: var(--accent-color); background: transparent;">Logout</button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="dashboard-section card" style="padding: 30px;">
                <h2 style="margin-bottom: 20px; color: var(--accent-color); font-size: 1.5rem;"><i class="fas fa-book-open"></i> My Subjects</h2>
                <div class="dash-list" style="display: flex; flex-direction: column; gap: 15px;">
                    ${subjects.map(sub => `
                        <div class="dash-item" style="display: flex; justify-content: space-between; align-items: center; padding: 15px; background: #0f172a; border-radius: 12px; border: 1px solid var(--border-color);">
                            <span>${sub.icon} ${sub.name}</span>
                            <a href="#/class/${user.class}/subject/${sub.id}" class="btn" style="padding: 8px 15px; font-size: 0.8rem;">View Notes</a>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="dashboard-section card" style="padding: 30px;">
                <h2 style="margin-bottom: 20px; color: var(--accent-color); font-size: 1.5rem;"><i class="fas fa-laptop-code"></i> Programming Tracks</h2>
                <div class="dash-list" style="display: flex; flex-direction: column; gap: 15px;">
                    ${courses.map(course => `
                        <div class="dash-item" style="display: flex; justify-content: space-between; align-items: center; padding: 15px; background: #0f172a; border-radius: 12px; border: 1px solid var(--border-color);">
                            <span>${course.icon} ${course.name}</span>
                            <button class="btn btn-glow" style="padding: 8px 15px; font-size: 0.8rem;" onclick="alert('Module loading...')">Continue</button>
                        </div>
                    `).join('')}
                    <a href="#courses-section" style="text-align: center; color: var(--primary-color); text-decoration: none; margin-top: 10px; font-size: 0.9rem;">+ Explore All Courses</a>
                </div>
            </div>
        </div>

        <div class="card" style="margin-top: 40px; padding: 30px; border-left: 5px solid var(--primary-color);">
            <h3 style="margin-bottom: 10px;">Tech Karma Learning Tip 💡</h3>
            <p style="color: var(--text-muted); line-height: 1.6;">Stay consistent! Research shows that reviewing your notes within 24 hours of a class improves retention by 60%. Use the downloadable PDFs for offline revision.</p>
        </div>
    </div>
`;

export const AdminLogin = () => `
    <div class="auth-page container" style="margin-top: 50px; margin-bottom: 80px;">
        <div class="section-title">
            <h1>Admin Portal</h1>
            <p>Enter credentials to access site management</p>
        </div>
        <div class="form-container card" style="max-width: 400px; margin: 0 auto; padding: 40px;">
            <form id="adminLoginForm" onsubmit="window.handleAdminLogin(event)">
                <div class="form-group" style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 8px;">Admin Email</label>
                    <input type="email" id="adminEmail" required placeholder="admin@techkarma.com" style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                </div>
                <div class="form-group" style="margin-bottom: 30px;">
                    <label style="display: block; margin-bottom: 8px;">Access Key</label>
                    <input type="password" id="adminKey" required placeholder="••••••••" style="width: 100%; padding: 12px; background: #0f172a; border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main);">
                </div>
                <button type="submit" class="btn btn-primary btn-glow" style="width: 100%; padding: 15px;">Enter Dashboard</button>
            </form>
        </div>
    </div>
`;

export const AdminDashboard = (view = 'stats', data = {}) => `
    <div class="admin-panel">
        <aside class="admin-sidebar" style="width: 280px; background: #0b1120; border-right: 1px solid var(--border-color); height: 100vh; position: fixed; left: 0; top: 0; padding: 30px 20px;">
            <div class="sidebar-header" style="margin-bottom: 40px; text-align: center;">
                <h3 style="color: var(--primary-color);">Admin Panel</h3>
            </div>
            <nav class="admin-nav" style="display: flex; flex-direction: column; gap: 10px;">
                <a href="#/admin" class="nav-item ${view === 'stats' ? 'active' : ''}" style="padding: 12px 20px; border-radius: 8px; color: ${view === 'stats' ? 'var(--primary-color)' : 'var(--text-muted)'}; background: ${view === 'stats' ? 'rgba(0, 123, 255, 0.1)' : 'transparent'};">
                    <i class="fas fa-chart-line"></i> Overview
                </a>
                <a href="#/admin/courses" class="nav-item ${view === 'courses' ? 'active' : ''}" style="padding: 12px 20px; border-radius: 8px; color: ${view === 'courses' ? 'var(--primary-color)' : 'var(--text-muted)'}; background: ${view === 'courses' ? 'rgba(0, 123, 255, 0.1)' : 'transparent'};">
                    <i class="fas fa-laptop-code"></i> Manage Courses
                </a>
                <a href="#/admin/notes" class="nav-item ${view === 'notes' ? 'active' : ''}" style="padding: 12px 20px; border-radius: 8px; color: ${view === 'notes' ? 'var(--primary-color)' : 'var(--text-muted)'}; background: ${view === 'notes' ? 'rgba(0, 123, 255, 0.1)' : 'transparent'};">
                    <i class="fas fa-file-pdf"></i> Manage Notes
                </a>
                <a href="#/admin/students" class="nav-item ${view === 'students' ? 'active' : ''}" style="padding: 12px 20px; border-radius: 8px; color: ${view === 'students' ? 'var(--primary-color)' : 'var(--text-muted)'}; background: ${view === 'students' ? 'rgba(0, 123, 255, 0.1)' : 'transparent'};">
                    <i class="fas fa-user-graduate"></i> Students List
                </a>
                <div style="margin-top: 40px;">
                    <button onclick="window.handleLogout()" class="btn btn-outline" style="width: 100%; border: 1px solid var(--accent-color); color: var(--accent-color); background: transparent;">Exit Admin</button>
                </div>
            </nav>
        </aside>

        <main class="admin-content" style="margin-left: 280px; padding: 40px;">
            ${view === 'stats' ? `
                <div class="admin-overview">
                    <h1 style="margin-bottom: 30px;">Platform Overview</h1>
                    <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px;">
                        <div class="stat-card card"><h3>1,200</h3><p>Total Visits</p></div>
                        <div class="stat-card card"><h3>${data.studentCount || 0}</h3><p>Students</p></div>
                        <div class="stat-card card"><h3>${data.noteCount || 450}</h3><p>Notes</p></div>
                        <div class="stat-card card"><h3>12</h3><p>Active Courses</p></div>
                    </div>
                </div>
            ` : ''}

            ${view === 'courses' ? `
                <div class="admin-management">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                        <h1>Manage Courses</h1>
                        <button class="btn" onclick="alert('Add course feature coming soon!')">+ Add New Course</button>
                    </div>
                    <div class="admin-table card" style="padding: 0; overflow: hidden;">
                        <table style="width: 100%; border-collapse: collapse; text-align: left;">
                            <thead style="background: rgba(255, 255, 255, 0.05); border-bottom: 1px solid var(--border-color);">
                                <tr>
                                    <th style="padding: 20px;">Course Name</th>
                                    <th style="padding: 20px;">Category</th>
                                    <th style="padding: 20px;">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.courses.map(course => `
                                    <tr style="border-bottom: 1px solid var(--border-color);">
                                        <td style="padding: 20px;">${course.icon} ${course.name}</td>
                                        <td style="padding: 20px;">Programming</td>
                                        <td style="padding: 20px;">
                                            <button style="color: var(--primary-color); background: transparent; border: none; cursor: pointer; margin-right: 15px;"><i class="fas fa-edit"></i> Edit</button>
                                            <button style="color: #ff4444; background: transparent; border: none; cursor: pointer;"><i class="fas fa-trash"></i> Delete</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            ` : ''}

            ${view === 'students' ? `
                <div class="admin-management">
                    <h1 style="margin-bottom: 30px;">Registered Students</h1>
                    <div class="admin-table card" style="padding: 0; overflow: hidden;">
                        <table style="width: 100%; border-collapse: collapse; text-align: left;">
                            <thead style="background: rgba(255, 255, 255, 0.05); border-bottom: 1px solid var(--border-color);">
                                <tr>
                                    <th style="padding: 20px;">Name</th>
                                    <th style="padding: 20px;">Email</th>
                                    <th style="padding: 20px;">Class</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.students.map(std => `
                                    <tr style="border-bottom: 1px solid var(--border-color);">
                                        <td style="padding: 20px;">${std.name}</td>
                                        <td style="padding: 20px;">${std.email}</td>
                                        <td style="padding: 20px;">Grade ${std.class}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            ` : ''}

            ${view === 'notes' ? `
                <div class="admin-management">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                        <h1>Manage Notes (PDF)</h1>
                        <button class="btn" onclick="alert('PDF Upload feature coming soon!')"><i class="fas fa-cloud-upload-alt"></i> Upload PDF</button>
                    </div>
                    <p style="color: var(--text-muted);">Manage your study material library here. You can update PDF links and metadata for each class.</p>
                </div>
            ` : ''}
        </main>
    </div>
`;

export const PricingCard = (course) => `
    <div class="pricing-card card ${course.popular ? 'popular' : ''}" style="text-align: left; position: relative;">
        ${course.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
        <div class="pricing-header" style="margin-bottom: 25px;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">${course.icon}</div>
            <h3 style="font-size: 1.6rem; margin-bottom: 5px;">${course.name}</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Duration: ${course.duration}</p>
        </div>
        <div class="price" style="margin-bottom: 25px;">
            <span style="font-size: 2.5rem; font-weight: 700; color: var(--primary-color);">${course.price}</span>
            <span style="color: var(--text-muted);">/ Full Course</span>
        </div>
        <ul class="pricing-features" style="margin-bottom: 30px; display: flex; flex-direction: column; gap: 12px; padding: 0;">
            ${course.features.map(f => `
                <li style="display: flex; align-items: center; gap: 10px; color: var(--text-muted); font-size: 0.95rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary-color);"></i> ${f}
                </li>
            `).join('')}
        </ul>
        <button class="btn ${course.popular ? 'btn-glow' : 'btn-outline'}" style="width: 100%; padding: 15px; border: ${course.popular ? 'none' : '1px solid var(--primary-color)'}; background: ${course.popular ? 'var(--primary-color)' : 'transparent'}; color: white;" onclick="window.location.hash = '#/admission'">Enroll Now</button>
    </div>
`;

export const BlogCard = (blog) => `
    <article class="blog-card card" style="text-align: left; overflow: hidden; padding: 0;">
        <div class="blog-image" style="height: 200px; overflow: hidden;">
            <img src="${blog.image}" alt="${blog.title}" style="width: 100%; height: 100%; object-fit: crop; transition: var(--transition);">
        </div>
        <div class="blog-info" style="padding: 25px;">
            <div class="blog-meta" style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 10px;">
                <span><i class="far fa-calendar-alt"></i> ${blog.date}</span> • <span><i class="far fa-user"></i> ${blog.author}</span>
            </div>
            <h3 style="font-size: 1.3rem; margin-bottom: 15px; line-height: 1.4;">${blog.title}</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px; line-height: 1.6;">${blog.excerpt}</p>
            <a href="#/blog/${blog.id}" class="btn-text" style="color: var(--primary-color); font-weight: 600; display: flex; align-items: center; gap: 8px;">
                Read More <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </article>
`;

export const BlogPostView = (blog) => `
    <div class="blog-post-page container" style="margin-top: 50px; margin-bottom: 80px; max-width: 800px;">
        <article class="blog-full-content">
            <header style="margin-bottom: 40px; text-align: center;">
                <div class="blog-meta" style="color: var(--text-muted); margin-bottom: 15px;">
                    <span>${blog.date}</span> | <span>Post by ${blog.author}</span>
                </div>
                <h1 style="font-size: 2.8rem; line-height: 1.2; margin-bottom: 20px;">${blog.title}</h1>
            </header>
            <div class="blog-featured-image" style="margin-bottom: 40px; border-radius: var(--border-radius); overflow: hidden; box-shadow: var(--shadow);">
                <img src="${blog.image}" alt="${blog.title}" style="width: 100%; height: auto;">
            </div>
            <div class="blog-body" style="font-size: 1.1rem; line-height: 1.8; color: var(--text-main);">
                ${blog.content}
            </div>
            <footer style="margin-top: 60px; padding-top: 30px; border-top: 1px solid var(--border-color); text-align: center;">
                <a href="#/" class="btn" style="background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color);">Back to Home</a>
            </footer>
        </article>
    </div>
`;

export const Breadcrumbs = (paths) => {
    let html = '<div class="breadcrumbs container">';
    paths.forEach((path, index) => {
        if (index === paths.length - 1) {
            html += `<span>${path.name}</span>`;
        } else {
            html += `<a href="${path.link}">${path.name}</a> > `;
        }
    });
    html += '</div>';
    return html;
};

export const WhatsAppButton = () => `
    <a href="https://wa.me/918130550381" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
`;

export const ExamPortalSelection = (classes) => `
    <div class="exam-portal-entry container" style="margin-top: 50px; margin-bottom: 80px;">
        <div class="section-title">
            <h1>Exam Portal</h1>
            <p>Select your class to begin the assessment</p>
        </div>
        <div class="grid">
            ${classes.map(cls => `
                <div class="card" onclick="window.handleExamClassSelect('${cls}')" style="padding: 40px;">
                    <div class="icon" style="font-size: 3rem;">📝</div>
                    <h2>Class ${cls}</h2>
                    <p>Standardized tests for Class ${cls} curriculum.</p>
                </div>
            `).join('')}
        </div>
    </div>
`;

export const StreamSelectorModal = (cls) => `
    <div id="streamModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 2000;">
        <div class="card" style="max-width: 500px; width: 90%; padding: 40px; text-align: center;">
            <h2>Select Your Stream</h2>
            <p style="margin-bottom: 30px; color: var(--text-muted);">Please choose a stream for Class ${cls} exam.</p>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <button class="btn btn-glow" onclick="window.handleExamStreamSelect('${cls}', 'Science')">Science</button>
                <button class="btn btn-glow" onclick="window.handleExamStreamSelect('${cls}', 'Commerce')">Commerce</button>
                <button class="btn btn-glow" onclick="window.handleExamStreamSelect('${cls}', 'Arts')">Arts</button>
                <button class="btn btn-outline" style="margin-top: 20px;" onclick="document.getElementById('streamModal').remove()">Cancel</button>
            </div>
        </div>
    </div>
`;

export const ExamInterface = (exam) => `
    <div class="exam-interface container" style="margin-top: 50px; margin-bottom: 80px; max-width: 800px;">
        <div class="card" style="padding: 40px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid var(--border-color);">
                <h2>${exam.title}</h2>
                <div style="font-weight: 600; color: var(--primary-color);">Time Remaining: <span id="timer">15:00</span></div>
            </div>
            <form id="examForm" onsubmit="window.handleExamSubmit(event, '${exam.id}')">
                ${exam.questions.map((q, qIndex) => `
                    <div class="question-block" style="margin-bottom: 40px; text-align: left;">
                        <h3 style="margin-bottom: 20px; font-size: 1.1rem; color: var(--text-main);">Q${qIndex + 1}. ${q.q}</h3>
                        <div style="display: grid; gap: 12px;">
                            ${q.a.map((opt, oIndex) => `
                                <label style="display: flex; align-items: center; gap: 15px; padding: 15px; background: #0b1120; border: 1px solid var(--border-color); border-radius: 12px; cursor: pointer; transition: var(--transition);">
                                    <input type="radio" name="q${qIndex}" value="${oIndex}" required style="width: 20px; height: 20px; cursor: pointer;">
                                    <span>${opt}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
                <button type="submit" class="btn btn-glow" style="width: 100%; padding: 18px; font-size: 1.1rem;">Finish Exam & View Result</button>
            </form>
        </div>
    </div>
`;

export const ResultModal = (score, total, message) => `
    <div id="resultModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 2000;">
        <div class="card" style="max-width: 450px; width: 90%; padding: 50px; text-align: center; border-top: 5px solid var(--primary-color);">
            <div style="font-size: 4rem; margin-bottom: 20px;">${score / total >= 0.5 ? '🎉' : '📚'}</div>
            <h2 style="margin-bottom: 15px; font-size: 2rem;">Your Result</h2>
            <div style="font-size: 3rem; font-weight: 800; color: var(--accent-color); margin-bottom: 10px;">${score} / ${total}</div>
            <p style="color: var(--text-muted); margin-bottom: 30px;">${message}</p>
            <button class="btn btn-glow" onclick="window.location.hash = '#/exam-portal'" style="width: 100%;">Back to Portal</button>
        </div>
    </div>
`;



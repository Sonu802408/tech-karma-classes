const siteData = {
    classGroups: ['6', '7', '8', '9', '10', '11', '12'],
    mediums: ['English', 'Hindi'],
    streams: ['Science', 'Arts', 'Commerce'],
    contentSections: ['Notes', 'NCERT Solutions', 'MCQ', 'Books', 'Sample Papers'],
    subjects: {
        'default': [
            { id: 'maths', name: 'Mathematics', icon: '📐' },
            { id: 'science', name: 'Science', icon: '🔬' },
            { id: 'english', name: 'English', icon: '📚' },
            { id: 'sst', name: 'Social Studies', icon: '🌍' },
            { id: 'hindi', name: 'Hindi', icon: '✍️' }
        ],
        'Science': [
            { id: 'physics', name: 'Physics', icon: '⚛️' },
            { id: 'chemistry', name: 'Chemistry', icon: '🧪' },
            { id: 'maths', name: 'Mathematics', icon: '📐' },
            { id: 'biology', name: 'Biology', icon: '🧬' },
            { id: 'english', name: 'English', icon: '📚' }
        ],
        'Arts': [
            { id: 'history', name: 'History', icon: '📜' },
            { id: 'geography', name: 'Geography', icon: '🗺️' },
            { id: 'pol-science', name: 'Political Science', icon: '⚖️' },
            { id: 'economics', name: 'Economics', icon: '📈' },
            { id: 'english', name: 'English', icon: '📚' }
        ],
        'Commerce': [
            { id: 'accountancy', name: 'Accountancy', icon: '📊' },
            { id: 'business-studies', name: 'Business Studies', icon: '💼' },
            { id: 'economics', name: 'Economics', icon: '📈' },
            { id: 'maths', name: 'Mathematics', icon: '📐' },
            { id: 'english', name: 'English', icon: '📚' }
        ]
    },
    notes: {}, // Will hold the nested structure
    courseCategories: [
        {
            title: "Programming & Coding",
            courses: [
                { id: 'python', name: 'Python Mastery', description: 'Master Python from basics to advanced data handling and automation.', icon: '🐍', duration: '3 Months', price: '₹4,999', popular: true, features: ['Core Python & Advanced Modules', 'Web Scrapping & Automation', 'Real-world Projects', 'Certificate of Completion'] },
                { id: 'web-dev', name: 'Full Stack Web Dev', description: 'Build modern responsive websites using HTML, CSS, JavaScript, and React.', icon: '🌐', duration: '6 Months', price: '₹9,999', popular: true, features: ['Frontend & Backend', 'Database Integration', 'Deployment Skills', 'Portfolio Projects'] },
                { id: 'java', name: 'Java Enterprise', description: 'Build robust, scalable applications with industry-standard Java.', icon: '☕', duration: '4 Months', price: '₹5,999', features: ['Core Java & Multithreading', 'Database Connectivity (JDBC)', 'Spring Boot Framework', 'Enterprise Level Projects'] },
                { id: 'cpp', name: 'C++ Programming', description: 'Deep dive into Object-Oriented Programming and performance-driven code.', icon: '🚀', duration: '3 Months', price: '₹3,499', features: ['OOPs deep dive', 'STL Mastery', 'Competitive Coding Prep', 'Project Implementation'] }
            ]
        },
        {
            title: "Computer Basics & Professional Tools",
            courses: [
                { id: 'basic-cc', name: 'Computer Concepts (CCC)', description: 'Perfect for beginners to learn computer operations and internet basics.', icon: '🖥️', duration: '2 Months', price: '₹1,499', features: ['Computer Basics', 'OS (Windows/Linux)', 'Internet & Email', 'Digital Literacy Certificate'] },
                { id: 'ms-office', name: 'MS Office Specialist', description: 'Master Word, Excel, and PowerPoint for professional productivity.', icon: '📊', duration: '2 Months', price: '₹2,499', features: ['Advanced Excel Formulas', 'Professional Word Layouts', 'Impactful PowerPoint', 'Mock Projects'] },
                { id: 'graphic-design', name: 'Graphic Designing', description: 'Create stunning visuals using Photoshop, Illustrator, and Canva.', icon: '🎨', duration: '4 Months', price: '₹5,499', features: ['Design Principles', 'Branding & Identity', 'Vector Illustration', 'Project Portfolio'] },
                { id: 'tally', name: 'Tally Prime with GST', description: 'Comprehensive accounting and taxation course for business.', icon: '💸', duration: '3 Months', price: '₹3,999', features: ['Accounting Fundamentals', 'GST Concepts & Filing', 'Inventory Management', 'Live Projects'] }
            ]
        },
        {
            title: "Advanced Tech Subjects",
            courses: [
                { id: 'dsa', name: 'Data Structures & Algorithms', description: 'Crack top tier interviews with strong DSA fundamentals.', icon: '🧠', duration: '4 Months', price: '₹4,999', features: ['Array, List, Tree, Graph', 'Dynamic Programming', 'Complexity Analysis', 'Interview Questions'] },
                { id: 'cyber-security', name: 'Cyber Security', description: 'Learn ethical hacking and how to protect digital assets.', icon: '🛡️', duration: '4 Months', price: '₹6,999', features: ['Network Security', 'Ethical Hacking', 'Web Security', 'Incident Response'] }
            ]
        }
    ],
    blogs: [
        {
            id: 'coding-tips-2026',
            title: 'Top 5 Coding Tips for Beginners in 2026',
            date: 'Feb 20, 2026',
            author: 'Admin',
            excerpt: 'Starting your programming journey? Here are the essential tips to master any language faster.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
            content: `
                <p>Programming can be overwhelming at first, but with the right approach, anyone can master it. Here are our top 5 tips for 2026:</p>
                <ul>
                    <li><strong>Focus on Fundamentals:</strong> Dont rush into frameworks. Master the basics of logic and syntax first.</li>
                    <li><strong>Write Code Daily:</strong> Consistency is key. Even 30 minutes a day makes a huge difference.</li>
                    <li><strong>Build Projects:</strong> Apply what you learn by building real-world applications.</li>
                    <li><strong>Read Other Peoples Code:</strong> Explore GitHub and learn different coding styles.</li>
                    <li><strong>Don't Be Afraid to Fail:</strong> Debugging is where the real learning happens.</li>
                </ul>
            `
        },
        {
            id: 'exam-prep-guide',
            title: 'Board Exam Preparation: A Strategic Guide',
            date: 'Feb 15, 2026',
            author: 'Tech Karma Team',
            excerpt: 'How to manage your time and stay focused during the final months of board exam preparation.',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
            content: `
                <p>Strategic preparation is the difference between a good score and a great one. Follow this guide to ace your exams:</p>
                <ol>
                    <li>Create a realistic study timetable and stick to it.</li>
                    <li>Prioritize high-weightage topics first.</li>
                    <li>Solve previous years' question papers under timed conditions.</li>
                    <li>Take regular breaks to avoid burnout and stay fresh.</li>
                </ol>
            `
        },
        {
            id: 'future-of-ai',
            title: 'The Future of AI in Education',
            date: 'Feb 10, 2026',
            author: 'AI Specialist',
            excerpt: 'Explore how Artificial Intelligence is transforming the way we learn and teach in the modern era.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
            content: `
                <p>Artificial Intelligence is no longer a futuristic concept; it's here, and it's changing education as we know it. From personalized learning paths to automated grading, the impact is profound.</p>
                <p>At Tech Karma Classes, we are integrating AI into our curriculum to provide students with the most advanced learning experience possible.</p>
            `
        }
    ],
    exams: [
        {
            id: 'exam-10',
            class: '10',
            title: 'Class 10 - Mathematics Mock Test',
            questions: [
                { q: 'What is the value of Pi (approx)?', a: ['3.14', '2.14', '4.14', '1.14'], correct: 0 },
                { q: 'Which of the following is a prime number?', a: ['4', '6', '8', '7'], correct: 3 },
                { q: 'The square root of 144 is?', a: ['10', '11', '12', '13'], correct: 2 }
            ]
        },
        {
            id: 'exam-12-science',
            class: '12',
            stream: 'Science',
            title: 'Class 12 - Physics Revision Test',
            questions: [
                { q: 'Unit of Force is?', a: ['Watt', 'Newton', 'Pascal', 'Joule'], correct: 1 },
                { q: 'Speed of Light is approx?', a: ['2x10^8 m/s', '3x10^8 m/s', '4x10^8 m/s', '5x10^8 m/s'], correct: 1 }
            ]
        }
    ]
};

const realisticChapters = {
    '9-maths': ['Real Numbers', 'Polynomials', 'Pair of Linear Equations', 'Quadratic Equations', 'Arithmetic Progressions'],
    '10-maths': ['Probability', 'Statistics', 'Coordinate Geometry', 'Triangles', 'Introduction to Trigonometry'],
    '11-Science-physics': ['Physical World', 'Units and Measurements', 'Motion in a Straight Line', 'Motion in a Plane', 'Laws of Motion'],
    '12-Science-physics': ['Electric Charges and Fields', 'Electrostatic Potential', 'Current Electricity', 'Moving Charges', 'Magnetism and Matter']
};

// Populate dummy data with new hierarchy
siteData.classGroups.forEach(cls => {
    siteData.notes[cls] = {};
    const isHigherSec = ['11', '12'].includes(cls);

    if (isHigherSec) {
        siteData.streams.forEach(stream => {
            siteData.notes[cls][stream] = {};
            siteData.mediums.forEach(medium => {
                siteData.notes[cls][stream][medium] = {};
                siteData.contentSections.forEach(section => {
                    const subjectsList = siteData.subjects[stream] || siteData.subjects['default'];
                    siteData.notes[cls][stream][medium][section] = {};
                    subjectsList.forEach(sub => {
                        const key = `${cls}-${stream}-${sub.id}`;
                        const chapterTitles = realisticChapters[key] || Array.from({ length: 5 }, (_, i) => `Chapter ${i + 1}: ${sub.name} Topic`);
                        siteData.notes[cls][stream][medium][section][sub.id] = {
                            subjectName: sub.name,
                            icon: sub.icon,
                            chapters: chapterTitles.map((title, i) => ({
                                id: i + 1,
                                title: title,
                                pdfUrl: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
                                description: `Comprehensive ${section} for ${title} (${cls} ${stream} - ${medium} Medium).`
                            }))
                        };
                    });
                });
            });
        });
    } else {
        siteData.mediums.forEach(medium => {
            siteData.notes[cls][medium] = {};
            siteData.contentSections.forEach(section => {
                const subjectsList = siteData.subjects['default'];
                siteData.notes[cls][medium][section] = {};
                subjectsList.forEach(sub => {
                    const key = `${cls}-${sub.id}`;
                    const chapterTitles = realisticChapters[key] || Array.from({ length: 5 }, (_, i) => `Chapter ${i + 1}: ${sub.name} Topic`);
                    siteData.notes[cls][medium][section][sub.id] = {
                        subjectName: sub.name,
                        icon: sub.icon,
                        chapters: chapterTitles.map((title, i) => ({
                            id: i + 1,
                            title: title,
                            pdfUrl: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
                            description: `Comprehensive ${section} for ${title} (${cls} - ${medium} Medium).`
                        }))
                    };
                });
            });
        });
    }
});

export default siteData;


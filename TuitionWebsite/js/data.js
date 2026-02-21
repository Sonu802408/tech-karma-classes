const siteData = {
    classGroups: ['6', '7', '8', '9', '10', '11', '12'],
    subjects: [
        { id: 'maths', name: 'Mathematics', icon: '📐' },
        { id: 'science', name: 'Science', icon: '🔬' },
        { id: 'english', name: 'English', icon: '📚' },
        { id: 'sst', name: 'Social Studies', icon: '🌍' }
    ],
    notes: {},
    courseCategories: [
        {
            title: "Core Programming",
            courses: [
                { id: 'python', name: 'Python Mastery', description: 'Master Python from basics to advanced data handling and automation.', icon: '🐍', duration: '3 Months', price: '₹4,999', popular: true, features: ['Core Python & Advanced Modules', 'Web Scrapping & Automation', 'Real-world Projects', 'Certificate of Completion'] },
                { id: 'c', name: 'C Foundation', description: 'Learn the foundations of programming with the powerful C language.', icon: '💻', duration: '2 Months', price: '₹2,999', features: ['Logic Building & Algorithms', 'Memory Management', 'Data Structures Intro', 'Weekly Assignments'] },
                { id: 'cpp', name: 'C++ Programming', description: 'Deep dive into Object-Oriented Programming and performance-driven code.', icon: '🚀', duration: '3 Months', price: '₹3,499', features: ['OOPs deep dive', 'STL (Standard Template Library)', 'Competitive Coding Prep', 'Project Implementation'] },
                { id: 'java', name: 'Java Enterprise', description: 'Build robust, scalable applications with industry-standard Java.', icon: '☕', duration: '4 Months', price: '₹5,999', features: ['Core Java & Multithreading', 'Database Connectivity (JDBC)', 'Spring Boot Framework', 'Enterprise Level Projects'] }
            ]
        },
        {
            title: "Core Computer Science Subjects",
            courses: [
                { id: 'oop', name: 'OOP', description: 'Master Object-Oriented Programming principles and design patterns.', icon: '🏗️' },
                { id: 'dsa', name: 'Data Structures & Algorithms', description: 'Learn to solve complex problems with efficient algorithms and data structures.', icon: '🧠' },
                { id: 'dbms', name: 'DBMS', description: 'Comprehensive study of Database Management Systems and SQL.', icon: '📊' },
                { id: 'os', name: 'Operating System', description: 'Understand the internals of process management, memory, and file systems.', icon: '🖥️' },
                { id: 'coa', name: 'Computer Organization & Architecture', description: 'Explore the fundamental architecture and organization of computers.', icon: '🔌' },
                { id: 'se', name: 'Software Engineering', description: 'Learn professional software development life cycles and methodologies.', icon: '⚙️' },
                { id: 'we', name: 'Web Engineering', description: 'End-to-end web system design, deployment, and maintenance.', icon: '🌐' }
            ]
        },
        {
            title: "Advanced Technologies",
            courses: [
                { id: 'ai', name: 'AI Specialist', description: 'Introduction to intelligent agents, search algorithms, and logic.', icon: '🤖', duration: '4 Months', price: '₹7,999', features: ['Neural Networks & Deep Learning', 'Natural Language Processing', 'Computer Vision Basics', 'Expert Mentorship'] },
                { id: 'ml', name: 'ML Engineer', description: 'Master key ML algorithms, data modeling, and predictive analysis.', icon: '📈', duration: '3 Months', price: '₹6,499', features: ['Supervised & Unsupervised Learning', 'Data Visualization (Matplotlib)', 'Scikit-Learn Mastery', 'End-to-end ML Pipelines'] }
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
    ]
};



const realisticChapters = {
    '9-maths': ['Real Numbers', 'Polynomials', 'Pair of Linear Equations', 'Quadratic Equations', 'Arithmetic Progressions'],
    '10-maths': ['Probability', 'Statistics', 'Coordinate Geometry', 'Triangles', 'Introduction to Trigonometry'],
    '9-science': ['Chemical Reactions', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Life Processes', 'Control and Coordination'],
    '10-science': ['Light Reflection', 'Human Eye', 'Electricity', 'Magnetic Effects', 'Our Environment'],
    '11-physics': ['Electric Charges and Fields', 'Electrostatic Potential', 'Current Electricity', 'Moving Charges', 'Magnetism and Matter'],
    '12-physics': ['Electromagnetic Waves', 'Ray Optics', 'Wave Optics', 'Dual Nature of Radiation', 'Atoms'],
    '11-chemistry': ['Solutions', 'Electrochemistry', 'Chemical Kinetics', 'd-and f-Block Elements', 'Coordination Compounds'],
    '12-chemistry': ['Haloalkanes', 'Phenols', 'Aldehydes', 'Amines', 'Biomolecules']
};

// Populate dummy notes data
siteData.classGroups.forEach(group => {
    siteData.notes[group] = {};
    siteData.subjects.forEach(sub => {
        const key = `${group}-${sub.id}`;
        const chapterTitles = realisticChapters[key] || Array.from({ length: 5 }, (_, i) => `Chapter ${i + 1}: ${sub.name} Basics`);

        siteData.notes[group][sub.id] = {
            subjectName: sub.name,
            chapters: chapterTitles.map((title, i) => ({
                id: i + 1,
                title: title,
                pdfUrl: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
                description: `Comprehensive study notes for ${title} for Class ${group}.`
            }))
        };
    });
});


export default siteData;


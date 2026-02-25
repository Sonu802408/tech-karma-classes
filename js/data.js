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
    academicData: {
        '6': {
            'English': {
                'Mathematics': [
                    'Patterns in Mathematics', 'Lines and Angles', 'Number Play', 'Data Handling and Presentation',
                    'Prime Time', 'Perimeter and Area', 'Fractions', 'Playing with Constructions',
                    'Symmetry', 'The Other Side of Zero'
                ],
                'Science': [
                    'The Wonderful World of Science', 'Diversity in the Living World', 'Mindful Eating: A Path to a Healthy Body',
                    'Exploring Magnets', 'Measurement of Length and Motion', 'Materials Around Us',
                    'Temperature and its Measurement', 'A Journey through States of Water',
                    'Methods of Separation in Everyday Life', 'Living Creatures: Exploring their Characteristics',
                    'Nature\'s Treasures', 'Beyond Earth'
                ],
                'Social Science': [
                    'Locating Places on the Earth', 'Oceans and Continents', 'Landforms and Life',
                    'Timeline and Sources of History', 'India, That Is Bharat', 'The Beginnings of Indian Civilisation',
                    'India\'s Cultural Roots', 'Unity in Diversity', 'Family and Community',
                    'Grassroots Democracy Part 1', 'Grassroots Democracy Part 2', 'Grassroots Democracy Part 3',
                    'The Value of Work', 'Economic Activities Around Us'
                ]
            },
            'Hindi': {
                'Mathematics': [
                    'गणित में प्रतिरूप', 'संख्याओं के साथ खेलना', 'पूर्णांक', 'भुजाओं और कोणों को समझना',
                    'भिन्न', 'दशमलव', 'परिमाप और क्षेत्रफल', 'अनुपात और समानुपात', 'बीजगणित', 'डेटा प्रबंधन'
                ],
                'Science': [
                    'विज्ञान की अद्भुत दुनिया', 'हमारे आस-पास की वस्तुएँ और पदार्थ', 'सजीव और निर्जीव',
                    'पदार्थों को समूहित करना', 'पदार्थ का पृथक्करण', 'हमारे आस-पास के परिवर्तन',
                    'भोजन के घटक', 'गति और दूरियों का मापन', 'प्रकाश, छाया और परावर्तन',
                    'विद्युत तथा परिपथ', 'पर्यावरण: एक परिचय'
                ],
                'Social Science': {
                    'History (इतिहास)': ['प्रारंभिक समाज', 'नये विचार', 'प्रथम साम्राज्य'],
                    'Geography (भूगोल)': ['सौरमंडल में पृथ्वी', 'ग्लोब: अक्षांश एवं देशांतर', 'पृथ्वी की गतियाँ'],
                    'Civics (नागरिक शास्त्र)': ['विविधता की समझ', 'सरकार क्या है?', 'लोकतांत्रिक सरकार के मुख्य तत्व']
                }
            }
        },
        '7': {
            'English': {
                'Mathematics': [
                    'Integers', 'Fractions and Decimals', 'Data Handling', 'Simple Equations',
                    'Lines and Angles', 'The Triangle and its Properties', 'Congruence of Triangles',
                    'Comparing Quantities', 'Rational Numbers', 'Practical Geometry',
                    'Perimeter and Area', 'Algebraic Expressions', 'Exponents and Powers',
                    'Symmetry', 'Visualising Solid Shapes'
                ],
                'Science': [
                    'Nutrition in Plants', 'Nutrition in Animals', 'Fibre to Fabric', 'Heat',
                    'Acids, Bases and Salts', 'Physical and Chemical Changes', 'Weather, Climate and Adaptations',
                    'Winds, Storms and Cyclones', 'Soil', 'Respiration in Organisms',
                    'Transportation in Animals and Plants', 'Reproduction in Plants', 'Motion and Time',
                    'Electric Current and its Effects', 'Light', 'Water: A Precious Resource',
                    'Forests: Our Lifeline', 'Wastewater Story'
                ],
                'Social Science': {
                    'History': ['Tracing Changes Through a Thousand Years', 'New Kings and Kingdoms', 'The Delhi Sultans', 'The Mughal Empire'],
                    'Geography': ['Environment', 'Inside Our Earth', 'Our Changing Earth', 'Air', 'Water'],
                    'Civics': ['On Equality', 'Role of the Government in Health', 'How the State Government Works', 'Growing Up as Boys and Girls']
                }
            },
            'Hindi': {
                'Mathematics': [
                    'पूर्णांक', 'भिन्न एवं दशमलव', 'आँकड़ों का प्रबंधन', 'सरल समीकरण',
                    'रेखा एवं कोण', 'त्रिभुज और उसके गुण', 'त्रिभुजों की सर्वांगसमता',
                    'राशियों की तुलना', 'परिमेय संख्याएँ', 'प्रायोगिक ज्यामिति',
                    'परिमप और क्षेत्रफल', 'बीजीय व्यंजक', 'घातांक और घात',
                    'सममिति', 'ठोस आकारों का चित्रण'
                ],
                'Science': [
                    'पादपों में पोषण', 'प्राणियों में पोषण', 'रेशों से वस्त्र तक', 'ऊष्मा',
                    'अम्ल, क्षारक और लवण', 'भौतिक एवं रासायनिक परिवर्तन', 'मौसम, जलवायु तथा अनुकूलन',
                    'पवन, तूफ़ान और चक्रवात', 'मृदा', 'जीवों में श्वसन',
                    'जंतुओं और पादपों में परिवहन', 'पादप में जनन', 'गति एवं समय',
                    'विद्युत धारा और इसके प्रभाव', 'प्रकाश', 'जल: एक बहुमूल्य संसाधन',
                    'वन: हमारी जीवन रेखा', 'अपशिष्ट जल की कहानी'
                ],
                'Social Science': {
                    'History (इतिहास)': ['हज़ार वर्षों के दौरान हुए परिवर्तनों की पड़ताल', 'नये राजा और उनके राज्य', 'दिल्ली के सुल्तान'],
                    'Geography (भूगोल)': ['पर्यावरण', 'हमारी पृथ्वी के अंदर', 'हमारी बदलती पृथ्वी'],
                    'Civics (नागरिक शास्त्र)': ['समानता', 'स्वास्थ्य में सरकार की भूमिका', 'शासन कैसे काम करता है']
                }
            }
        },
        '8': { 'English': {}, 'Hindi': {} },
        '9': {
            'English': {
                'Mathematics': [
                    'Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables',
                    'Introduction to Euclid\'s Geometry', 'Lines and Angles', 'Triangles', 'Quadrilaterals',
                    'Circles', 'Heron\'s Formula', 'Surface Areas and Volumes', 'Statistics'
                ],
                'Science': [
                    'Matter in Our Surroundings', 'Is Matter Around Us Pure', 'Atoms and Molecules',
                    'Structure of the Atom', 'The Fundamental Unit of Life', 'Tissues',
                    'Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy',
                    'Sound', 'Improvement in Food Resources'
                ],
                'Social Science': {
                    'History': ['The French Revolution', 'Socialism in Europe and the Russian Revolution', 'Nazism and the Rise of Hitler', 'Forest Society and Colonialism', 'Pastoralists in the Modern World'],
                    'Geography': ['India – Size and Location', 'Physical Features of India', 'Drainage', 'Climate', 'Natural Vegetation and Wildlife', 'Population'],
                    'Civics': ['What is Democracy? Why Democracy?', 'Constitutional Design', 'Electoral Politics', 'Working of Institutions', 'Democratic Rights'],
                    'Economics': ['The Story of Village Palampur', 'People as Resource', 'Poverty as a Challenge', 'Food Security in India']
                }
            },
            'Hindi': {
                'Mathematics': [
                    'संख्या पद्धति', 'बहुपद', 'निर्देशांक ज्यामिति', 'दो चरों वाले रैखिक समीकरण',
                    'यूक्लिड की ज्यामिति का परिचय', 'रेखाएँ और कोण', 'त्रिभुज', 'चतुर्भुज',
                    'वृत्त', 'हीरोन का सूत्र', 'पृष्ठीय क्षेत्रफल और आयतन', 'सांख्यिकी'
                ],
                'Science': [
                    'हमारे आस-पास के पदार्थ', 'क्या हमारे आस-पास के पदार्थ शुद्ध हैं', 'परमाणु एवं अणु',
                    'परमाणु की संरचना', 'जीवन की मौलिक इकाई', 'ऊतक',
                    'गति', 'बल तथा गति के नियम', 'गुरुत्वाकर्षण', 'कार्य तथा ऊर्जा',
                    'ध्वनि', 'खाद्य संसाधनों में सुधार'
                ],
                'Social Science': {
                    'History (इतिहास)': ['फ्रांसीसी क्रांति', 'यूरोप में समाजवाद एवं रूसी क्रांति', 'नात्सीवाद और हिटलर का उदय'],
                    'Geography (भूगोल)': ['भारत - आकार और स्थिति', 'भारत का भौतिक स्वरूप', 'अपवाह'],
                    'Civics (नागरिक शास्त्र)': ['लोकतंत्र क्या? लोकतंत्र क्यों?', 'संविधान निर्माण', 'चुनावी राजनीति'],
                    'Economics (अर्थशास्त्र)': ['पालमपुर गाँव की कहानी', 'संसाधन के रूप में लोग', 'निर्धनता: एक चुनौती']
                }
            }
        },
        '10': {
            'English': {
                'Mathematics': [
                    'Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables',
                    'Quadratic Equations', 'Arithmetic Progressions', 'Triangles',
                    'Coordinate Geometry', 'Trigonometric Identities', 'Heights and Distances',
                    'Circles', 'Constructions', 'Areas Related to Circles',
                    'Surface Areas and Volumes', 'Statistics', 'Probability'
                ],
                'Science': [
                    'Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals',
                    'Carbon and its Compounds', 'Life Processes', 'Control and Coordination',
                    'How do Organisms Reproduce', 'Heredity and Evolution', 'Light – Reflection and Refraction',
                    'Electricity', 'Magnetic Effects of Electric Current', 'Sources of Energy'
                ],
                'Social Science': [
                    'The Rise of Nationalism in Europe', 'Nationalism in India', 'Resources and Development',
                    'Agriculture', 'Manufacturing Industries', 'Power Sharing', 'Federalism',
                    'Development', 'Money and Credit', 'Globalisation and the Indian Economy'
                ]
            },
            'Hindi': {
                'गणित': [
                    'वास्तविक संख्याएँ', 'बहुपद', 'दो चरों वाले रैखिक समीकरण युग्म', 'द्विघात समीकरण',
                    'समांतर श्रेणी', 'त्रिभुज', 'निर्देशांक ज्यामिति', 'त्रिकोणमितीय सर्वसमिकाएँ',
                    'ऊँचाई और दूरी', 'वृत्त', 'सांख्यिकी', 'प्रायिकता'
                ],
                'विज्ञान': [
                    'रासायनिक अभिक्रियाएँ और समीकरण', 'अम्ल, क्षार और लवण', 'धातु और अधातु',
                    'कार्बन और उसके यौगिक', 'जीवन प्रक्रियाएँ', 'नियंत्रण और समन्वय',
                    'अनुवांशिकता और विकास', 'प्रकाश – परावर्तन और अपवर्तन', 'विद्युत',
                    'ऊर्जा के स्रोत'
                ],
                'सामाजिक विज्ञान': [
                    'यूरोप में राष्ट्रवाद का उदय', 'भारत में राष्ट्रवाद', 'संसाधन और विकास',
                    'कृषि', 'सत्ता की साझेदारी', 'संघवाद', 'विकास', 'मुद्रा और ऋण',
                    'वैश्वीकरण और भारतीय अर्थव्यवस्था'
                ]
            }
        }
    },
    notes: {}, // Will hold the nested structure
    courseCategories: [
        {
            title: "Programming & Coding",
            courses: [
                { id: 'python', name: 'Python Mastery', description: 'Master Python from basics to advanced data handling and automation.', icon: '🐍', duration: '3 Months', price: '₹4,999', popular: true, features: ['Core Python & Advanced Modules', 'Web Scrapping & Automation', 'Real-world Projects', 'Certificate of Completion'] },
                { id: 'web-dev', name: 'Full Stack Web Dev', description: 'Build modern responsive websites using HTML, CSS, JavaScript, and React.', icon: '🌐', duration: '6 Months', price: '₹9,999', popular: true, features: ['Frontend & Backend', 'Database Integration', 'Deployment Skills', 'Portfolio Projects'] },
                { id: 'c-prog', name: 'C Programming', description: 'Master memory management and low-level programming with C.', icon: '⚙️', duration: '2 Months', price: '₹2,499', features: ['Pointers & Memory', 'Data Structures in C', 'System Programming', 'Algorithms'] },
                { id: 'java', name: 'Java Enterprise', description: 'Build robust, scalable applications with industry-standard Java.', icon: '☕', duration: '4 Months', price: '₹5,999', features: ['Core Java & Multithreading', 'Database Connectivity (JDBC)', 'Spring Boot Framework', 'Enterprise Level Projects'] },
                { id: 'cpp', name: 'C++ Programming', description: 'Deep dive into Object-Oriented Programming and performance-driven code.', icon: '🚀', duration: '3 Months', price: '₹3,499', features: ['OOPs deep dive', 'STL Mastery', 'Competitive Coding Prep', 'Project Implementation'] }
            ]
        },
        {
            title: "Computer Science Core",
            courses: [
                { id: 'dbms', name: 'DBMS', description: 'Learn database design, SQL, and management systems.', icon: '🗄️', duration: '3 Months', price: '₹3,999', features: ['SQL & NoSQL', 'Normalization', 'Indexing', 'Transactions'] },
                { id: 'os', name: 'Operating System', description: 'Understand process management, memory, and concurrency.', icon: '💻', duration: '3 Months', price: '₹3,999', features: ['Process Scheduling', 'Memory Management', 'File Systems', 'Deadlocks'] },
                { id: 'coa', name: 'COA', description: 'Computer Organization and Architecture fundamentals.', icon: '🏗️', duration: '3 Months', price: '₹3,999', features: ['CPU Design', 'Memory Hierarchy', 'I/O Interface', 'Pipelining'] },
                { id: 'se', name: 'Software Engineering', description: 'Master SDLC, design patterns, and agile methodologies.', icon: '🛠️', duration: '3 Months', price: '₹3,999', features: ['Agile & Scrum', 'Design Patterns', 'Testing Strategies', 'DevOps Basics'] }
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
                { id: 'ai', name: 'Artificial Intelligence', description: 'Learn neural networks, search algorithms, and intelligent agents.', icon: '🤖', duration: '4 Months', price: '₹5,999', features: ['Neural Networks', 'Search Algorithms', 'Natural Language Processing', 'Computer Vision'] },
                { id: 'ml', name: 'Machine Learning', description: 'Master regression, classification, and predictive modeling.', icon: '📊', duration: '4 Months', price: '₹6,499', features: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Data Visualization'] },
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
    '11-Science-physics': [
        'Physical World', 'Units and Measurements', 'Motion in a Straight Line',
        'Motion in a Plane', 'Laws of Motion', 'Work, Energy and Power',
        'System of Particles and Rotational Motion', 'Gravitation',
        'Mechanical Properties of Solids', 'Mechanical Properties of Fluids',
        'Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory',
        'Oscillations', 'Waves'
    ],
    '11-Science-chemistry': [
        'Some Basic Concepts of Chemistry', 'Structure of Atom',
        'Classification of Elements and Periodicity in Properties',
        'Chemical Bonding and Molecular Structure', 'Thermodynamics',
        'Equilibrium', 'Redox Reactions',
        'Organic Chemistry – Some Basic Principles and Techniques',
        'Hydrocarbons', 'The s-Block Elements', 'The p-Block Elements',
        'Environmental Chemistry'
    ],
    '11-Science-maths': [
        'Sets', 'Relations and Functions', 'Trigonometric Functions',
        'Principle of Mathematical Induction', 'Complex Numbers and Quadratic Equations',
        'Linear Inequalities', 'Permutations and Combinations', 'Binomial Theorem',
        'Sequences and Series', 'Straight Lines', 'Conic Sections',
        'Introduction to Three-Dimensional Geometry', 'Limits and Derivatives',
        'Mathematical Reasoning', 'Statistics', 'Probability'
    ],
    '11-Science-biology': [
        'The Living World', 'Biological Classification', 'Plant Kingdom',
        'Animal Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants',
        'Structural Organisation in Animals', 'Cell – The Unit of Life', 'Biomolecules',
        'Cell Cycle and Cell Division', 'Transport in Plants', 'Mineral Nutrition',
        'Photosynthesis in Higher Plants', 'Respiration in Plants',
        'Plant Growth and Development', 'Digestion and Absorption',
        'Breathing and Exchange of Gases', 'Body Fluids and Circulation',
        'Excretory Products and their Elimination', 'Locomotion and Movement',
        'Neural Control and Coordination', 'Chemical Coordination and Integration'
    ],
    '12-Science-physics': [
        'Electric Charges and Fields', 'Electrostatic Potential and Capacitance',
        'Current Electricity', 'Moving Charges and Magnetism', 'Magnetism and Matter',
        'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves',
        'Ray Optics and Optical Instruments', 'Wave Optics',
        'Dual Nature of Radiation and Matter', 'Atoms', 'Nuclei',
        'Semiconductor Electronics', 'Communication Systems'
    ],
    '12-Science-chemistry': [
        'Solutions', 'Electrochemistry', 'Chemical Kinetics',
        'The d- and f-Block Elements', 'Coordination Compounds',
        'Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers',
        'Aldehydes, Ketones and Carboxylic Acids', 'Amines',
        'Biomolecules', 'Polymers', 'Chemistry in Everyday Life'
    ],
    '12-Science-maths': [
        'Relations and Functions', 'Inverse Trigonometric Functions',
        'Matrices', 'Determinants', 'Continuity and Differentiability',
        'Applications of Derivatives', 'Integrals', 'Applications of Integrals',
        'Differential Equations', 'Vector Algebra', 'Three Dimensional Geometry',
        'Linear Programming', 'Probability'
    ],
    '12-Science-biology': [
        'Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants',
        'Human Reproduction', 'Reproductive Health',
        'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance',
        'Evolution', 'Human Health and Disease',
        'Strategies for Enhancement in Food Production', 'Microbes in Human Welfare',
        'Biotechnology – Principles and Processes', 'Biotechnology and its Applications',
        'Organisms and Populations', 'Ecosystem',
        'Biodiversity and Conservation', 'Environmental Issues'
    ]
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


export const projectsData = {
  projects: [
    {
      id: "proj-001",
      title: "Personal Portfolio Website",
      subtitle: "Modern portfolio to showcase developer profile",
      description:
        "A fully responsive and animated developer portfolio built with React and Vite, designed to reflect a modern frontend skillset. It includes smooth transitions using Framer Motion, theme toggling, and SEO optimization. All project content is managed via a JSON file, allowing for easy updates without modifying code. Styled using Styled-Components and deployed on Netlify, the site is optimized for performance and accessibility across devices.",
      technologies: [
        "React",
        // "Framer Motion",
        "Gsap",
        "Styled-Components",
        "Vite",
        // "Netlify",
        "Vercel",
      ],
      features: [
        "Dark/Light mode toggle with persistent preference",
        "Animated page and component transitions using G-SAP",
        "Mobile-first responsive design",
        // "SEO optimization including meta tags and Open Graph data",
        "Dynamic content rendering via structured JSON",
        "Lazy loading and code splitting with Vite",
        "Custom 404 page and global CDN deployment",
      ],
      images: {
        thumbnail: "images/portfolio-thumb.jpg",
        full: "images/portfolio-full.jpg",
        mobile: "images/portfolio-mobile.jpg",
      },
      links: {
        live: "https://portfolio-dhir.vercel.app",
        github: "https://github.com/Dhirajverm1480/portfolio-dhir",
        caseStudy: "https://yourportfolio.com/case-study/portfolio",
      },
      tags: [
        "frontend",
        "react",
        "vite",
        // "seo",
        "responsive",
        "personal-project",
        "styled-components",
      ],
      timeline: {
        start: "2025-04-10",
        end: "2025-05-02",
        duration: "3 weeks",
      },
      status: "Active",
      team: "Solo Project",
      role: "UI/UX Designer & Front-End Developer",
      responsibilities: [
        "Designed and implemented UI/UX based on wireframes",
        "Built modular React components with Styled-Components",
        "Implemented theme switching and page animations",
        "Managed project data via structured JSON",
        "Optimized for performance, SEO, and accessibility",
        "Set up CI/CD and deployment on Vercel",
      ],
      achievements: [
        "100/100 Lighthouse score in performance, accessibility, and SEO",
        "Featured on dev.to’s 'Top Developer Portfolios of 2025'",
        "Praised during technical interviews for UI and UX design quality",
      ],
    },
    {
      id: "proj-002",
      title: "TechIIEasy E-Commerce Storefront",
      subtitle: "Headless CMS-powered shopping platform",
      description:
        "A full-featured e-commerce platform using Next.js and Sanity.io as a headless CMS. It supports real-time product management, secure Stripe payments, responsive design, and user-friendly checkout flow. The admin panel allows non-developers to update product content, while the frontend is optimized for performance and deployed via Vercel’s edge network.",
      technologies: [
        "React.js",
        // "Sanity.io",
        // "Stripe",
        "Tailwind CSS",
        "Express",
        "Node.js",
        "MongoDB",
        "Vercel",
      ],
      features: [
        "Real-time product updates with Sanity CMS and GROQ queries",
        "Stripe integration for secure checkout",
        "Category filtering, search, and responsive product pages",
        "Server-side rendering and ISR for optimal performance",
        "Persistent cart with local storage and React Context",
        "Custom admin-friendly CMS interface",
        "CI/CD deployment on Vercel with preview environments",
      ],
      images: {
        thumbnail: "images/ecommerce-thumb.jpg",
        full: "images/ecommerce-full.jpg",
        mobile: "images/ecommerce-mobile.jpg",
      },
      links: {
        live: "https://store.yourdomain.com",
        github: "https://github.com/yourusername/ecommerce-store",
      },
      tags: [
        "fullstack",
        "nextjs",
        "ecommerce",
        "headless-cms",
        // "stripe",
        "tailwind",
        // "sanity",
      ],
      timeline: {
        start: "2025-01-15",
        end: "2025-03-01",
        duration: "6 weeks",
      },
      status: "Active",
      team: "Solo Developers",
      role: "Full-Stack Developer",
      responsibilities: [
        "Developed SSR/ISR-enabled frontend using Next.js",
        "Created UI components using Tailwind CSS",
        "Integrated Stripe API for payments and webhooks",
        "Set up Sanity Studio for real-time CMS control",
        "Built cart management logic using React Context API",
        "Configured Vercel for environment-specific deployments",
      ],
      achievements: [
        "Processed $10,000+ in demo sales during testing phase",
        "Improved page performance by 40% post-optimization",
        "Enabled non-devs to manage content via Sanity within a week",
      ],
    },

    // Dummy Project 1
    {
      id: "proj-003",
      title: "AI-Powered Blog Generator",
      subtitle: "Content creation tool using OpenAI API",
      description:
        "A productivity-focused application that helps users generate blog posts using OpenAI's GPT-4. Users can input a topic or keyword, and the tool produces structured blog drafts with options for tone, length, and audience. Includes Grammarly integration for proofreading and Medium integration for one-click publishing.",
      technologies: [
        "React",
        "Node.js",
        "OpenAI API",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      features: [
        "Topic-based AI content generation",
        "Tone and length customization",
        "Autosave and version history",
        "Grammarly plugin integration",
        "Medium publishing integration",
        "User authentication and dashboard",
        "Dark mode and accessibility support",
      ],
      images: {
        thumbnail: "images/ai-blog-thumb.jpg",
        full: "images/ai-blog-full.jpg",
        mobile: "images/ai-blog-mobile.jpg",
      },
      links: {
        live: "https://aibloggen.app",
        github: "https://github.com/yourusername/ai-blog-generator",
      },
      tags: [
        "ai",
        "openai",
        "content-creation",
        "productivity",
        "react",
        "nodejs",
      ],
      timeline: {
        start: "2025-06-01",
        end: "2025-07-01",
        duration: "1 month",
      },
      status: "In Progress",
      team: "3 Developers",
      role: "Lead Developer",
      responsibilities: [
        "Integrated OpenAI GPT-4 for content generation",
        "Built full-stack logic for content history and autosave",
        "Designed user dashboard and UX flow",
        "Implemented social auth and publishing APIs",
      ],
      achievements: [
        "Generated 5000+ blog posts in first beta week",
        "Reduced content creation time by 70% for beta users",
      ],
    },

    // Dummy Project 2
    {
      id: "proj-004",
      title: "Remote Team Collaboration Tool",
      subtitle: "Slack alternative with video and whiteboarding",
      description:
        "A real-time collaboration tool designed for distributed teams. Combines messaging, file sharing, video conferencing, and a shared whiteboard canvas. Built using WebRTC for low-latency calls and Firebase for real-time syncing.",
      technologies: [
        "Vue.js",
        "Firebase",
        "WebRTC",
        "Node.js",
        "Figma",
        "Tailwind CSS",
      ],
      features: [
        "Real-time chat with emoji reactions and threads",
        "Peer-to-peer video calls using WebRTC",
        "Collaborative whiteboard with drawing tools",
        "Drag-and-drop file sharing with previews",
        "Presence indicators and typing notifications",
        "Workspace and team management with roles",
        "Firebase authentication and Firestore database",
      ],
      images: {
        thumbnail: "images/team-tool-thumb.jpg",
        full: "images/team-tool-full.jpg",
        mobile: "images/team-tool-mobile.jpg",
      },
      links: {
        live: "https://remoteteam.app",
        github: "https://github.com/yourusername/remote-collab-tool",
      },
      tags: [
        "collaboration",
        "video",
        "web-app",
        "vue",
        "webrtc",
        "firebase",
        "team-productivity",
      ],
      timeline: {
        start: "2025-03-15",
        end: "2025-05-30",
        duration: "10 weeks",
      },
      status: "Completed",
      team: "4 Developers + 1 Designer",
      role: "Full-Stack Developer",
      responsibilities: [
        "Led frontend development in Vue.js",
        "Built video call functionality using WebRTC",
        "Developed whiteboard syncing logic with Firebase",
        "Created CI/CD pipelines and staging environments",
      ],
      achievements: [
        "Used by 15+ remote teams during early access phase",
        "Handled 100+ concurrent video sessions with no major lags",
      ],
    },

    // Dummy Project 05
    {
      id: "proj-005",
      title: "Fitness Tracker Mobile App",
      subtitle: "Track workouts, nutrition, and progress",
      description:
        "A cross-platform mobile app for tracking workouts, meals, and weight goals. Built with React Native and Firebase, it features CSV export, graph visualizations, and intelligent suggestions based on user trends.",
      technologies: ["React Native", "Firebase", "Chart.js", "Expo"],
      features: [
        "Workout and meal logging",
        "Progress charts and analytics",
        "Goal-setting and trend suggestions",
        "CSV export of logs",
        "Push notifications for reminders",
      ],
      images: {
        thumbnail: "images/fitness-thumb.jpg",
        full: "images/fitness-full.jpg",
        mobile: "images/fitness-mobile.jpg",
      },
      links: {
        live: "https://fitnessapp.com",
        github: "https://github.com/yourusername/fitness-tracker-app",
        caseStudy: "https://fitnessapp.com/case-study",
      },
      tags: ["mobile", "react-native", "firebase", "fitness", "health"],
      timeline: {
        start: "2025-02-01",
        end: "2025-03-15",
        duration: "6 weeks",
      },
      status: "Completed",
      team: "Solo",
      role: "Full-Stack Mobile Developer",
      responsibilities: [
        "Designed and developed mobile app interface with React Native",
        "Integrated Firebase for real-time user data storage and authentication",
        "Built charts and graphs with Chart.js for progress tracking",
        "Implemented push notifications for user reminders",
      ],
      achievements: [
        "5,000+ active users in Beta",
        "4.7 app rating in playtesters",
      ],
    },

    // Dummy Project 06
    {
      id: "proj-006",
      title: "Smart Home Dashboard",
      subtitle: "Unified control center for IoT devices",
      description:
        "A web application to monitor and control smart home devices, supporting MQTT and RESTful communication with various sensors and appliances, real-time updates, and graphical dashboards.",
      technologies: ["Angular", "Node.js", "MQTT", "D3.js", "Express"],
      features: [
        "Live sensor data visualization",
        "Device control panel",
        "Customizable widgets",
        "User authentication",
        "Mobile-friendly UI",
      ],
      images: {
        thumbnail: "images/smart-home-thumb.jpg",
        full: "images/smart-home-full.jpg",
        mobile: "images/smart-home-mobile.jpg",
      },
      links: {
        live: "https://smarthomedashboard.com",
        github: "https://github.com/yourusername/smart-home-dashboard",
        caseStudy: "https://smarthomedashboard.com/case-study",
      },
      tags: ["IoT", "angular", "mqtt", "smart-home", "dashboard"],
      timeline: {
        start: "2025-05-20",
        end: "2025-07-01",
        duration: "6 weeks",
      },
      status: "In Progress",
      team: "2",
      role: "Front-End Engineer",
      responsibilities: [
        "Developed user interface using Angular and D3.js for sensor data visualization",
        "Implemented device control panel for smart home devices",
        "Integrated real-time data syncing using MQTT",
        "Collaborated with back-end team for API and authentication",
      ],
      achievements: [
        "Real-time charts updating in <500ms",
        "Supports 20+ device types",
      ],
    },

    // Dummy Project 07
    {
      id: "proj-007",
      title: "Language Learning Chatbot",
      subtitle: "Practice conversational skills in multiple languages",
      description:
        "An AI-driven chatbot that helps users practice languages through conversation, correction, and interactive quizzes. Powered by OpenAI and a custom knowledge base, with voice input/output.",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Socket.io"],
      features: [
        "Live conversation with feedback",
        "Multi-language support",
        "Interactive quizzes on vocabulary and grammar",
        "Speech-to-text and text-to-speech",
        "User progress tracking",
      ],
      images: {
        thumbnail: "images/language-chatbot-thumb.jpg",
        full: "images/language-chatbot-full.jpg",
        mobile: "images/language-chatbot-mobile.jpg",
      },
      links: {
        live: "https://languagechatbot.com",
        github: "https://github.com/yourusername/language-chatbot",
        caseStudy: "https://languagechatbot.com/case-study",
      },
      tags: [
        "ai",
        "openai",
        "language-learning",
        "chatbot",
        "react",
        "typescript",
      ],
      timeline: {
        start: "2025-03-01",
        end: "2025-04-15",
        duration: "6 weeks",
      },
      status: "Completed",
      team: "3",
      role: "Full-Stack Developer",
      responsibilities: [
        "Integrated OpenAI GPT-3 for language conversation and feedback",
        "Built user dashboard to track progress and set goals",
        "Developed interactive quizzes for learning vocabulary and grammar",
        "Implemented speech-to-text and text-to-speech functionality",
      ],
      achievements: [
        "Reduced language error rate by 30% in lab tests",
        "200+ daily active users during pilot",
      ],
    },

    // Dummy Project 08
    {
      id: "proj-008",
      title: "Crowdsourced Survey Platform",
      subtitle: "Create and share surveys with instant analysis",
      description:
        "A modern survey platform that lets users build, share, and analyze surveys in real-time. Includes branching logic, real-time graphs, and export options.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
      features: [
        "Drag-and-drop survey builder",
        "Conditional logic and branching",
        "Live results and analytics",
        "CSV and PDF export",
        "User dashboards",
      ],
      images: {
        thumbnail: "images/survey-platform-thumb.jpg",
        full: "images/survey-platform-full.jpg",
        mobile: "images/survey-platform-mobile.jpg",
      },
      links: {
        live: "https://surveysplatform.com",
        github: "https://github.com/yourusername/crowdsourced-survey-platform",
        caseStudy: "https://surveysplatform.com/case-study",
      },
      tags: ["vue", "node", "mongodb", "survey", "real-time", "chart.js"],
      timeline: {
        start: "2025-01-10",
        end: "2025-02-28",
        duration: "7 weeks",
      },
      status: "Completed",
      team: "4",
      role: "Lead Developer",
      responsibilities: [
        "Led development of the survey builder and real-time analytics",
        "Implemented branching logic and conditional survey flow",
        "Integrated CSV and PDF export features",
        "Built user dashboard for survey results and analysis",
      ],
      achievements: [
        "2400+ completed surveys in launch week",
        "Exported 120+ survey reports",
      ],
    },

    // Dummy Project 09
    {
      id: "proj-009",
      title: "Crypto Portfolio Tracker",
      subtitle: "Track holdings across exchanges in real-time",
      description:
        "A web app that aggregates user cryptocurrency holdings across multiple exchanges via public APIs, displays portfolio value, and offers alerts and analytics.",
      technologies: ["React", "GraphQL", "Node.js", "Redis", "Tailwind CSS"],
      features: [
        "API integrations with major exchanges",
        "Real-time price updates and alerts",
        "Portfolio distribution charts",
        "Historical performance graphs",
      ],
      images: {
        thumbnail: "images/crypto-portfolio-thumb.jpg",
        full: "images/crypto-portfolio-full.jpg",
        mobile: "images/crypto-portfolio-mobile.jpg",
      },
      links: {
        live: "https://cryptotracker.com",
        github: "https://github.com/yourusername/crypto-portfolio-tracker",
        caseStudy: "https://cryptotracker.com/case-study",
      },
      tags: [
        "cryptocurrency",
        "react",
        "graphql",
        "node",
        "tailwind",
        "finance",
      ],
      timeline: {
        start: "2025-06-15",
        end: "2025-08-10",
        duration: "8 weeks",
      },
      status: "In Progress",
      team: "2",
      role: "Full-Stack Developer",
      responsibilities: [
        "Developed front-end components for displaying portfolio and performance charts",
        "Integrated GraphQL API to aggregate data from multiple exchanges",
        "Built real-time alert system for price changes",
        "Optimized for performance with Redis caching",
      ],
      achievements: [
        "Real-time updates within <2 seconds",
        "Supports 50+ cryptocurrencies",
      ],
    },

    // Dummy Project 10
    {
      id: "proj-010",
      title: "E-commerce Recommendation Engine",
      subtitle: "Personalized product suggestions for e-commerce stores",
      description:
        "A machine learning-based recommendation engine that provides personalized product recommendations to users based on their browsing behavior and purchase history.",
      technologies: ["Python", "TensorFlow", "Flask", "MongoDB", "Bootstrap"],
      features: [
        "Personalized product recommendations",
        "Collaborative filtering algorithm",
        "Real-time product suggestions",
        "User behavior tracking",
        "Admin dashboard for insights and analytics",
      ],
      images: {
        thumbnail: "images/ecommerce-recommendation-thumb.jpg",
        full: "images/ecommerce-recommendation-full.jpg",
        mobile: "images/ecommerce-recommendation-mobile.jpg",
      },
      links: {
        live: "https://ecommerce-recommendation.com",
        github:
          "https://github.com/yourusername/ecommerce-recommendation-engine",
        caseStudy: "https://ecommerce-recommendation.com/case-study",
      },
      tags: [
        "machine-learning",
        "python",
        "tensorflow",
        "e-commerce",
        "recommendations",
      ],
      timeline: {
        start: "2025-04-01",
        end: "2025-06-10",
        duration: "9 weeks",
      },
      status: "Completed",
      team: "3",
      role: "Data Scientist & Full-Stack Developer",
      responsibilities: [
        "Developed and trained recommendation algorithms using TensorFlow",
        "Integrated recommendation system into the e-commerce platform using Flask",
        "Created an admin dashboard to monitor performance and product suggestions",
        "Implemented real-time tracking of user behavior and purchase data",
      ],
      achievements: [
        "Increased average sales per user by 20%",
        "Reduced bounce rate by 15% through personalized suggestions",
      ],
    },

    // Dummy Project 11
    {
      id: "proj-011",
      title: "Blockchain Voting System",
      subtitle: "A secure, transparent online voting platform",
      description:
        "A decentralized online voting system using blockchain technology to ensure transparency and security. Voters can cast votes securely, with all data stored immutably on the blockchain.",
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "Web3.js"],
      features: [
        "Secure voting with blockchain",
        "Transparent and verifiable election results",
        "Real-time vote counting",
        "User authentication using digital wallets",
        "Admin panel for election management",
      ],
      images: {
        thumbnail: "images/blockchain-voting-thumb.jpg",
        full: "images/blockchain-voting-full.jpg",
        mobile: "images/blockchain-voting-mobile.jpg",
      },
      links: {
        live: "https://blockchainvoting.com",
        github: "https://github.com/yourusername/blockchain-voting-system",
        caseStudy: "https://blockchainvoting.com/case-study",
      },
      tags: ["blockchain", "ethereum", "solidity", "voting", "web3"],
      timeline: {
        start: "2025-07-01",
        end: "2025-09-15",
        duration: "10 weeks",
      },
      status: "Completed",
      team: "4",
      role: "Blockchain Developer & Front-End Engineer",
      responsibilities: [
        "Developed and deployed smart contracts on Ethereum blockchain",
        "Built secure user authentication using MetaMask",
        "Created the front-end interface using React and Web3.js",
        "Implemented real-time vote counting and election management",
      ],
      achievements: [
        "Successfully deployed 5 test elections with real-time voting",
        "Ensured 100% transparency with blockchain data",
      ],
    },

    // Dummy Project 12
    {
      id: "proj-012",
      title: "AI-Powered Image Captioning",
      subtitle: "Automatic image caption generation using deep learning",
      description:
        "An AI-based image captioning tool that generates descriptive captions for images using a combination of computer vision and natural language processing (NLP) models.",
      technologies: ["Python", "TensorFlow", "Keras", "Flask", "OpenCV"],
      features: [
        "Automatic image caption generation",
        "Supports multiple image formats",
        "Real-time captioning using deep learning models",
        "User interface to upload and receive captions",
        "Customizable caption templates",
      ],
      images: {
        thumbnail: "images/image-captioning-thumb.jpg",
        full: "images/image-captioning-full.jpg",
        mobile: "images/image-captioning-mobile.jpg",
      },
      links: {
        live: "https://imagecaptioning.com",
        github: "https://github.com/yourusername/ai-image-captioning",
        caseStudy: "https://imagecaptioning.com/case-study",
      },
      tags: [
        "ai",
        "computer-vision",
        "tensorflow",
        "nlp",
        "python",
        "image-captioning",
      ],
      timeline: {
        start: "2025-05-15",
        end: "2025-06-25",
        duration: "6 weeks",
      },
      status: "Completed",
      team: "2",
      role: "AI Engineer & Full-Stack Developer",
      responsibilities: [
        "Developed and trained deep learning models for image captioning",
        "Integrated the model into a Flask web application for real-time use",
        "Optimized model performance using transfer learning techniques",
        "Built a user-friendly interface for image upload and caption display",
      ],
      achievements: [
        "Achieved 90% accuracy in caption generation",
        "Integrated with 3rd-party image services like Unsplash",
      ],
    },

    // Dummy Project 13
    {
      id: "proj-013",
      title: "Real-Time Weather Dashboard",
      subtitle: "Live weather updates and forecasts",
      description:
        "A real-time weather dashboard that fetches live weather data using APIs and displays current conditions, forecasts, and visualizations like temperature maps and storm tracking.",
      technologies: [
        "React",
        "Node.js",
        "Weather API",
        "Chart.js",
        "Tailwind CSS",
      ],
      features: [
        "Current weather display",
        "Forecasts for the next 7 days",
        "Real-time storm and radar tracking",
        "Interactive weather maps",
        "Geolocation-based weather updates",
      ],
      images: {
        thumbnail: "images/weather-dashboard-thumb.jpg",
        full: "images/weather-dashboard-full.jpg",
        mobile: "images/weather-dashboard-mobile.jpg",
      },
      links: {
        live: "https://weatherdashboard.com",
        github: "https://github.com/yourusername/weather-dashboard",
        caseStudy: "https://weatherdashboard.com/case-study",
      },
      tags: ["weather", "react", "node", "charts", "real-time"],
      timeline: {
        start: "2025-06-05",
        end: "2025-07-15",
        duration: "6 weeks",
      },
      status: "Completed",
      team: "2",
      role: "Full-Stack Developer",
      responsibilities: [
        "Built the front-end interface using React and Tailwind CSS",
        "Integrated weather data APIs to fetch live weather updates",
        "Developed interactive temperature and radar maps with Chart.js",
        "Implemented geolocation feature for weather data based on user location",
      ],
      achievements: [
        "Real-time weather data refresh every 30 seconds",
        "Integrated with 4 weather APIs for redundancy",
      ],
    },
  ],
};

export const educationData = {
  education: [
    {
      id: "edu-001",
      title: "Bachelor of Computer Application (BCA)",
      institution: "Glocal University",
      location: "Saharanpur, Uttar Pradesh, India",
      field: "Computer Science and Information Technology",
      type: "Undergraduate Degree",
      status: "Ongoing",
      grade: null,
      timeline: {
        start: "01-07-2022",
        end: "31-05-2025",
        duration: "3 years",
      },
      description:
        "The BCA program covers fundamental and advanced concepts of computer science, software development, web technologies, and database management. Students engage in both theoretical coursework and practical projects.",
      courses: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Web Development",
        "Computer Networks",
        "Object-Oriented Programming (Java, C++)",
        "Python Programming",
        "Software Engineering",
      ],
      projects: [
        {
          title: "Online Library Management System",
          description:
            "Developed a full-stack web application to manage book inventory, student records, and borrowing history using HTML, CSS, JavaScript, and PHP.",
          technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
          year: 2024,
        },
      ],
      achievements: [
        "Secured 1st position in the intra-college coding competition (2023)",
        "Developed a college attendance management system for internal use",
      ],
      skillsLearned: [
        "Problem-solving",
        "Team collaboration",
        "Version control (Git)",
        "Agile methodology",
        "Full-stack development",
      ],
    },
    {
      id: "edu-002",
      title: "10+2 (Intermediate)",
      institution: "B.L.D. Inter College",
      location: "Muzaffarnagar, Uttar Pradesh, India",
      field: "Physics, Chemistry, Mathematics (PCM)",
      type: "Intermediate (Senior Secondary Certificate)",
      status: "Completed",
      grade: "Passed with First Division (72%)",
      timeline: {
        start: "01-07-2018",
        end: "31-05-2020",
        duration: "2 years",
      },
      description:
        "Completed senior secondary education with a focus on core science subjects. The curriculum emphasized mathematical reasoning, problem-solving in physics, and foundational concepts in chemistry.",
      courses: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "English",
        "Computer Science",
      ],
      projects: [],
      achievements: [
        "Top 10% in board exams at district level",
        "Participated in State-Level Science Quiz",
      ],
      skillsLearned: [
        "Time management",
        "Analytical thinking",
        "Scientific reasoning",
      ],
    },
    {
      id: "edu-003",
      title: "10th (High School)",
      institution: "A.S.S.K.K. Inter College",
      location: "Muzaffarnagar, Uttar Pradesh, India",
      field: "General Education",
      type: "Secondary School Certificate (SSC)",
      status: "Completed",
      grade: "Passed with Distinction (80%)",
      timeline: {
        start: "01-07-2016",
        end: "31-05-2018",
        duration: "2 years",
      },
      description:
        "Completed foundational secondary education including all mandatory subjects, focusing on logical thinking, general science, and language proficiency.",
      courses: [
        "Mathematics",
        "Science (Physics, Chemistry, Biology)",
        "English",
        "Hindi",
        "Social Studies (History, Civics, Geography)",
      ],
      projects: [
        {
          title: "Solar System Model",
          description:
            "Created a working model of the solar system using recycled materials for the school science exhibition.",
          year: 2017,
        },
      ],
      achievements: [
        "Class topper in Mathematics and Science",
        "Winner of district-level essay competition",
      ],
      skillsLearned: [
        "Basic computer literacy",
        "Communication skills",
        "Presentation skills",
      ],
    },
  ],
};

export const hobbyData = {
  hobbies: [
    {
      id: "hobby-001",
      name: "Coding",
      category: "Technical",
      description:
        "I love building web applications, automating tasks, and exploring new frameworks and languages. Coding not only helps me solve real-world problems but also keeps my logical thinking sharp.",
      relatedSkills: [
        "Problem Solving",
        "Programming",
        "Debugging",
        "Creativity",
      ],
      frequency: "Daily",
      since: "2019",
      media: {
        icon: "💻",
        imageUrl: null, // Add a URL if you want to display a relevant image
      },
    },
    {
      id: "hobby-002",
      name: "Reading",
      category: "Mental",
      description:
        "I regularly read books, blogs, and articles on technology, psychology, and science fiction. Reading helps me relax while expanding my vocabulary and understanding of the world.",
      relatedSkills: ["Focus", "Critical Thinking", "Language Comprehension"],
      frequency: "4–5 times a week",
      since: "2015",
      media: {
        icon: "📚",
        imageUrl: null,
      },
    },
    {
      id: "hobby-003",
      name: "Gaming",
      category: "Entertainment",
      description:
        "I enjoy playing both story-driven and strategic games. It’s a great way to unwind and improve decision-making, pattern recognition, and reaction time.",
      relatedSkills: ["Strategy", "Quick Thinking", "Hand-Eye Coordination"],
      frequency: "2–3 times a week",
      since: "2012",
      media: {
        icon: "🎮",
        imageUrl: null,
      },
    },
    {
      id: "hobby-004",
      name: "Music",
      category: "Creative",
      description:
        "I listen to a wide range of music, especially instrumental, electronic, and lo-fi tracks. Music helps me focus while working and keeps my energy levels balanced.",
      relatedSkills: ["Focus", "Mood Regulation", "Cultural Awareness"],
      frequency: "Daily",
      since: "2010",
      media: {
        icon: "🎧",
        imageUrl: null,
      },
    },
    {
      id: "hobby-005",
      name: "Traveling",
      category: "Exploratory",
      description:
        "I love discovering new places, cultures, and cuisines. Traveling broadens my perspective, builds confidence, and gives me real-world stories to learn from.",
      relatedSkills: ["Adaptability", "Planning", "Communication", "Curiosity"],
      frequency: "Occasionally (few trips per year)",
      since: "2016",
      media: {
        icon: "🌍",
        imageUrl: null,
      },
    },
  ],
};

export const internshipData = {
  internships: [
    {
      id: "intern-001",
      title: "Frontend Developer Intern",
      company: "TechNova Solutions",
      location: "Bangalore, India",
      type: "Remote",
      status: "Completed",
      timeline: {
        start: "01-06-2024",
        end: "31-08-2024",
        duration: "3 months",
      },
      description:
        "Worked as a frontend developer intern to build responsive web interfaces and improve UI/UX of existing projects using modern frameworks.",
      responsibilities: [
        "Developed reusable React components with styled-components and Tailwind CSS.",
        "Collaborated with backend team to integrate REST APIs.",
        "Participated in daily standups and sprint planning in an Agile environment.",
        "Performed cross-browser testing and fixed UI inconsistencies.",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Git",
        "REST APIs",
      ],
      achievements: [
        "Optimized page load speed by 30% by implementing lazy loading.",
        "Received appreciation from the team lead for delivering UI revamp ahead of schedule.",
      ],
    },
    {
      id: "intern-002",
      title: "Software Engineering Intern",
      company: "CodeSpark Pvt. Ltd.",
      location: "Delhi, India",
      type: "Onsite",
      status: "Completed",
      timeline: {
        start: "01-01-2024",
        end: "31-03-2024",
        duration: "3 months",
      },
      description:
        "Assisted in backend development and testing for a SaaS product. Worked on debugging and writing automation scripts.",
      responsibilities: [
        "Contributed to backend services built with Node.js and Express.",
        "Wrote unit tests using Jest and conducted code reviews.",
        "Created documentation for APIs and internal tools.",
        "Collaborated with DevOps team for CI/CD automation tasks.",
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Jest", "GitLab CI/CD"],
      achievements: [
        "Reduced build deployment errors by 40% through automation scripts.",
        "Completed internal bug-fix sprint with 100% issue resolution.",
      ],
    },
  ],
};

export const certificationData = {
  certifications: [
    {
      id: "cert-001",
      title: "Frontend Development with React",
      issuer: "Coursera (offered by Meta)",
      issuedDate: "15-07-2024",
      validTill: null,
      credentialId: "META-FD-2024-XYZ123",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/certificate/XYZ123",
      description:
        "This course covered core React concepts including component-based architecture, state management, hooks, and deployment best practices.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Git"],
      status: "Completed",
    },
    {
      id: "cert-002",
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      issuedDate: "01-04-2024",
      validTill: null,
      credentialId: "FCC-JS-2024-ABC456",
      credentialUrl:
        "https://www.freecodecamp.org/certification/username/javascript-algorithms-and-data-structures",
      description:
        "Covered essential JavaScript programming techniques, including recursion, array manipulation, object-oriented programming, and algorithmic problem solving.",
      technologies: ["JavaScript", "ES6", "Data Structures", "Algorithms"],
      status: "Completed",
    },
    {
      id: "cert-003",
      title: "MongoDB for Developers",
      issuer: "MongoDB University",
      issuedDate: "10-06-2024",
      validTill: "10-06-2026",
      credentialId: "MDB-DEV-7891011",
      credentialUrl:
        "https://university.mongodb.com/certificates/MDB-DEV-7891011",
      description:
        "Focused on CRUD operations, data modeling, aggregation framework, indexing, and performance optimization with MongoDB.",
      technologies: ["MongoDB", "Mongoose", "NoSQL"],
      status: "Completed",
    },
  ],
};

export const skillData = {
  skills: [
    {
      id: "skill-001",
      name: "JavaScript",
      category: "Programming Language",
      level: "Advanced",
      experienceYears: 4,
      description:
        "I have extensive experience developing dynamic web applications using JavaScript, including ES6 features like async/await, destructuring, and promises. I've built several personal projects and contributed to open-source projects on GitHub.",
      useCases: [
        "Built a task management web app with JavaScript and Node.js.",
        "Created a personal portfolio website that integrates real-time data using JavaScript.",
      ],
      technologies: [
        "ES6",
        "Node.js",
        "Express",
        "React",
        "Vue.js",
        "Webpack",
        "Jest",
      ],
      tools: ["Visual Studio Code", "Git", "GitHub", "npm", "Babel"],
      relatedProjects: [
        {
          name: "Task Manager App",
          description:
            "A full-stack task manager application with user authentication and real-time updates.",
          link: "https://github.com/username/task-manager",
        },
        {
          name: "Portfolio Website",
          description:
            "A personal portfolio website to showcase my projects and skills, built using pure JavaScript, HTML, and CSS.",
          link: "https://github.com/username/portfolio",
        },
      ],
      learningResources: [
        "JavaScript: The Good Parts by Douglas Crockford",
        "You Don't Know JS by Kyle Simpson",
        "MDN Web Docs",
      ],
      achievements: [
        "Developed and deployed 3 production-ready web apps using React and Node.js.",
        "Contributed to the development of open-source libraries like [Library Name] on GitHub.",
      ],
      status: "Active",
    },
    {
      id: "skill-002",
      name: "React",
      category: "Frontend Framework",
      level: "Advanced",
      experienceYears: 3,
      description:
        "I specialize in building dynamic, responsive UIs using React.js. I am experienced in state management with Redux, React Context API, and utilizing React hooks for reusable, efficient components. I focus on high performance and accessibility in all my React apps.",
      useCases: [
        "Built a real-time messaging app using React and Firebase.",
        "Developed an e-commerce website with features like product search, user authentication, and shopping cart using React and Redux.",
      ],
      technologies: [
        "React.js",
        "Redux",
        "React Router",
        "Styled Components",
        "Apollo GraphQL",
        "Jest",
        "Webpack",
      ],
      tools: [
        "VS Code",
        "React DevTools",
        "Redux DevTools",
        "npm",
        "Git",
        "GitHub",
      ],
      relatedProjects: [
        {
          name: "Real-Time Messaging App",
          description:
            "A messaging platform built using React, Firebase, and Material UI, enabling users to chat in real-time.",
          link: "https://github.com/username/messaging-app",
        },
        {
          name: "E-commerce Store",
          description:
            "A React-based e-commerce platform with user authentication, product pages, and a shopping cart built using Redux.",
          link: "https://github.com/username/e-commerce-store",
        },
      ],
      learningResources: [
        "React Documentation",
        "Fullstackopen (University of Helsinki)",
        "React - The Complete Guide (incl Hooks, React Router, Redux) on Udemy",
      ],
      achievements: [
        "Built a reusable component library to streamline development across multiple projects.",
        "Optimized React application performance, reducing bundle size by 40% and improving load time.",
      ],
      status: "Active",
    },
    {
      id: "skill-003",
      name: "MongoDB",
      category: "Database",
      level: "Intermediate",
      experienceYears: 2,
      description:
        "I am proficient in MongoDB for developing NoSQL databases, performing CRUD operations, designing schemas, and utilizing the aggregation pipeline for complex queries. I also work with Mongoose to simplify database interactions in Node.js applications.",
      useCases: [
        "Developed a backend for an e-commerce platform using MongoDB for product and user data management.",
        "Used MongoDB to store and manage large sets of user-generated content in a social media app.",
      ],
      technologies: [
        "MongoDB",
        "Mongoose",
        "Aggregation Framework",
        "NoSQL",
        "Atlas",
      ],
      tools: ["MongoDB Compass", "MongoDB Atlas", "Robo 3T"],
      relatedProjects: [
        {
          name: "E-commerce Backend",
          description:
            "A backend API built with Express and MongoDB to manage products, orders, and users for an online store.",
          link: "https://github.com/username/e-commerce-backend",
        },
      ],
      learningResources: [
        "MongoDB University (M001, M102)",
        "The Definitive Guide to MongoDB",
      ],
      achievements: [
        "Optimized MongoDB queries using indexing and aggregation for improved performance.",
        "Designed a scalable schema for a real-time messaging platform using MongoDB.",
      ],
      status: "Active",
    },
    {
      id: "skill-004",
      name: "Python",
      category: "Programming Language",
      level: "Intermediate",
      experienceYears: 2,
      description:
        "I have experience using Python for a variety of applications, including web development with Flask and Django, as well as data analysis using Pandas and NumPy. I use Python to automate tasks and build small utilities for personal projects.",
      useCases: [
        "Built a web application using Flask to manage personal finances and track expenses.",
        "Created Python scripts to automate repetitive tasks and data collection from APIs.",
      ],
      technologies: ["Flask", "Pandas", "NumPy", "Django", "Jupyter"],
      tools: ["VS Code", "PyCharm", "Jupyter Notebook", "Postman"],
      relatedProjects: [
        {
          name: "Finance Tracker",
          description:
            "A Flask-based web application for tracking personal expenses and generating financial reports.",
          link: "https://github.com/username/finance-tracker",
        },
      ],
      learningResources: [
        "Python Crash Course by Eric Matthes",
        "Real Python Tutorials",
        "Flask Documentation",
      ],
      achievements: [
        "Automated data collection from multiple APIs, saving 10+ hours of manual work each month.",
        "Built a custom data analysis tool using Pandas that helped analyze large datasets efficiently.",
      ],
      status: "Refining",
    },
    {
      id: "skill-005",
      name: "Git & GitHub",
      category: "Version Control",
      level: "Advanced",
      experienceYears: 3,
      description:
        "I am proficient with Git for version control and GitHub for managing repositories and collaboration. I have experience with branching, merging, and handling pull requests in a team environment.",
      useCases: [
        "Managed multiple branches for feature development and bug fixing in a collaborative environment.",
        "Used GitHub to collaborate on open-source projects and manage version history for personal projects.",
      ],
      technologies: ["Git", "GitHub", "GitLab", "Bitbucket"],
      tools: ["Git CLI", "GitHub Desktop", "SourceTree"],
      relatedProjects: [
        {
          name: "Project Collaboration",
          description:
            "Contributed to an open-source project on GitHub, improving its documentation and adding new features.",
          link: "https://github.com/username/open-source-project",
        },
      ],
      learningResources: [
        "Pro Git by Scott Chacon and Ben Straub",
        "GitHub Learning Lab",
      ],
      achievements: [
        "Contributed to 5+ open-source projects on GitHub.",
        "Set up continuous integration and automated deployments using GitHub Actions.",
      ],
      status: "Active",
    },
    {
      id: "skill-006",
      name: "Communication",
      category: "Soft Skills",
      level: "Advanced",
      experienceYears: 5,
      description:
        "I possess strong verbal and written communication skills, honed through regular team collaboration, client interactions, and public speaking engagements at tech meetups and conferences.",
      useCases: [
        "Presented technical topics at several local meetups and webinars.",
        "Collaborated with cross-functional teams to deliver project features and communicate technical requirements.",
      ],
      tools: ["Slack", "Zoom", "Google Meet", "Microsoft Teams"],
      achievements: [
        "Delivered a talk at a local developer meetup on 'Best Practices in React Development'.",
        "Successfully facilitated team meetings, ensuring smooth communication between remote team members.",
      ],
      status: "Active",
    },
    {
      id: "skill-007",
      name: "Problem Solving",
      category: "Soft Skills",
      level: "Advanced",
      experienceYears: 5,
      description:
        "I excel at breaking down complex problems into manageable tasks and finding efficient solutions. I apply this skill to both coding challenges and real-world problems across different domains.",
      useCases: [
        "Resolved performance issues in a React application by refactoring inefficient code.",
        "Optimized a MongoDB database query to handle large datasets more efficiently.",
      ],
      technologies: ["Algorithm Design", "Data Structures", "Debugging"],
      achievements: [
        "Solved over 200 coding challenges on platforms like LeetCode and Codewars.",
        "Designed an efficient sorting algorithm that improved performance by 30%.",
      ],
      status: "Active",
    },
    {
      id: "skill-008",
      name: "HTML",
      category: "Markup Language",
      level: "Advanced",
      experienceYears: 5,
      description:
        "I am proficient in HTML5 for creating well-structured and semantic web pages. I follow accessibility best practices to ensure websites are usable by all.",
      useCases: [
        "Built fully responsive websites using HTML5, ensuring compatibility with all modern browsers.",
        "Implemented SEO best practices to improve the search engine ranking of websites.",
      ],
      technologies: ["HTML5", "Semantic HTML", "Accessibility", "SEO"],
      status: "Active",
    },
    {
      id: "skill-009",
      name: "CSS",
      category: "Styling Language",
      level: "Advanced",
      experienceYears: 5,
      description:
        "Expert in styling web pages using CSS3, including Flexbox, Grid, and CSS animations. I ensure that websites are responsive and mobile-friendly.",
      useCases: [
        "Created custom CSS frameworks for projects to improve development speed and consistency.",
        "Designed mobile-first layouts using CSS Grid and Flexbox.",
      ],
      technologies: [
        "CSS3",
        "Flexbox",
        "Grid",
        "SASS",
        "Responsive Design",
        "Animations",
      ],
      status: "Active",
    },
    {
      id: "skill-010",
      name: "C++",
      category: "Programming Language",
      level: "Intermediate",
      experienceYears: 3,
      description:
        "I am proficient in C++ programming for object-oriented development, algorithmic problem-solving, and system-level programming.",
      useCases: [
        "Participated in competitive programming contests using C++ to solve algorithmic challenges.",
        "Developed small utilities and command-line applications for personal use.",
      ],
      technologies: [
        "C++",
        "Object-Oriented Programming",
        "Algorithms",
        "Data Structures",
      ],
      status: "Active",
    },
  ],
};

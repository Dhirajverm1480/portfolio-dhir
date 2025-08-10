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
                "Framer Motion",
                "Styled-Components",
                "Vite",
                "Netlify",
            ],
            features: [
                "Dark/Light mode toggle with persistent preference",
                "Animated page and component transitions using Framer Motion",
                "Mobile-first responsive design",
                "SEO optimization including meta tags and Open Graph data",
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
                live: "https://yourportfolio.com",
                github: "https://github.com/yourusername/portfolio",
                caseStudy: "https://yourportfolio.com/case-study/portfolio",
            },
            tags: [
                "frontend",
                "react",
                "vite",
                "seo",
                "responsive",
                "personal-project",
                "styled-components",
            ],
            timeline: {
                start: "2025-04-10",
                end: "2025-05-02",
                duration: "3 weeks",
            },
            status: "Completed",
            team: "Solo Project",
            role: "UI/UX Designer & Front-End Developer",
            responsibilities: [
                "Designed and implemented UI/UX based on wireframes",
                "Built modular React components with Styled-Components",
                "Implemented theme switching and page animations",
                "Managed project data via structured JSON",
                "Optimized for performance, SEO, and accessibility",
                "Set up CI/CD and deployment on Netlify",
            ],
            achievements: [
                "100/100 Lighthouse score in performance, accessibility, and SEO",
                "Featured on dev.to’s 'Top Developer Portfolios of 2025'",
                "Praised during technical interviews for UI and UX design quality",
            ],
        },
        {
            id: "proj-002",
            title: "E-Commerce Storefront",
            subtitle: "Headless CMS-powered shopping platform",
            description:
                "A full-featured e-commerce platform using Next.js and Sanity.io as a headless CMS. It supports real-time product management, secure Stripe payments, responsive design, and user-friendly checkout flow. The admin panel allows non-developers to update product content, while the frontend is optimized for performance and deployed via Vercel’s edge network.",
            technologies: ["Next.js", "Sanity.io", "Stripe", "Tailwind CSS", "Vercel"],
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
                "stripe",
                "tailwind",
                "sanity",
            ],
            timeline: {
                start: "2025-01-15",
                end: "2025-03-01",
                duration: "6 weeks",
            },
            status: "Completed",
            team: "2 Developers",
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
            tags: ["ai", "openai", "content-creation", "productivity", "react", "nodejs"],
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
            timeline: { start: "2025-02-01", end: "2025-03-15", duration: "6 weeks" },
            status: "Completed",
            team: "Solo",
            role: "Full-Stack Mobile Developer",
            achievements: ["5,000+ active users in Beta", "4.7 app rating in playtesters"],
        },

        // Dummy Project 6
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
            timeline: { start: "2025-05-20", end: "2025-07-01", duration: "6 weeks" },
            status: "In Progress",
            team: "2",
            role: "Front-End Engineer",
            achievements: ["Real-time charts updating in <500ms", "Supports 20+ device types"],
        },

        // Dummy Project 7
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
            timeline: { start: "2025-03-01", end: "2025-04-15", duration: "6 weeks" },
            status: "Completed",
            team: "3",
            role: "Full-Stack Developer",
            achievements: ["Reduced language error rate by 30% in lab tests", "200+ daily active users during pilot"],
        },

        // Dummy Project 8
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
            timeline: { start: "2025-01-10", end: "2025-02-28", duration: "7 weeks" },
            status: "Completed",
            team: "4",
            role: "Lead Developer",
            achievements: ["2400+ completed surveys in launch week", "Exported 120+ survey reports"],
        },

        // Dummy Project 9
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
            timeline: { start: "2025-06-15", end: "2025-08-10", duration: "8 weeks" },
            status: "In Progress",
            team: "2",
            role: "Full-Stack Developer",
            achievements: ["Real-time updates within <2 seconds", "Supports 50+ cryptocurrencies"],
        },

        // Dummy Project 10
        {
            id: "proj-010",
            title: "SaaS Analytics Dashboard",
            subtitle: "Insights for startups and SMBs",
            description:
                "A multi-tenant dashboard platform that connects to Google Analytics, Stripe, and internal APIs to surface product performance, revenue trends, and user behavior.",
            technologies: ["Next.js", "PostgreSQL", "Prisma", "Chart.js"],
            features: [
                "Dashboard with revenue and user analytics",
                "API connectors for Google Analytics and Stripe",
                "Custom date range filters",
                "Role-based access control",
            ],
            timeline: { start: "2025-04-01", end: "2025-05-15", duration: "6 weeks" },
            status: "Completed",
            team: "3",
            role: "Back-End Engineer",
            achievements: ["Revenue analytics load in <1s", "Used by 5 startups in beta"],
        },

        // Dummy Project 11
        {
            id: "proj-011",
            title: "Virtual Reality Tour App",
            subtitle: "Immersive real-estate property viewing",
            description:
                "A VR web-based application enabling virtual property tours with 360° views, hotspots, and voiceover narration. Built with Three.js, WebXR, and hosted on AWS.",
            technologies: ["Three.js", "WebXR", "AWS S3", "A-Frame"],
            features: [
                "360° image rendering",
                "Hotspot navigation",
                "Audio narration guides",
                "Responsive VR and non-VR mode",
            ],
            timeline: { start: "2025-02-05", end: "2025-03-22", duration: "7 weeks" },
            status: "Completed",
            team: "2",
            role: "Frontend Developer",
            achievements: ["Demonstrated at 3 virtual open-house events", "0 latency in VR navigation"],
        },

        // Dummy Project 12
        {
            id: "proj-012",
            title: "Blockchain Voting Platform",
            subtitle: "Secure and transparent voting system",
            description:
                "A decentralized voting solution using blockchain (Ethereum) to allow secure, auditable polls. With proof-of-vote, smart contract–based ballot issuance, and real-time result publication.",
            technologies: ["Solidity", "React", "Web3.js", "Ganache", "Metamask"],
            features: [
                "Blockchain-based election recording",
                "Voter authentication via wallet",
                "Real-time vote tallying",
                "Audit logs and immutable results",
            ],
            timeline: { start: "2025-05-10", end: "2025-07-05", duration: "8 weeks" },
            status: "In Progress",
            team: "3",
            role: "Blockchain Engineer",
            achievements: ["Simulated 10,000 votes with 100% integrity", "Verified audit logs in deployment"],
        },

        // Dummy Project 13
        {
            id: "proj-013",
            title: "Personal Finance Manager",
            subtitle: "Organize budgets, expenses, and savings",
            description:
                "A web app to manage personal financial health—budget tracking, expense categories, goal planning, and visual summaries. Incorporates Plaid API for bank account sync.",
            technologies: ["React", "Node.js", "Plaid API", "Chart.js", "Auth0"],
            features: [
                "Expense and income tracking",
                "Budget goal monitoring",
                "Bank account syncing via Plaid",
                "Charts for spending insights",
                "Authentication with Auth0",
            ],
            timeline: { start: "2025-06-01", end: "2025-07-20", duration: "8 weeks" },
            status: "In Progress",
            team: "1",
            role: "Full-Stack Developer",
            achievements: ["Auto-imported 1,000+ transactions", "Identified 20% overspend categories in beta"],
        },
    ],
};
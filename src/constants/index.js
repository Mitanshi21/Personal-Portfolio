export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const services = [
    {
        title: "Full Stack Developer",
        icon: "k", // placeholder
    },
    {
        title: "Mobile App Developer",
        icon: "mobile",
    },
    {
        title: "Backend Engineer",
        icon: "backend",
    },
    {
        title: "Database Architect",
        icon: "database",
    },
];

export const methods = [
    {
        name: "HTML 5",
        icon: "html",
    },
    {
        name: "CSS 3",
        icon: "css",
    },
    {
        name: "JavaScript",
        icon: "javascript",
    },
    {
        name: "React JS",
        icon: "react",
    },
    {
        name: "React Native",
        icon: "reactnative",
    },
    {
        name: "Tailwind CSS",
        icon: "tailwind",
    },
    {
        name: "Bootstrap",
        icon: "bootstrap",
    },
    {
        name: "C#",
        icon: "csharp",
    },
    {
        name: "Java",
        icon: "java",
    },
    {
        name: "Python",
        icon: "python",
    },
    {
        name: "Node JS",
        icon: "nodejs",
    },
    {
        name: "Laravel",
        icon: "laravel",
    },
    {
        name: "MySQL",
        icon: "mysql",
    },
    {
        name: "MongoDB",
        icon: "mongodb",
    },
    {
        name: "WordPress",
        icon: "wordpress",
    },
    {
        name: "Shopify",
        icon: "shopify",
    },
    {
        name: "Git",
        icon: "git",
    },
    {
        name: "Postman",
        icon: "postman",
    },
];

export const experiences = [
    {
        title: "Development Intern",
        company_name: "TrueData™ Financial Information Pvt Ltd",
        icon: "starbucks", // Placeholder, not used in UI
        iconBg: "#383E56",
        date: "Dec 2025 – Present",
        points: [
            "Role Focus: Full-Stack Development",
            "Tech Stack: React.js, Node.js, C#, Microsoft SQL Server",
            "Domain: Financial / Data-driven applications",
            "Location: Surat, Gujarat, India (On-site)",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Prewell Digitech",
        icon: "tesla",
        iconBg: "#E6DEDD",
        date: "Mar 2025 – Oct 2025",
        points: [
            "Role Focus: Web & E-commerce Development",
            "Tech Stack: React.js, Shopify, WordPress",
            "Work Type: Client-based freelance projects",
            "Location: Surat, Gujarat, India (Hybrid)",
        ],
    },
    {
        title: "PHP Web Developer",
        company_name: "SynergyFirst Digital",
        icon: "shopify",
        iconBg: "#383E56",
        date: "May 2024 – Jul 2024",
        points: [
            "Role Focus: Backend Web Development",
            "Tech Stack: Laravel, CodeIgniter",
            "Experience Type: Internship",
            "Location: Remote",
        ],
    },
];

import promoteWithUsImg from "../assets/promote-with-us_img.png";
import wanderWorkImg from "../assets/wander_work_img.png";
import tradingImg from "../assets/trading_img.png";
import facultyImg from "../assets/faculty.png";
import mutualFundImg from "../assets/mutualFund.png";
import thrillWandererImg from "../assets/thrill_wanderer.png";

export const projects = [
    {
        name: "Promote With Us",
        description:
            "A digital marketing and business promotion platform designed to help brands showcase services, manage content, and generate leads. Focused on performance, responsiveness, and scalability.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "php",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: promoteWithUsImg,
        source_code_link: "#", // Private
        isPrivate: true,
    },
    {
        name: "WanderWork",
        description:
            "A React Native mobile app to explore travel and work-friendly destinations. Features authentication, dynamic data handling, and smooth mobile-first UX with scalable backend connectivity.",
        tags: [
            {
                name: "react native",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: wanderWorkImg,
        source_code_link: "#",
        isPrivate: true,
    },
    {
        name: "Trading Dashboard",
        description:
            "Real-time market monitoring system displaying live data, interactive charts, and watchlists. Optimized for high-frequency updates using WebSockets and Vite.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "websockets",
                color: "green-text-gradient",
            },
            {
                name: "vite",
                color: "pink-text-gradient",
            },
        ],
        image: tradingImg,
        source_code_link: "#",
        isPrivate: true,
    },
    {
        name: "Faculty Management",
        description:
            "Complete faculty management system with CRUD operations, subject mapping, and role-based access. Built with scalability and clean database relationships.",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "php",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: facultyImg,
        source_code_link: "#",
        isPrivate: true,
    },
    {
        name: "Mutual Fund Portfolio",
        description:
            "Data-driven system processing mutual fund portfolios via Excel. Features secure file handling, structured SQL storage, and API-based access for dashboards.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "c#",
                color: "green-text-gradient",
            },
            {
                name: "sql server",
                color: "pink-text-gradient",
            },
        ],
        image: mutualFundImg,
        source_code_link: "#",
        isPrivate: true,
    },
    {
        name: "Thrill_Wanderer",
        description:
            "Travel-focused content platform to showcase destinations and itineraries. Built for performance, responsive design, and easy content management.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "php",
                color: "green-text-gradient",
            },
        ],
        image: thrillWandererImg,
        source_code_link: "#",
        isPrivate: true,
    },
];

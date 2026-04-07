import { ProjectData } from "../types";
import { tech } from "./techStack";

export const projectsData: ProjectData[] = [
    {
        image: "/projects/ai_factory.png",
        title: "AI Factory",
        description: "A high-performance multi-agent orchestration platform that designs, builds, and deploys custom AI agent teams to automate complex business workflows.",
        highlights: [
            "Dynamic Agent Orchestration: Implements a Graph-based execution engine (LangGraph) to coordinate specialized agents (CS Bot, PM Bot, Architect) with persistent state.",
            "Architect Agent: Automated 'zero-to-one' agent team design that parses user goals into DAG workflows and specialized agent instructions.",
            "Multi-Tenant Workspace Architecture: Secure isolation of threads, approvals, and knowledge bases using Drizzle ORM and PostgreSQL.",
            "Human-in-the-Loop Approvals: Integrated WhatsApp and web-based approval gates for sensitive tool executions like quote generation and task assignment.",
            "Cost & Token Monitoring: Real-time tracking of LLM usage across providers (OpenAI, Anthropic, Gemini) with per-workspace budget caps."
        ],
        link: "https://github.com/xLalice/ai-factory",
        technologies: [
            tech.nextjs,
            tech.typescript,
            tech.tailwind,
            tech.drizzle,
            tech.postgresql,
            tech.langchain,
            tech.openai,
            tech.anthropic,
            tech.gemini,
            tech.mastra,
            tech.bullmq
        ],
    },
    {
        image: "/projects/control_panel.gif",
        title: "Aicon Control Panel",
        description: "A centralized ERP dashboard managing sales leads, inventory, and employee workflows.",
        highlights: [
            "Engineered a Role-Based Access Control (RBAC) system for secure user management.",
            "Visualized real-time sales KPIs using Recharts and aggregated MongoDB data.",
            "Reduced manual data entry by 40% through automated document generation workflows."
        ],
        link: "https://github.com/xLalice/control-panel-frontend",
        technologies: [tech.react, tech.nodejs, tech.mongodb, tech.typescript, tech.reactQuery],
    },
    {
        image: "/projects/waste_classifier.png",
        title: "AI Waste Classifier",
        description: "Capstone project automating waste sorting via Computer Vision (MobileNetV2).",
        highlights: [
            "Achieved 96% model accuracy by fine-tuning on a custom 9,800+ image dataset.",
            "Built a high-performance FastAPI backend to serve real-time predictions.",
            "Solved a critical production-grade preprocessing mismatch that initially caused 60% accuracy loss."
        ],
        link: "https://github.com/xLalice/plastic-waste-classifier",
        technologies: [tech.python, tech.react, tech.typescript],
    },
    {
        image: "/projects/tweet_street.png",
        title: "Tweet Street Scheduler",
        description: "A geo-aware social media scheduler utilizing Twitter OAuth 2.0.",
        highlights: [
            "Implemented secure OAuth 2.0 authentication flow for user sessions.",
            "Orchestrated complex background jobs using Node-Cron for precise post timing.",
            "Integrated Google Maps Geocoding API to auto-tag posts with precise coordinates."
        ],
        link: "https://github.com/xLalice/tweetstreet",
        technologies: [tech.typescript, tech.nodejs, tech.postgresql, tech.prisma, tech.nodeCron],
    },
    {
        image: "/projects/ip_locator.png",
        title: "IP Locator & Recommendations",
        description: "Location intelligence app aggregating data from three distinct external APIs.",
        highlights: [
            "Chained IP geolocation data with Google Places API to recommend nearby venues.",
            "Visualized user location dynamically using Leaflet.js interactive maps.",
            "Designed a fault-tolerant API consumption layer to handle external rate limits."
        ],
        link: "https://github.com/xLalice/myIP",
        technologies: [tech.react, tech.express, tech.googleMaps],
    },
    {
        image: "/projects/waldo.gif",
        title: "Where's Waldo?",
        description: "Interactive photo-tagging game with sub-second server validation.",
        highlights: [
            "Optimized coordinate validation logic in Node.js to prevent frontend cheating.",
            "Implemented a global high-score leaderboard using MongoDB aggregations.",
            "Created responsive UI feedback loops (shake animations/toasts) for user interactions."
        ],
        link: "https://github.com/xLalice/waldo-frontend",
        technologies: [tech.react, tech.tailwind, tech.mongodb],
    },
    {
        image: "/projects/threads_monitor.jpg",
        title: "Threads Monitor",
        description: "An AI-powered multi-workspace platform for scraping Threads content, synthesizing it into high-quality articles using LLMs, and automatically publishing to Threads, Instagram, and X (Twitter).",
        link: "https://github.com/xLalice/threads-monitor",
        highlights: [
            "Multi-Platform Scraping & Publishing: Automated data collection from Threads and cross-posting to Instagram and X.",
            "LLM Synthesis Engine: Advanced orchestration of Groq, OpenAI, Anthropic, and Gemini for content generation with built-in fallbacks.",
            "Intelligent Clustering: Uses TF-IDF and NLP techniques to group related social posts into coherent article topics.",
            "Background Processing: Scalable job architecture using BullMQ and Redis for high-throughput scraping and publishing tasks.",
            "Workspace Management: Secure multi-tenant architecture with Prisma-backed workspace ownership and custom configuration."
        ],
        technologies: [
            tech.nextjs,
            tech.typescript,
            tech.tailwind,
            tech.prisma,
            tech.postgresql,
            tech.bullmq,
            tech.anthropic,
            tech.openai,
            tech.gemini,
            tech.puppeteer,
            tech.azure
        ]
    }
];
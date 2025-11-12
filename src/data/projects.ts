import { ProjectData } from "../types";
import { tech } from "./techStack";

export const projectsData: ProjectData[] = [
    {
        image: "/projects/control_panel.gif",
        title: "Aicon Construction Supplies Control Panel",
        description: "A comprehensive, full-stack internal control panel I created for my OJT of 162 hours, designed to serve as a central hub for managing a company's core business operations. It provides a suite of tools for data visualization, user administration, and workflow management, from sales leads to client relations. The application features a data-rich, interactive dashboard that presents key performance indicators (KPIs) in real-time, such as revenue, active leads, and client acquisition rates, complete with trend analysis and historical data comparisons. Core functionalities include a complete CRUD system for user and role management; dedicated sales and CRM modules for leads, inquiries, and clients; and data management for products, documents, and attendance records.",
        link: "https://github.com/xLalice/control-panel-frontend",
        technologies: [
            tech.react,
            tech.nodejs,
            tech.express,
            tech.mongodb,
            tech.typescript,
            tech.tailwind,
            tech.reactQuery,
            tech.prisma,
            tech.rest
        ],
    },
    {
        image: "/projects/waste_classifier.png",
        title: "AI Waste Classifier (Capstone)",
        description: `This was my capstone project, developing a full-stack application to automate waste sorting using computer vision. The system uses a MobileNetV2 model, which I helped train and fine-tune to 96% accuracy on a custom 9,800+ image dataset.

I was heavily involved in the end-to-end process, from data curation and model training to building the FastAPI backend that serves the live model. A key challenge I overcame was a critical preprocessing mismatch between our Keras training pipeline and the production API, which I debugged and fixed, raising the live application's accuracy from a failing 32% to our final 96%.`,
        link: "https://github.com/xLalice/plastic-waste-classifier",
        technologies: [
            tech.typescript,
            tech.react,
            tech.python,
        ],
    },
    {
        image: "/projects/tweet_street.png",
        title: "Twitter Post Scheduler",
        description: `A full-stack web application that allows users to schedule Twitter posts with location tagging. I built this to learn complex, real-world development, integrating Twitter's OAuth 2.0 for authentication, the Google Maps Geocoding API for location-to-coordinate conversion, and Node-Cron for the backend scheduling service.`,
        link: "https://github.com/xLalice/tweetstreet",
        technologies: [
            tech.typescript,
            tech.react,
            tech.tailwind,
            tech.nodejs,
            tech.express,
            tech.postgresql,
            tech.prisma,
            tech.twitterApi,
            tech.googleMaps,
            tech.nodeCron
        ],
    },
    {
        image: "/projects/ip_locator.png",
        title: "IP Locator & Recommendation App",
        description: `A location-based app built to demonstrate complex API orchestration. This app was commissioned for a university project focused on API integration. It fetches a user's IP, enriches it with ipinfo.io, displays the location on an OpenStreetMap (via Leaflet), and then uses the resulting coordinates to query the Google Places API for live, nearby recommendations and photos.`,
        link: "https://github.com/xLalice/myIP",
        "technologies": [
            tech.typescript,
            tech.react,
            tech.nodejs,
            tech.express,
            tech.googleMaps,
            tech.leaflet,
        ]
    },
    {
        image: "/projects/waldo.gif",
        title: "Where's Waldo (Photo Tagging App)",
        description: `A full-stack "Where's Waldo" game built as a part of The Odin Project curriculum. The application features a React frontend and a Node.js/Express backend that securely validates user guesses against character coordinates stored in a MongoDB database. Key features include a server-side game timer, a dynamic leaderboard, and instant visual/audio feedback for correct (pop-in marker) and incorrect (shake animation) guesses.`,
        link: "https://github.com/xLalice/waldo-frontend",
        technologies: [
            tech.react,
            tech.nodejs,
            tech.express,
            tech.mongodb,
            tech.tailwind,
            tech.rest,
        ],
    },

];
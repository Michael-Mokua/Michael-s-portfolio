import {
    IconArrowWaveRightUp,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

export const personalInfo = {
    name: "Michael Mokua",
    role: "Full-Stack Developer",
    email: "michaelcartelo03@gmail.com",
    bio: "It started with a fascination for the sheer complexity of the web—how billions of nodes connect instantly. That curiosity turned into obsession. Today, I'm not just a developer; I'm an architect of digital solutions. My mission is to bridge the gap between complex technology and everyday people. I dream of building the ultimate AI assistant that empowers the non-tech-savvy to wield the full power of the internet without writing a single line of code.",
    skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "Tailwind CSS",
        "Firebase",
        "AWS",
        "PostgreSQL",
    ],
    socials: {
        github: "https://github.com/Michael-Mokua",
        instagram: "https://www.instagram.com/michael_mokua/",
        linkedin: "https://www.linkedin.com/in/michael-mokua-11536b306/",
        twitter: "https://x.com/Im_Dah_Dude___",
    },
};

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    link: string;
    github?: string;
    image: string;
    slug: string;
    content?: string;
}

export const projects: Project[] = [
    {
        title: "Agri Value Connect",
        description: "A digital marketplace connecting farmers directly to buyers, reducing post-harvest losses.",
        techStack: ["Next.js", "Firebase", "Tailwind CSS"],
        link: "https://github.com/Michael-Mokua/Agri-Value-Connect",
        github: "https://github.com/Michael-Mokua/Agri-Value-Connect",
        image: "/projects/agri.png",
        slug: "agri-value-connect",
        content: `
            <h3>The Mission</h3>
            <p>Farmers in my region lose up to 40% of their produce due to lack of market access. Agri Value Connect bridges this gap.</p>
            <h3>Key Features</h3>
            <ul>
                <li><strong>Real-time Listings:</strong> Farmers can upload produce details via SMS or Web.</li>
                <li><strong>Geolocation:</strong> Buyers find the nearest available stock.</li>
                <li><strong>Escrow Payments:</strong> Integrating secure payments to build trust between parties.</li>
            </ul>
        `
    },
    {
        title: "Mokua Farm Management",
        description: "A comprehensive dashboard for tracking livestock, crops, and farm finances.",
        techStack: ["React", "Node.js", "PostgreSQL"],
        link: "https://github.com/Michael-Mokua/Mokua-Farm-Management-System",
        github: "https://github.com/Michael-Mokua/Mokua-Farm-Management-System",
        image: "/projects/farm.png",
        slug: "mokua-farm-management",
        content: `
            <h3>Overview</h3>
            <p>Managing a farm requires data. This system tracks individual cow milk production, breeding cycles, and expense reports.</p>
            <h3>Technical Challenge</h3>
            <p>The biggest challenge was handling complex SQL queries to generate monthly financial reports from fragmented daily data inputs. I used raw SQL with Knex.js to optimize performance.</p>
        `
    },
    {
        title: "EatsAndReps",
        description: "A fitness and nutrition tracker that helps users balance their diet and workout routines.",
        techStack: ["React Native", "Firebase", "Redux"],
        link: "https://github.com/Michael-Mokua/EatsAndReps",
        github: "https://github.com/Michael-Mokua/EatsAndReps",
        image: "/projects/eats.png",
        slug: "eats-and-reps",
        content: `
            <h3>Mobile First</h3>
            <p>Built with React Native to provide a seamless mobile experience. It uses the device's pedometer and health APIs to auto-track activity.</p>
        `
    },
    {
        title: "Info Nest",
        description: "A smart library management system for schools and institutions.",
        techStack: ["Java", "Spring Boot", "MySQL"],
        link: "https://github.com/Michael-Mokua/Info-Nest",
        github: "https://github.com/Michael-Mokua/Info-Nest",
        image: "/projects/library.png",
        slug: "info-nest",
        content: `
            <h3>Enterprise Grade</h3>
            <p>A classic Java Spring Boot application ensuring strict ACID compliance for transaction management when checking books in and out.</p>
        `
    },
    {
        title: "Jarvis Assistant",
        description: "A voice-activated personal assistant inspired by Iron Man.",
        techStack: ["Python", "OpenAI API", "SpeechRecognition"],
        link: "https://github.com/Michael-Mokua/Jarvis-like-Assistant",
        github: "https://github.com/Michael-Mokua/Jarvis-like-Assistant",
        image: "/projects/jarvis.png",
        slug: "jarvis-assistant",
        content: `
            <h3>AI Integration</h3>
            <p>Uses Python's speech_recognition to listen for wake words and OpenAI's GPT models to generate intelligent responses. It can control local PC settings like volume and brightness.</p>
        `
    },
    {
        title: "File Management System",
        description: "A CLI tool for organizing cluttered directories automatically.",
        techStack: ["Python", "OS Module"],
        link: "https://github.com/Michael-Mokua/File-Management-System",
        github: "https://github.com/Michael-Mokua/File-Management-System",
        image: "/projects/files.png",
        slug: "file-management-system",
    },
];

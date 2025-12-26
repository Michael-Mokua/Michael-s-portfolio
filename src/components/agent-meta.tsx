import { personalInfo, projects } from "@/data";

export default function AgentMeta() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": personalInfo.name,
        "jobTitle": personalInfo.role,
        "url": "https://michael-mokua-portfolio.vercel.app", // Conceptual URL
        "sameAs": Object.values(personalInfo.socials),
        "description": personalInfo.bio,
        "knowsAbout": personalInfo.skills,
        "owns": projects.map(p => ({
            "@type": "SoftwareSourceCode",
            "name": p.title,
            "description": p.description,
            "programmingLanguage": p.techStack,
            "codeRepository": p.github
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

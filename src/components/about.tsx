"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import GithubGraph from "@/components/github-graph";
import {
    IconArrowWaveRightUp,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
    IconDeviceGamepad2,
} from "@tabler/icons-react";
import { personalInfo } from "@/data";
import { Code, Cloud, Database, Cpu, Terminal } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                    About Me & Skills
                </h2>
                <BentoGrid className="max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 0 || i === 5 || i === 7 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>

    );
}

const Skeleton = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
    <div className={cn("flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100", className)}>
        {children}
    </div>
);

const SkillsList = () => (
    <div className="flex flex-wrap gap-2 p-4">
        {personalInfo.skills.map(skill => (
            <span key={skill} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">
                {skill}
            </span>
        ))}
    </div>
)

const items = [
    {
        title: "My Journey",
        description: personalInfo.bio,
        header: <Skeleton className="bg-gradient-to-br from-violet-500 to-purple-500" />,
        icon: <Terminal className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Technical Highlight",
        description: "Engineered a real-time data synchronization engine for the 'Mokua Farm' dashboard, reducing query latency by 95% using optimistic updates and edge caching.",
        header: <Skeleton className="flex items-center justify-center"><Database className="w-16 h-16 text-slate-500" /></Skeleton>,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Full Stack Development",
        description: "Building scalable web apps with Next.js and React.",
        header: <Skeleton className="flex items-center justify-center"><Code className="w-16 h-16 text-slate-500" /></Skeleton>,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Cloud Infrastructure",
        description: "Experience with AWS, Firebase, and deploying to the cloud.",
        header: <Skeleton className="flex items-center justify-center"><Cloud className="w-16 h-16 text-slate-500" /></Skeleton>,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Backend Engineering",
        description: "Robust APIs with Node.js and Python.",
        header: <Skeleton className="flex items-center justify-center"><Database className="w-16 h-16 text-slate-500" /></Skeleton>,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Code Activity",
        description: "My contributions on GitHub over the last year.",
        header: <GithubGraph />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "System Design",
        description: "Architecting efficient and scalable systems.",
        header: <Skeleton className="flex items-center justify-center"><Cpu className="w-16 h-16 text-slate-500" /></Skeleton>,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Beyond the Code",
        description: "Tactical mastermind in Football Manager, FPS veteran in Call of Duty, and Urban Farmer.",
        header: <Skeleton className="flex items-center justify-center"><IconDeviceGamepad2 className="w-16 h-16 text-slate-500" /></Skeleton>,
        icon: <IconDeviceGamepad2 className="h-4 w-4 text-neutral-500" />,
    },
];

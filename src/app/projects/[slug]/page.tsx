"use client";

import React, { use } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { projects } from "@/data";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Code } from "lucide-react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const project = projects.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-950">
            <Navbar />

            <div className="container mx-auto px-4 pt-32 pb-20">
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-slate-400 hover:text-cyan-400 mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex gap-4 mb-12">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
                                >
                                    <Github className="w-5 h-5" />
                                    View Code
                                </a>
                            )}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity font-bold shadow-lg shadow-cyan-500/20"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Live Demo
                            </a>
                        </div>

                        {project.content && (
                            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <Code className="w-6 h-6 mr-2 text-primary" /> Case Study
                                </h3>
                                <div
                                    className="prose prose-invert prose-lg max-w-none text-slate-300 [&>h3]:text-cyan-100 [&>strong]:text-white"
                                    dangerouslySetInnerHTML={{ __html: project.content }}
                                />
                            </div>
                        )}
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <BackgroundGradient className="rounded-[22px] p-1 bg-zinc-900 dark:bg-zinc-900 overflow-hidden text-center">
                            {/* Placeholder for project screenshot since we don't have real ones */}
                            <div className="relative aspect-video w-full bg-slate-800 rounded-[20px] overflow-hidden group flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 group-hover:opacity-100 transition-opacity opacity-50" />
                                <h2 className="text-4xl font-bold text-slate-700 dark:text-slate-600 group-hover:text-cyan-400 transition-colors z-10">
                                    {project.title} UI
                                </h2>
                            </div>
                        </BackgroundGradient>

                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-sm text-slate-400 italic">
                            "This project represents a significant milestone in my journey as a developer, pushing the boundaries of what I thought was possible with {project.techStack[0]}."
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

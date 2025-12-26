"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { personalInfo } from "@/data";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";
import Globe from "@/components/ui/globe";
import { Terminal } from "@/components/ui/terminal";

const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
};

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen px-4 pt-20 overflow-hidden bg-slate-950 antialiased flex flex-col lg:flex-row items-center justify-center gap-12"
        >
            {/* Spotlight Effect */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="absolute inset-0 bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            {/* Left Content */}
            <div className="container relative z-10 flex flex-col items-start text-left max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Hi, I'm <span className="text-primary">{personalInfo.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
                        {personalInfo.bio.split(".")[0]}.{/* First sentence of bio for punchiness */}
                        <br />
                        <span className="text-primary font-bold">{personalInfo.role}</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-6 mb-12"
                >
                    <a href="#projects">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-slate-900 text-white border-slate-800"
                        >
                            View Work
                        </Button>
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 h-12 text-base font-medium text-slate-200 transition-all rounded-full hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary border border-transparent hover:border-slate-700"
                    >
                        Contact Me
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex items-center gap-6"
                >
                    {Object.entries(personalInfo.socials).map(([key, url]) => {
                        const Icon = socialIcons[key as keyof typeof socialIcons] || Mail;
                        return (
                            <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-cyan-400 transition-transform hover:scale-110"
                                aria-label={key}
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        );
                    })}
                </motion.div>
            </div>

            {/* Right Visuals (Globe + Terminal) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10 w-full max-w-lg hidden lg:block"
            >
                {/* Layered effect: Globe behind Terminal */}
                <div className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-60 pointer-events-none">
                    <Globe />
                </div>

                <div className="relative mt-20">
                    <Terminal />
                    <p className="text-xs text-slate-600 mt-2 text-center font-mono">
                        System Online. Try typing "help".
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { repeat: Infinity, duration: 2, repeatType: "reverse" } }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <span className="text-sm">Scroll Down</span>
            </motion.div>
        </section>
    );
}

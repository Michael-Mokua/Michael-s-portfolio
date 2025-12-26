"use client";

import { ArrowUp, Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { personalInfo } from "@/data";

const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
};

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            Michael<span className="text-primary">.dev</span>
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        {Object.entries(personalInfo.socials).map(([key, url]) => {
                            const Icon = socialIcons[key as keyof typeof socialIcons] || Mail;
                            return (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                                    aria-label={key}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

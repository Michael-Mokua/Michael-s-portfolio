"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // If it's a pure path (like /blog), don't prevent default
        if (href.startsWith("/") && !href.includes("#")) return;

        // If it's a hash link
        if (href.includes("#")) {
            const [path, hash] = href.split("#");
            // If we are already on home page, scroll smoothly
            if (window.location.pathname === "/" || window.location.pathname === "") {
                e.preventDefault();
                const element = document.querySelector(`#${hash}`);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                }
            }
            // If on another page, let default behavior happen (Link will take us there)
        }
    };

    return (
        <header
            className={cn(
                "fixed top-5 inset-x-0 mx-auto max-w-2xl rounded-full z-50 transition-all duration-300 border border-transparent",
                scrolled
                    ? "bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-lg border-white/20"
                    : "bg-transparent"
            )}
        >
            <div className="px-6">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-lg font-bold tracking-widest text-slate-900 dark:text-white"
                        onClick={(e) => scrollToSection(e, "/#hero")}
                    >
                        MK<span className="text-primary">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-white rounded-full hover:bg-slate-200 transition-colors"
                        >
                            <span>Resume</span>
                            <Download className="w-3 h-3" />
                        </a>

                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-4 w-4 text-yellow-500" />
                                ) : (
                                    <Moon className="h-4 w-4 text-slate-700" />
                                )}
                            </button>
                        )}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-4">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-4 w-4 text-yellow-500" />
                                ) : (
                                    <Moon className="h-4 w-4 text-slate-700" />
                                )}
                            </button>
                        )}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-1 text-slate-700 dark:text-slate-300"
                            aria-label="Menu"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl mx-4 shadow-xl overflow-hidden border border-white/20"
                    >
                        <div className="flex flex-col p-4 gap-4 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-slate-200 transition-colors w-full justify-center"
                            >
                                <span>Download Resume</span>
                                <Download className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

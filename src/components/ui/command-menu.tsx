"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
    LayoutDashboard,
    FileText,
    Laptop,
    Sun,
    Moon,
    Search,
    ArrowRight,
    Github,
    Twitter,
    Linkedin
} from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export default function CommandMenu() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { setTheme } = useTheme();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-32 animate-in fade-in duration-200">
            <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 relative">
                <Command label="Command Menu" className="bg-transparent">
                    <div className="flex items-center border-b border-slate-800 px-3">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 text-white" />
                        <Command.Input
                            placeholder="Type a command or search..."
                            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 text-white disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>

                    <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                        <Command.Empty className="py-6 text-center text-sm text-slate-500">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="General" className="text-xs font-medium text-slate-500 px-2 py-1.5 uppercase">
                            <Item onSelect={() => runCommand(() => router.push("/"))}>
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                <span>Home</span>
                            </Item>
                            <Item onSelect={() => runCommand(() => router.push("/#projects"))}>
                                <Laptop className="mr-2 h-4 w-4" />
                                <span>Projects</span>
                            </Item>
                            <Item onSelect={() => runCommand(() => router.push("/blog"))}>
                                <FileText className="mr-2 h-4 w-4" />
                                <span>Blog</span>
                            </Item>
                        </Command.Group>

                        <Command.Group heading="Blog Posts" className="text-xs font-medium text-slate-500 px-2 py-1.5 uppercase mt-2">
                            {blogPosts.map((post) => (
                                <Item key={post.slug} onSelect={() => runCommand(() => router.push(`/blog/${post.slug}`))}>
                                    <ArrowRight className="mr-2 h-4 w-4" />
                                    <span>{post.title}</span>
                                </Item>
                            ))}
                        </Command.Group>

                        <Command.Group heading="Theme" className="text-xs font-medium text-slate-500 px-2 py-1.5 uppercase mt-2">
                            <Item onSelect={() => runCommand(() => setTheme("light"))}>
                                <Sun className="mr-2 h-4 w-4" />
                                <span>Light Mode</span>
                            </Item>
                            <Item onSelect={() => runCommand(() => setTheme("dark"))}>
                                <Moon className="mr-2 h-4 w-4" />
                                <span>Dark Mode</span>
                            </Item>
                        </Command.Group>

                        <Command.Group heading="Socials" className="text-xs font-medium text-slate-500 px-2 py-1.5 uppercase mt-2">
                            <Item onSelect={() => runCommand(() => window.open("https://github.com/Michael-Mokua", "_blank"))}>
                                <Github className="mr-2 h-4 w-4" />
                                <span>GitHub</span>
                            </Item>
                        </Command.Group>
                    </Command.List>
                </Command>

                <div className="border-t border-slate-800 p-2 text-xs text-slate-500 flex justify-end">
                    Press <kbd className="mx-1 bg-slate-800 px-1 rounded text-slate-300">Esc</kbd> to close
                </div>
            </div>
        </div>
    );
}

function Item({ children, onSelect, key }: { children: React.ReactNode; onSelect: () => void; key?: string }) {
    return (
        <Command.Item
            key={key}
            onSelect={onSelect}
            className="relative flex cursor-default select-none items-center rounded-lg px-2 py-2.5 text-sm text-slate-300 outline-none aria-selected:bg-slate-800 aria-selected:text-white hover:bg-slate-800 hover:text-white transition-colors cursor-pointer group"
        >
            {children}
        </Command.Item>
    )
}

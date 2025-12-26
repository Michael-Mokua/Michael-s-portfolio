"use client";

import React, { use } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrap params using React.use()
    const resolvedParams = use(params);
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-950">
            <Navbar />

            <article className="container mx-auto px-4 pt-32 pb-20 max-w-3xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-slate-400 hover:text-cyan-400 mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-wrap gap-4 items-center mb-6 text-sm">
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
                            {post.tag}
                        </span>
                        <span className="flex items-center text-slate-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            {post.date}
                        </span>
                        <span className="flex items-center text-slate-400">
                            <Clock className="w-4 h-4 mr-2" />
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    {/* Content Rendering */}
                    <div
                        className="prose prose-invert prose-lg max-w-none text-slate-300 [&>h3]:text-cyan-100 [&>strong]:text-white"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.div>

                <hr className="my-12 border-slate-800" />

                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div>
                        <h4 className="text-white font-bold mb-1">Michael Mokua</h4>
                        <p className="text-slate-400 text-sm">Full Stack Developer & Tech Enthusiast</p>
                    </div>
                    {/* Placeholder for Author Avatar if desired */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600"></div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

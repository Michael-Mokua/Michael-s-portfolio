"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export default function Blog() {
    return (
        <main className="min-h-screen bg-slate-950 pb-20">
            <Navbar />

            <div className="container mx-auto px-4 pt-32">
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Technical <span className="text-primary">Blog</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Thoughts on software engineering, cloud architecture, and building products that solve real problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Link href={`/blog/${post.slug}`} key={index}>
                            <CardContainer className="inter-var">
                                <CardBody className="bg-slate-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        {post.title}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        {post.excerpt}
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-10">
                                        <CardItem
                                            translateZ={20}
                                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-slate-400"
                                        >
                                            {post.date}
                                        </CardItem>
                                        <CardItem
                                            translateZ={20}
                                            className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold"
                                        >
                                            {post.tag}
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { personalInfo } from "@/data";

export default function Contact() {
    // REPLACE "YOUR_FORMSPREE_ID" with your actual Form ID from https://formspree.io
    // Example: useForm("mvqgqgwz")
    const [state, handleSubmit] = useForm("mdaoowrj");

    if (state.succeeded) {
        return (
            <section id="contact" className="py-20 md:py-32 bg-slate-950">
                <div className="container px-4 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md mx-auto p-8 bg-green-900/20 rounded-2xl border border-green-900"
                    >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-slate-300">
                            Thanks for reaching out, {personalInfo.name.split(' ')[0]} will get back to you soon.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-20 md:py-32 bg-slate-950 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-slate-400">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="max-w-md mx-auto bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                                required
                            />
                            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                                required
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Your message..."
                                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-600"
                                required
                            ></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-black bg-cyan-400 rounded-lg hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 shadow-lg shadow-cyan-500/20 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                        >
                            {state.submitting ? "Sending..." : "Send Message"}
                            {!state.submitting && <Send className="w-4 h-4 ml-1" />}
                        </button>
                    </form>
                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            Or email directly: <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline">{personalInfo.email}</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

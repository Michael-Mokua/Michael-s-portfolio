"use client";

import { motion } from "framer-motion";

export default function GithubGraph() {
    // Simulate contribution data - in a real app this would fetch from GitHub API
    // 52 weeks * 7 days
    const weeks = 52;
    const days = 7;

    // Deterministic "random" generation for demo purposes
    const getIntensity = (w: number, d: number) => {
        const seed = (w * 7 + d) * 123.45;
        const random = Math.sin(seed) * 0.5 + 0.5; // 0-1
        if (random > 0.8) return "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]";
        if (random > 0.6) return "bg-green-700";
        if (random > 0.4) return "bg-green-900";
        return "bg-slate-900";
    };

    return (
        <div className="w-full flex flex-col items-center justify-center py-6 bg-slate-950/50 rounded-xl border border-slate-800">
            <div className="mb-4 flex items-center justify-between w-full px-6">
                <h3 className="text-sm font-semibold text-slate-400">GitHub Contributions</h3>
                <span className="text-xs text-slate-500">Last Year</span>
            </div>

            <div className="flex gap-[2px] md:gap-1 overflow-x-auto max-w-full px-6 pb-2 scrollbar-hide">
                {Array.from({ length: weeks }).map((_, w) => (
                    <div key={w} className="flex flex-col gap-[2px] md:gap-1">
                        {Array.from({ length: days }).map((_, d) => (
                            <motion.div
                                key={`${w}-${d}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: w * 0.01 + d * 0.005 }}
                                className={`w-2 h-2 md:w-3 md:h-3 rounded-sm ${getIntensity(w, d)}`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <span>Less</span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-900 rounded-sm"></div>
                    <div className="w-2 h-2 bg-green-900 rounded-sm"></div>
                    <div className="w-2 h-2 bg-green-700 rounded-sm"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                </div>
                <span>More</span>
            </div>
        </div>
    );
}

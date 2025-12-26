"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
    return (
        <section className="py-20 bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-8 z-10">
                Kind Words
            </h2>
            <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    );
}

const testimonials = [
    {
        quote:
            "Michael was a pleasure to work with. He understood our requirements perfectly and delivered a robust mobile assistant within the deadline.",
        name: "Sarah Jenkins",
        title: "Project Manager",
    },
    {
        quote:
            "His expertise in Python and System Design really shone through on the Info Nest project. Clean code and great documentation.",
        name: "David Kim",
        title: "Lead Developer",
    },
    {
        quote:
            "The Agri Value Connect platform Michael built has significantly improved how we track our supply chain. Highly recommended!",
        name: "John Mwangi",
        title: "AgriTech Founder",
    },
    {
        quote:
            "A rare talent who bridges the gap between complex backend logic and beautiful frontend design.",
        name: "Emily Chen",
        title: "CTO @ StartUp",
    },
];

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/spotlight";

export default function NotFound() {
    return (
        <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    404 <br /> System Failure
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    The page you are looking for has been disconnected from the matrix.
                    It may have been moved, deleted, or possibly never existed in this timeline.
                </p>
                <div className="flex justify-center mt-8">
                    <Link href="/">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-slate-900 text-white border-slate-800"
                        >
                            Return to Home Base
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

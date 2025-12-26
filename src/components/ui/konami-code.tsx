"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function KonamiCode() {
    const [input, setInput] = useState<string[]>([]);
    const sequence = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
    ];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const newItem = e.key;
            const newInput = [...input, newItem];

            // Keep only the last N keys where N is sequence length
            if (newInput.length > sequence.length) {
                newInput.shift();
            }

            setInput(newInput);

            // Check if matches
            if (JSON.stringify(newInput) === JSON.stringify(sequence)) {
                triggerConfetti();
                setInput([]); // Reset
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [input]);

    const triggerConfetti = () => {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);
    };

    return null; // Renderless component
}

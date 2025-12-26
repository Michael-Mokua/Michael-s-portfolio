"use client";

import { useEffect, useRef } from "react";

export default function MouseTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: 0, y: 0 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);
        resize();

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;

            constructor() {
                this.x = mouse.x;
                this.y = mouse.y;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear screen

            // Add particles only on movement (handled by event listener, but lets trail a bit)
            // Actually, let's add fewer particles to not clutter

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                if (particles[i].size <= 0.2) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.x;
            mouse.y = e.y;
            // Create 2 particles per move
            for (let i = 0; i < 2; i++) {
                particles.push(new Particle());
            }
        }

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50 opacity-60"
        />
    );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Copy, Terminal as TerminalIcon, Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";

// Simple NLP Intent Matcher
const processInput = (input: string) => {
    const lower = input.toLowerCase();

    // Resume / CV
    if (lower.includes("resume") || lower.includes("cv") || lower.includes("hire")) return "resume";

    // Skills / Tech
    if (lower.includes("skill") || lower.includes("stack") || lower.includes("know") || lower.includes("tech")) return "skills";

    // Projects / Work
    if (lower.includes("project") || lower.includes("work") || lower.includes("built") || lower.includes("portfolio")) return "projects";

    // Contact / Socials
    if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("social")) return "contact";

    // Purpose / Bio
    if (lower.includes("who") || lower.includes("about") || lower.includes("bio") || lower.includes("yourself")) return "about";

    // Easter Egg
    if (lower.includes("matrix") || lower.includes("neo")) return "matrix";

    return "unknown";
};

export const Terminal = () => {
    const [lines, setLines] = useState<string[]>([
        "Initializing agentic interface...",
        "Listening for commands...",
        "---------------------------------",
        "Type 'help' or ASK me anything.",
        "Try: 'What skills do you have?'",
    ]);
    const [input, setInput] = useState("");
    const [isListening, setIsListening] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const recognitionRef = useRef<any>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [lines]);

    // Initialize Speech Recognition
    useEffect(() => {
        if (typeof window !== "undefined") {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = "en-US";

                recognition.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript;
                    setInput(transcript);
                    handleCommand(transcript);
                    setIsListening(false);
                };

                recognition.onerror = (event: any) => {
                    console.error("Speech recognition error", event.error);
                    setIsListening(false);
                    setLines(prev => [...prev, `[System]: Voice error - ${event.error}`]);
                };

                recognition.onend = () => setIsListening(false);
                recognitionRef.current = recognition;
            }
        }
    }, []);

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        } else {
            setLines(prev => [...prev, `[System]: Listening... 🎙️`]);
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    const handleCommand = (rawCmd: string) => {
        const cmd = rawCmd.trim();
        if (!cmd) return;

        const intent = processInput(cmd);
        let response = "";

        // Direct Command Matching overrides NLP
        const directCmd = cmd.toLowerCase().split(" ")[0]; // First word

        if (directCmd === "clear") {
            setLines(["Terminal cleared."]);
            return;
        } else if (directCmd === "help") {
            response = "You can speak naturally! Try: 'Show me your projects', 'Who are you?', 'Contact info'. System commands: help, clear.";
        } else {
            // NLP Logic
            switch (intent) {
                case "resume":
                    response = "Navigating to resume... (Check the top right button!)";
                    break;
                case "skills":
                    response = "I am proficient in: Next.js, React, Node.js, Python, AWS, and Database Architecture. Basically, I build things that scale.";
                    break;
                case "projects":
                    response = "Loading Project Database... Scrolling you to the Featured Work section.";
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    break;
                case "contact":
                    response = "Opening communication channels. Email: michaelcartelo03@gmail.com | Twitter: @Im_Dah_Dude___";
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    break;
                case "about":
                    response = "Michael Mokua | Full Stack Architect. I bridge the gap between complex code and human experience.";
                    break;
                case "matrix":
                    response = "The Matrix is everywhere. It is all around us.";
                    break;
                default:
                    response = `[AI]: I didn't quite catch that. Try asking about my 'skills', 'projects', or 'contact' info.`;
            }
        }

        setLines((prev) => [...prev, `> ${cmd}`, response]);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommand(input);
        }
    };

    return (
        <div className="w-full h-full max-h-[400px] bg-black/90 backdrop-blur border border-slate-800 rounded-lg overflow-hidden font-mono text-sm shadow-2xl flex flex-col relative">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2 text-slate-400">
                    <TerminalIcon className="w-4 h-4" />
                    <span>AI_Agent@Mokua_Portfolio:~</span>
                </div>
                <button
                    onClick={toggleListening}
                    className={cn("p-1.5 rounded-full transition-colors", isListening ? "bg-red-500/20 text-red-400 animate-pulse" : "hover:bg-slate-800 text-slate-400")}
                    title="Voice Command"
                >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent space-y-2">
                {lines.map((line, i) => (
                    <div key={i} className="text-slate-300 break-words">
                        {line.startsWith(">") ? (
                            <span className="text-cyan-400 font-bold">{line}</span>
                        ) : line.startsWith("[") ? (
                            <span className="text-emerald-400">{line}</span>
                        ) : (
                            <span className={line.includes("-") ? "text-slate-500" : "text-slate-300"}>{line}</span>
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="px-4 py-3 bg-slate-900/50 border-t border-slate-800 flex items-center">
                <span className="text-cyan-400 mr-2">❯</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-white placeholder-slate-600"
                    placeholder="Ask me anything..."
                    autoFocus
                />
            </div>
        </div>
    );
};

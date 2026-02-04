"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Scissors, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Showcase", href: "#showcase" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 glass rounded-cyber group-hover:neon-border transition-all">
                        <Scissors className="w-6 h-6 text-accent group-hover:text-neon" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        BARBER<span className="text-accent">FLOW</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/70 hover:text-white hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="px-5 py-2 glass rounded-cyber text-sm font-medium hover:neon-border transition-all active:scale-95">
                        Log In
                    </button>
                    <button className="px-5 py-2 bg-accent text-white rounded-cyber text-sm font-bold hover:bg-neon hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all active:scale-95">
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden"
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-white/70"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-2 mt-4">
                            <button className="w-full py-3 glass rounded-cyber font-medium">
                                Log In
                            </button>
                            <button className="w-full py-3 bg-accent text-white rounded-cyber font-bold">
                                Get Started
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}

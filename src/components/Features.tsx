"use client";

import { motion } from "framer-motion";
import { CalendarRange, Users, BarChart3, Clock, Wallet, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "Smart Scheduling",
        description: "Automated booking system that minimizes no-shows and maximizes your chair time.",
        icon: CalendarRange,
        color: "accent",
    },
    {
        title: "CRM System",
        description: "Keep track of every client's history, preferences, and style notes in one place.",
        icon: Users,
        color: "neon",
    },
    {
        title: "Advanced Analytics",
        description: "Understand your peak hours, top barbers, and growth trends with real-time data.",
        icon: BarChart3,
        color: "accent",
    },
    {
        title: "Automated Reminders",
        description: "Send SMS and Push notifications automatically to keep your shop running smoothly.",
        icon: Clock,
        color: "neon",
    },
    {
        title: "Financial Suite",
        description: "Handle payments, tips, and inventory management without leaving the platform.",
        icon: Wallet,
        color: "accent",
    },
    {
        title: "Elite Security",
        description: "Military-grade encryption for all your client data and financial records.",
        icon: ShieldCheck,
        color: "neon",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        EVERYTHING YOU NEED <br />
                        <span className="text-accent italic">TO DOMINATE THE MARKET.</span>
                    </h2>
                    <p className="text-white/60 text-lg">
                        Stop using paper and spreadsheets. Transition to a system built for high-performance barbershops.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 glass neon-border rounded-xl hover:bg-white/5 transition-all cursor-default"
                        >
                            <div className={`p-4 rounded-lg w-fit mb-6 transition-all group-hover:scale-110 ${feature.color === "accent" ? "bg-accent/20 text-accent group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]" : "bg-neon/20 text-neon group-hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]"
                                }`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{feature.title}</h3>
                            <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

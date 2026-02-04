"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Zap, Shield, Globe } from "lucide-react";

export function Showcase() {
    return (
        <section id="showcase" className="py-24 relative overflow-hidden bg-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                            BOOKING ON THE GO. <br />
                            <span className="text-neon italic">ANYTIME, ANYWHERE.</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-10 leading-relaxed">
                            Give your clients the power of instant booking with our elite mobile interface.
                            Increase retention by 40% with push notifications and easy appointment management.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Zap, text: "Instant Synchronisation" },
                                { icon: Shield, text: "Secure Payment Integration" },
                                { icon: Smartphone, text: "High-Performance Mobile UI" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="p-3 glass rounded-cyber group-hover:neon-border transition-all">
                                        <item.icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="font-bold text-lg">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            {/* iPhone Mockup Frame */}
                            <div className="relative z-10 w-[300px] md:w-[350px] aspect-[1/2.05] bg-matte-black border-[8px] border-white/20 rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(75,0,130,0.3)] group-hover:neon-border group-hover:shadow-[0_0_60px_rgba(217,70,239,0.3)] transition-all duration-500">
                                <Image
                                    src="/app-booking.png"
                                    alt="Barber Booking App UI"
                                    fill
                                    className="object-cover animate-pulse-slow"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon/20 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

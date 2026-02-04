"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Activity, Calendar, Users } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-[#4B0082]/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 relative">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Sparkles className="w-3 h-3" />
                        <span>The Future of Barbering is Here</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
                    >
                        SCALE YOUR <br />
                        <span className="text-gradient">BARBERSHOP</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Manage your schedule, CRM, and financials with an elite-tier SaaS dashboard built for the modern barber.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-cyber font-bold text-lg hover:bg-neon hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transition-all flex items-center justify-center gap-2 group">
                            Get Started Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 glass text-white rounded-cyber font-bold text-lg hover:neon-border transition-all">
                            Watch Demo
                        </button>
                    </motion.div>
                </div>

                {/* Floating Dashboard Elements */}
                <div className="relative h-[400px] md:h-[600px] mt-10">
                    {/* Main Dashboard Preview (Glass) */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-5xl aspect-video glass rounded-xl border border-white/20 overflow-hidden shadow-2xl"
                    >
                        <div className="p-4 border-b border-white/10 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="grid grid-cols-12 gap-4 p-6">
                            <div className="col-span-3 h-64 glass rounded-lg" />
                            <div className="col-span-9 space-y-4">
                                <div className="h-10 glass rounded-lg" />
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-40 glass rounded-lg" />
                                    <div className="h-40 glass rounded-lg" />
                                    <div className="h-40 glass rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Cards */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-[5%] top-[20%] hidden lg:flex flex-col gap-4 p-4 glass neon-border rounded-xl w-64 z-10"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-accent/20 rounded-lg text-accent">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-white/50">Next Appointment</div>
                                <div className="text-sm font-bold">14:30 - Alex Thompson</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute right-[5%] bottom-[20%] hidden lg:flex flex-col gap-4 p-4 glass neon-border rounded-xl w-64 z-10"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-neon/20 rounded-lg text-neon">
                                <Activity className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-white/50">Revenue Today</div>
                                <div className="text-sm font-bold">$1,240.00</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

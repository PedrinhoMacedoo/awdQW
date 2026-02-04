import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import { Features } from "@/components/Features";
import { Check, Mail, Scissors, Github, Twitter, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Showcase />
      <Features />

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">PREÇOS JUSTOS PARA EQUIPES DE ELITE</h2>
            <p className="text-white/60">Escolha o plano que melhor se adapta à sua escala atual.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic */}
            <div className="p-8 glass rounded-xl border border-white/10 hover:border-white/20 transition-all flex flex-col">
              <h3 className="text-xl font-bold mb-2">Iniciante</h3>
              <div className="text-4xl font-black mb-6">R$ 99<span className="text-sm text-white/40 font-normal">/mês</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                {["Up to 3 Barbers", "Basic Scheduling", "Email Support", "Mobile App Access"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                    <Check className="w-4 h-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 glass rounded-cyber font-bold hover:neon-border transition-all">Escolher Plano</button>
            </div>

            {/* Pro - Glowing */}
            <div className="p-8 glass rounded-xl border-accent border-2 relative scale-105 shadow-[0_0_40px_rgba(139,92,246,0.2)] flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Mais Popular</div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-black mb-6">R$ 249<span className="text-sm text-white/40 font-normal">/mês</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                {["Unlimited Barbers", "Full CRM Suite", "Financial Dashboard", "Priority 24/7 Support", "SMS Reminders"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <Check className="w-4 h-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-accent text-white rounded-cyber font-bold hover:bg-neon transition-all">Escalar Agora</button>
            </div>

            {/* Enterprise */}
            <div className="p-8 glass rounded-xl border border-white/10 hover:border-white/20 transition-all flex flex-col">
              <h3 className="text-xl font-bold mb-2">Franquia</h3>
              <div className="text-4xl font-black mb-6">R$ 599<span className="text-sm text-white/40 font-normal">/mês</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                {["Multi-shop Management", "Custom Branding", "API Access", "Dedicated Manager", "Inventory Tracking"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                    <Check className="w-4 h-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 glass rounded-cyber font-bold hover:neon-border transition-all">Falar com Consultor</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Scissors className="w-6 h-6 text-accent" />
                <span className="text-xl font-bold tracking-tight">BARBER<span className="text-accent">FLOW</span></span>
              </div>
              <p className="text-white/40 max-w-sm mb-6">
                The ultimate management operating system for the world's most elite barbershops.
              </p>
              <div className="flex gap-4">
                {[Twitter, Instagram, Github].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 glass rounded-cyber hover:text-accent transition-all"><Icon className="w-5 h-5" /></a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Newsletter</h4>
              <p className="text-white/40 text-sm mb-4">Get the latest updates on shop management.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="flex-grow bg-white/5 border border-white/10 rounded-cyber px-4 py-2 text-sm focus:outline-none focus:border-accent transition-all" />
                <button className="p-2 bg-accent rounded-cyber hover:bg-neon transition-all"><Mail className="w-5 h-5 text-white" /></button>
              </div>
            </div>
          </div>
          <div className="text-center text-white/20 text-xs border-t border-white/5 pt-8">
            © 2026 BARBERFLOW. ALL RIGHTS RESERVED. CYBERPUNK-LITE UI BY ANTIGRAVITY.
          </div>
        </div>
      </footer>
    </main>
  );
}

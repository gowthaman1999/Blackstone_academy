"use client";

import React, { useState } from "react";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const handleScrollToDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const demoSec = document.getElementById("demo");
    if (demoSec) {
      window.scrollTo({
        top: demoSec.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative bg-background border-t border-foreground/10 pt-20">
      
      {/* FINAL CALL-TO-ACTION SECTION */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="relative glass-panel rounded-3xl p-8 sm:p-14 border border-white/10 overflow-hidden shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Glow backdrop */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 to-primary-indigo/10 opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-blue/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center lg:text-left max-w-xl">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight mb-4">
              Ready To Scale Your Academy?
            </h2>
            <p className="text-foreground/75 text-sm sm:text-base font-sans font-light leading-relaxed">
              Join thousands of tutors, schools, and online academies that manage their entire education ecosystem through one intelligent 3D dashboard.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center shrink-0 w-full sm:w-auto">
            <a
              href="#demo"
              onClick={handleScrollToDemo}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-primary-blue to-primary-indigo text-white text-sm font-semibold shadow-lg text-center cursor-pointer hover:scale-[1.01]"
            >
              Book Live Demo
            </a>
            <a
              href="mailto:sales@blackstone.ai"
              className="w-full sm:w-auto px-7 py-4 rounded-xl border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 text-foreground text-sm font-semibold text-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER MATRIX LIST */}
      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-blue to-sec-cyan flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              BlackStone AI<span className="text-sec-cyan">.</span>
            </span>
          </a>
          <p className="text-xs text-foreground/60 leading-relaxed font-sans font-light max-w-sm">
            BlackStone AI is the world's most premium ERP & LMS suite designed to power online academies, Quran studies, coaching centers, and modern prep schools.
          </p>
          
          {/* Social icons */}
          <div className="flex gap-4">
            {/* Twitter */}
            <a href="#" className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/50 hover:bg-foreground/10 hover:text-foreground transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Linkedin */}
            <a href="#" className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/50 hover:bg-foreground/10 hover:text-foreground transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>
            {/* Github */}
            <a href="#" className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/50 hover:bg-foreground/10 hover:text-foreground transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Directory Links columns */}
        <div className="md:col-span-5 grid grid-cols-2 gap-8">
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-4">ERP Modules</h5>
            <ul className="flex flex-col gap-2.5 text-xs text-foreground/70">
              <li><a href="#features" className="hover:text-primary-blue transition-colors">Student CRM</a></li>
              <li><a href="#features" className="hover:text-primary-blue transition-colors">Teacher Portals</a></li>
              <li><a href="#features" className="hover:text-primary-blue transition-colors">Course LMS</a></li>
              <li><a href="#features" className="hover:text-primary-blue transition-colors">Tuition Invoicing</a></li>
              <li><a href="#features" className="hover:text-primary-blue transition-colors">WhatsApp sync</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-4">Resources</h5>
            <ul className="flex flex-col gap-2.5 text-xs text-foreground/70">
              <li><a href="#demo" className="hover:text-primary-blue transition-colors">Interactive Sandbox</a></li>
              <li><a href="#pricing" className="hover:text-primary-blue transition-colors">Pricing Matrix</a></li>
              <li><a href="#comparison" className="hover:text-primary-blue transition-colors">Competitive Audit</a></li>
              <li><a href="#security" className="hover:text-primary-blue transition-colors">Security Standards</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Support Center</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Capture */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-foreground/50">Stay Updated</h5>
          <p className="text-xs text-foreground/60 leading-relaxed font-sans font-light">
            Receive major security upgrades, product feature updates, and academy scaling frameworks weekly.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="name@agency.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background/55 border border-white/5 rounded-xl px-3 py-2 text-xs text-foreground focus:outline-none focus:border-primary-blue"
              required
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-foreground text-background hover:scale-105 transition-transform shrink-0"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          {subscribed && (
            <p className="text-[10px] text-green-500 font-bold animate-pulse">
              Subscribed successfully! Thank you.
            </p>
          )}
        </div>
      </div>

      {/* SUB-FOOTER BRANDINGS */}
      <div className="max-w-7xl mx-auto px-6 border-t border-foreground/10 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-foreground/50 gap-4">
        <span>© {new Date().getFullYear()} BlackStone AI Inc. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms of Service</a>
          <a href="#" className="hover:text-foreground">GDPR Compliance</a>
        </div>
        <span className="flex items-center gap-1">
          Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> for educational growth
        </span>
      </div>

    </footer>
  );
}

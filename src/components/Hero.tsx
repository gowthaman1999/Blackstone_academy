"use client";

import React from "react";
import Globe3D from "./Globe3D";
import { Play, Calendar, DollarSign, Users, Award, ShieldCheck } from "lucide-react";

export default function Hero() {
  const trustMetrics = [
    { value: "10,000+", label: "Students Managed", icon: Users },
    { value: "500+", label: "Teachers Connected", icon: Award },
    { value: "99.9%", label: "Platform Uptime", icon: ShieldCheck },
  ];

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
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Radiant glow spots */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-blue/20 blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-sec-purple/15 blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Headline / Content Left */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary-blue/30 bg-primary-blue/5 text-primary-blue w-fit mx-auto lg:mx-0 text-xs font-semibold tracking-wide backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sec-cyan animate-pulse" />
            Next-Gen Education ERP Software
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-foreground">
            Transform Your Academy With The{" "}
            <span className="text-gradient-primary">Ultimate</span> Education ERP
          </h1>

          <p className="text-base sm:text-lg text-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
            Manage students, teachers, classes, payments, assessments, communication, and analytics from one powerful, modern, Stripe & Apple-inspired platform.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4">
            <a
              href="#demo"
              onClick={handleScrollToDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-blue to-primary-indigo text-white font-semibold text-base shadow-xl shadow-primary-blue/25 hover:shadow-primary-blue/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-center cursor-pointer"
            >
              Book Live Demo
            </a>
            <a
              href="#showcase"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-foreground/15 hover:bg-foreground/5 text-foreground font-semibold text-base flex items-center justify-center gap-2.5 transition-all"
            >
              <Play className="w-4 h-4 fill-current text-sec-cyan" />
              Watch Product Tour
            </a>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-10 border-t border-foreground/10 mt-6 max-w-lg mx-auto lg:mx-0">
            {trustMetrics.map((metric, i) => (
              <div key={i} className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-foreground">
                  {metric.value}
                </span>
                <span className="text-[10px] sm:text-xs text-foreground/50 uppercase tracking-widest font-semibold leading-tight">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Visualizer & Floating Cards Right */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px]">
          {/* Base 3D Globe Component */}
          <div className="w-full max-w-[420px] aspect-square relative z-10">
            <Globe3D />
          </div>

          {/* Floating UI Elements */}
          
          {/* 1. Live Class Floater */}
          <div className="absolute top-2 -left-4 sm:left-4 z-20 glass-panel p-4 rounded-2xl max-w-[200px] shadow-2xl animate-float-slow select-none">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="relative w-7 h-7 rounded-full bg-red-500/25 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping absolute" />
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-foreground">Chemistry 101</h4>
                <p className="text-[9px] text-foreground/50">Dr. Sarah Jenkins</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] bg-foreground/5 p-1.5 rounded-lg border border-foreground/5">
              <span className="text-foreground/80 font-medium">32 Students</span>
              <span className="text-sec-cyan font-bold">45m elapsed</span>
            </div>
          </div>

          {/* 2. Revenue Floater */}
          <div className="absolute right-0 top-10 z-20 glass-panel p-4 rounded-2xl shadow-2xl animate-float-medium select-none" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sec-cyan/15 text-sec-cyan flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-foreground/50 uppercase tracking-widest font-semibold">Tuition Income</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base font-bold text-foreground">$48,250</span>
                  <span className="text-[9px] text-green-500 font-extrabold">+14.2%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Student Profile Floater */}
          <div className="absolute left-0 bottom-4 z-20 glass-panel p-4 rounded-2xl shadow-2xl animate-float-fast select-none" style={{ animationDelay: "3s" }}>
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                  alt="Student Avatar"
                  className="w-9 h-9 rounded-full object-cover border border-white/20"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border border-dark-bg-1" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground">Sophia Vance</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[9px] bg-primary-indigo/15 text-primary-indigo px-1.5 py-0.5 rounded font-bold">Grade 12</span>
                  <span className="text-[9px] text-foreground/40">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Sparkline Analytics */}
          <div className="absolute right-4 bottom-10 z-20 glass-panel p-4 rounded-2xl shadow-2xl animate-float-slow select-none" style={{ animationDelay: "4.5s" }}>
            <p className="text-[9px] text-foreground/50 uppercase tracking-widest font-semibold mb-1">Avg Attendance</p>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-foreground">98.6%</span>
              <div className="flex items-end gap-0.5 h-6">
                <span className="w-1 bg-sec-cyan/30 rounded-t h-[40%]" />
                <span className="w-1 bg-sec-cyan/40 rounded-t h-[60%]" />
                <span className="w-1 bg-sec-cyan/60 rounded-t h-[50%]" />
                <span className="w-1 bg-sec-cyan/80 rounded-t h-[80%]" />
                <span className="w-1 bg-sec-cyan rounded-t h-[95%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

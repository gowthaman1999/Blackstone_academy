"use client";

import React from "react";
import { Play, Users, Award, ShieldCheck } from "lucide-react";
import CountUp from "./CountUp";

export default function Hero() {
  const trustMetrics = [
    { end: 10000, suffix: "+", label: "Students Managed", icon: Users },
    { end: 500, suffix: "+", label: "Teachers Connected", icon: Award },
    { end: 99.9, suffix: "%", decimals: 1, label: "Platform Uptime", icon: ShieldCheck },
  ];

  const handleScrollToDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const demoSec = document.getElementById("demo");
    if (demoSec) {
      window.scrollTo({ top: demoSec.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid-pattern text-center"
      style={{ paddingTop: "100px", paddingBottom: "80px" }}
    >
      {/* Radiant glow spots */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary-blue/15 blur-[140px] pointer-events-none animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-sec-purple/10 blur-[160px] pointer-events-none animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full relative z-10 flex flex-col items-center gap-8">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-blue/30 bg-primary-blue/5 text-primary-blue text-xs font-semibold tracking-wide backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-sec-cyan animate-pulse" />
          Next-Gen Education ERP Software
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.08] text-foreground">
          Transform Your Academy<br className="hidden sm:block" /> With The{" "}
          <span className="text-gradient-primary">Ultimate</span><br className="hidden sm:block" /> Education ERP
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg lg:text-xl text-foreground/65 max-w-2xl leading-relaxed font-sans font-light">
          Manage students, teachers, classes, payments, assessments, communication, and analytics — all from one powerful, modern platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm sm:max-w-none justify-center mt-2">
          <a
            href="#demo"
            onClick={handleScrollToDemo}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-primary-blue to-primary-indigo text-white font-semibold text-sm shadow-2xl shadow-primary-blue/30 hover:shadow-primary-blue/50 hover:scale-[1.03] active:scale-[0.98] transition-all text-center cursor-pointer"
          >
            Book Live Demo
          </a>
          <a
            href="#showcase"
            className="w-full sm:w-auto px-10 py-4 rounded-2xl border border-foreground/15 hover:bg-foreground/5 text-foreground font-semibold text-sm flex items-center justify-center gap-2.5 transition-all"
          >
            <Play className="w-4 h-4 fill-current text-sec-cyan" />
            Watch Product Tour
          </a>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-10 border-t border-foreground/10 w-full max-w-lg mt-4">
          {trustMetrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <span className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-foreground">
                <CountUp end={metric.end} suffix={metric.suffix} decimals={metric.decimals} />
              </span>
              <span className="text-[10px] sm:text-xs text-foreground/45 uppercase tracking-widest font-semibold leading-tight text-center">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

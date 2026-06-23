"use client";

import React, { useState } from "react";
import { MessageSquare, ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sheikh Faisal Al-Hafiz",
      role: "Founder & Principal",
      institution: "Al-Noor Quran Academy",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      quote: "Managing 1,200 remote students across 4 time zones was a operational nightmare of spreadsheets and WhatsApp groups. Switching to BlackStone AI automated our billing and unified classroom scheduling. It completely transformed our operations.",
      metrics: [
        { label: "Admin Overhead Saved", value: "35 hrs/wk" },
        { label: "Tuition Recovery Rate", value: "98.4%" }
      ]
    },
    {
      name: "Rebecca Sterling",
      role: "Executive Registrar",
      institution: "Vanguard Online Prep School",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
      quote: "Our student retention rate surged after introducing the BlackStone AI Portal. Students love the clear assignment trails, and parents praise the automated WhatsApp updates. It looks and feels incredibly professional.",
      metrics: [
        { label: "Student Retention Gain", value: "+28% YoY" },
        { label: "On-time Invoice Pay", value: "94.5%" }
      ]
    },
    {
      name: "Prof. Michael Lin",
      role: "Academic Coach & Director",
      institution: "Apex STEM Coaching Institute",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      quote: "The Coach evaluation pipelines in BlackStone AI allow us to trace trial bookings, log test performances, and email automated reports directly to parents in 2 clicks. Highly recommended for coaching institutes.",
      metrics: [
        { label: "Trial-to-Student Conv.", value: "82.4%" },
        { label: "Parent Satisfaction", value: "99.2%" }
      ]
    },
    {
      name: "Tariq Mahmood",
      role: "Instructor / Faculty Member",
      institution: "Global Arabic Language Center",
      photo: "https://images.unsplash.com/photo-1620122303020-43ec4b6cf7f8?q=80&w=150&auto=format&fit=crop",
      quote: "As a teacher, I love having everything in one place. I check my schedule, mark attendance, log student grades, and view my exact hourly earnings at the end of the day without chasing admins.",
      metrics: [
        { label: "Weekly Prep Time Saved", value: "8 hrs" },
        { label: "Class Attendance Avg", value: "97.6%" }
      ]
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-light-bg-2/80 backdrop-blur-sm text-slate-900 border-b border-slate-100">
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-primary-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-primary-blue/10 bg-primary-blue/5 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              Success Stories
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Trusted by 500+ Academies Globally
            </h2>
          </div>
          {/* Nav buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 transition-all cursor-pointer"
              aria-label="Previous story"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 transition-all cursor-pointer"
              aria-label="Next story"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/85 border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative min-h-[380px] z-10 backdrop-blur-sm">
          {/* Quote & Profile */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full gap-8">
            <p className="font-sans font-light text-lg sm:text-xl text-slate-800 leading-relaxed italic">
              "{current.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={current.photo}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary-blue/30"
              />
              <div>
                <h4 className="font-display font-bold text-base text-slate-900 leading-tight">{current.name}</h4>
                <p className="text-xs text-slate-500">{current.role} • <span className="text-primary-blue font-semibold">{current.institution}</span></p>
              </div>
            </div>
          </div>

          {/* Metrics Column */}
          <div className="lg:col-span-4 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
            {current.metrics.map((metric, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100/60 p-5 rounded-2xl">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                  {metric.label}
                </p>
                <p className="text-2xl sm:text-3xl font-black text-slate-950">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                activeIndex === idx ? "w-8 bg-primary-blue" : "w-2.5 bg-slate-200"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );

}

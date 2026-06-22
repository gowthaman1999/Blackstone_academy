"use client";

import React, { useState } from "react";
import { Check, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institutionName: "",
    cohortSize: "100-500",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;
    setSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      institutionName: "",
      cohortSize: "100-500",
      message: ""
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const checklistItems = [
    "Customized module configurations",
    "Direct technical consultation",
    "SLA & integration reviews"
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-bg-2 border-t border-white/10">
      {/* Dynamic gradient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-blue/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Pitch text */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary-blue/30 bg-primary-blue/5 text-primary-blue text-xs font-semibold uppercase tracking-wider w-fit mx-auto lg:mx-0">
            Let's Collaborate
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            See BlackStone AI tailored to your portfolio.
          </h2>
          <p className="text-slate-400 text-base font-sans font-light leading-relaxed">
            Explore custom solutions, schedule a personalized platform tour, and align on an implementation path with our enterprise architects.
          </p>

          {/* Checks list */}
          <ul className="flex flex-col gap-3.5 mt-4 max-w-md mx-auto lg:mx-0">
            {checklistItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3.5 text-sm text-slate-200 font-medium text-left">
                <div className="w-5 h-5 rounded-full bg-primary-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary-blue stroke-[3px]" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative bg-[#050B18]/80">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-bold text-lg text-white">Request Consultation</h3>
              <span className="text-[10px] text-sec-cyan font-semibold uppercase tracking-wider">Response under 2 hours</span>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center p-8 bg-green-500/10 border border-green-500/20 rounded-2xl animate-fade-in gap-3 min-h-[300px]">
                <CheckCircle className="w-12 h-12 text-green-500 animate-bounce" />
                <h4 className="font-bold text-white text-base">Request Submitted Successfully!</h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  Thank you for reaching out. A systems consultant has been notified and will email you directly shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-slate-950/50 border border-white/5 focus:border-primary-blue/70 focus:ring-4 focus:ring-primary-blue/15 hover:border-white/10 transition-all rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-slate-600 shadow-inner"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-slate-950/50 border border-white/5 focus:border-primary-blue/70 focus:ring-4 focus:ring-primary-blue/15 hover:border-white/10 transition-all rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-slate-600 shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Work Email</label>
                    <input
                      type="email"
                      placeholder="john@academy.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950/50 border border-white/5 focus:border-primary-blue/70 focus:ring-4 focus:ring-primary-blue/15 hover:border-white/10 transition-all rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-slate-600 shadow-inner"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Institution Name</label>
                    <input
                      type="text"
                      placeholder="Al-Noor Prep Academy"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full bg-slate-950/50 border border-white/5 focus:border-primary-blue/70 focus:ring-4 focus:ring-primary-blue/15 hover:border-white/10 transition-all rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-slate-600 shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Student Cohort Size</label>
                  <select
                    value={formData.cohortSize}
                    onChange={(e) => setFormData({ ...formData, cohortSize: e.target.value })}
                    className="w-full bg-slate-950/60 border border-white/5 focus:border-primary-blue/70 focus:ring-4 focus:ring-primary-blue/15 hover:border-white/10 transition-all rounded-xl px-4 py-3 text-xs text-white focus:outline-none shadow-inner cursor-pointer"
                  >
                    <option value="1-100" className="bg-[#050B18]">Up to 100 students</option>
                    <option value="100-500" className="bg-[#050B18]">100 to 500 students</option>
                    <option value="500-2000" className="bg-[#050B18]">500 to 2,000 students</option>
                    <option value="2000+" className="bg-[#050B18]">More than 2,000 students</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Message / Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your courses, locations, and integration needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950/50 border border-white/5 focus:border-primary-blue/70 focus:ring-4 focus:ring-primary-blue/15 hover:border-white/10 transition-all rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-slate-600 resize-none shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-blue to-sec-cyan text-white text-xs font-semibold shadow-lg shadow-primary-blue/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Request
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

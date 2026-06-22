"use client";

import React, { useState } from "react";
import { Check, ShieldAlert, Award } from "lucide-react";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for budding Quran academies, local training centers, and individual coaching tutors.",
      price: billingPeriod === "monthly" ? 99 : 79,
      features: [
        "Up to 100 Students",
        "Student & Teacher Portals",
        "Attendance Tracking system",
        "Real-Time Chat & File Sharing",
        "Standard Billing & Invoices",
        "Zoom & Google Meet integration",
        "Email Support",
      ],
      popular: false,
      cta: "Schedule a Starter Demo",
    },
    {
      name: "Professional",
      desc: "The sweet spot for established schools, training organizations, and multi-course academies.",
      price: billingPeriod === "monthly" ? 189 : 149,
      features: [
        "Up to 1,000 Students",
        "Everything in Starter plan",
        "Academic Coach Module",
        "Full LMS Course Curricula",
        "Auto Stripe & PayPal integrations",
        "WhatsApp Business templates",
        "Custom Grading Curves & Rankings",
        "Advanced Revenue Analytics",
        "Priority Support (2-Hour SLA)",
      ],
      popular: true,
      cta: "Start 14-Day Free Trial",
    },
    {
      name: "Enterprise",
      desc: "Custom operational software designed for massive universities, franchises, and school networks.",
      price: "Custom",
      features: [
        "Unlimited Students",
        "Everything in Professional",
        "Dedicated Success Manager",
        "Custom API & CRM Integrations",
        "SSO / Active Directory Sync",
        "White-labeled Student Portals",
        "Dedicated Node hosting (99.99% SLA)",
        "Automated database migrations",
        "24/7 Enterprise Phone Support",
      ],
      popular: false,
      cta: "Contact Enterprise Sales",
    },
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
    <section id="pricing" className="py-24 relative overflow-hidden bg-light-bg-1 text-slate-900 border-b border-slate-100">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-primary-blue/10 bg-primary-blue/5 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Pricing Plans
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Simple, Scale-Friendly Pricing
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-sans font-light mb-8">
            Choose a plan that fits your current cohort size. Save 20% by subscribing to our annual cycle.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex items-center gap-3 p-1.5 bg-slate-100 border border-slate-200/50 rounded-2xl">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/40"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingPeriod === "yearly"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/40"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Yearly billing
              <span className="text-[9px] bg-primary-blue/10 text-primary-blue px-1.5 py-0.5 rounded font-black uppercase">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isProfessional = plan.name === "Professional";
            return (
              <div
                key={index}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.01] ${
                  isProfessional
                    ? "bg-slate-950 text-white border border-slate-900 shadow-2xl scale-102 z-10"
                    : "bg-white border border-slate-200/60 text-slate-900 shadow-[0_8px_30px_rgba(0,0,0,0.015)]"
                }`}
              >
                {isProfessional && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-blue text-[10px] font-black text-white uppercase tracking-wider shadow">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className={`font-display font-extrabold text-2xl mb-1 ${
                    isProfessional ? "text-white" : "text-slate-900"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs font-sans font-light leading-relaxed mb-6 ${
                    isProfessional ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {plan.desc}
                  </p>

                  {/* Price block */}
                  <div className={`mb-6 flex items-baseline gap-1 border-b pb-6 ${
                    isProfessional ? "border-slate-800" : "border-slate-100"
                  }`}>
                    {typeof plan.price === "number" ? (
                      <>
                        <span className={`text-4xl sm:text-5xl font-black tracking-tight ${
                          isProfessional ? "text-white" : "text-slate-900"
                        }`}>
                          ${plan.price}
                        </span>
                        <span className={`text-sm font-medium ${
                          isProfessional ? "text-slate-500" : "text-slate-400"
                        }`}>/month</span>
                      </>
                    ) : (
                      <span className={`text-4xl sm:text-5xl font-black tracking-tight ${
                        isProfessional ? "text-white" : "text-slate-900"
                      }`}>
                        {plan.price}
                      </span>
                    )}
                  </div>

                  {/* Feature Checkmarks */}
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className={`flex items-start gap-3 text-xs font-medium ${
                        isProfessional ? "text-slate-200" : "text-slate-700"
                      }`}>
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isProfessional ? "text-sec-cyan" : "text-primary-blue"
                        }`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA button */}
                <a
                  href="#demo"
                  onClick={handleScrollToDemo}
                  className={`w-full py-4 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                    isProfessional
                      ? "bg-white hover:bg-slate-100 text-slate-950 shadow-lg shadow-white/5"
                      : plan.name === "Starter"
                      ? "bg-primary-blue hover:bg-primary-blue/90 text-white shadow shadow-primary-blue/10"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

}

"use client";

import React, { useState } from "react";
import {
  Users,
  Briefcase,
  Layers,
  GraduationCap,
  CreditCard,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function Features() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Modules" },
    { id: "operations", name: "Operations" },
    { id: "academic", name: "Academics & LMS" },
    { id: "billing", name: "Finances" },
  ];

  const features = [
    {
      category: "operations",
      icon: Users,
      title: "Student Management",
      desc: "End-to-end management of the student journey from enrollment to graduation.",
      items: [
        "Interactive Student Portal",
        "Biometric & RFID Attendance Tracking",
        "Digital Vault for Learning Materials",
        "One-click Assignment Submission",
        "Automated Certificate Generation",
        "Multi-Course Parallel Access",
      ],
      color: "from-primary-blue to-sec-cyan",
      shadow: "shadow-primary-blue/10",
    },
    {
      category: "operations",
      icon: Briefcase,
      title: "Teacher Management",
      desc: "Empower your teaching staff with tools to run their classes, manage schedules, and track growth.",
      items: [
        "Dedicated Teacher Workspace",
        "Dynamic Schedule & Time-Table Planner",
        "Teacher Leave Management Panel",
        "Earnings & Commissions Tracking",
        "Performance Review Analytics",
      ],
      color: "from-primary-indigo to-sec-purple",
      shadow: "shadow-primary-indigo/10",
    },
    {
      category: "academic",
      icon: Sparkles,
      title: "Academic Coach Module",
      desc: "Specially crafted for mentors, coaches, and administrators to evaluate and guide student progress.",
      items: [
        "In-depth Student Evaluations",
        "Trial Session CRM & Lead Tracker",
        "Progress and Weak-point Monitoring",
        "Custom Action-Plan Builder",
        "Parent-Coach Feedback Sync",
      ],
      color: "from-accent-amber to-orange-500",
      shadow: "shadow-accent-amber/10",
    },
    {
      category: "academic",
      icon: GraduationCap,
      title: "Learning Management (LMS)",
      desc: "A premium, distraction-free environment for course delivery, syllabus design, and testing.",
      items: [
        "Rich Multimedia Courses & Syllabus",
        "Interactive Assignments & Exercises",
        "Self-Grading Digital Assessments",
        "Syllabus & Curriculum Management",
        "Leaderboards & Gamified Rankings",
      ],
      color: "from-sec-purple to-primary-blue",
      shadow: "shadow-sec-purple/10",
    },
    {
      category: "billing",
      icon: CreditCard,
      title: "Finance Management",
      desc: "Automate tuition collection, manage subscriptions, and integrate global payment methods.",
      items: [
        "Professional Invoicing & Receipts",
        "Automated Subscription Billing",
        "Stripe and PayPal Direct Integrations",
        "Flexible Multi-Currency Billing Engine",
        "Late Payment Reminders & Alerts",
      ],
      color: "from-sec-cyan to-primary-indigo",
      shadow: "shadow-sec-cyan/10",
    },
    {
      category: "operations",
      icon: MessageSquare,
      title: "Communication Hub",
      desc: "Keep parents, students, and teachers aligned with built-in instant messaging and broadcasts.",
      items: [
        "Real-Time Chat & Group Rooms",
        "Secure File and Material Sharing",
        "Omni-channel Notifications & Alerts",
        "Premium Email Templates",
        "Direct WhatsApp Business Integration",
      ],
      color: "from-green-500 to-sec-cyan",
      shadow: "shadow-green-500/10",
    },
    {
      category: "billing",
      icon: BarChart3,
      title: "Analytics & Custom Reports",
      desc: "Powerful business intelligence queries providing clear, visual, real-time insights.",
      items: [
        "Detailed Institutional Revenue Reports",
        "Attendance Trends and Heatmaps",
        "Teacher Evaluation & Performance Metrics",
        "Student Grade Curve & Performance Analysis",
        "Drag-and-Drop Custom Dashboards",
      ],
      color: "from-primary-blue to-accent-amber",
      shadow: "shadow-primary-blue/10",
    },
  ];

  const filteredFeatures =
    activeCategory === "all"
      ? features
      : features.filter((f) => f.category === activeCategory);

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-light-bg-1/80 backdrop-blur-sm text-slate-900 border-y border-slate-100">
      {/* Background glowing decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-primary-blue/10 bg-primary-blue/5 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Everything You Need To Scale Your Institution
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-sans font-light">
            Eliminate standalone tools. Manage admissions, curricula, live virtual classrooms, subscription invoices, and parent updates in one elegant suite.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="bg-white/85 border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-slate-200/80 hover:scale-[1.01] transition-all flex flex-col justify-between relative z-10 backdrop-blur-sm"
              >
                <div>
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-2xl bg-primary-blue/10 text-primary-blue flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-sans font-light mb-6 leading-relaxed">
                    {feat.desc}
                  </p>

                  {/* Sub-features list */}
                  <ul className="flex flex-col gap-2.5">
                    {feat.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


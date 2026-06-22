"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  GraduationCap,
  Settings,
  ShieldCheck,
  CreditCard,
  LayoutDashboard,
  Calendar,
  BookOpen,
  DollarSign,
  TrendingUp,
  FileSpreadsheet,
  LineChart,
  UserCheck
} from "lucide-react";

type DashboardType = "student" | "teacher" | "admin" | "coach" | "finance";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<DashboardType>("admin");

  const tabs = [
    { id: "admin", label: "Admin Panel", icon: Settings },
    { id: "student", label: "Student Portal", icon: User },
    { id: "teacher", label: "Teacher Portal", icon: GraduationCap },
    { id: "coach", label: "Coach Dashboard", icon: UserCheck },
    { id: "finance", label: "Finance Hub", icon: CreditCard },
  ];

  // Helper render components for each dashboard state to simulate real ERP experience
  const renderDashboardPreview = () => {
    switch (activeTab) {
      case "student":
        return (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col gap-6"
          >
            {/* Header info */}
            <div className="flex justify-between items-center border-b border-foreground/10 pb-4">
              <div>
                <h4 className="text-lg font-bold text-foreground">Assalamu Alaikum, Sophia!</h4>
                <p className="text-xs text-foreground/50">Next Class starts in 45 minutes.</p>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-500 text-xs font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live Session Active
              </span>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Today's Class</span>
                <p className="text-base font-bold text-foreground mt-2">Quran Tajweed - Level 3</p>
                <div className="flex justify-between items-center text-xs text-foreground/60">
                  <span>02:30 PM - 03:30 PM</span>
                  <span className="text-sec-cyan underline font-medium cursor-pointer">Join Meet</span>
                </div>
              </div>

              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Upcoming Exam</span>
                <p className="text-base font-bold text-foreground mt-2">Advanced Fiqh Midterm</p>
                <div className="flex justify-between items-center text-xs text-foreground/60">
                  <span>June 28, 2026</span>
                  <span className="bg-accent-amber/15 text-accent-amber px-2 py-0.5 rounded font-bold">5 Days Left</span>
                </div>
              </div>

              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Course Progress</span>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-2xl font-black text-foreground">84%</span>
                  <span className="text-xs text-green-500 font-extrabold">+4.2% this week</span>
                </div>
                <div className="w-full bg-foreground/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-blue to-sec-cyan h-full w-[84%]" />
                </div>
              </div>
            </div>

            {/* Activity Stream */}
            <div className="border border-foreground/10 bg-foreground/5 rounded-2xl p-5">
              <h5 className="text-sm font-bold text-foreground mb-4">Syllabus & Material Access</h5>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 bg-background/50 border border-foreground/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-blue/15 text-primary-blue flex items-center justify-center font-bold text-xs">PDF</div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Tajweed Pronunciation Guide.pdf</p>
                      <p className="text-[10px] text-foreground/40">Syllabus Module 4 • 2.4 MB</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 rounded bg-foreground text-background text-[11px] font-bold">Download</button>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 border border-foreground/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sec-purple/15 text-sec-purple flex items-center justify-center font-bold text-xs">MP3</div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Surah Maryam Recitation Guide.mp3</p>
                      <p className="text-[10px] text-foreground/40">Audio Practice • 12 MB</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 rounded bg-foreground text-background text-[11px] font-bold">Listen</button>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "teacher":
        return (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col gap-6"
          >
            <div className="flex justify-between items-center border-b border-foreground/10 pb-4">
              <div>
                <h4 className="text-lg font-bold text-foreground">Teacher Portal - Welcome Dr. Jenkins!</h4>
                <p className="text-xs text-foreground/50">You have 4 active classes scheduled for today.</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-lg bg-primary-blue/10 text-primary-blue text-xs font-bold">4.9/5 Rating</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Total Hours Taught</span>
                <p className="text-3xl font-black text-foreground mt-2">128 hrs</p>
                <span className="text-[10px] text-foreground/40">This month payroll cycles</span>
              </div>
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Active Earnings</span>
                <div className="flex items-baseline gap-1.5 mt-2">
                  <span className="text-3xl font-black text-foreground">$3,840</span>
                  <span className="text-xs text-green-500 font-extrabold">+18% vs last month</span>
                </div>
                <span className="text-[10px] text-foreground/40">Calculated base + student hourly bonuses</span>
              </div>
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Class Attendance Avg</span>
                <p className="text-3xl font-black text-foreground mt-2">97.8%</p>
                <div className="w-full bg-foreground/10 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-green-500 h-full w-[97%]" />
                </div>
              </div>
            </div>

            <div className="border border-foreground/10 bg-foreground/5 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-sm font-bold text-foreground">Gradebook Pending Submissions</h5>
                <span className="text-[11px] text-sec-cyan hover:underline cursor-pointer">View Gradebook</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/10 text-foreground/50 font-bold">
                      <th className="pb-2 font-semibold">Student Name</th>
                      <th className="pb-2 font-semibold">Class Group</th>
                      <th className="pb-2 font-semibold">Assignment Title</th>
                      <th className="pb-2 font-semibold">Due Date</th>
                      <th className="pb-2 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-foreground/5">
                      <td className="py-2.5 font-bold text-foreground">Zainab Khan</td>
                      <td className="py-2.5 text-foreground/80">Fiqh - Batch B</td>
                      <td className="py-2.5 text-foreground/80">Sujood Rules Essay</td>
                      <td className="py-2.5 text-foreground/50">Yesterday</td>
                      <td className="py-2.5 text-right"><button className="px-2.5 py-1 rounded bg-primary-blue text-white font-bold text-[10px]">Evaluate</button></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-foreground">Liam Davis</td>
                      <td className="py-2.5 text-foreground/80">Quran Recitation - Grade 11</td>
                      <td className="py-2.5 text-foreground/80">Audio Recording #2</td>
                      <td className="py-2.5 text-foreground/50">June 25, 2026</td>
                      <td className="py-2.5 text-right"><button className="px-2.5 py-1 rounded bg-primary-blue text-white font-bold text-[10px]">Evaluate</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        );

      case "admin":
        return (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col gap-6"
          >
            <div className="flex justify-between items-center border-b border-foreground/10 pb-4">
              <div>
                <h4 className="text-lg font-bold text-foreground">Global Operations Dashboard</h4>
                <p className="text-xs text-foreground/50">Institution: Al-Noor Global Academy</p>
              </div>
              <span className="px-3 py-1 rounded-lg bg-primary-blue/15 text-primary-blue text-xs font-bold">SYSTEM ACTIVE</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between">
                <span className="text-[10px] text-foreground/50 uppercase font-semibold">Total Students</span>
                <p className="text-2xl font-black text-foreground mt-1">4,282</p>
                <span className="text-[9px] text-green-500 font-bold mt-1">+140 this month</span>
              </div>
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between">
                <span className="text-[10px] text-foreground/50 uppercase font-semibold">Staff Members</span>
                <p className="text-2xl font-black text-foreground mt-1">114</p>
                <span className="text-[9px] text-foreground/40 mt-1">12 pending hire</span>
              </div>
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between">
                <span className="text-[10px] text-foreground/50 uppercase font-semibold">Active Classes</span>
                <p className="text-2xl font-black text-foreground mt-1">482</p>
                <span className="text-[9px] text-sec-cyan font-bold mt-1">98.9% attendance</span>
              </div>
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between">
                <span className="text-[10px] text-foreground/50 uppercase font-semibold">Total ARR</span>
                <p className="text-2xl font-black text-foreground mt-1">$94,520</p>
                <span className="text-[9px] text-green-500 font-bold mt-1">+12.4% MoM</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-foreground/10 bg-foreground/5 rounded-2xl p-5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-3">Live Class Hub Status</h5>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground/80">Zoom API Integrations</span>
                    <span className="text-green-500 font-bold">Operational</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground/80">Stripe Payment Gateway</span>
                    <span className="text-green-500 font-bold">Operational</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground/80">WhatsApp SMS Broadcasts</span>
                    <span className="text-green-500 font-bold">Operational</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground/80">AWS Video Encoding Pipelines</span>
                    <span className="text-green-500 font-bold">Operational</span>
                  </div>
                </div>
              </div>

              <div className="border border-foreground/10 bg-foreground/5 rounded-2xl p-5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-3">Recent Security Access Logs</h5>
                <div className="flex flex-col gap-2.5 text-[11px]">
                  <div className="flex justify-between items-center text-foreground/80 border-b border-foreground/5 pb-1">
                    <span>Admin login (IP: 192.168.1.1)</span>
                    <span className="text-foreground/45">Just now</span>
                  </div>
                  <div className="flex justify-between items-center text-foreground/80 border-b border-foreground/5 pb-1">
                    <span>Teacher Jenkins grade override</span>
                    <span className="text-foreground/45">4 mins ago</span>
                  </div>
                  <div className="flex justify-between items-center text-foreground/80">
                    <span>MFA token verified for Sophia Vance</span>
                    <span className="text-foreground/45">12 mins ago</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "coach":
        return (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col gap-6"
          >
            <div className="flex justify-between items-center border-b border-foreground/10 pb-4">
              <div>
                <h4 className="text-lg font-bold text-foreground">Academic Coaching Module</h4>
                <p className="text-xs text-foreground/50">Track trials, schedule evaluations, and review parent evaluations.</p>
              </div>
              <span className="px-3 py-1 rounded-lg bg-accent-amber/10 text-accent-amber text-xs font-bold">32 Pending Evaluations</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Demo Trials Booked</span>
                <p className="text-3xl font-black text-foreground mt-2">48 trials</p>
                <span className="text-[10px] text-green-500 font-bold">+24% conversion rating</span>
              </div>
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Active Action Plans</span>
                <p className="text-3xl font-black text-foreground mt-2">126 plans</p>
                <span className="text-[10px] text-foreground/40">Custom curriculum adjustments</span>
              </div>
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Trial to Student Rate</span>
                <p className="text-3xl font-black text-foreground mt-2">78.5%</p>
                <div className="w-full bg-foreground/10 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-accent-amber h-full w-[78%]" />
                </div>
              </div>
            </div>

            <div className="border border-foreground/10 bg-foreground/5 rounded-2xl p-5">
              <h5 className="text-sm font-bold text-foreground mb-4">Trial Session Conversion Pipeline</h5>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs text-center">
                <div className="p-3 bg-background/50 border border-foreground/5 rounded-xl">
                  <p className="font-bold text-foreground">1. Scheduled</p>
                  <p className="text-lg font-black text-primary-blue mt-1">32</p>
                </div>
                <div className="p-3 bg-background/50 border border-foreground/5 rounded-xl">
                  <p className="font-bold text-foreground">2. Completed</p>
                  <p className="text-lg font-black text-sec-purple mt-1">24</p>
                </div>
                <div className="p-3 bg-background/50 border border-foreground/5 rounded-xl">
                  <p className="font-bold text-foreground">3. Evaluated</p>
                  <p className="text-lg font-black text-accent-amber mt-1">18</p>
                </div>
                <div className="p-3 bg-background/50 border border-foreground/5 rounded-xl">
                  <p className="font-bold text-foreground">4. Converted</p>
                  <p className="text-lg font-black text-green-500 mt-1">14</p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "finance":
        return (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col gap-6"
          >
            <div className="flex justify-between items-center border-b border-foreground/10 pb-4">
              <div>
                <h4 className="text-lg font-bold text-foreground">Finance Hub & Billing Engine</h4>
                <p className="text-xs text-foreground/50">Stripe and PayPal accounts linked and operational.</p>
              </div>
              <span className="px-3 py-1 rounded-lg bg-green-500/10 text-green-500 text-xs font-bold">Auto-Billing: ON</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Outstanding Invoices</span>
                <p className="text-3xl font-black text-foreground mt-2">$2,840</p>
                <span className="text-[10px] text-red-500 font-medium">8 invoices overdue (auto-emailing)</span>
              </div>
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Total Revenue (MTD)</span>
                <p className="text-3xl font-black text-foreground mt-2">$42,940</p>
                <span className="text-[10px] text-green-500 font-bold">+16.4% vs last month</span>
              </div>
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-4 flex flex-col justify-between h-32">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Stripe Balance</span>
                <p className="text-3xl font-black text-foreground mt-2">$14,842</p>
                <span className="text-[10px] text-foreground/40">Payout scheduled for tomorrow</span>
              </div>
            </div>

            <div className="border border-foreground/10 bg-foreground/5 rounded-2xl p-5">
              <h5 className="text-sm font-bold text-foreground mb-4">Subscription Billing Plan Mix</h5>
              <div className="flex flex-col gap-3">
                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-1">
                    <span>Professional Plan ($149/mo)</span>
                    <span>72% of students</span>
                  </div>
                  <div className="w-full bg-foreground/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary-blue to-sec-cyan h-full w-[72%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-1">
                    <span>Starter Plan ($79/mo)</span>
                    <span>18% of students</span>
                  </div>
                  <div className="w-full bg-foreground/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary-blue to-sec-cyan h-full w-[18%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-1">
                    <span>Enterprise (Custom)</span>
                    <span>10% of students</span>
                  </div>
                  <div className="w-full bg-foreground/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary-blue to-sec-cyan h-full w-[10%]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-background border-t border-foreground/10">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary-indigo/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary-indigo/30 bg-primary-indigo/5 text-primary-indigo text-xs font-semibold uppercase tracking-wider mb-4">
            <LayoutDashboard className="w-3.5 h-3.5" />
            3D Product Showcase
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Intuitive Experiences for All Roles
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg font-sans font-light">
            Switch between specialized dashboard interfaces. Designed with Apple-level detailing, responsive charts, and glassmorphic micro-interactions.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as DashboardType)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 border transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-primary-blue to-primary-indigo text-white border-transparent shadow-lg shadow-primary-blue/15"
                    : "bg-transparent text-foreground/80 border-foreground/10 hover:border-foreground/20 hover:bg-foreground/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Showcase */}
        <div className="max-w-5xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
          {/* Dashboard Frame Header */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-red-500/50" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <span className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="text-[11px] text-foreground/30 font-mono ml-4">https://app.blackstone.ai/dashboard</span>
          </div>

          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              {renderDashboardPreview()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

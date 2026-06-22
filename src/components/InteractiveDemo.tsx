"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  CreditCard,
  BarChart3,
  Search,
  Plus,
  Send,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet
} from "lucide-react";

// Types for ERP Simulator
type ERPModule = "overview" | "students" | "classes" | "invoices" | "analytics";

interface Student {
  id: string;
  name: string;
  grade: string;
  courses: string[];
  status: "Active" | "Trial" | "Inactive";
  attendance: string;
  performance: string;
  parentEmail: string;
  avatar: string;
}

interface Invoice {
  id: string;
  studentName: string;
  amount: number;
  dueDate: string;
  status: "Paid" | "Pending" | "Overdue";
}

interface ClassSession {
  id: string;
  title: string;
  teacher: string;
  time: string;
  day: string;
  students: number;
}

export default function InteractiveDemo() {
  const [activeModule, setActiveModule] = useState<ERPModule>("overview");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [alertMsg, setAlertMsg] = useState<string | null>(null);
  const [evaluationInput, setEvaluationInput] = useState("");

  // Simulated ERP State
  const [students, setStudents] = useState<Student[]>([
    {
      id: "ST-01",
      name: "Sophia Vance",
      grade: "Grade 12",
      courses: ["Quran Tajweed - Level 3", "Advanced Fiqh"],
      status: "Active",
      attendance: "98.6%",
      performance: "A+ Excellent",
      parentEmail: "vance.family@example.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: "ST-02",
      name: "Zainab Khan",
      grade: "Grade 10",
      courses: ["Intro to Arabic Grammar"],
      status: "Active",
      attendance: "94.2%",
      performance: "A- Steady",
      parentEmail: "khan.homeschool@example.com",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: "ST-03",
      name: "Liam Davis",
      grade: "Grade 11",
      courses: ["Quran Memorization - Surah Kahf", "Islamic History"],
      status: "Trial",
      attendance: "100%",
      performance: "Pending Evaluation",
      parentEmail: "davis.prep@example.com",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: "ST-04",
      name: "Omar Farooq",
      grade: "Grade 9",
      courses: ["Basic Arabic Alphabet"],
      status: "Active",
      attendance: "91.8%",
      performance: "B+ Needs Practice",
      parentEmail: "farooq.firm@example.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: "ST-05",
      name: "Yusuf Ali",
      grade: "Grade 12",
      courses: ["Quran Tajweed - Level 3", "Islamic Finance"],
      status: "Active",
      attendance: "97.5%",
      performance: "A Outstanding",
      parentEmail: "yusuf.ali.contractor@example.com",
      avatar: "https://images.unsplash.com/photo-1620122303020-43ec4b6cf7f8?q=80&w=150&auto=format&fit=crop"
    }
  ]);

  const [invoices, setInvoices] = useState<Invoice[]>([
    { id: "INV-2041", studentName: "Sophia Vance", amount: 149, dueDate: "2026-06-25", status: "Pending" },
    { id: "INV-2042", studentName: "Zainab Khan", amount: 149, dueDate: "2026-06-26", status: "Pending" },
    { id: "INV-2043", studentName: "Liam Davis", amount: 79, dueDate: "2026-06-18", status: "Overdue" },
    { id: "INV-2044", studentName: "Omar Farooq", amount: 79, dueDate: "2026-06-28", status: "Pending" },
    { id: "INV-2045", studentName: "Yusuf Ali", amount: 149, dueDate: "2026-06-21", status: "Paid" }
  ]);

  const [classes, setClasses] = useState<ClassSession[]>([
    { id: "CLS-101", title: "Quran Tajweed - Level 3", teacher: "Dr. Sarah Jenkins", time: "02:30 PM", day: "Mon/Wed", students: 12 },
    { id: "CLS-102", title: "Intro to Arabic Grammar", teacher: "Ustadh Ahmed", time: "11:00 AM", day: "Tue/Thu", students: 8 },
    { id: "CLS-103", title: "Advanced Fiqh", teacher: "Sheikh Faisal", time: "04:00 PM", day: "Mon", students: 15 },
    { id: "CLS-104", title: "Quran Memorization - Surah Kahf", teacher: "Ustadh Ahmed", time: "09:00 AM", day: "Fri", students: 6 }
  ]);

  // Simulated metrics derived from states
  const totalRevenue = invoices.reduce((sum, inv) => inv.status === "Paid" ? sum + inv.amount : sum, 94250);
  const pendingInvoicesCount = invoices.filter(inv => inv.status !== "Paid").length;

  const handlePayInvoice = (id: string) => {
    setInvoices(prev =>
      prev.map(inv => (inv.id === id ? { ...inv, status: "Paid" } : inv))
    );
    triggerAlert("Invoice payment collected successfully!");
  };

  const handleAddClass = () => {
    const newClass: ClassSession = {
      id: `CLS-${Math.floor(Math.random() * 100) + 110}`,
      title: "New Quran Tajweed Session",
      teacher: "Dr. Sarah Jenkins",
      time: "05:30 PM",
      day: "Tue",
      students: 0
    };
    setClasses(prev => [...prev, newClass]);
    triggerAlert("A new virtual classroom session has been scheduled.");
  };

  const handleUpdatePerformance = (studentId: string) => {
    if (!evaluationInput.trim()) return;
    setStudents(prev =>
      prev.map(st => (st.id === studentId ? { ...st, performance: evaluationInput } : st))
    );
    if (selectedStudent) {
      setSelectedStudent(prev => prev ? { ...prev, performance: evaluationInput } : null);
    }
    setEvaluationInput("");
    triggerAlert("Academic evaluation metrics updated.");
  };

  const triggerAlert = (msg: string) => {
    setAlertMsg(msg);
    setTimeout(() => setAlertMsg(null), 4000);
  };

  // Nav Items config
  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "students", label: "Students", icon: Users },
    { id: "classes", label: "Classes", icon: Calendar },
    { id: "invoices", label: "Invoices", icon: CreditCard },
    { id: "analytics", label: "Analytics", icon: BarChart3 }
  ];

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-background border-t border-foreground/10">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-primary-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sec-cyan/30 bg-sec-cyan/5 text-sec-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Sandbox
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Simulate the ERP Dashboard
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg font-sans font-light">
            Test a live mock client simulation below. Toggle through students, collect tuition payments, schedule classes, and view real-time calculations.
          </p>
        </div>

        {/* Alerts Center */}
        {alertMsg && (
          <div className="fixed bottom-6 right-6 z-50 px-5 py-4 bg-green-500 border border-green-400 text-white rounded-2xl shadow-xl flex items-center gap-3 animate-slide-in font-bold text-sm max-w-sm">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span>{alertMsg}</span>
          </div>
        )}

        {/* Dashboard Simulation Board */}
        <div className="bg-[#0f172a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[580px]">
          
          {/* Sidebar Navigation */}
          <div className="w-full md:w-60 bg-background/40 border-r border-white/5 p-4 flex flex-row md:flex-col justify-between shrink-0 gap-4 overflow-x-auto md:overflow-x-visible">
            <div className="flex flex-row md:flex-col gap-2 w-full">
              {/* Institution Title */}
              <div className="hidden md:flex items-center gap-2 px-3 py-4 mb-4 border-b border-white/5">
                <div className="w-6 h-6 rounded bg-gradient-to-tr from-primary-blue to-sec-cyan" />
                <span className="font-display font-bold text-sm text-foreground">Al-Noor Academy</span>
              </div>
              
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeModule === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveModule(item.id as ERPModule);
                      setSelectedStudent(null);
                    }}
                    className={`px-3.5 py-3 rounded-xl text-xs font-semibold flex items-center gap-3 transition-all cursor-pointer whitespace-nowrap md:w-full ${
                      isActive
                        ? "bg-primary-blue text-white shadow-md shadow-primary-blue/15"
                        : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Core App Display */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            
            {/* OVERVIEW PANEL */}
            {activeModule === "overview" && (
              <div className="flex flex-col gap-6 w-full">
                {/* Header title */}
                <div className="flex justify-between items-center">
                  <h3 className="font-display font-bold text-xl text-foreground">Institutional Overview</h3>
                  <span className="text-xs text-foreground/50">Updated in real-time</span>
                </div>

                {/* Core metrics cards row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-background/35 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                    <span className="text-[10px] text-foreground/50 uppercase font-semibold">Total Students</span>
                    <span className="text-3xl font-black text-foreground mt-2">{students.length}</span>
                    <span className="text-[9px] text-green-500 font-bold">100% active licenses</span>
                  </div>
                  <div className="bg-background/35 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                    <span className="text-[10px] text-foreground/50 uppercase font-semibold">Net Tuition Paid</span>
                    <span className="text-3xl font-black text-foreground mt-2">${totalRevenue.toLocaleString()}</span>
                    <span className="text-[9px] text-foreground/40">Includes Stripe automatic payouts</span>
                  </div>
                  <div className="bg-background/35 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                    <span className="text-[10px] text-foreground/50 uppercase font-semibold">Active Classes Today</span>
                    <span className="text-3xl font-black text-foreground mt-2">{classes.length}</span>
                    <span className="text-[9px] text-sec-cyan font-bold">98.4% student check-in avg</span>
                  </div>
                </div>

                {/* Simulated live sessions class-roll */}
                <div className="border border-white/5 bg-background/20 rounded-2xl p-5 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-bold text-foreground">Live Virtual Classrooms Activity</h4>
                    <button
                      onClick={handleAddClass}
                      className="px-3.5 py-1.5 rounded-lg bg-foreground text-background text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> Schedule Class
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {classes.map((cls) => (
                      <div key={cls.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-background/50 border border-white/5 rounded-xl gap-3">
                        <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                          <div>
                            <p className="text-xs font-bold text-foreground">{cls.title}</p>
                            <p className="text-[10px] text-foreground/55">{cls.teacher} • {cls.day} • {cls.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 justify-between">
                          <span className="text-[10px] text-foreground/50">{cls.students} Students Checked In</span>
                          <button className="px-3 py-1 rounded bg-primary-blue text-white text-[10px] font-bold">Join Meet</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STUDENTS PANEL */}
            {activeModule === "students" && (
              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="font-display font-bold text-xl text-foreground">Student Directory</h3>
                  {/* Search Bar */}
                  <div className="relative max-w-xs w-full">
                    <Search className="w-4 h-4 text-foreground/40 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search students..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-background/45 border border-white/5 rounded-xl pl-9 pr-4 py-2 text-xs text-foreground focus:outline-none focus:border-primary-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Student list */}
                  <div className="lg:col-span-7 flex flex-col gap-2.5">
                    {students
                      .filter(st => st.name.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((st) => (
                        <div
                          key={st.id}
                          onClick={() => {
                            setSelectedStudent(st);
                            setEvaluationInput("");
                          }}
                          className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ${
                            selectedStudent?.id === st.id
                              ? "bg-primary-blue/15 border-primary-blue/30"
                              : "bg-background/40 border-white/5 hover:border-white/10"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <img src={st.avatar} alt={st.name} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                              <p className="text-xs font-bold text-foreground">{st.name}</p>
                              <p className="text-[10px] text-foreground/50">{st.grade} • ID: {st.id}</p>
                            </div>
                          </div>
                          <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${
                            st.status === "Active"
                              ? "bg-green-500/10 text-green-500"
                              : st.status === "Trial"
                              ? "bg-accent-amber/10 text-accent-amber"
                              : "bg-foreground/10 text-foreground/50"
                          }`}>
                            {st.status}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/* Profile detailed side panel */}
                  <div className="lg:col-span-5 bg-background/35 border border-white/5 rounded-2xl p-5 min-h-[300px] flex flex-col justify-between">
                    {selectedStudent ? (
                      <div className="flex flex-col gap-5 h-full">
                        <div className="flex items-center gap-3.5 pb-4 border-b border-white/5">
                          <img src={selectedStudent.avatar} alt={selectedStudent.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                          <div>
                            <h4 className="text-sm font-bold text-foreground">{selectedStudent.name}</h4>
                            <p className="text-[11px] text-foreground/50">{selectedStudent.parentEmail}</p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3 text-xs">
                          <div>
                            <span className="text-foreground/45">Courses Enrolled:</span>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {selectedStudent.courses.map((c, i) => (
                                <span key={i} className="px-2 py-0.5 rounded bg-foreground/5 border border-white/5 text-[10px] text-foreground/90 font-medium">
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/45">Average Attendance:</span>
                            <span className="font-bold text-foreground">{selectedStudent.attendance}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/45">Performance Rating:</span>
                            <span className="font-bold text-sec-cyan">{selectedStudent.performance}</span>
                          </div>
                        </div>

                        {/* Actions (evaluate student metrics) */}
                        <div className="border-t border-white/5 pt-4 mt-2">
                          <p className="text-[10px] text-foreground/50 uppercase font-semibold mb-2">Update Coach Evaluation</p>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="e.g. A+ Needs Vocab help"
                              value={evaluationInput}
                              onChange={(e) => setEvaluationInput(e.target.value)}
                              className="flex-1 bg-background/55 border border-white/5 rounded-xl px-3 py-1.5 text-xs text-foreground focus:outline-none"
                            />
                            <button
                              onClick={() => handleUpdatePerformance(selectedStudent.id)}
                              className="p-2 rounded-xl bg-primary-blue text-white hover:scale-105 transition-transform"
                            >
                              <Send className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-center text-foreground/40 p-6 my-auto">
                        <Users className="w-10 h-10 mb-3 text-foreground/20" />
                        <p className="text-xs font-semibold">Select a student record to inspect grades, evaluations, and contact info.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* CLASSES PANEL */}
            {activeModule === "classes" && (
              <div className="flex flex-col gap-6 w-full">
                <div className="flex justify-between items-center">
                  <h3 className="font-display font-bold text-xl text-foreground">Academy Class Timetable</h3>
                  <button
                    onClick={handleAddClass}
                    className="px-4 py-2 rounded-xl bg-primary-blue text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> Add Virtual Session
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <div className="grid grid-cols-5 gap-3 min-w-[640px] text-xs">
                    {/* Days Column */}
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => {
                      const dayClasses = classes.filter(c => c.day.includes(day.slice(0, 3)));
                      return (
                        <div key={day} className="bg-background/25 border border-white/5 rounded-2xl p-4 flex flex-col gap-3 min-h-[220px]">
                          <span className="font-bold text-foreground/40 uppercase tracking-wider text-[10px] pb-2 border-b border-white/5">
                            {day}
                          </span>
                          {dayClasses.map((c) => (
                            <div key={c.id} className="p-3 bg-foreground/5 border border-white/5 rounded-xl">
                              <p className="font-bold text-foreground text-[11px] leading-tight">{c.title}</p>
                              <p className="text-[9px] text-foreground/50 mt-1">{c.time}</p>
                              <p className="text-[9px] text-sec-cyan font-semibold mt-0.5">{c.teacher}</p>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* INVOICES PANEL */}
            {activeModule === "invoices" && (
              <div className="flex flex-col gap-6 w-full">
                <div className="flex justify-between items-center">
                  <h3 className="font-display font-bold text-xl text-foreground">Tuition Invoices</h3>
                  <span className="text-xs bg-red-500/10 text-red-500 px-3 py-1 rounded-lg font-bold">
                    {pendingInvoicesCount} Pending Collections
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-foreground/50 font-bold">
                        <th className="pb-3">Invoice ID</th>
                        <th className="pb-3">Student Name</th>
                        <th className="pb-3">Due Date</th>
                        <th className="pb-3">Amount</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3 text-right">Collect action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((inv) => (
                        <tr key={inv.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="py-3 font-mono font-bold text-foreground">{inv.id}</td>
                          <td className="py-3 font-bold text-foreground">{inv.studentName}</td>
                          <td className="py-3 text-foreground/50">{inv.dueDate}</td>
                          <td className="py-3 font-bold text-foreground">${inv.amount}</td>
                          <td className="py-3">
                            <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                              inv.status === "Paid"
                                ? "bg-green-500/10 text-green-500"
                                : inv.status === "Pending"
                                ? "bg-accent-amber/10 text-accent-amber animate-pulse"
                                : "bg-red-500/10 text-red-500"
                            }`}>
                              {inv.status}
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            {inv.status !== "Paid" ? (
                              <button
                                onClick={() => handlePayInvoice(inv.id)}
                                className="px-3 py-1.5 rounded-lg bg-primary-blue hover:bg-primary-indigo text-white font-bold text-[10px] shadow"
                              >
                                Mark Paid
                              </button>
                            ) : (
                              <span className="text-foreground/40 font-medium">Collected ✓</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ANALYTICS PANEL */}
            {activeModule === "analytics" && (
              <div className="flex flex-col gap-6 w-full">
                <div className="flex justify-between items-center">
                  <h3 className="font-display font-bold text-xl text-foreground">Cohort Performance & Growth</h3>
                  <span className="text-xs text-foreground/50">Period: Q2 2026</span>
                </div>

                {/* SVG/HTML Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Student Growth Chart */}
                  <div className="border border-white/5 bg-background/20 rounded-2xl p-5">
                    <h5 className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-sec-cyan" /> Monthly Enrollment Growth
                    </h5>
                    
                    {/* Simulated bar chart graph */}
                    <div className="flex items-end justify-between h-40 pt-4 px-2">
                      {[
                        { val: 40, label: "Jan" },
                        { val: 55, label: "Feb" },
                        { val: 75, label: "Mar" },
                        { val: 68, label: "Apr" },
                        { val: 95, label: "May" },
                        { val: 120, label: "Jun" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 flex-1 group">
                          <div className="relative w-7 bg-gradient-to-t from-primary-blue to-sec-cyan rounded-t-lg transition-all group-hover:scale-y-105 origin-bottom" style={{ height: `${(item.val / 120) * 110}px` }}>
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-slate-900 border border-white/10 px-1.5 py-0.5 rounded">
                              {item.val}
                            </span>
                          </div>
                          <span className="text-[10px] text-foreground/45">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Revenue Collections spark lines */}
                  <div className="border border-white/5 bg-background/20 rounded-2xl p-5">
                    <h5 className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <FileSpreadsheet className="w-4 h-4 text-sec-purple" /> Net Tuition Income ($)
                    </h5>
                    
                    {/* Sparkline curve via SVG path */}
                    <div className="relative h-40 w-full flex flex-col justify-between pt-2">
                      <svg viewBox="0 0 300 100" className="w-full h-28 overflow-visible">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area */}
                        <path d="M 0 80 Q 50 60 100 70 T 200 30 T 300 10 L 300 100 L 0 100 Z" fill="url(#chartGrad)" />
                        {/* Line */}
                        <path d="M 0 80 Q 50 60 100 70 T 200 30 T 300 10" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
                        {/* Points */}
                        <circle cx="100" cy="70" r="4" fill="#06B6D4" />
                        <circle cx="200" cy="30" r="4" fill="#0066FF" />
                        <circle cx="300" cy="10" r="4" fill="#8B5CF6" />
                      </svg>
                      <div className="flex justify-between text-[10px] text-foreground/45 pt-1">
                        <span>$82K (Apr)</span>
                        <span>$88K (May)</span>
                        <span>$94.5K (Jun)</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

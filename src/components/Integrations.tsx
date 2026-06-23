"use client";

import React from "react";
import {
  Video,
  CreditCard,
  MessageSquare,
  HardDrive,
  LogIn,
  Layers,
  ChevronRight
} from "lucide-react";

export default function Integrations() {
  const integrations = [
    { name: "Zoom Video Meetings", cat: "Virtual Classroom", icon: Video, color: "from-blue-500 to-blue-600" },
    { name: "Microsoft Teams", cat: "Virtual Classroom", icon: Layers, color: "from-indigo-500 to-indigo-600" },
    { name: "Google Meet", cat: "Virtual Classroom", icon: Video, color: "from-green-500 to-emerald-600" },
    { name: "Stripe Subscriptions", cat: "Tuition Billing", icon: CreditCard, color: "from-purple-500 to-violet-600" },
    { name: "PayPal Direct", cat: "Tuition Billing", icon: CreditCard, color: "from-blue-700 to-sky-600" },
    { name: "Microsoft Office 365", cat: "Productivity", icon: Layers, color: "from-red-500 to-orange-600" },
    { name: "WhatsApp Business SMS", cat: "Communication", icon: MessageSquare, color: "from-emerald-500 to-green-600" },
    { name: "Google Drive Cloud", cat: "File Storage", icon: HardDrive, color: "from-yellow-500 to-amber-600" },
    { name: "OneDrive Storage", cat: "File Storage", icon: HardDrive, color: "from-blue-600 to-indigo-700" },
    { name: "Google Single Sign-On", cat: "Authentication", icon: LogIn, color: "from-red-400 to-red-500" },
    { name: "Apple ID Single Sign-On", cat: "Authentication", icon: LogIn, color: "from-slate-700 to-slate-900" },
  ];

  return (
    <section id="integrations" className="py-24 relative overflow-hidden bg-light-bg-2/80 backdrop-blur-sm text-slate-900 border-b border-slate-100">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-primary-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header left */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-primary-blue/10 bg-primary-blue/5 text-primary-blue text-xs font-bold uppercase tracking-wider w-fit mx-auto lg:mx-0">
              <Layers className="w-3.5 h-3.5" />
              Connected Ecosystem
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Connects With Your Favorite Tools
            </h2>
            <p className="text-slate-500 text-base font-sans font-light leading-relaxed">
              BlackStone AI acts as the operational nerve center of your academy. Launch Zoom meetings, charge credit cards via Stripe, or sync syllabus folders to Google Drive instantly.
            </p>
            <a
              href="#demo"
              className="group text-sm font-bold text-primary-blue flex items-center gap-1 justify-center lg:justify-start hover:underline cursor-pointer"
            >
              See Integrations in Sandbox
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Scrolling Floating grid right */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[420px] overflow-y-auto pr-2 custom-scroll">
            {integrations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/85 border border-slate-100 p-5 rounded-2xl flex flex-col justify-between h-32 hover:scale-[1.02] hover:border-slate-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all shadow-sm cursor-default relative z-10 backdrop-blur-sm"
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-sm`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-800 leading-tight">{item.name}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium">{item.cat}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );

}

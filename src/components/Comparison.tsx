"use client";

import React, { useState } from "react";
import { Check, X, ShieldAlert, Zap } from "lucide-react";

export default function Comparison() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const compareData = [
    {
      feature: "All-In-One Platform",
      desc: "Combines CRM, LMS, Billing, & Parent communications under one single user login.",
      edusuite: true,
      schoolMgmt: "Partial (Needs plugins)",
      lms: "No (Academics only)",
      crm: "No (Sales only)"
    },
    {
      feature: "Live Class Management",
      desc: "Native Zoom, Teams & Google Meet triggers with automated attendance and recording sync.",
      edusuite: true,
      schoolMgmt: false,
      lms: "Partial (Manual links)",
      crm: false
    },
    {
      feature: "Finance & Tuition Automation",
      desc: "Automated recurring invoicing, multi-currency Stripe/PayPal billing, and automatic late fees.",
      edusuite: true,
      schoolMgmt: "Partial (Manual bills)",
      lms: false,
      crm: false
    },
    {
      feature: "Unified Communication Hub",
      desc: "Instant group messaging, secure document repositories, and real-time WhatsApp Business templates.",
      edusuite: true,
      schoolMgmt: "No (Emails only)",
      lms: "Partial (In-app forums)",
      crm: "No (External pipelines)"
    },
    {
      feature: "Deep Analytics Engine",
      desc: "Cohort drop-off warnings, teacher-ROI spreadsheets, and student grading curve forecasts.",
      edusuite: true,
      schoolMgmt: "No (Basic grids)",
      lms: "Partial (Grades only)",
      crm: "Partial (Sales only)"
    },
    {
      feature: "Apple + Stripe Aesthetic UI/UX",
      desc: "Ultra-fast Next.js render pipelines, screen reader compliance, and distraction-free dark mode.",
      edusuite: true,
      schoolMgmt: false,
      lms: false,
      crm: false
    }
  ];

  return (
    <section id="comparison" className="py-24 relative overflow-hidden bg-light-bg-1 text-slate-900 border-b border-slate-100">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-primary-blue/10 bg-primary-blue/5 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            Comparison Matrix
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            How Do We Compare?
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-sans font-light">
            Traditional software leads to siloed data and expensive manual workarounds. See how BlackStone AI combines operational layers into one premium system.
          </p>
        </div>

        {/* Matrix Card */}
        <div className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="p-6 font-display font-bold text-sm text-slate-700 uppercase tracking-wider w-[30%]">Comparison Parameters</th>
                  <th className="p-6 font-display font-black text-sm text-primary-blue uppercase tracking-widest text-center w-[20%] bg-primary-blue/5">
                    BlackStone AI ERP
                  </th>
                  <th className="p-6 font-display font-semibold text-xs text-slate-500 uppercase tracking-wider text-center w-[16%]">
                    Traditional Software
                  </th>
                  <th className="p-6 font-display font-semibold text-xs text-slate-500 uppercase tracking-wider text-center w-[16%]">
                    Generic LMS
                  </th>
                  <th className="p-6 font-display font-semibold text-xs text-slate-500 uppercase tracking-wider text-center w-[16%]">
                    Standalone CRM
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareData.map((row, idx) => (
                  <tr
                    key={idx}
                    onMouseEnter={() => setHoveredRow(idx)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`border-b border-slate-100 transition-colors duration-150 ${
                      hoveredRow === idx ? "bg-slate-50/30" : ""
                    }`}
                  >
                    {/* Feature Description */}
                    <td className="p-6">
                      <h4 className="font-display font-bold text-base text-slate-900 mb-1">{row.feature}</h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">{row.desc}</p>
                    </td>

                    {/* EduSuite Cell */}
                    <td className="p-6 text-center bg-primary-blue/5 border-x border-primary-blue/10">
                      <div className="flex items-center justify-center gap-1.5 text-primary-blue font-extrabold text-sm">
                        <div className="w-6 h-6 rounded-full bg-primary-blue/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-blue stroke-[3px]" />
                        </div>
                        <span>Fully Included</span>
                      </div>
                    </td>

                    {/* School Management Software Cell */}
                    <td className="p-6 text-center text-xs">
                      {typeof row.schoolMgmt === "boolean" ? (
                        row.schoolMgmt ? (
                          <Check className="w-4 h-4 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600 font-semibold">{row.schoolMgmt}</span>
                      )}
                    </td>

                    {/* Generic LMS Cell */}
                    <td className="p-6 text-center text-xs">
                      {typeof row.lms === "boolean" ? (
                        row.lms ? (
                          <Check className="w-4 h-4 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600 font-semibold">{row.lms}</span>
                      )}
                    </td>

                    {/* Standalone CRM Cell */}
                    <td className="p-6 text-center text-xs">
                      {typeof row.crm === "boolean" ? (
                        row.crm ? (
                          <Check className="w-4 h-4 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600 font-semibold">{row.crm}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note warning */}
        <div className="mt-8 flex gap-3 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 max-w-2xl mx-auto items-start text-xs text-amber-700 font-medium">
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
          <p>
            Legacy software tools charge hidden fees for updates, hosting, and API keys. BlackStone AI provides unified hosting, secure updates, and built-in integration support out of the box with zero third-party commissions.
          </p>
        </div>
      </div>
    </section>
  );

}

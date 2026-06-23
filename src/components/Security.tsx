"use client";

import React, { useState } from "react";
import { Shield, ShieldAlert, Key, RefreshCw, Server, Eye } from "lucide-react";

type Role = "admin" | "coach" | "teacher" | "student";

export default function Security() {
  const [activeRole, setActiveRole] = useState<Role>("admin");
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState("15");

  const rolesConfig = {
    admin: {
      label: "Institutional Admin",
      privileges: [
        { name: "Syllabus Deletion", allowed: true },
        { name: "Tuition Invoice Customization", allowed: true },
        { name: "Direct Stripe Bank Cash-outs", allowed: true },
        { name: "Staff Payroll Approval", allowed: true },
        { name: "Student Profile Deletions", allowed: true }
      ]
    },
    coach: {
      label: "Academic Coach / Mentor",
      privileges: [
        { name: "Syllabus Deletion", allowed: false },
        { name: "Tuition Invoice Customization", allowed: false },
        { name: "Direct Stripe Bank Cash-outs", allowed: false },
        { name: "Staff Payroll Approval", allowed: false },
        { name: "Student Profile Deletions", allowed: false }
      ]
    },
    teacher: {
      label: "Classroom Teacher",
      privileges: [
        { name: "Syllabus Deletion", allowed: false },
        { name: "Tuition Invoice Customization", allowed: false },
        { name: "Direct Stripe Bank Cash-outs", allowed: false },
        { name: "Staff Payroll Approval", allowed: false },
        { name: "Student Profile Deletions", allowed: false }
      ]
    },
    student: {
      label: "Enrolled Academy Student",
      privileges: [
        { name: "Syllabus Deletion", allowed: false },
        { name: "Tuition Invoice Customization", allowed: false },
        { name: "Direct Stripe Bank Cash-outs", allowed: false },
        { name: "Staff Payroll Approval", allowed: false },
        { name: "Student Profile Deletions", allowed: false }
      ]
    }
  };

  const getPrivilegeStatus = (privilegeName: string) => {
    switch (activeRole) {
      case "admin":
        return true;
      case "coach":
        return ["Student Profile Deletions", "Syllabus Deletion"].includes(privilegeName) === false; // Coach has some academic access
      case "teacher":
        return privilegeName === "Syllabus Deletion"; // Teacher can edit syllabus only
      case "student":
        return false; // Student has none of the admin privileges
      default:
        return false;
    }
  };

  const privilegesList = [
    "Tuition Invoice Customization",
    "Direct Stripe Bank Cash-outs",
    "Staff Payroll Approval",
    "Student Profile Deletions",
    "Syllabus Deletion"
  ];

  return (
    <section id="security" className="py-24 relative overflow-hidden bg-light-bg-1/80 backdrop-blur-sm text-slate-900 border-b border-slate-100">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-primary-blue/10 bg-primary-blue/5 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            Enterprise Security
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Bank-Grade Student Data Protection
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-sans font-light">
            BlackStone AI implements Multi-Factor Authentication (MFA), strict Role-Based Access Controls, end-to-end encryption, and comprehensive audit logs.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Role-Based Controls (Left) */}
          <div className="lg:col-span-7 bg-white/85 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)] p-8 rounded-3xl flex flex-col justify-between relative z-10 backdrop-blur-sm">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-display font-bold text-lg text-slate-900">Role-Based Access Control (RBAC)</h4>
                <span className="text-[10px] text-primary-blue bg-primary-blue/10 px-2 py-0.5 rounded font-black uppercase">
                  Dynamic Simulation
                </span>
              </div>
              <p className="text-xs text-slate-500 font-sans font-light mb-6">
                Click a role below to simulate how permission gates dynamically open and close based on security policies.
              </p>

              {/* Role select buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                {(["admin", "coach", "teacher", "student"] as Role[]).map((role) => (
                  <button
                    key={role}
                    onClick={() => setActiveRole(role)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer capitalize ${
                      activeRole === role
                        ? "bg-slate-900 text-white font-extrabold shadow"
                        : "bg-slate-50 text-slate-600 border border-slate-200/60 hover:bg-slate-100"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>

              {/* Privileges Display */}
              <div className="flex flex-col gap-3">
                {privilegesList.map((priv, idx) => {
                  const allowed = getPrivilegeStatus(priv);
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-slate-100 rounded-xl text-xs"
                    >
                      <span className="font-semibold text-slate-700">{priv}</span>
                      <span
                        className={`px-2.5 py-0.5 rounded font-bold text-[10px] uppercase ${
                          allowed ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {allowed ? "Allowed ✓" : "Blocked ✕"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MFA & Infrastructure Indicators (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* MFA Switch Card */}
            <div className="bg-white/85 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)] p-8 rounded-3xl flex-1 flex flex-col justify-between relative z-10 backdrop-blur-sm">
              <div>
                <h4 className="font-display font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                  <Key className="w-5 h-5 text-primary-blue" /> Authentication Protection
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-6 font-light">
                  Enforces secondary time-based OTP codes via SMS, WhatsApp, or authenticator applications (Google Authenticator, Duo).
                </p>

                <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-2xl mb-4">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Require Admin MFA</p>
                    <p className="text-[10px] text-slate-500 font-light">Prompts code on clean session</p>
                  </div>
                  <button
                    onClick={() => setMfaEnabled(!mfaEnabled)}
                    className={`w-12 h-6.5 rounded-full p-1 transition-colors cursor-pointer flex items-center ${
                      mfaEnabled ? "bg-green-500 justify-end" : "bg-slate-200 justify-start"
                    }`}
                  >
                    <span className="w-4.5 h-4.5 rounded-full bg-white shadow-md block" />
                  </button>
                </div>

                <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Session Autologout</p>
                    <p className="text-[10px] text-slate-500 font-light">Expires idle connections</p>
                  </div>
                  <select
                    value={sessionTimeout}
                    onChange={(e) => setSessionTimeout(e.target.value)}
                    className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-800 focus:outline-none"
                  >
                    <option value="15">15 Minutes</option>
                    <option value="30">30 Minutes</option>
                    <option value="60">1 Hour</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Infrastructure Card */}
            <div className="bg-white/85 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)] p-8 rounded-3xl flex-1 flex flex-col justify-between relative z-10 backdrop-blur-sm">
              <div>
                <h4 className="font-display font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                  <Server className="w-5 h-5 text-primary-blue" /> Cloud Infrastructure
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 font-light">
                  Hosted on redundant AWS clusters with automatic backups and real-time database replication.
                </p>
                <div className="flex flex-col gap-2.5 text-[11px] text-slate-700">
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span>Database Encryption</span>
                    <span className="font-bold text-primary-blue">AES-256 Bit GCM</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span>SSL Certificate</span>
                    <span className="font-bold text-primary-blue">TLS v1.3 Secure</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance Standards</span>
                    <span className="font-bold text-primary-blue">GDPR & FERPA Compliant</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );

}

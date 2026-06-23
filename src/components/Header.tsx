"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Sparkles, Users, BookOpen, Video, CreditCard, ShieldCheck } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "#features", hasDropdown: true },
    { name: "Solutions", href: "#showcase" },
    { name: "Customers", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#demo" },
  ];

  const dropdownItems = [
    { title: "Student CRM", desc: "Track directories, logs & registers", href: "#features", icon: Users },
    { title: "Teacher LMS", desc: "Schedules, courses & syllabus", href: "#showcase", icon: BookOpen },
    { title: "Live Classes", desc: "Video calls & WhatsApp alerts", href: "#features", icon: Video },
    { title: "Tuition Invoicing", desc: "Automated billing & Stripe payments", href: "#features", icon: CreditCard },
    { title: "Security Shield", desc: "RBAC & end-to-end encryption", href: "#security", icon: ShieldCheck },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
      setDropdownOpen(false);
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header
        className={`w-full max-w-5xl rounded-full transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "bg-white/85 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-2.5 px-6"
            : isLight
              ? "bg-white/65 border border-slate-200/50 shadow-[0_12px_40px_rgba(0,0,0,0.05)] py-3 px-7"
              : "bg-[#050B18]/65 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.25)] py-3 px-7"
        } backdrop-blur-md`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group shrink-0">
            <img
              src="/logo.png"
              alt="Blackstone Infomatics"
              className={`h-8 w-auto object-contain transition-all duration-300 ${
                scrolled || isLight ? "" : "invert brightness-125"
              }`}
            />
          </a>

          {/* Center Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative py-2"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-[13px] font-semibold transition-colors flex items-center gap-1 hover:text-primary-blue cursor-pointer ${
                    scrolled || isLight ? "text-slate-600" : "text-slate-200"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Dropdown Panel */}
                {link.hasDropdown && dropdownOpen && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[440px] rounded-2xl border p-4 shadow-xl backdrop-blur-xl transition-all duration-300 animate-fade-in z-50 ${
                    scrolled || isLight
                      ? "bg-white/95 border-slate-200 text-slate-800"
                      : "bg-[#050B18]/95 border-white/10 text-white"
                  }`}>
                    <div className="grid grid-cols-2 gap-4">
                      {dropdownItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={(e) => handleScrollTo(e, item.href)}
                          className={`flex items-start gap-3 p-2 rounded-xl transition-all ${
                            scrolled || isLight ? 'hover:bg-slate-100/80 text-slate-700 hover:text-slate-900' : 'hover:bg-white/5 text-slate-300 hover:text-white'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-blue to-sec-cyan flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold tracking-tight">{item.title}</h4>
                            <p className="text-[10px] opacity-60 leading-snug mt-0.5">{item.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <a
              href="#demo"
              onClick={(e) => handleScrollTo(e, "#demo")}
              className={`text-[13px] font-semibold hover:text-primary-blue transition-colors ${
                scrolled || isLight ? "text-slate-600" : "text-slate-200"
              }`}
            >
              Sign in
            </a>
            <a
              href="#demo"
              onClick={(e) => handleScrollTo(e, "#demo")}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-blue to-sec-cyan text-[13px] font-bold text-white shadow-md shadow-primary-blue/10 hover:shadow-primary-blue/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-full border transition-colors ${
                scrolled || isLight 
                  ? "border-slate-200 text-slate-700 hover:bg-slate-50" 
                  : "border-white/10 text-white hover:bg-white/5"
              }`}
            >
              {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 mt-3 p-5 rounded-2xl border animate-fade-in flex flex-col gap-4 shadow-xl ${
            scrolled || isLight
              ? "bg-white border-slate-200 text-slate-900"
              : "bg-[#050B18] border-white/10 text-white"
          }`}>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-sm font-semibold flex items-center justify-between py-1.5 border-b border-transparent hover:border-primary-blue transition-colors ${
                    scrolled || isLight ? "text-slate-800" : "text-slate-200"
                  }`}
                >
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="#demo"
                onClick={(e) => handleScrollTo(e, "#demo")}
                className={`text-center text-xs font-semibold py-2.5 rounded-full border ${
                  scrolled || isLight ? "border-slate-200 text-slate-700 hover:bg-slate-50" : "border-white/10 text-slate-200 hover:bg-white/5"
                }`}
              >
                Sign in
              </a>
              <a
                href="#demo"
                onClick={(e) => handleScrollTo(e, "#demo")}
                className="w-full py-3 rounded-full bg-gradient-to-r from-primary-blue to-sec-cyan text-center text-xs font-semibold text-white shadow-lg"
              >
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

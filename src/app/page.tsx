"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import Integrations from "@/components/Integrations";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import InteractiveDemo from "@/components/InteractiveDemo";
import Security from "@/components/Security";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg-1 text-slate-100 selection:bg-primary-blue selection:text-white">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Sections Scroll Flow */}
      <main className="flex-1">
        {/* Full-Screen 3D Hero Section */}
        <Hero />

        {/* Feature Cards Grid Section */}
        <Features />

        {/* 3D Product Showcase Section */}
        <ProductShowcase />

        {/* Third-Party Integrations Section */}
        <Integrations />

        {/* Why Choose Us Comparison Matrix */}
        <Comparison />

        {/* Interactive Simulated ERP Dashboard Sandbox */}
        <InteractiveDemo />

        {/* Customer Success Stories Carousel */}
        <Testimonials />

        {/* Dynamic Pricing Tiers */}
        <Pricing />

        {/* Role-Based Security Section */}
        <Security />

        {/* Tailored Consultation Contact Section */}
        <ContactSection />
      </main>

      {/* Footer Section & Final CTA */}
      <Footer />
    </div>
  );
}

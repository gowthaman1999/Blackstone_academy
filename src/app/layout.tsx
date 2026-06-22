import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BlackStone AI | The Ultimate Education ERP Platform",
  description: "Transform your academy, school, coaching institute, or training center with a world-class premium ERP SaaS. Manage students, teachers, billing, scheduling, courses, and analytics from one integrated platform.",
  keywords: "Education ERP, School Management Software, Learning Management System, Academy SaaS, Teacher Portal, Student Dashboard, Quran Academy CRM, BlackStone AI",
  authors: [{ name: "BlackStone AI Inc." }],
  openGraph: {
    title: "BlackStone AI Premium - Ultimate Education ERP",
    description: "Sleek, integrated, and data-driven management software for schools and modern learning academies.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


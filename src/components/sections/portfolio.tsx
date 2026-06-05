"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "Chanakya IAS Academy Mockup",
      category: "education",
      desc: "A responsive website designed for a Civil Services coaching institute, featuring course directories and admission forms.",
      badge: "Education",
      tech: ["Next.js", "Tailwind CSS", "Lead Funnel"],
      color: "from-amber-500/20 to-orange-500/10",
      mockup: (
        <div className="w-full h-full bg-slate-950 p-3 flex flex-col justify-between text-left">
          <div className="flex justify-between items-center border-b border-slate-900 pb-2">
            <span className="text-[9px] font-black text-amber-500 flex items-center gap-1">🔸 Chanakya IAS</span>
            <span className="text-[7px] text-slate-500">New Batch: July 15</span>
          </div>
          <div className="my-auto py-2 text-center space-y-1.5">
            <h4 className="text-[11px] font-extrabold text-white leading-tight">Crack UPSC Civil Services</h4>
            <p className="text-[7px] text-slate-400 max-w-[180px] mx-auto">Learn from retired IAS officers. Daily mock tests & comprehensive syllabus cover.</p>
            <div className="w-16 h-4 bg-amber-500 text-slate-950 text-[7px] font-bold rounded flex items-center justify-center mx-auto mt-0.5">
              Download Syllabus
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="p-1 bg-slate-900 border border-slate-800/60 rounded text-center">
              <span className="text-[8px] font-bold text-white">150+</span>
              <p className="text-[5px] text-slate-500 uppercase">IAS Selections</p>
            </div>
            <div className="p-1 bg-slate-900 border border-slate-800/60 rounded text-center">
              <span className="text-[8px] font-bold text-white">Delhi NCR</span>
              <p className="text-[5px] text-slate-500 uppercase">3 Branches</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Organic Fresh Grocery Store",
      category: "local",
      desc: "A WhatsApp-integrated online product catalog designed for a local organic vegetable shop in Chandigarh.",
      badge: "Local E-Commerce",
      tech: ["WhatsApp API", "Tailwind", "Responsive"],
      color: "from-emerald-500/20 to-teal-500/10",
      mockup: (
        <div className="w-full h-full bg-slate-950 p-3 flex flex-col justify-between text-left">
          <div className="flex justify-between items-center border-b border-slate-900 pb-2">
            <span className="text-[9px] font-black text-emerald-400 flex items-center gap-1">🌿 Organic Fresh</span>
            <span className="text-[7px] text-emerald-500 font-bold">Open Now</span>
          </div>
          <div className="my-auto py-1">
            <p className="text-[7px] font-bold text-emerald-400 uppercase">Fresh from Farms</p>
            <h4 className="text-[10px] font-extrabold text-white leading-tight">Pure Organic Vegetables</h4>
            <div className="grid grid-cols-2 gap-1.5 mt-2">
              <div className="p-1.5 bg-slate-900/60 rounded border border-slate-800 flex flex-col justify-between">
                <span className="text-[7px] text-slate-200">Fresh Tomato (1kg)</span>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[7px] font-bold text-white">₹40</span>
                  <span className="px-1 py-0.5 bg-emerald-500 text-slate-950 text-[5px] font-extrabold rounded">ADD</span>
                </div>
              </div>
              <div className="p-1.5 bg-slate-900/60 rounded border border-slate-800 flex flex-col justify-between">
                <span className="text-[7px] text-slate-200">Broccoli (500g)</span>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[7px] font-bold text-white">₹90</span>
                  <span className="px-1 py-0.5 bg-emerald-500 text-slate-950 text-[5px] font-extrabold rounded">ADD</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-slate-900">
            <span className="text-[6px] text-slate-500">2 Items in Cart</span>
            <div className="px-2 py-1 bg-emerald-500 text-slate-950 text-[6px] font-bold rounded flex items-center gap-1">
              <span>Order via WhatsApp</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Royal Touch Wedding Planner",
      category: "landing",
      desc: "A single-page lead generation website showcasing wedding packages, client review ratings, and a custom booking form.",
      badge: "Landing Page",
      tech: ["Framer Motion", "Custom CSS", "SEO ready"],
      color: "from-pink-500/20 to-rose-500/10",
      mockup: (
        <div className="w-full h-full bg-slate-950 p-3 flex flex-col justify-between text-left">
          <div className="flex justify-between items-center border-b border-slate-900 pb-2">
            <span className="text-[9px] font-black text-pink-400">✨ Royal Events</span>
            <span className="text-[7px] text-slate-500">Enquire Now</span>
          </div>
          <div className="my-auto py-2 text-center space-y-2">
            <h4 className="text-[11px] font-extrabold text-white leading-tight">Making Your Dream Wedding Real</h4>
            <p className="text-[6px] text-slate-400 max-w-[160px] mx-auto">Luxury decorations, designer catering, and flawless destination planning across Goa & Jaipur.</p>
            <div className="w-20 h-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[7px] font-bold rounded flex items-center justify-center mx-auto cursor-pointer">
              Check Packages
            </div>
          </div>
          <div className="p-1.5 bg-slate-900 border border-slate-800/80 rounded flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-yellow-400">★★★★★</span>
              <span className="text-[6px] text-slate-300">"Flawless execution!"</span>
            </div>
            <span className="text-[5px] text-slate-500">- Aditi & Rohan</span>
          </div>
        </div>
      ),
    },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge className="bg-violet-500/10 border-violet-500/20 text-violet-400 font-semibold px-2.5 py-0.5">
            Recent Work
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Our Handcrafted Design Mockups
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Take a look at some of our website structures designed for Indian local brands, coaching centers, and startups.
          </p>
        </div>

        {/* Portfolio Tabs */}
        <Tabs defaultValue="all" className="w-full text-center space-y-10" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="bg-slate-900 border border-slate-800 p-1.5 rounded-xl">
              <TabsTrigger value="all" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-semibold text-xs px-4 py-2">
                All Mockups
              </TabsTrigger>
              <TabsTrigger value="local" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-semibold text-xs px-4 py-2">
                Local Business
              </TabsTrigger>
              <TabsTrigger value="education" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-semibold text-xs px-4 py-2">
                Education
              </TabsTrigger>
              <TabsTrigger value="landing" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-semibold text-xs px-4 py-2">
                Landing Pages
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Project Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700/60 overflow-hidden group transition-all duration-500 [transform-style:preserve-3d] hover:[transform:perspective(1000px)_rotateX(3deg)_rotateY(-1.5deg)] glow-card"
                >
                  {/* Mockup Frame Container */}
                  <div className={`h-60 bg-gradient-to-br ${project.color} p-4 flex items-center justify-center relative border-b border-slate-900 overflow-hidden`}>
                    <div className="w-full h-full max-w-[280px] rounded-xl border border-slate-800 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
                      {project.mockup}
                    </div>

                    {/* Tech Reveal Overlay */}
                    <div className="absolute inset-0 bg-slate-950/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center space-y-3 backdrop-blur-sm translate-y-4 group-hover:translate-y-0">
                      <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 tracking-wider uppercase">Technical Specs</span>
                      <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2.5 py-0.5 bg-slate-900 border border-slate-800/80 text-[10px] text-slate-300 rounded-lg font-semibold shadow">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80 w-full leading-normal">
                        SEO ready structure, mobile viewport optimized, custom asset loading.
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between text-left space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider font-extrabold text-indigo-400">
                          {project.badge}
                        </span>
                        <Badge className="bg-slate-950 border-slate-800 text-[10px] text-slate-400 font-semibold px-2 py-0.5">
                          Mockup Active
                        </Badge>
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg tracking-tight group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2 border-t border-slate-900 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-slate-950 border border-slate-800 text-slate-500 text-[10px] rounded font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

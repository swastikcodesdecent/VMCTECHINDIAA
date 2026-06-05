"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as any } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Dotted Radial Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.15)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_45%,#000_75%,transparent_100%)] pointer-events-none" />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            className="lg:col-span-7 text-left space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Premium Web Development at Indian Prices</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight"
            >
              Websites That Help <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-emerald-300">
                Small Businesses
              </span> <br />
              Look Big Online
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants} 
              className="text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              Get a custom, responsive, and blazing-fast website for your coaching center, gym, local shop, startup, or personal brand without breaking the bank.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "shimmer-btn-active text-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-indigo-950/50 border-0 group transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 h-auto text-base"
                )}
              >
                <span>Get Your Website</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#pricing"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "bg-slate-900/60 hover:bg-slate-900 border-slate-800 text-slate-200 hover:text-white px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center h-auto text-base"
                )}
              >
                View Pricing
              </Link>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-900"
            >
              <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />
                <span>Free Design Demo</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                <Zap className="h-4.5 w-4.5 text-indigo-400 flex-shrink-0" />
                <span>48-Hour Setup</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                <ShieldCheck className="h-4.5 w-4.5 text-violet-400 flex-shrink-0" />
                <span>Direct Developer Access</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Mockup Visual */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Background glowing circle */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-2xl blur-xl opacity-20 animate-pulse" style={{ animationDuration: '8s' }} />
            
            {/* The Mockup Box */}
            <div className="relative border border-slate-800 bg-slate-900/90 rounded-2xl p-4 shadow-2xl backdrop-blur-md border-beam-active">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-6 py-0.5 rounded bg-slate-950 text-[10px] text-slate-500 font-mono w-48 text-center truncate border border-slate-900">
                  fitpulse-gym.in
                </div>
                <span className="w-3 h-3" />
              </div>

              {/* Mockup Content - Live Preview layout of an Indian gym */}
              <div className="space-y-4 text-left text-[9px]">
                {/* Header */}
                <div className="flex justify-between items-center py-1 border-b border-slate-800/40 pb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4.5 h-4.5 rounded bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-[7px] font-black text-slate-950">F</div>
                    <span className="font-extrabold text-white text-[10px] tracking-tight">FitPulse Gym</span>
                  </div>
                  <div className="flex gap-3 text-slate-400 font-semibold text-[8px]">
                    <span className="text-white">Dashboard</span>
                    <span>Classes</span>
                    <span>Schedules</span>
                  </div>
                </div>

                {/* Dashboard Panel Grid */}
                <div className="grid grid-cols-12 gap-3">
                  
                  {/* Left Main Card: Welcome & Live Status */}
                  <div className="col-span-7 bg-slate-950/80 border border-slate-850 rounded-xl p-3 space-y-3">
                    <div className="space-y-1">
                      <span className="text-emerald-400 font-extrabold uppercase tracking-wider text-[7px]">GK-2 Branch</span>
                      <h4 className="text-[11px] font-black text-white leading-tight">Live Roster Control</h4>
                    </div>

                    <div className="p-2 bg-slate-900/60 rounded-lg border border-slate-800/60 flex items-center justify-between gap-1">
                      <div className="space-y-0.5">
                        <span className="text-[6px] text-slate-400 font-bold uppercase">HIIT Cardio Arena</span>
                        <p className="text-[8px] font-semibold text-white truncate">08:00 AM Session</p>
                      </div>
                      <span className="px-1.5 py-0.5 bg-rose-500/10 border border-rose-500/20 text-[6px] text-rose-400 font-bold rounded-md animate-pulse">LIVE</span>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="p-1.5 bg-slate-900/50 rounded-lg border border-slate-850">
                        <span className="text-[10px] font-black text-indigo-400">142</span>
                        <p className="text-[6px] text-slate-500 uppercase font-bold">Members</p>
                      </div>
                      <div className="p-1.5 bg-slate-900/50 rounded-lg border border-slate-850">
                        <span className="text-[10px] font-black text-emerald-400">94%</span>
                        <p className="text-[6px] text-slate-500 uppercase font-bold">Capacity</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Card: Activity Tracker (Bar Chart) */}
                  <div className="col-span-5 bg-slate-950/80 border border-slate-850 rounded-xl p-3 flex flex-col justify-between">
                    <span className="text-slate-300 font-bold text-[8px] uppercase tracking-wider">Weekly Load</span>
                    
                    {/* CSS Bar Chart */}
                    <div className="flex items-end justify-between h-14 pt-2 pb-1 px-1">
                      <div className="flex flex-col items-center gap-1 w-2.5">
                        <div className="w-full bg-slate-900 rounded-sm h-10 overflow-hidden flex flex-col justify-end">
                          <div className="w-full bg-gradient-to-t from-indigo-600 to-violet-500 h-[60%]" />
                        </div>
                        <span className="text-[5px] text-slate-500">M</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 w-2.5">
                        <div className="w-full bg-slate-900 rounded-sm h-10 overflow-hidden flex flex-col justify-end">
                          <div className="w-full bg-gradient-to-t from-indigo-600 to-violet-500 h-[85%]" />
                        </div>
                        <span className="text-[5px] text-slate-500">T</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 w-2.5">
                        <div className="w-full bg-slate-900 rounded-sm h-10 overflow-hidden flex flex-col justify-end">
                          <div className="w-full bg-gradient-to-t from-emerald-500 to-teal-400 h-[95%]" />
                        </div>
                        <span className="text-[5px] text-slate-500">W</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 w-2.5">
                        <div className="w-full bg-slate-900 rounded-sm h-10 overflow-hidden flex flex-col justify-end">
                          <div className="w-full bg-gradient-to-t from-indigo-600 to-violet-500 h-[40%]" />
                        </div>
                        <span className="text-[5px] text-slate-500">T</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 w-2.5">
                        <div className="w-full bg-slate-900 rounded-sm h-10 overflow-hidden flex flex-col justify-end">
                          <div className="w-full bg-gradient-to-t from-emerald-500 to-teal-400 h-[70%]" />
                        </div>
                        <span className="text-[5px] text-slate-500">F</span>
                      </div>
                    </div>

                    <div className="text-[6px] text-slate-400 text-center font-semibold pt-1 border-t border-slate-900">
                      +12.4% Load Change
                    </div>
                  </div>

                </div>

                {/* Bottom Row: Active trainers list & quick highlights */}
                <div className="p-2.5 bg-slate-950/80 border border-slate-850 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      <div className="w-4.5 h-4.5 rounded-full border border-slate-950 bg-indigo-900 flex items-center justify-center text-[5px] font-black text-indigo-300">A</div>
                      <div className="w-4.5 h-4.5 rounded-full border border-slate-950 bg-emerald-900 flex items-center justify-center text-[5px] font-black text-emerald-300">R</div>
                      <div className="w-4.5 h-4.5 rounded-full border border-slate-950 bg-violet-900 flex items-center justify-center text-[5px] font-black text-violet-300">K</div>
                    </div>
                    <span className="text-[7px] text-slate-400 font-semibold">15+ trainers active today</span>
                  </div>
                  <div className="px-2 py-0.5 bg-emerald-500 text-slate-950 font-bold rounded text-[7px] flex items-center gap-0.5 cursor-pointer">
                    <span>Manage Roster</span>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Small floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center gap-2 shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div className="text-[10px] font-semibold text-white">
                ₹2,999/one-time
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

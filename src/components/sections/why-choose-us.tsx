"use client";

import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Smartphone, 
  Flame, 
  LayoutTemplate, 
  MessageSquareCode, 
  Search, 
  HeartHandshake 
} from "lucide-react";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  const features = [
    {
      icon: LayoutTemplate,
      title: "Free Design Demo First",
      description: "We show you a working mockup/demo of your website landing page before you make any final payment. Pay only if you love it.",
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    },
    {
      icon: MessageSquareCode,
      title: "Direct Developer Contact",
      description: "No sales agents, account managers, or middlemen. You speak directly with the developer building your site, ensuring zero communication lag.",
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Responsiveness",
      description: "Over 80% of your customers browse on mobiles. We design every page to look stunning and load instantly on all smartphone screen sizes.",
      color: "text-violet-400 border-violet-500/20 bg-violet-500/5",
    },
    {
      icon: Flame,
      title: "Super-Fast Delivery",
      description: "Need it in a hurry? Our standard landing pages are ready in 48 hours, and business websites are launched within 5-7 working days.",
      color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    },
    {
      icon: Search,
      title: "SEO-Ready Codebase",
      description: "We configure clean HTML structure, image alt text, page titles, and meta descriptions so your business is ready to rank on Google search.",
      color: "text-sky-400 border-sky-500/20 bg-sky-500/5",
    },
    {
      icon: HeartHandshake,
      title: "Support After Launch",
      description: "We don't vanish after launch. Get 30 days of free technical support for text updates, image replacement, and basic bug fixes.",
      color: "text-pink-400 border-pink-500/20 bg-pink-500/5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" as any } }
  };

  return (
    <section id="why-us" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Agency Comparison Card */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 rounded-3xl bg-slate-900/65 backdrop-blur-md border border-slate-800 shadow-2xl space-y-6 overflow-hidden border-beam-active border-beam-active-emerald">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <Badge className="bg-emerald-500/10 border-emerald-500/20 text-emerald-400 font-semibold px-2.5 py-0.5">
                  The VMC Advantage
                </Badge>
                <span className="text-[9px] text-slate-500 font-bold tracking-wider uppercase">Side-by-Side</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight leading-tight">
                VMC Tech vs. Traditional Agencies
              </h3>

              {/* Side-by-side comparison list */}
              <div className="space-y-4 pt-1">
                
                {/* Point 1 */}
                <div className="grid grid-cols-2 gap-4 pb-3.5 border-b border-slate-800/60">
                  <div className="space-y-1">
                    <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">Traditional Agency</span>
                    <h4 className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Starts ₹25k+
                    </h4>
                    <p className="text-[10px] text-slate-400 leading-normal">High margins, complex monthly contracts.</p>
                  </div>
                  <div className="space-y-1 border-l border-slate-800/60 pl-4">
                    <span className="text-[8px] text-emerald-400 font-bold uppercase tracking-wider">VMC Tech India</span>
                    <h4 className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Starts ₹2,999
                    </h4>
                    <p className="text-[10px] text-slate-300 leading-normal">One-time payment. Transparent plans.</p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="grid grid-cols-2 gap-4 pb-3.5 border-b border-slate-800/60">
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Sales Managers
                    </h4>
                    <p className="text-[10px] text-slate-400 leading-normal">Middlemen dilute feedback. Slow delays.</p>
                  </div>
                  <div className="space-y-1 border-l border-slate-800/60 pl-4">
                    <h4 className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Direct Developer
                    </h4>
                    <p className="text-[10px] text-slate-300 leading-normal">Speak directly with the developer building your site.</p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Deposit Upfront
                    </h4>
                    <p className="text-[10px] text-slate-400 leading-normal">Pay blind deposits before seeing layouts.</p>
                  </div>
                  <div className="space-y-1 border-l border-slate-800/60 pl-4">
                    <h4 className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Free Design Demo
                    </h4>
                    <p className="text-[10px] text-slate-300 leading-normal">See your custom landing page demo first. Pay if you love it.</p>
                  </div>
                </div>

              </div>

              <div className="p-3 bg-slate-950/60 rounded-2xl border border-slate-800/80 text-center text-xs text-slate-400">
                ⭐ Rated <span className="text-white font-bold">4.9/5 stars</span> by Indian business owners.
              </div>
            </div>
          </motion.div>

          {/* Right Side: Key Points Checklist Grid */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-indigo-500/10 border-indigo-500/20 text-indigo-400 font-semibold px-2.5 py-0.5">
                Why Us?
              </Badge>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Websites Built for Results, Not Just Aesthetics
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                We bridge the gap between expensive design agencies and low-quality DIY site builders. You get agency-grade quality at a fraction of the price.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    variants={itemVariants}
                    key={feature.title} 
                    className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/60 transition-all duration-300 glow-card space-y-3"
                  >
                    <div className={`p-2.5 rounded-xl border w-fit ${feature.color}`}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <h4 className="font-heading font-bold text-white text-base tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

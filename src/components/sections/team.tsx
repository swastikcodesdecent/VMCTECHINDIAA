"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Team() {
  const teamMembers = [
    {
      name: "Swastik",
      role: "CTO & Frontend",
      initials: "S",
      gradient: "from-indigo-500 to-purple-500",
      accent: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
      bio: "Crafting pixel-perfect, responsive frontend structures. Expert in building optimized React layouts and smooth 60 FPS transitions.",
      skills: ["Next.js", "React 19", "Tailwind v4", "Framer Motion"],
      socials: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Suvajit",
      role: "Marketing Head",
      initials: "S",
      gradient: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
      bio: "Driving conversion analytics and small business search visibility. Expert in Local SEO setups, Google Ads, and traffic retention.",
      skills: ["Local SEO", "Google Ads", "Conversion Rate", "Analytics"],
      socials: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Dibyojyoti",
      role: "Backend Head",
      initials: "D",
      gradient: "from-violet-500 to-pink-500",
      accent: "text-violet-400 border-violet-500/20 bg-violet-500/5",
      bio: "Architecting secure database schemas and fast API controllers. Expert in server optimizations, hosting setups, and domain routing.",
      skills: ["Node.js", "PostgreSQL", "REST APIs", "Server Tuning"],
      socials: { github: "#", linkedin: "#", twitter: "#" },
    },
  ];

  return (
    <section id="team" className="py-24 bg-slate-950/60 relative">
      {/* Background orb blur */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-indigo-500/10 border-indigo-500/20 text-indigo-400 font-semibold px-2.5 py-0.5">
            Our Experts
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Meet the Builders behind VMC Tech
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            We are a dedicated team of developers and digital strategists committed to helping Indian small businesses look big online.
          </p>
        </div>

        {/* Members Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {teamMembers.map((member, index) => {
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full flex"
              >
                <Card className="group relative w-full h-full bg-slate-900/35 backdrop-blur-md border border-slate-800/60 hover:border-slate-750 transition-all duration-500 glow-card flex flex-col justify-between overflow-hidden rounded-2xl hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6),0_0_20px_rgba(99,102,241,0.06)] hover:-translate-y-1">
                  
                  {/* Decorative Gradient Bar */}
                  <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${member.gradient} opacity-80 group-hover:h-[3px] transition-all duration-300`} />

                  <CardHeader className="pt-8 px-6 text-center space-y-4">
                    {/* Glowing Avatar Initials Wrapper */}
                    <div className="mx-auto relative w-20 h-20 rounded-full bg-slate-950 border border-slate-850 flex items-center justify-center shadow-inner group/avatar">
                      {/* Aura Backglow */}
                      <div className={`absolute -inset-1.5 bg-gradient-to-br ${member.gradient} rounded-full blur opacity-25 group-hover/avatar:opacity-60 transition-opacity duration-300`} />
                      <span className={`relative text-2xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br ${member.gradient}`}>
                        {member.initials}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <CardTitle className="font-heading font-extrabold text-white text-xl tracking-tight">
                        {member.name}
                      </CardTitle>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${member.accent}`}>
                        {member.role}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-8 space-y-5 flex-grow flex flex-col justify-between">
                    <p className="text-slate-400 text-xs leading-relaxed text-center min-h-[48px]">
                      "{member.bio}"
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap justify-center gap-1.5 pt-2 border-t border-slate-850">
                      {member.skills.map((skill) => (
                        <span key={skill} className="text-[9px] font-semibold text-slate-500 bg-slate-950/80 border border-slate-850 px-2 py-0.5 rounded-lg group-hover:border-slate-800 transition-colors duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Handles */}
                    <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-850">
                      <a href={member.socials.github} className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                      <a href={member.socials.linkedin} className="text-slate-500 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={member.socials.twitter} className="text-slate-500 hover:text-sky-400 transition-colors" aria-label="Twitter">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </CardContent>

                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

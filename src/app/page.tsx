import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Pricing } from "@/components/sections/pricing";
import { Team } from "@/components/sections/team";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { GrokOrbs } from "@/components/grok-orbs";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden flex flex-col justify-between">
      {/* Floating Background Glow Orbs */}
      <GrokOrbs />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-grow relative z-10">
        {/* Hero Banner */}
        <Hero />

        {/* Services Directory */}
        <Services />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Pricing Table */}
        <Pricing />

        {/* Team Section */}
        <Team />

        {/* Process Timeline */}
        <HowItWorks />

        {/* Interactive Call-to-Action Contact Form */}
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

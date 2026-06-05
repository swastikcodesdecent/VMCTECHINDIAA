"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, ShieldCheck, CheckCircle2, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    serviceRequired: "",
    budgetRange: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.serviceRequired) newErrors.serviceRequired = "Please select a service";
    if (!formData.budgetRange) newErrors.budgetRange = "Please select a budget range";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        businessType: "",
        serviceRequired: "",
        budgetRange: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Trust elements & Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Badge className="bg-indigo-500/10 border-indigo-500/20 text-indigo-400 font-semibold px-2.5 py-0.5">
                Get In Touch
              </Badge>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Let's Build Your Dream Website Together
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fill out the form to get a quick callback, select your package, and request your free homepage design mockup.
              </p>
            </div>

            {/* Direct Contact cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 flex items-start gap-4">
                <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-indigo-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Email Consultation</h4>
                  <p className="text-xs text-slate-400 mt-1">Send us your detailed project files and specs.</p>
                  <a href="mailto:hello@vmctech.in" className="text-sm font-bold text-indigo-400 hover:underline inline-block mt-2">
                    hello@vmctech.in
                  </a>
                </div>
              </div>
            </div>

            {/* Live Testimonial Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-850 space-y-4 relative">
              <div className="flex items-center gap-1 text-amber-500 text-xs">
                ★★★★★
              </div>
              <p className="text-slate-300 italic text-xs leading-relaxed">
                "VMC Tech built a landing page for my digital marketing coaching in Delhi. The speed was incredible, and the demo matched exactly what we wanted. It has helped us acquire over 40+ student registrations in the first month."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-300 text-xs font-bold">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Sandeep Malhotra</h5>
                  <p className="text-[10px] text-slate-500">Founder, Malhotra Digital Academy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="lg:col-span-7">
            <Card className="bg-slate-900/90 border-slate-800 shadow-2xl relative overflow-hidden">
              
              {/* Success Visual */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-slate-900 z-20 flex flex-col items-center justify-center p-8 text-center space-y-4"
                  >
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.35, type: "spring", stiffness: 220, damping: 12 }}
                      >
                        <CheckCircle2 className="h-8 w-8" />
                      </motion.div>
                    </motion.div>
                    <h3 className="font-heading font-black text-2xl text-white">Inquiry Sent Successfully!</h3>
                    <p className="text-slate-400 text-sm max-w-sm">
                      Thank you for contacting VMC Tech India. A developer will call or message you on WhatsApp within the next 2-4 hours to review your requirements.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-slate-950 border border-slate-800 text-slate-200 hover:bg-slate-900 hover:text-white font-bold"
                    >
                      Send Another Inquiry
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              <CardHeader className="pb-4">
                <CardTitle className="font-heading font-bold text-xl text-white tracking-tight">
                  Start Your Project
                </CardTitle>
                <CardDescription className="text-slate-400 text-xs mt-1">
                  Fill in your details below and we will get back to you with a free consultation call.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-300">Your Name *</label>
                      <div className="relative rounded-xl p-[1px] bg-slate-800/80 focus-within:bg-gradient-to-r focus-within:from-indigo-500 focus-within:to-emerald-500 focus-within:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300">
                        <Input
                          id="name"
                          placeholder="e.g. Rahul Sharma"
                          className="bg-slate-950 border-0 h-11 px-3.5 text-slate-200 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[11px] w-full"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                      </div>
                      {errors.name && <p className="text-[10px] text-rose-500 font-semibold">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="phone" className="text-xs font-semibold text-slate-300">WhatsApp / Phone Number *</label>
                      <div className="relative rounded-xl p-[1px] bg-slate-800/80 focus-within:bg-gradient-to-r focus-within:from-indigo-500 focus-within:to-emerald-500 focus-within:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300">
                        <Input
                          id="phone"
                          placeholder="e.g. 9876543210"
                          className="bg-slate-950 border-0 h-11 px-3.5 text-slate-200 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[11px] w-full"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                      {errors.phone && <p className="text-[10px] text-rose-500 font-semibold">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Business Type & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="businessType" className="text-xs font-semibold text-slate-300">Business / Brand Name</label>
                      <div className="relative rounded-xl p-[1px] bg-slate-800/80 focus-within:bg-gradient-to-r focus-within:from-indigo-500 focus-within:to-emerald-500 focus-within:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300">
                        <Input
                          id="businessType"
                          placeholder="e.g. FitPulse Gym, Malhotra Academy"
                          className="bg-slate-950 border-0 h-11 px-3.5 text-slate-200 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[11px] w-full"
                          value={formData.businessType}
                          onChange={(e) => handleInputChange("businessType", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="serviceRequired" className="text-xs font-semibold text-slate-300">Service Required *</label>
                      <div className="relative rounded-xl p-[1px] bg-slate-800/80 focus-within:bg-gradient-to-r focus-within:from-indigo-500 focus-within:to-emerald-500 focus-within:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300">
                        <Select 
                          value={formData.serviceRequired}
                          onValueChange={(val) => handleInputChange("serviceRequired", val || "")}
                        >
                          <SelectTrigger className="bg-slate-950 border-0 !h-11 px-3.5 text-slate-300 focus:ring-0 focus:ring-offset-0 rounded-[11px] w-full flex items-center justify-between">
                            <SelectValue placeholder="Select service option" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-950 border-slate-800 text-slate-300">
                            <SelectItem value="landing">Landing Page Website (starts ₹2,999)</SelectItem>
                            <SelectItem value="business">Business Website (starts ₹4,999)</SelectItem>
                            <SelectItem value="redesign">Website Redesign (starts ₹6,999)</SelectItem>
                            <SelectItem value="maintenance">Maintenance & Support (starts ₹999/mo)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {errors.serviceRequired && <p className="text-[10px] text-rose-500 font-semibold">{errors.serviceRequired}</p>}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="budgetRange" className="text-xs font-semibold text-slate-300">Select Budget Range *</label>
                    <div className="relative rounded-xl p-[1px] bg-slate-800/80 focus-within:bg-gradient-to-r focus-within:from-indigo-500 focus-within:to-emerald-500 focus-within:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300">
                      <Select 
                        value={formData.budgetRange}
                        onValueChange={(val) => handleInputChange("budgetRange", val || "")}
                      >
                        <SelectTrigger className="bg-slate-950 border-0 !h-11 px-3.5 text-slate-300 focus:ring-0 focus:ring-offset-0 rounded-[11px] w-full flex items-center justify-between">
                          <SelectValue placeholder="Select your budget" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-950 border-slate-800 text-slate-300">
                          <SelectItem value="under-3k">Under ₹3,000</SelectItem>
                          <SelectItem value="3k-5k">₹3,000 to ₹5,000</SelectItem>
                          <SelectItem value="5k-10k">₹5,000 to ₹10,000</SelectItem>
                          <SelectItem value="above-10k">Above ₹10,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.budgetRange && <p className="text-[10px] text-rose-500 font-semibold">{errors.budgetRange}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300">Tell Us About Your Project</label>
                    <div className="relative rounded-xl p-[1px] bg-slate-800/80 focus-within:bg-gradient-to-r focus-within:from-indigo-500 focus-within:to-emerald-500 focus-within:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300">
                      <Textarea
                        id="message"
                        placeholder="e.g. We need a 3-page website for our coaching institute. We need a landing page, fee structure page, and contact form."
                        className="bg-slate-950 border-0 min-h-[110px] px-3.5 py-2.5 text-slate-200 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[11px] w-full resize-none"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Trust indicator */}
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] py-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Your phone number will only be used to discuss website details. We hate spam.</span>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-6 rounded-xl shadow shadow-indigo-950/40 border-0 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? "Sending details..." : "Get Free Quote & Demo"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}

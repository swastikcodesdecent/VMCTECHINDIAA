import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VMC Tech India | Professional & Affordable Website Development for Small Businesses",
  description: "Get a modern, fast, and fully responsive website for your coaching center, gym, local shop, startup, or personal brand starting at just ₹2,999. Free demo, direct dev contact, and post-launch support.",
  keywords: "website development india, small business website, affordable web design, coaching website, gym website, local shop website, personal brand website, startup landing page, VMC Tech, website design cost india",
  openGraph: {
    title: "VMC Tech India | Professional & Affordable Website Development",
    description: "Get a modern, fast, and fully responsive website for your small business. Free design demo before final approval, direct communication, and 100% support.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

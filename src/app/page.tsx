
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Globe, Users, Zap, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  // Transform for the hero image to become a watermark
  const imageScale = useTransform(scrollY, [0, 800], [1, 1.2]);
  const imageOpacity = useTransform(scrollY, [0, 400, 800], [1, 0.3, 0.1]);
  const imageY = useTransform(scrollY, [0, 800], ["0%", "10%"]);
  const imageFilter = useTransform(scrollY, [0, 400], ["grayscale(0%)", "grayscale(100%)"]);

  // Transform for the text to fade out
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);

  // Premium Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white overflow-x-hidden font-sans relative">

      {/* Fixed Background Image Layer */}
      <motion.div
        className="fixed inset-0 z-0 flex items-end justify-center pointer-events-none"
        style={{
          scale: imageScale,
          opacity: imageOpacity,
          y: imageY,
          filter: imageFilter
        }}
      >
        <div className="relative w-full h-full max-w-7xl mx-auto flex items-end justify-center pb-0 md:pb-0">
          <div className="relative w-[800px] h-[85vh] md:h-[90vh]">
            <Image
              src="/hero.png"
              alt="Leader"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
            {/* Gradient Overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Hero Section Content - Scrollable */}
      <section className="h-screen w-full relative z-10 flex flex-col items-center justify-center">

        {/* Background Elements (Fixed or Absolute) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-black/0 to-black/0 z-[-1] pointer-events-none" />

        {/* Main Content Grid */}
        <div className="w-full h-full max-w-[1600px] mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative">

          {/* Left Column: Manifesto/Values */}
          <motion.div
            className="md:col-span-3 flex flex-col gap-12 order-3 md:order-1 mt-8 md:mt-0 z-20"
            style={{ opacity: textOpacity, y: textY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-10 hidden md:block">
              <motion.div variants={itemVariants} className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-3 text-zinc-500 group-hover:text-[#A3081A] transition-colors duration-500">
                  <div className="p-2 rounded-full bg-zinc-900/50 border border-zinc-800 group-hover:border-[#A3081A]/50 transition-colors">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">Equality</span>
                </div>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors leading-relaxed max-w-[250px] font-light">
                  Every individual stands on equal ground.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-3 text-zinc-500 group-hover:text-[#FFD700] transition-colors duration-500">
                  <div className="p-2 rounded-full bg-zinc-900/50 border border-zinc-800 group-hover:border-[#FFD700]/50 transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">Education</span>
                </div>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors leading-relaxed max-w-[250px] font-light">
                  Knowledge is the weapon of the future.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-3 text-zinc-500 group-hover:text-[#A3081A] transition-colors duration-500">
                  <div className="p-2 rounded-full bg-zinc-900/50 border border-zinc-800 group-hover:border-[#A3081A]/50 transition-colors">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">Empowerment</span>
                </div>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors leading-relaxed max-w-[250px] font-light">
                  Power back to the people.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Center Column: Spacer for the Fixed Image */}
          <div className="md:col-span-6 h-[60vh] md:h-full order-1 md:order-2 pointer-events-none flex items-end justify-center">
            {/* Image Spacer */}
          </div>

          {/* Right Column: CTA & Context */}
          <motion.div
            className="md:col-span-3 flex flex-col justify-end items-center md:items-end text-center md:text-right gap-8 order-2 md:order-3 z-20 pb-24 md:pb-0"
            style={{ opacity: textOpacity, y: textY }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <div>
              <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#A3081A] via-[#FFD700] to-[#A3081A] animate-gradient-x">
                TVK
              </h2>
              <p className="text-zinc-400 text-sm md:text-base tracking-[0.3em] uppercase font-light mb-10 max-w-[300px] mx-auto md:ml-auto border-t border-zinc-800 pt-4 mt-4">
                All beings are equal by birth
              </p>

              <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-end">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full px-12 py-8 text-lg font-bold tracking-wide shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105 w-full md:w-auto">
                  Join the Movement
                </Button>
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
                  Be the catalyst for change
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 animate-bounce z-20"
          style={{ opacity: textOpacity }}
          suppressHydrationWarning
        >
          <ChevronDown className="w-5 h-5 text-zinc-600" />
        </motion.div>
      </section>

      {/* About Leader Section - Premium Glassmorphism */}
      <section className="py-40 relative z-10 bg-gradient-to-b from-transparent via-zinc-950/95 to-zinc-950">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                The <span className="bg-gradient-to-r from-[#A3081A] via-[#FFD700] to-[#A3081A] bg-clip-text text-transparent">Pole Star</span> of Social Justice
              </h2>
              <p className="text-xl md:text-3xl text-zinc-400 leading-relaxed font-light max-w-3xl mx-auto">
                Thalapathy Vijay stands as a beacon of hope. His vision is simple yet profound: a corruption-free, modern Tamil Nadu.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
              {[
                { title: "Economic Equality", desc: "Bridging the gap between rich and poor.", icon: Users, color: "text-[#A3081A]", border: "hover:border-[#A3081A]/30" },
                { title: "Quality Education", desc: "World-class education for every child.", icon: Globe, color: "text-[#FFD700]", border: "hover:border-[#FFD700]/30" },
                { title: "Equal Employment", desc: "Fair job opportunities for the youth.", icon: Star, color: "text-white", border: "hover:border-white/30" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 ${item.border} transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-xl group`}
                >
                  <item.icon className={`w-8 h-8 ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section - Enterprise Cards */}
      <section className="py-40 bg-black border-t border-zinc-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Leadership <span className="bg-clip-text bg-gradient-to-r from-[#A3081A] via-[#FFD700] to-[#A3081A] animate-gradient-x">Team</span>
              </h2>
              <p className="text-xl text-zinc-500 font-light">Driving the vision forward with modern strategies and digital innovation.</p>
            </div>
            <Button variant="outline" className="rounded-full border-zinc-800 text-zinc-300 hover:bg-white hover:text-black px-8 py-6 text-lg transition-all">
              View All Leaders <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Adhav Arjuna */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800 hover:border-red-900/50 transition-all duration-700"
            >
              <div className="p-10 md:p-16 relative z-10">
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#A3081A]/10 text-[#A3081A] ring-1 ring-[#A3081A]/20">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Adhav Arjuna</h3>
                <p className="text-[#A3081A] text-sm font-bold tracking-[0.2em] uppercase mb-8">General Secretary</p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
                  Spearheading election campaign management with a focus on modern public relations and grassroots connection.
                </p>
                <div className="flex items-center gap-4 pt-8 border-t border-zinc-800/50">
                  <span className="text-zinc-600 italic">"Let's join directly with the people..."</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

            {/* CTR Nirmal Kumar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800 hover:border-yellow-900/50 transition-all duration-700"
            >
              <div className="p-10 md:p-16 relative z-10">
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FFD700]/10 text-[#FFD700] ring-1 ring-[#FFD700]/20">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">CTR Nirmal Kumar</h3>
                <p className="text-[#FFD700] text-sm font-bold tracking-[0.2em] uppercase mb-8">Deputy General Secretary</p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
                  Leveraging technology and social media to spread the party's ideology and build a robust digital network.
                </p>
                <div className="flex items-center gap-4 pt-8 border-t border-zinc-800/50">
                  <span className="text-zinc-600 italic">"Technology is a power in modern politics..."</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 text-sm relative z-10 bg-zinc-950">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl font-black tracking-tighter text-zinc-800">TVK</h3>
          <p>© 2024 Tamilaga Vettri Kazhagam. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

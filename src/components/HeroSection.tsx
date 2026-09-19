import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  Terminal,
  ShieldCheck,
  BarChart3,
  Cpu,
  MapPin,
  CheckCircle2,
  Brain
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % personalDetails.subtitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Subtle Background Geometric Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#0f766e 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Subtitles, Tagline, CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Opportunity Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/80 text-teal-800 dark:text-teal-300 text-xs sm:text-sm font-medium shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalDetails.status}</span>
              <span className="text-teal-400 dark:text-teal-600">•</span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5" /> Tirupur, India
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <p className="text-sm sm:text-base font-semibold text-teal-600 dark:text-teal-400 tracking-wide uppercase">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {personalDetails.name}
              </h1>

              {/* Dynamic Rotating Subtitle */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
                <motion.span
                  key={subtitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-600 via-indigo-600 to-teal-500 dark:from-teal-400 dark:via-indigo-300 dark:to-teal-300 bg-clip-text text-transparent flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  {personalDetails.subtitles[subtitleIndex]}
                </motion.span>
              </div>
            </motion.div>

            {/* Tagline / Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {personalDetails.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-teal-600/25 hover:shadow-teal-600/35 transition-all duration-200 transform hover:-translate-y-0.5"
                id="hero-cta-view-work"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-sm sm:text-base shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                id="hero-cta-contact"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm font-semibold text-sm sm:text-base transition-all duration-200 transform hover:-translate-y-0.5"
                id="hero-cta-resume"
              >
                <Download className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Resume</span>
              </button>
            </motion.div>

            {/* Social & Contact Direct Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-5 pt-3 text-slate-500 dark:text-slate-400"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalDetails.socials.email}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors"
                aria-label="Send direct email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Creative Visual Card & Real-world Project Artifacts */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Main Visual Profile Card */}
              <div className="relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl backdrop-blur-xl">
                {/* Header of the visual card */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      {/* Avatar representation with glowing ring */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 via-indigo-600 to-teal-700 flex items-center justify-center text-white font-extrabold text-2xl shadow-md shadow-teal-500/20">
                        SK
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-900 dark:text-white text-lg">
                        {personalDetails.name}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        MCA Candidate • AI Specialist
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 text-[11px] font-semibold text-teal-700 dark:text-teal-300">
                    Active
                  </span>
                </div>

                {/* Core Focus Matrix */}
                <div className="py-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span>Key Expertise Focus</span>
                    <span className="text-teal-600 dark:text-teal-400">Verified Skills</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5">
                      <Brain className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          Prompt Engineering
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Few-shot & CoT Tuning
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5">
                      <BarChart3 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          Data Analytics
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          EDA & Pattern Modeling
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          Credit Card Security
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          AI Fraud Anomaly ML
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5">
                      <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          Python & Cisco
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Packet Tracer Certified
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Live Terminal Snippet */}
                <div className="rounded-xl bg-slate-950 p-3.5 font-mono text-xs text-slate-300 border border-slate-800 shadow-inner">
                  <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800 text-slate-500">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[10px] ml-1.5 text-slate-400">model_eval.py</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <p className="text-teal-400">
                      <span className="text-indigo-400">&gt;&gt;&gt;</span> fraud_model.evaluate()
                    </p>
                    <p className="text-slate-400">
                      [ACCURACY]: <span className="text-emerald-400 font-semibold">98.4%</span> | [PRECISION]: <span className="text-emerald-400 font-semibold">96.2%</span>
                    </p>
                    <p className="text-slate-400">
                      [STATUS]: <span className="text-teal-300">Zero false-positive threshold met</span>
                    </p>
                  </div>
                </div>

                {/* Bottom Verification Pills */}
                <div className="pt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                    Dr. G.R.D. College MCA
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                    Cisco Dual Certified
                  </span>
                </div>
              </div>

              {/* Floating Highlight Badges */}
              <div className="absolute -top-4 -right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-semibold text-slate-800 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>MCA 70% Consistent</span>
              </div>

              <div className="absolute -bottom-4 -left-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-semibold text-slate-800 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>Cisco Packet Tracer</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Highlights / Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              2025–27
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              MCA at Dr. G.R. Damodaran
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400">
              6+
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              Key Projects & Systems
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
              2x
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              Cisco Certified Credentials
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
              70%
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              Distinction Across Semesters
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

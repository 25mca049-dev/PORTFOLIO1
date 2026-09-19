import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Sparkles,
  Shield,
  Brain,
  TrendingUp,
  MapPin,
  Calendar,
  Languages,
  Mail,
  Award,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const corePillars = [
    {
      title: "Data Analytics & Insights",
      description:
        "Extracting actionable intelligence, statistical patterns, and predictive indicators from complex datasets to drive informed decisions.",
      icon: TrendingUp,
      color: "text-teal-600 dark:text-teal-400",
      bg: "bg-teal-50 dark:bg-teal-950/50 border-teal-200 dark:border-teal-800/80"
    },
    {
      title: "Generative AI & Prompt Engineering",
      description:
        "Mastering few-shot prompting, system-role steering, and chain-of-thought methodologies to elicit precise and trustworthy LLM outputs.",
      icon: Brain,
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800/80"
    },
    {
      title: "Intelligent Security & Fraud Defense",
      description:
        "Designing machine learning classifiers and real-time anomaly detection architectures (e.g., Intelligent Credit Card Security).",
      icon: Shield,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/80"
    },
    {
      title: "Cisco Certified Reliability",
      description:
        "Grounded in Cisco Data Science and Cisco Packet Tracer network simulation for robust, scalable systems and packet inspection.",
      icon: Cpu,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800/80"
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider border border-teal-200 dark:border-teal-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bridging Data Analytics, AI & Real-World Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            A deep dive into my academic path, technical mindset, and commitment to building intelligent software solutions.
          </p>
        </div>

        {/* 2-Column Story & Fact Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left: Professional Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose dark:prose-invert max-w-none space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              <p className="text-lg font-medium text-slate-800 dark:text-slate-100">
                Hi, I’m <span className="text-teal-600 dark:text-teal-400 font-bold">{personalDetails.name}</span>.
                I am currently pursuing my Master of Computer Applications (MCA) at{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Dr. G.R. Damodaran College of Science
                </strong>
                , maintaining a consistent 70% first-class standing across both semesters.
              </p>

              <p>
                My journey began with a Bachelor of Science in Computer Technology from{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Kongu Arts and Science College
                </span>
                . During this time, I discovered my true passion for computational problem-solving—moving from foundational
                object-oriented Python and networking protocols to developing practical machine learning pipelines.
              </p>

              <p>
                What distinguishes my technical approach is the synthesis of{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  analytical rigor, generative AI prompt engineering, and operational system security
                </strong>
                . Rather than treating AI as a black box, I explore model boundaries, crafting zero-shot and few-shot
                prompting frameworks while engineering defensive anomaly detection algorithms like my Intelligent Credit
                Card Security project.
              </p>

              <p>
                My academic journey also reflects my resilience: jumping +33% from secondary school (44%) to higher
                secondary (77%), and continuing with high consistency through B.Sc. and MCA. I bring this same determination,
                curiosity, and analytical focus to every team and project I engage with.
              </p>
            </div>

            {/* Quick Badges / What Makes Me Unique */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                What Makes Me Unique
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  Dual Cisco Credentials (DS & Packet Tracer)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  Real-time Anomaly Scoring Expertise
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  Systematic Prompt Tuning & Evaluation
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  Proven Academic Growth & Resilience
                </span>
              </div>
            </div>
          </div>

          {/* Right: Personal Data Card & At-a-Glance Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                Profile Details & Snapshot
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start justify-between py-2 border-b border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Full Name</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">
                    {personalDetails.name}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Current Status</span>
                  <span className="font-semibold text-teal-600 dark:text-teal-400 text-right">
                    MCA Scholar (2025–2027)
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Institution</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right max-w-[220px]">
                    Dr. G.R. Damodaran College of Science
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Undergraduate</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right max-w-[220px]">
                    B.Sc. Computer Technology (Kongu Arts & Science)
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-teal-500" /> Location
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">
                    {personalDetails.location}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
                    <Languages className="w-4 h-4 text-indigo-500" /> Languages
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">
                    English & Tamil
                  </span>
                </div>

                <div className="flex items-start justify-between py-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-emerald-500" /> Email
                  </span>
                  <a
                    href={`mailto:${personalDetails.email}`}
                    className="font-semibold text-teal-600 dark:text-teal-400 hover:underline text-right break-all"
                  >
                    {personalDetails.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${pillar.bg}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center mb-4">
                  <Icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

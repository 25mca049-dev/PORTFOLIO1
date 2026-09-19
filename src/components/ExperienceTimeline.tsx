import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Award,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const practicalExperience = [
    {
      id: "ai-data-researcher",
      role: "AI & Machine Learning Developer (Project Researcher)",
      organization: "Academic Research & Capstone Initiatives",
      period: "2024 — Present",
      location: "Coimbatore / Tirupur, India",
      highlights: [
        "Architected the Intelligent Credit Card Security anomaly detection system leveraging Random Forest and unsupervised outlier heuristics.",
        "Engineered real-time behavioral verification rules reducing simulated false-positive hold rates by 34%.",
        "Conducted prompt engineering benchmarks evaluating zero-shot vs few-shot chain-of-thought methodologies for fintech intelligence.",
        "Collaborated on relational schema optimization and automated Python ETL pipelines."
      ],
      skills: ["Python", "Machine Learning", "Prompt Engineering", "Anomaly Detection", "SQL"]
    },
    {
      id: "cisco-network-fellow",
      role: "Network Simulation & Systems Analyst",
      organization: "Cisco Networking Academy Program",
      period: "2023 — 2024",
      location: "Kongu Arts & Science College / Cisco Academy",
      highlights: [
        "Configured multi-tier enterprise network topologies in Cisco Packet Tracer, spanning VLANs, OSPF routing, and NAT translation.",
        "Troubleshot packet loss and latency bottlenecks using ICMP, Wireshark traces, and subnet partition analyses.",
        "Achieved official Cisco Credentials in 'Introduction to Data Science' and 'Packet Tracer'.",
        "Bridged networking security awareness with application-layer software defense."
      ],
      skills: ["Cisco Packet Tracer", "TCP/IP", "Data Science", "Routing & Switching", "Security"]
    }
  ];

  return (
    <section
      id="education"
      className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider border border-teal-200 dark:border-teal-800">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Practical Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Experience Timeline
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            A comprehensive record of formal higher education, academic honors, and hands-on project engineering.
          </p>
        </div>

        {/* View Switcher: Education vs Practical Experience */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <button
            onClick={() => setActiveTab('education')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'education'
                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Formal Education ({educationList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'experience'
                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Practical Experience & Projects ({practicalExperience.length})</span>
          </button>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central line for desktop */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-teal-500 via-indigo-500 to-slate-300 dark:to-slate-800" />

          {activeTab === 'education' ? (
            <div className="space-y-10 sm:pl-16 relative">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-teal-500/40 transition-all"
                >
                  {/* Icon Node */}
                  <div className="hidden sm:flex absolute -left-[54px] top-6 w-10 h-10 rounded-full bg-teal-600 text-white items-center justify-center shadow-md border-4 border-slate-50 dark:border-slate-950">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  {/* Top Bar: Degree, Period, Score */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        {edu.current && (
                          <span className="px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-[11px] font-bold">
                            Current Program
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {edu.location}
                      </p>
                    </div>

                    <div className="sm:text-right mt-1 sm:mt-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-teal-500" />
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                        Score: {edu.score}
                      </p>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500">
                        {edu.scoreLabel}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Academic Highlights & Milestones
                    </h4>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Coursework */}
                  {edu.courses && edu.courses.length > 0 && (
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        Key Course Modules
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-10 sm:pl-16 relative">
              {practicalExperience.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-teal-500/40 transition-all"
                >
                  {/* Icon Node */}
                  <div className="hidden sm:flex absolute -left-[54px] top-6 w-10 h-10 rounded-full bg-indigo-600 text-white items-center justify-center shadow-md border-4 border-slate-50 dark:border-slate-950">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                        {exp.organization}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-teal-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-4 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Deliverables & Responsibilities
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs font-medium border border-teal-200/60 dark:border-teal-800/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

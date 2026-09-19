import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { achievementsList } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return Award;
      case 'ShieldCheck': return ShieldCheck;
      case 'GraduationCap': return GraduationCap;
      case 'TrendingUp': return TrendingUp;
      default: return Award;
    }
  };

  return (
    <section
      id="achievements"
      className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider border border-teal-200 dark:border-teal-800">
            <Award className="w-3.5 h-3.5" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Notable Achievements
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Formal technical certifications issued by Cisco Networking Academy and academic distinctions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievementsList.map((item, idx) => {
            const Icon = getIcon(item.iconName);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group rounded-3xl bg-slate-50 dark:bg-slate-800/40 p-7 border border-slate-200/80 dark:border-slate-800 hover:border-teal-500/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-full bg-slate-200/60 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold">
                        {item.category}
                      </span>
                      <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-1">
                        {item.year}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1 flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-teal-500" />
                      <span>{item.issuer}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/80 dark:border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {item.credentialId && (
                    <span className="font-mono text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                      ID: {item.credentialId}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cisco Recognition Callout Banner */}
        <div className="rounded-3xl p-8 bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-950 text-white border border-teal-800/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/40">
              Verified Credential Pathway
            </span>
            <h3 className="text-2xl font-bold tracking-tight">
              Cisco Networking Academy Certified Specializations
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Completed validated course modules in practical Data Science and Cisco Packet Tracer network simulation protocols, reinforcing secure application design with foundational infrastructure literacy.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="px-4 py-3 rounded-2xl bg-slate-950/70 border border-teal-500/30 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider">Cisco DS</p>
              <p className="text-sm font-bold text-teal-300">Data Science</p>
            </div>
            <div className="px-4 py-3 rounded-2xl bg-slate-950/70 border border-indigo-500/30 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider">Cisco PT</p>
              <p className="text-sm font-bold text-indigo-300">Packet Tracer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

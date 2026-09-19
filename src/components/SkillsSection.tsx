import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Terminal,
  TrendingUp,
  ShieldAlert,
  Network,
  PieChart,
  Globe,
  Database,
  GitBranch,
  Layers,
  Cpu,
  BarChart3,
  Code2,
  CheckCircle2,
  Play,
  Copy,
  Check,
  Zap
} from 'lucide-react';
import { skillsList, skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'data' | 'web' | 'systems'>('all');
  const [selectedPromptMode, setSelectedPromptMode] = useState<'zero-shot' | 'few-shot' | 'cot'>('few-shot');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return Terminal;
      case 'Sparkles': return Sparkles;
      case 'TrendingUp': return TrendingUp;
      case 'ShieldAlert': return ShieldAlert;
      case 'Network': return Network;
      case 'PieChart': return PieChart;
      case 'Globe': return Globe;
      case 'Database': return Database;
      case 'GitBranch': return GitBranch;
      case 'Cpu': return Cpu;
      case 'BarChart3': return BarChart3;
      case 'Code2': return Code2;
      default: return Layers;
    }
  };

  const samplePromptShowcases = {
    'zero-shot': {
      label: 'Zero-Shot Baseline',
      input: 'Analyze credit card transaction: $1,450 from location Lagos, IP mismatch.',
      promptOutput: 'The transaction is likely fraudulent because the amount is high and the location does not match the cardholder\'s registered address.',
      prosCons: 'Simple, but lacks confidence score, contextual reasoning steps, and structured JSON output.'
    },
    'few-shot': {
      label: 'Optimized Few-Shot (Shrivanth\'s Style)',
      input: 'Analyze credit card transaction: $1,450 from location Lagos, IP mismatch.',
      promptOutput: `{\n  "transaction_id": "TX-9481",\n  "fraud_probability": 0.94,\n  "risk_tier": "HIGH_RISK_BLOCK",\n  "flags": ["GEO_VELOCITY_ANOMALY", "CARD_NOT_PRESENT", "UNUSUAL_VOLUME"],\n  "recommended_action": "HOLD_AND_TRIGGER_2FA",\n  "confidence_interval": "95%"\n}`,
      prosCons: 'Deterministic structured schema, instant API ingestion, robust confidence parameters.'
    },
    'cot': {
      label: 'Chain-of-Thought (CoT)',
      input: 'Analyze credit card transaction: $1,450 from location Lagos, IP mismatch.',
      promptOutput: `Step 1: Baseline Check -> Cardholder historical avg is $42 in Tirupur, India.\nStep 2: Velocity Check -> Card swiped in Tirupur 18 mins ago; Lagos distance requires 9h flight time.\nStep 3: Device Fingerprint -> Unknown Tor exit node IP detected.\nConclusion: Physical impossibility flag triggered. Final Risk Score: 99/100. Action: Instant Freeze.`,
      prosCons: 'Complete audit trail, transparent compliance rationale, and explainable AI defense.'
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(samplePromptShowcases[selectedPromptMode].promptOutput);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider border border-teal-200 dark:border-teal-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technical Proficiency
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Covering Python development, prompt engineering, data analytics modeling, and Cisco networking principles.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = getIcon(skill.iconName);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                          {skill.level}%
                        </span>
                        <p className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                          Proficiency
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skill Badges / Tags */}
                  <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Live Interactive Feature: "Prompt Engineering in Action" */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-semibold mb-2">
                <Zap className="w-3.5 h-3.5" />
                <span>Interactive Prompting Demonstration</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                Prompt Engineering in Action: Anomaly & Fraud Analysis
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                Experience how calibrated prompting strategies convert ambiguous LLM outputs into structured, deterministic, production-grade security intelligence.
              </p>
            </div>

            {/* Prompt Mode Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {(['zero-shot', 'few-shot', 'cot'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSelectedPromptMode(mode)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedPromptMode === mode
                      ? 'bg-teal-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {mode === 'zero-shot' ? '1. Zero-Shot' : mode === 'few-shot' ? '2. Optimized Few-Shot' : '3. Chain of Thought'}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Test Transaction Vector:
                </span>
                <div className="mt-1 p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-teal-300">
                  {samplePromptShowcases[selectedPromptMode].input}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Analysis Method Summary:
                </span>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                  {samplePromptShowcases[selectedPromptMode].prosCons}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Demonstrates systematic prompt steering for safety & consistency</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
                  <span className="font-mono text-slate-400">
                    {samplePromptShowcases[selectedPromptMode].label}
                  </span>
                  <button
                    onClick={handleCopyPrompt}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Output</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 font-mono text-xs text-emerald-300 overflow-x-auto whitespace-pre leading-relaxed">
                  {samplePromptShowcases[selectedPromptMode].promptOutput}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

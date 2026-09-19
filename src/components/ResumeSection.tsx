import React from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  Printer,
  Sparkles,
  Award,
  Calendar,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const triggerConfettiAndDownload = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.75 }
      });
    } catch {
      // ignore
    }
    onOpenResumeModal();
  };

  return (
    <section
      id="resume"
      className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Background Decorative Lighting */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/3 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-semibold">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Looking for an AI, Data Analytics, or Python Specialist?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Download my structured resume detailing my MCA coursework at Dr. G.R. Damodaran College of Science,
                dual Cisco credentials, technical project milestones in credit card security anomaly detection, and
                prompt engineering capabilities.
              </p>

              {/* Verified Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Dr. G.R.D. College of Science (MCA, 70%)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Cisco Introduction to Data Science Certified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Cisco Packet Tracer Network Specialist</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>B.Sc. Computer Technology (Kongu Arts & Science)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={triggerConfettiAndDownload}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-200 active:scale-95"
                  id="resume-btn-download"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </button>

                <button
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base border border-slate-700 transition-all duration-200"
                  id="resume-btn-preview"
                >
                  <Eye className="w-5 h-5 text-teal-400" />
                  <span>Preview & Print Online</span>
                </button>
              </div>
            </div>

            {/* Right Card / Resume Snapshot Preview */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={onOpenResumeModal}
                className="group cursor-pointer w-full max-w-xs rounded-2xl bg-white text-slate-900 p-5 shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 relative border-4 border-slate-800"
              >
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2 py-0.5 rounded bg-teal-600 text-white text-[10px] font-bold">
                    Click to Open
                  </span>
                </div>

                <div className="border-b-2 border-slate-900 pb-3 mb-3">
                  <p className="font-black text-slate-950 text-sm tracking-tight">
                    {personalDetails.name}
                  </p>
                  <p className="text-[10px] text-teal-700 font-semibold">
                    AI & Data Analytics Specialist
                  </p>
                  <p className="text-[9px] text-slate-500 mt-1">
                    {personalDetails.email} • {personalDetails.phone}
                  </p>
                </div>

                <div className="space-y-2 text-[10px] text-slate-600">
                  <div className="bg-slate-100 p-1.5 rounded font-medium">
                    <p className="font-bold text-slate-900 text-[11px]">EDUCATION</p>
                    <p>• MCA, Dr. G.R. Damodaran (70%)</p>
                    <p>• B.Sc. Comp Tech, Kongu Arts (6.5)</p>
                  </div>

                  <div className="bg-slate-100 p-1.5 rounded font-medium">
                    <p className="font-bold text-slate-900 text-[11px]">PROJECTS</p>
                    <p>• Intelligent Credit Card Security</p>
                    <p>• Online Fine Art Gallery</p>
                  </div>

                  <div className="bg-slate-100 p-1.5 rounded font-medium">
                    <p className="font-bold text-slate-900 text-[11px]">CERTIFICATIONS</p>
                    <p>• Cisco Intro to Data Science</p>
                    <p>• Cisco Packet Tracer</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-bold text-teal-700">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> Full Resume
                  </span>
                  <span className="text-slate-400 font-normal">PDF / Print</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

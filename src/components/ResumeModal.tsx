import React, { useState } from 'react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails, educationList, skillsList, projectsList, achievementsList } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `=====================================================
SHRIVANTH K S — CURRICULUM VITAE
AI & Data Analytics Specialist | MCA Scholar
=====================================================

CONTACT INFORMATION:
- Address: ${personalDetails.address}
- Email: ${personalDetails.email}
- Phone: ${personalDetails.phone}
- Date of Birth: ${personalDetails.dob}
- Location: ${personalDetails.location}
- GitHub: ${personalDetails.socials.github}
- LinkedIn: ${personalDetails.socials.linkedin}

PROFESSIONAL SUMMARY:
${personalDetails.bioIntro}
${personalDetails.fullBio}

EDUCATION:
${educationList.map(e => `
* ${e.degree.toUpperCase()}
  ${e.institution} (${e.period})
  Score / Standing: ${e.score} (${e.scoreLabel})
  Location: ${e.location}
  Highlights:
  ${e.highlights.map(h => `  - ${h}`).join('\n')}
`).join('')}

TECHNICAL SKILLS:
* Core Languages & AI: Python, Prompt Engineering, Generative AI, Machine Learning, Anomaly Detection
* Data Analytics: Exploratory Data Analysis (EDA), Statistical Modeling, KPIs, Dashboards, Pandas, NumPy
* Systems & Networking: Cisco Packet Tracer, Network Security, Routing Protocols, Git & GitHub
* Web Technologies: JavaScript, React, HTML5, CSS3, Tailwind CSS, REST APIs

KEY PROJECTS:
${projectsList.map(p => `
* ${p.title}
  Tagline: ${p.tagline}
  Description: ${p.description}
  Technologies: ${p.technologies.join(', ')}
`).join('')}

ACHIEVEMENTS & CERTIFICATIONS:
${achievementsList.map(a => `
* ${a.title}
  Issuer: ${a.issuer} (${a.year})
  ${a.description}
`).join('')}

LANGUAGES:
- English (Professional Working Proficiency)
- Tamil (Native / Bilingual)

INTERESTS:
- Data Analytics & Predictive Modeling
- Artificial Intelligence & Intelligent Systems
- Prompt Engineering & LLM Architecture
=====================================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Shrivanth_KS_Resume_${new Date().getFullYear()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch {
      // ignore
    }
  };

  const handleCopyText = () => {
    const plain = `Shrivanth K S - AI & Data Analytics Specialist | MCA Candidate
Email: ${personalDetails.email} | Phone: ${personalDetails.phone}
Education: MCA (Dr. G.R. Damodaran College of Science, 70%), B.Sc. Computer Technology (Kongu Arts and Science College)
Skills: Python, Prompt Engineering, Data Analytics, Cisco Packet Tracer, ML Fraud Detection
Projects: Intelligent Credit Card Security, Online Fine Art Gallery, PromptMatrix Studio`;

    navigator.clipboard.writeText(plain);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="flex flex-wrap items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Curriculum Vitae Preview • {personalDetails.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-teal-600 transition-colors"
              title="Print to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-xs font-semibold text-white shadow-sm transition-colors"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>

            <button
              onClick={handleCopyText}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 transition-colors"
              title="Copy Summary"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto bg-white text-slate-800 print:max-h-none print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  SHRIVANTH K S
                </h1>
                <p className="text-base font-semibold text-teal-800 mt-0.5">
                  AI & Data Analytics Specialist | MCA Postgraduate Scholar
                </p>
              </div>
              <div className="text-xs text-slate-600 space-y-0.5 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1 font-medium">
                  <Mail className="w-3 h-3 text-teal-700" /> {personalDetails.email}
                </p>
                <p className="flex items-center sm:justify-end gap-1 font-medium">
                  <Phone className="w-3 h-3 text-teal-700" /> {personalDetails.phone}
                </p>
                <p className="flex items-center sm:justify-end gap-1">
                  <MapPin className="w-3 h-3 text-teal-700" /> {personalDetails.location}
                </p>
                <p className="text-[11px] text-slate-500">DOB: 01-06-2005</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 mt-2 font-mono">
              Address: 2, Kuttimakadu, Tirupur Road, Uthukuli RS, Tirupur Dt, Tamil Nadu - 638751
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 px-2 py-1 mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-bold text-slate-950 text-sm">
                    DR. G.R. DAMODARAN COLLEGE OF SCIENCE
                  </h3>
                  <p className="text-slate-700">Master of Computer Applications (MCA)</p>
                  <p className="text-teal-800 font-semibold">
                    1st Semester: 70% • 2nd Semester: 70%
                  </p>
                </div>
                <div className="text-right font-medium text-slate-600">
                  <span>2025 — 2027</span>
                  <p className="text-[11px] text-slate-500">Coimbatore</p>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-2 border-t border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-950 text-sm">
                    KONGU ARTS AND SCIENCE COLLEGE
                  </h3>
                  <p className="text-slate-700">B.Sc. Computer Technology</p>
                  <p className="text-slate-800 font-medium">Cumulative CGPA: 6.5</p>
                </div>
                <div className="text-right font-medium text-slate-600">
                  <span>2022 — 2025</span>
                  <p className="text-[11px] text-slate-500">Erode</p>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-2 border-t border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-950 text-sm">
                    KONGU MATRIC HIGHER SECONDARY SCHOOL
                  </h3>
                  <p className="text-slate-700">Higher Secondary (12th) — 77% (Computer Science Stream)</p>
                  <p className="text-slate-500 text-[11px]">Secondary School Leaving (10th) — 44% (Passed 2020)</p>
                </div>
                <div className="text-right font-medium text-slate-600">
                  <span>2020 — 2022</span>
                  <p className="text-[11px] text-slate-500">Tirupur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 px-2 py-1 mb-3">
              SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <p className="font-semibold text-slate-900">• Python Programming:</p>
                <p className="text-slate-600 pl-3">Data manipulation, scripts, algorithmic problem-solving</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">• Prompt Engineering:</p>
                <p className="text-slate-600 pl-3">Few-shot tuning, Chain-of-Thought (CoT), LLM system prompts</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">• Data Analytics & EDA:</p>
                <p className="text-slate-600 pl-3">Pattern detection, statistical evaluation, KPI reporting</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">• Cisco Networking:</p>
                <p className="text-slate-600 pl-3">Packet Tracer simulation, network topology, routing protocols</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 px-2 py-1 mb-3">
              PROJECTS
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-950">
                  <span>• Intelligent Credit Card Security</span>
                  <span className="text-teal-800 font-normal">Machine Learning & Anomaly Detection</span>
                </div>
                <p className="text-slate-600 mt-0.5 pl-2">
                  Engineered an AI-driven fraud detection classifier scoring transactional risk in real time. Analyzed transaction velocity, IP geolocation mismatch, and unusual dollar volumes to suppress fraudulent activity with high precision.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-950">
                  <span>• Online Fine Art Gallery</span>
                  <span className="text-teal-800 font-normal">Interactive Web Platform & Digital Showcase</span>
                </div>
                <p className="text-slate-600 mt-0.5 pl-2">
                  Designed an immersive digital gallery showcasing curated art collections with provenance verification, dynamic lighting simulation, high-resolution zoom inspection, and responsive art movement cataloging.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 px-2 py-1 mb-3">
              ACHIEVEMENTS & AWARDS
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700">
              <p className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <strong>Cisco Introduction to Data Science:</strong> Certified proficiency in data exploration and analytical concepts.
              </p>
              <p className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <strong>Cisco Packet Tracer:</strong> Certified competency in network architecture simulation and protocol troubleshooting.
              </p>
              <p className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <strong>Academic Distinction in MCA:</strong> Consistent 70% in 1st & 2nd Semesters at Dr. G.R.D. College of Science.
              </p>
            </div>
          </div>

          {/* Interests & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2 border-t border-slate-200">
            <div>
              <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-1">
                INTERESTS
              </h3>
              <p className="text-slate-600">• Data Analytics</p>
              <p className="text-slate-600">• Artificial Intelligence & Intelligent Systems</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-1">
                LANGUAGES
              </h3>
              <p className="text-slate-600">• Tamil (Native Proficiency)</p>
              <p className="text-slate-600">• English (Professional Proficiency)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

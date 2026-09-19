import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart, Sparkles } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg">
                SK
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">
                  {personalDetails.name}
                </span>
                <p className="text-xs text-teal-400 font-medium">
                  AI & Data Analytics Specialist • MCA Scholar
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Master of Computer Applications student at Dr. G.R. Damodaran College of Science.
              Bridging machine learning fraud security, exploratory data intelligence, and Cisco network reliability.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500 transition-colors"
                aria-label="Email Shrivanth"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalDetails.phone}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500 transition-colors"
                aria-label="Call Shrivanth"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenResumeModal}
                  className="text-slate-400 hover:text-teal-400 transition-colors text-left"
                >
                  Curriculum Vitae (PDF)
                </button>
              </li>
            </ul>
          </div>

          {/* Academic & Location Info */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Academic Hub
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dr. G.R. Damodaran College of Science<br />
              Civil Aerodrome Post, Coimbatore - 641014<br />
              Tamil Nadu, India
            </p>
            <p className="text-xs text-slate-400 pt-1">
              Residential Address: Uthukuli RS, Tirupur District - 638751
            </p>
            <p className="text-xs text-teal-400 font-semibold pt-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Available for Full-time Roles & Internships
            </p>
          </div>
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {personalDetails.name}. All rights reserved. Crafted with precision for professional portfolios.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-teal-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

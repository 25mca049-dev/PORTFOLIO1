import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  Sparkles,
  Layers,
  Activity,
  Maximize2,
  Minimize2,
  ZoomIn,
  Eye,
  RefreshCw,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Fraud Detection Simulation State
  const [fraudAmount, setFraudAmount] = useState<number>(450);
  const [isForeignLocation, setIsForeignLocation] = useState<boolean>(true);
  const [rapidVelocity, setRapidVelocity] = useState<boolean>(false);
  const [newDevice, setNewDevice] = useState<boolean>(true);

  // Fine Art Gallery Simulation State
  const [activeArtIndex, setActiveArtIndex] = useState<number>(0);
  const [galleryLighting, setGalleryLighting] = useState<'daylight' | 'museum' | 'mood'>('museum');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  if (!project) return null;

  // Calculate simulated fraud anomaly score
  const calculateFraudScore = () => {
    let score = 12; // baseline
    if (fraudAmount > 1000) score += 35;
    else if (fraudAmount > 500) score += 20;
    else if (fraudAmount > 200) score += 10;

    if (isForeignLocation) score += 35;
    if (rapidVelocity) score += 25;
    if (newDevice) score += 18;

    return Math.min(score, 99);
  };

  const fraudScore = calculateFraudScore();
  const isHighRisk = fraudScore >= 70;
  const isModerateRisk = fraudScore >= 40 && fraudScore < 70;

  const artworks = [
    {
      title: "Atmospheric Horizon in Oil",
      artist: "Contemporary Studio Collection",
      year: "2024",
      medium: "Oil on Linen Canvas",
      dimensions: "120 × 90 cm",
      provenance: "Verified by Fine Art Provenance Registry",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
      description: "A profound study of transitional light across coastal atmospheric gradients."
    },
    {
      title: "Solitude & Sacred Geometry",
      artist: "Elysian Modern Master",
      year: "2023",
      medium: "Acrylic & Gold Pigment",
      dimensions: "100 × 100 cm",
      provenance: "Curated for Private Exhibition",
      image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=80",
      description: "Interlocking organic curves exploring emotional tranquility and architectural balance."
    },
    {
      title: "Nebula of Memory",
      artist: "Impressionist Heritage",
      year: "2022",
      medium: "Mixed Media on Board",
      dimensions: "80 × 60 cm",
      provenance: "Permanent Digital Archive",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=80",
      description: "Expressive chromatic strokes evoking nocturnal reverie and tactile depth."
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
          <div className="space-y-1">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              Project Inspection & Interactive Simulation
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Top Banner / Hero Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-[21/9] bg-slate-950 border border-slate-200 dark:border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                  {project.tagline}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md text-[11px] font-medium border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold text-white border border-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Simulation Workbenches */}
          {project.interactiveType === 'credit-card-fraud' && (
            <div className="rounded-2xl p-6 bg-slate-950 text-white border border-teal-500/40 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Live Anomaly Scoring Simulator
                    </h4>
                    <p className="text-xs text-slate-400">
                      Test Shrivanth's fraud classifier with dynamic transactional vectors
                    </p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                    isHighRisk
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : isModerateRisk
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  }`}
                >
                  {isHighRisk ? (
                    <>
                      <ShieldAlert className="w-3.5 h-3.5" /> High Risk — Block
                    </>
                  ) : isModerateRisk ? (
                    <>
                      <AlertTriangle className="w-3.5 h-3.5" /> Step-Up 2FA Challenge
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5" /> Approved — Safe
                    </>
                  )}
                </span>
              </div>

              {/* Simulation Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                      <span>Transaction Amount ($)</span>
                      <span className="text-teal-400 font-bold">${fraudAmount} USD</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={2500}
                      step={10}
                      value={fraudAmount}
                      onChange={(e) => setFraudAmount(Number(e.target.value))}
                      className="w-full accent-teal-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span>$10 (Micro)</span>
                      <span>$500 (Typical)</span>
                      <span>$2,500 (Outlier)</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 cursor-pointer hover:border-slate-700">
                      <span className="text-xs text-slate-200">Foreign IP / Country Mismatch</span>
                      <input
                        type="checkbox"
                        checked={isForeignLocation}
                        onChange={(e) => setIsForeignLocation(e.target.checked)}
                        className="w-4 h-4 accent-teal-500 rounded"
                      />
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 cursor-pointer hover:border-slate-700">
                      <span className="text-xs text-slate-200">Rapid Velocity (&gt;3 swipes / min)</span>
                      <input
                        type="checkbox"
                        checked={rapidVelocity}
                        onChange={(e) => setRapidVelocity(e.target.checked)}
                        className="w-4 h-4 accent-teal-500 rounded"
                      />
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 cursor-pointer hover:border-slate-700">
                      <span className="text-xs text-slate-200">Unrecognized Device Fingerprint</span>
                      <input
                        type="checkbox"
                        checked={newDevice}
                        onChange={(e) => setNewDevice(e.target.checked)}
                        className="w-4 h-4 accent-teal-500 rounded"
                      />
                    </label>
                  </div>
                </div>

                {/* Score Dial & Telemetry */}
                <div className="rounded-xl bg-slate-900 p-5 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span>Calculated Anomaly Probability</span>
                      <span className="font-mono text-teal-400">Model: RF-Ensemble-v2</span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span
                        className={`text-5xl font-black font-mono tracking-tight ${
                          isHighRisk
                            ? 'text-rose-400'
                            : isModerateRisk
                            ? 'text-amber-400'
                            : 'text-emerald-400'
                        }`}
                      >
                        {fraudScore}%
                      </span>
                      <span className="text-xs text-slate-400">Risk Coefficient</span>
                    </div>

                    <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden mb-4">
                      <div
                        className={`h-full transition-all duration-300 ${
                          isHighRisk
                            ? 'bg-rose-500'
                            : isModerateRisk
                            ? 'bg-amber-500'
                            : 'bg-emerald-500'
                        }`}
                        style={{ width: `${fraudScore}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 font-mono text-[11px] space-y-1 text-slate-400 border border-slate-800/80">
                    <p className="text-slate-300 font-semibold">Inference Telemetry:</p>
                    <p>• Model Latency: 32ms</p>
                    <p>
                      • Primary Factor:{' '}
                      <span className="text-teal-400">
                        {isForeignLocation
                          ? 'Geo-Velocity Anomaly'
                          : rapidVelocity
                          ? 'Swipe Velocity Spike'
                          : fraudAmount > 1000
                          ? 'Outlier Ticket Size'
                          : 'Baseline Nominal'}
                      </span>
                    </p>
                    <p>• System Verdict: {isHighRisk ? 'Immediate Card Lock' : isModerateRisk ? 'SMS OTP Verification' : 'Pass Through'}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.interactiveType === 'art-gallery' && (
            <div className="rounded-2xl p-6 bg-slate-950 text-white border border-slate-800 shadow-xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h4 className="text-base font-bold text-white">
                    Interactive Virtual Art Viewing Room
                  </h4>
                  <p className="text-xs text-slate-400">
                    Examine curated works with custom illumination, provenance inspection, and pan zoom
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium">Lighting:</span>
                  {(['museum', 'daylight', 'mood'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setGalleryLighting(mode)}
                      className={`px-2.5 py-1 rounded-lg text-xs capitalize transition-all ${
                        galleryLighting === mode
                          ? 'bg-teal-500 text-slate-950 font-bold'
                          : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Artwork Stage */}
              <div
                className={`relative rounded-xl overflow-hidden flex items-center justify-center p-6 transition-all duration-500 ${
                  galleryLighting === 'museum'
                    ? 'bg-slate-950 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]'
                    : galleryLighting === 'daylight'
                    ? 'bg-slate-800'
                    : 'bg-amber-950/40 shadow-[inset_0_0_80px_rgba(245,158,11,0.15)]'
                }`}
              >
                <div
                  className={`relative transition-all duration-300 ${
                    isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <img
                    src={artworks[activeArtIndex].image}
                    alt={artworks[activeArtIndex].title}
                    className="max-h-72 rounded-lg shadow-2xl object-cover border-4 border-stone-900"
                    referrerPolicy="no-referrer"
                  />
                  {galleryLighting === 'museum' && (
                    <div className="absolute -inset-4 bg-radial from-amber-200/10 via-transparent to-transparent pointer-events-none" />
                  )}
                </div>

                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-4 right-4 p-2 rounded-lg bg-slate-900/80 backdrop-blur-md text-white border border-slate-700 text-xs flex items-center gap-1 hover:bg-slate-800"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-teal-400" />
                  <span>{isZoomed ? 'Reset View' : 'Zoom Inspect'}</span>
                </button>
              </div>

              {/* Artwork Metadata Strip & Selector */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {artworks.map((art, idx) => (
                  <button
                    key={art.title}
                    onClick={() => {
                      setActiveArtIndex(idx);
                      setIsZoomed(false);
                    }}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      activeArtIndex === idx
                        ? 'bg-slate-800/80 border-teal-500 text-white'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <p className="text-xs font-bold text-white truncate">{art.title}</p>
                    <p className="text-[11px] text-teal-400 mt-0.5">{art.artist} ({art.year})</p>
                    <p className="text-[10px] text-slate-500 mt-1">{art.medium}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Project Breakdown */}
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              System Architecture & Problem Solved
            </h4>
            <p>{project.longDescription}</p>

            <div className="pt-2">
              <h5 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">
                Key Engineering Highlights
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-800">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="text-center p-3 rounded-xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40">
                    <p className="text-xl sm:text-2xl font-black text-teal-600 dark:text-teal-400">
                      {m.value}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 p-4 sm:p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold shadow-md shadow-teal-600/20 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

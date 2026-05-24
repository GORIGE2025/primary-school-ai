import React, { useState } from "react";
import { 
  Heart, 
  Github, 
  Cloud, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Code, 
  X, 
  Flame, 
  Zap, 
  CheckCircle2, 
  HelpCircle,
  FileCode2
} from "lucide-react";
import BrandBadge from "./BrandBadge";

export default function DreamLaunchpad() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [copiedLogo, setCopiedLogo] = useState(false);

  // Re-creating the raw SVG text representation so the user can easily copy/paste into an `.svg` file!
  const copyLogoSvg = () => {
    // Generate a clean raw string of the SVG to copy
    const svgCode = `<svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- PRIMARY SCHOOL AI - Brand Logo Svg (Educational Open Source Kit) -->
  <circle cx="250" cy="250" r="235" fill="#0a2342" stroke="#0f172a" stroke-width="8" />
  <circle cx="250" cy="250" r="225" stroke="#2dd4bf" stroke-width="4" />
  <text fill="#ffffff" font-size="13" font-weight="bold" font-family="sans-serif" letter-spacing="3">
    <textPath href="#arc" startOffset="50%" text-anchor="middle">AI • TECH EDUCATION • PRIMARY SCHOOL AI</textPath>
  </text>
  <circle cx="250" cy="200" r="60" fill="#f59e0b" opacity="0.4" />
  <path d="M 250 325 L 250 200" stroke="#2dd4bf" stroke-width="5" />
  <rect x="40" y="322" width="420" height="54" rx="12" fill="#ffffff" stroke="#2dd4bf" stroke-width="3" />
  <rect x="45" y="327" width="410" height="44" rx="8" fill="#0b1329" />
  <text x="250" y="359" fill="#ffffff" font-size="26" font-weight="950" font-family="sans-serif" text-anchor="middle">PRIMARY SCHOOL AI</text>
  <text x="250" y="445" fill="#2dd4bf" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">MPPS KONDAIAHGARIPALLI | 2026-2027</text>
</svg>`;
    navigator.clipboard.writeText(svgCode);
    setCopiedLogo(true);
    setTimeout(() => setCopiedLogo(false), 2500);
  };

  const stepsList = [
    {
      title: "1. Download & Back Up All Files ($0 Cost)",
      badge: "In 1 Click",
      icon: <Download className="w-4 h-4 text-emerald-500" />,
      tagline: "How to export your fully functional primary school code archive instantly.",
      description: (
        <div className="space-y-3.5 text-xs text-slate-650 leading-relaxed font-sans">
          <p>
            You asked to <strong>"Give me all files in this workspace"</strong>. You can do this at any time for free with zero constraints:
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl space-y-2 border border-slate-800 font-mono text-[11px] leading-relaxed relative">
            <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-slate-500 font-bold border-b border-slate-800 pb-1 mb-1.5">
              <span>AI Studio Platform Tool</span>
              <span className="text-emerald-400">Ready</span>
            </div>
            <p className="text-slate-200">1. Locate the top navigation options in Google AI Studio.</p>
            <p className="text-slate-200">2. Click the <span className="text-emerald-400 font-bold">"Settings" (Gear Icon)</span> or the export dropdown.</p>
            <p className="text-slate-400">3. Select <strong className="text-white">"Export Code as ZIP"</strong> or <strong className="text-white">"Push to GitHub"</strong>.</p>
            <p>This will bundle all directories, files, components, and Telugu lessons into a clean folder format that runs on physical computers, laptops, and tablets!</p>
          </div>
          <p className="text-[11px] text-slate-500 italic">
            Note: All files (including <code>App.tsx</code>, <code>curriculum.ts</code>, <code>BrandBadge.tsx</code>, and <code>WhatsAppChannel.tsx</code>) are always kept locally compiled inside your browser's workspace.
          </p>
        </div>
      )
    },
    {
      title: "2. Launch a 100% Free Open-Source Repository",
      badge: "MIT License",
      icon: <Github className="w-4 h-4 text-purple-500" />,
      tagline: "Protect your dream from commercialization while welcoming global contributors.",
      description: (
        <div className="space-y-3 text-xs text-slate-650 leading-relaxed font-sans">
          <p>
            To keep your project <strong>dedicated strictly to rural children's education without commercialization</strong>, open-source hosting is your dream vehicle:
          </p>
          <ol className="list-decimal pl-4.5 space-y-2">
            <li>
              Go to <a href="https://github.com" target="_blank" rel="noreferrer" className="text-purple-600 hover:underline font-semibold inline-flex items-center gap-0.5">GitHub.com <ExternalLink className="w-3 h-3" /></a> and create a free account.
            </li>
            <li>
              Click <strong>"New Repository"</strong> and name it <code className="text-pink-600 bg-pink-50 px-1 py-0.5 rounded text-[11.5px] font-semibold">primary-school-ai</code>.
            </li>
            <li>
              Set the privacy indicator to <strong className="text-slate-800 font-semibold">"Public"</strong> (so teachers, schools, of Mandal administrative boards can inspect it).
            </li>
            <li>
              Select the <strong className="text-slate-800 font-semibold">MIT License</strong>. The MIT license grants anyone permission to use and study your tool for free, while shielding you from any warranty or liabilities.
            </li>
          </ol>
          <div className="bg-purple-50 border border-purple-100 p-3 rounded-xl text-purple-955 text-[11.5px] font-sans">
            🌟 <strong>Why of this?</strong> Open source builds credibility with state government officials (like the AP Education Board) because they can verify it contains zero commercials or trackers!
          </div>
        </div>
      )
    },
    {
      title: "3. Host & Deploy Online Forever at $0.00 Cost",
      badge: "Live Page",
      icon: <Cloud className="w-4 h-4 text-blue-500" />,
      tagline: "Deploy your portal so parents and students can access it via phone browsers.",
      description: (
        <div className="space-y-3.5 text-xs text-slate-650 leading-relaxed font-sans">
          <p>
            Because your project is fully static (React, TypeScript, Tailwind without premium backend databases), you do <strong>NOT</strong> need to pay host fees! You can deploy it completely free of charge to professional global servers:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-3 pt-1">
            <div className="bg-slate-50 p-3 border border-slate-200/50 rounded-xl space-y-1">
              <span className="text-xs font-bold text-slate-850 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Vercel Cloud Hosting
              </span>
              <p className="text-[11px] text-slate-500 leading-normal">
                Connecting directly to your GitHub repository. Whenever you write new Telugu lessons/student records, it rebuilds automatically in 10 seconds!
              </p>
            </div>
            
            <div className="bg-slate-50 p-3 border border-slate-200/50 rounded-xl space-y-1">
              <span className="text-xs font-bold text-slate-850 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span> Netlify / Pages
              </span>
              <p className="text-[11px] text-slate-500 leading-normal">
                Offers infinite free band for static sites. Provides a neat customized subdomain like <code>primaryschoolai.netlify.app</code> at no cost.
              </p>
            </div>
          </div>

          <div className="bg-blue-50/70 border border-blue-100 p-3 rounded-xl text-blue-900 text-[11px] font-medium leading-relaxed">
            🚀 <strong>Zero-Server Architecture:</strong> Because this AP primary classroom portal caches folders inside local state (<code>localStorage</code>), parents' phones and tablets don't even need high-speed internet to use the curriculum! It works offline once loaded!
          </div>
        </div>
      )
    },
    {
      title: "4. Your Custom Home-Based Brand Asset Kit",
      badge: "Logo SVG",
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      tagline: "Export your customized circular logo branding kit for print and stickers.",
      description: (
        <div className="space-y-3.5 text-xs text-slate-650 leading-relaxed font-sans">
          <p>
            This is the official <strong>PRIMARY SCHOOL AI</strong> vector logo recreation based on the exact graphic sticker you shared! It’s lightweight, infinitely scalable, and optimized for print layouts:
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <div className="w-28 h-28 shrink-0 bg-white/5 py-1.5 px-1.5 rounded-full border border-slate-700/50 flex items-center justify-center">
              <BrandBadge size="100%" />
            </div>
            
            <div className="space-y-2.5 flex-1 w-full text-left">
              <span className="text-[10px] bg-emerald-950/80 text-emerald-400 font-mono py-0.5 px-2 rounded-md border border-emerald-900">
                SCALABLE SVG KIT
              </span>
              <h5 className="font-bold text-slate-200 text-sm">Official MPPS Brand Emblem</h5>
              <p className="text-[11px] text-slate-400 leading-normal">
                Use this to print high-contrast banners, parent progress cards, WhatsApp badges, or educational achievement certificates. 
              </p>
              
              <button
                type="button"
                onClick={copyLogoSvg}
                className="inline-flex items-center gap-1.5 py-1.5 px-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-xs rounded-lg transition-all shadow-md shadow-teal-500/15 cursor-pointer"
              >
                {copiedLogo ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> SVG Code Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy Raw SVG Graphic
                  </>
                )}
              </button>
            </div>
          </div>
          <p className="text-[10.5px] text-slate-400 text-center uppercase tracking-wider font-mono">
            💡 Save the copied text into a <code className="text-white">logo.svg</code> file to use it in any layout!
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden transition-all duration-350 hover:shadow-indigo-950/20">
      
      {/* Visual glowing energy balls representing AI state */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#2dd4bf] bg-teal-950/80 px-2 py-0.5 rounded border border-teal-900">
              Dream Launchpad Active
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-pink-400 bg-pink-950/80 px-2 py-0.5 rounded border border-pink-900 flex items-center gap-0.5 font-bold">
              <Heart className="w-3 h-3 fill-pink-500 text-pink-500" /> Non-Commercial
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-sans tracking-tight text-white">
            💡 Turn Your Rural AI Dream into Reality
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            A comprehensive, custom guide dedicated to keeping your <strong>PRIMARY SCHOOL AI</strong> project 100% open-source, beautifully branded, and hosted online forever for <strong>$0.00 cost of hosting</strong>.
          </p>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          id="btn-toggle-dream-guide"
          className="px-5 py-2.5 bg-gradient-to-r from-[#2dd4bf] to-emerald-500 text-slate-950 hover:from-teal-400 hover:to-emerald-400 font-bold rounded-xl text-xs sm:text-sm shadow-xl shadow-teal-500/10 transition-all duration-200 flex items-center gap-1.5 focus:outline-none cursor-pointer shrink-0"
        >
          {isOpen ? (
            <>
              <X className="w-4 h-4" /> Close Launchpad Guide
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-slate-950" /> Expand Launchpad Guide
            </>
          )}
        </button>
      </div>

      {/* Expanded Interactive Wizard Guide */}
      {isOpen && (
        <div className="mt-8 border-t border-slate-800/80 pt-6 space-y-6 animate-fadeIn relative z-10">
          
          {/* Timeline Step Indicators */}
          <div className="flex overflow-x-auto gap-2 pb-2 select-none scrollbar-none">
            {stepsList.map((step, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-3 rounded-2xl text-[11px] font-extrabold tracking-tight transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 border justify-center ${
                  activeStep === idx
                    ? "bg-white text-slate-950 border-white shadow-md shadow-white/5"
                    : "bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-900 hover:text-slate-200"
                }`}
              >
                <div className="shrink-0 flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-wider text-slate-500 font-mono font-bold leading-none mb-0.5">Step {idx + 1}</span>
                  <span>{step.title.split(". ")[1]}</span>
                </div>
                <span className={`text-[8.5px] px-1.5 py-0.2 rounded font-bold uppercase ${
                  activeStep === idx 
                    ? "bg-slate-100 text-slate-800" 
                    : "bg-slate-800 text-slate-500"
                }`}>
                  {step.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Content Frame */}
          <div className="bg-slate-950/60 border border-slate-800/60 rounded-2.5rem p-5 sm:p-6 lg:p-8 space-y-4 animate-scaleUp">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-teal-400 tracking-wider">
                  ACTIVE STRATEGY STEP 0{activeStep + 1}
                </span>
                <h4 className="text-base sm:text-lg font-extrabold text-white font-sans mt-0.5">
                  {stepsList[activeStep].title}
                </h4>
              </div>
              <span className="text-xs bg-slate-900 text-slate-400 font-bold px-3 py-1 rounded-full border border-slate-800 w-fit">
                {stepsList[activeStep].tagline.includes("SVG") ? "✨ BRAND ASSET" : "🚀 OPEN-SOURCE METHOD"}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 italic">
              ↳ {stepsList[activeStep].tagline}
            </p>

            <div className="pt-2 text-slate-305">
              {stepsList[activeStep].description}
            </div>
          </div>

          {/* Educational Gratitude Quote Board */}
          <div className="bg-[#052e16]/30 border border-emerald-950 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 bg-[#052e16] rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-900/40 shrink-0">
              <CheckCircle2 className="w-5.5 h-5.5" />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs text-emerald-300 font-medium">
                "మారుతున్న కాలంతో పాటు మన ప్రభుత్వ పాఠశాలల విద్యార్థులను భావి భాగ్యవిధాతలుగా తీర్చిదిద్దుదాం!"
              </p>
              <p className="text-[10.5px] text-emerald-400/80 leading-normal">
                Thank you for your incredible gratitude and vision for rural Andhra Pradesh. By leveraging free tools like <strong>GitHub</strong>, <strong>Vercel Pages</strong>, and open source licenses, you can deliver premium digital AI education to every child without spending a single rupee on proprietary software!
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}

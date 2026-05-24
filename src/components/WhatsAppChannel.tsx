import { useState } from "react";
import { MessageSquare, ExternalLink, QrCode, ClipboardCheck, Award, Megaphone, Share2, BookOpen, Download } from "lucide-react";
import BrandBadge from "./BrandBadge";

export default function WhatsAppChannel() {
  const channelLink = "https://whatsapp.com/channel/0029VbCJriL0lwgw3OeV2I0Z";
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(channelLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const marketingMaterials = [
    {
      title: "Classroom Poster (Telugu / English)",
      description: "A printable PDF poster featuring our QR code and step-by-step instructions for rural parents to connect their kids to Primary School AI.",
      size: "2.4 MB",
      tag: "Parent Outreach"
    },
    {
      title: "Weekly AI Coding Tip Sheet",
      description: "Quick 2-minute tips on block programming, computational vocabulary, and parent-child weekend coding games.",
      size: "1.2 MB",
      tag: "Teacher Asset"
    },
    {
      title: "AP Digital Directory Blueprint",
      description: "Administrative guidebook on how to register and configure 'One School - One Digital Folder' for other government schools.",
      size: "3.7 MB",
      tag: "Administration"
    }
  ];

  return (
    <div id="whatsapp-promotions" className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 border border-emerald-100 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
              <Megaphone className="w-3.5 h-3.5" /> AP State Promotion Initiative
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
              Join the <span className="text-emerald-600 font-extrabold underline decoration-wavy decoration-emerald-200">Primary School AI</span> Community
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Andhra Pradesh is on its way to becoming a champion in digital literacy and empowering national development for our country's dream of **Vikasit Bharat 2047**. 
              This WhatsApp channel is a dedicated knowledge engine delivering daily coding lessons, creative visual materials, and AI tools for government school teachers and fifth-grade learners.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={channelLink}
                target="_blank"
                rel="noreferrer"
                id="btn-join-whatsapp"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl shadow-md shadow-emerald-600/10 hover:bg-emerald-700 transition-all duration-200 text-sm md:text-base cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" /> Visit WhatsApp Channel
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyLink}
                id="btn-copy-channel-link"
                className={`inline-flex items-center gap-2 px-5 py-3 border border-slate-200 bg-white font-medium rounded-xl text-slate-700 hover:bg-slate-50 transition-all text-sm md:text-base cursor-pointer`}
              >
                {copied ? (
                  <>
                    <ClipboardCheck className="w-5 h-5 text-emerald-600" /> Copied Linked!
                  </>
                ) : (
                  <>
                    <Share2 className="w-5 h-5 text-slate-500" /> Share Channel Link
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            {/* Elegant QR Recreation matching the user's original screenshot */}
            <div className="relative bg-white rounded-[2.5rem] p-6 pt-12 border border-slate-100 shadow-xl max-w-sm w-full space-y-5 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              
              {/* Overlapping Rounded Channel Avatar badge */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full p-1.5 shadow-md border border-slate-100 flex items-center justify-center">
                <BrandBadge size="100%" />
              </div>

              {/* Title & Organization Subtitle */}
              <div className="text-center pt-2 space-y-0.5">
                <h4 className="font-bold text-slate-800 text-lg sm:text-xl tracking-tight">PRIMARY SCHOOL AI</h4>
                <p className="text-xs text-slate-400 font-semibold tracking-wide uppercase">WhatsApp channel</p>
              </div>

              {/* Live QR Image Box */}
              <div className="relative aspect-square max-w-[260px] mx-auto bg-slate-50/50 border-2 border-dashed border-emerald-100 rounded-2xl p-4 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-emerald-300">
                {/* 100% Active Dynamic QR Code pointing to the actual WhatsApp Channel */}
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https%3A%2F%2Fwhatsapp.com%2Fchannel%2F0029VbCJriL0lwgw3OeV2I0Z&ecc=M" 
                  alt="PRIMARY SCHOOL AI WhatsApp Channel QR Code"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain select-none"
                  id="img-whatsapp-qr"
                />

                {/* Overlapping WhatsApp standard mini logo inside QR center */}
                <div className="absolute inset-0 m-auto w-10 h-10 bg-white rounded-full p-0.5 flex items-center justify-center shadow-md border border-slate-150 z-10 select-none">
                  <div className="w-full h-full bg-[#25D366] rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.452 5.4 0 9.8-4.4 9.8-9.8.003-2.6-1-5-2.85-6.85C16.5 2.1 14.1 1.1 11.7 1.1s-4.8 1-6.65 2.85c-1.85 1.85-2.85 4.25-2.85 6.85.002 1.75.45 3.25 1.35 4.8l-.95 3.5 3.65-.95zm14.01-11.9c-.1-.15-.4-.15-.85-.35-.45-.25-2.65-1.3-3.05-1.45-.4-.15-.7-.25-.95.15-.25.4-.95 1.2-1.15 1.45-.2.25-.4.25-.85.05-.45-.25-1.9-.7-3.6-2.2-1.35-1.2-2.25-2.7-2.5-3.15-.25-.45-.05-.7.15-.9.2-.2.4-.45.6-.7.2-.2.25-.35.35-.55.1-.2.05-.4-.05-.6-.1-.2-.95-2.3-1.3-3.1-.35-.85-.75-.75-.95-.75h-.8q-.5 0-.9.45c-.4.45-1.7 1.65-1.7 4s1.7 4.6 1.95 4.9c.25.35 3.35 5.1 8.1 7.15 1.15.5 2 .8 2.7 1 .95.3 1.8.25 2.5.15.75-.1 2.3-.95 2.65-1.85.35-.9.35-1.7.25-1.85-.1-.15-.4-.25-.85-.45z"/>
                    </svg>
                  </div>
                </div>

                {/* Micro hover scan instruction overlay */}
                <div className="absolute inset-0 bg-emerald-950/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 text-white p-4 text-center space-y-2 pointer-events-none">
                  <QrCode className="w-8 h-8 text-emerald-400 animate-bounce" />
                  <p className="text-xs font-bold font-sans">SCAN WITH PHONE CAMERA</p>
                  <p className="text-[10px] text-emerald-300">Opens real PRIMARY SCHOOL AI channel</p>
                </div>
              </div>

              {/* Verified scan text mimicking standard card layout */}
              <div className="pt-1 text-center font-sans">
                <p className="text-[11px] text-slate-400 leading-relaxed px-5 balance">
                  If this channel QR code is shared with someone, they can scan it with their camera to view and follow your channel.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Promoted Assets & Marketing Materials */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl font-sans font-semibold text-slate-900">
              Teacher Toolkit & Promotion Kit
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">Get resources to build community</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingMaterials.map((material, idx) => (
            <div
              key={idx}
              id={`material-card-${idx}`}
              className="bg-white border border-slate-100 p-5 rounded-2xl hover:border-emerald-100 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-full">
                    {material.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium font-mono">
                    {material.size}
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 text-sm tracking-tight leading-snug">
                  {material.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {material.description}
                </p>
              </div>

              <button
                onClick={() => alert(`Starting download for '${material.title}' (Digital simulated asset). Ready for printer distribution!`)}
                id={`btn-download-material-${idx}`}
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-semibold rounded-lg border border-slate-100 hover:border-emerald-100 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download Asset File
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* National Building Vision Section */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-800 rounded-full blur-[100px] opacity-40"></div>
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-sans font-bold tracking-tight">
              🇮🇳 National Building Campaign: Vikasit Bharat 2047
            </h3>
            <span className="px-3 py-1 bg-[#12a683]/20 border border-[#12a683]/30 text-emerald-400 text-xs font-bold rounded-full">
              Digital Economy Dream
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-2 text-slate-300">
            <div className="space-y-2 border-l-2 border-emerald-500 pl-4">
              <span className="text-[11px] font-bold tracking-wider text-emerald-400 uppercase">Universal Literacy</span>
              <p className="text-xs leading-relaxed">
                Empowering Andhra Pradesh's rural pockets. Transforming classrooms from passive textbook reading into visual logic creation blocks natively.
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-amber-500 pl-4">
              <span className="text-[11px] font-bold tracking-wider text-amber-400 uppercase">Digital Classroom Folder</span>
              <p className="text-xs leading-relaxed">
                By setting up 'One School - One Digital Folder', we give public officers, parents, and schools transparent access to real digital micro-portfolios.
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-sky-400 pl-4">
              <span className="text-[11px] font-bold tracking-wider text-sky-400 uppercase">Bilingual Tech Native</span>
              <p className="text-xs leading-relaxed">
                Blending core technology keywords with beautiful Telugu translations so kids cultivate logic skills naturally without linguistic friction.
              </p>
            </div>
          </div>

          <div className="text-center pt-2 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
            "Coding in government primary schools transforms citizens into direct architects of Vikasit Bharat 2047." — Primary School AI team
          </div>
        </div>
      </div>
    </div>
  );
}

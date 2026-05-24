import React from "react";

interface BrandBadgeProps {
  className?: string;
  size?: number | string;
  showDetails?: boolean;
}

export default function BrandBadge({ className = "", size = "100%", showDetails = true }: BrandBadgeProps) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon outer-ring gradients */}
          <linearGradient id="glow-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" /> {/* Teal */}
            <stop offset="50%" stopColor="#0ea5e9" /> {/* Sky */}
            <stop offset="100%" stopColor="#10b981" /> {/* Emerald */}
          </linearGradient>

          {/* Deep celestial midnight gradient */}
          <radialGradient id="cyber-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0a2342" />
            <stop offset="70%" stopColor="#040f21" />
            <stop offset="100%" stopColor="#010610" />
          </radialGradient>

          {/* Golden energy core */}
          <radialGradient id="energy-core" cx="50%" cy="50%" r="40%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </radialGradient>

          {/* Brain-tree node glow */}
          <radialGradient id="brain-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0a2342" stopOpacity="0" />
          </radialGradient>

          {/* Curve definitions for Text wrapping */}
          {/* Top text path */}
          <path
            id="arc-top"
            d="M 50,250 A 200,200 0 1,1 450,250"
            fill="none"
          />
          {/* Bottom text path */}
          <path
            id="arc-bottom"
            d="M 450,250 A 200,200 0 0,1 50,250"
            fill="none"
          />
        </defs>

        {/* 1. Base Outer Dark Badge Circle */}
        <circle cx="250" cy="250" r="235" fill="url(#cyber-bg)" stroke="#0f172a" strokeWidth="8" />

        {/* 2. Concentric Neon Glowing Rings */}
        <circle cx="250" cy="250" r="225" stroke="url(#glow-ring)" strokeWidth="4" className="animate-pulse" />
        <circle cx="250" cy="250" r="218" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="250" cy="250" r="195" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="6 3" strokeOpacity="0.6" />

        {/* 3. Outer Ring Text along Paths (replicated perfectly) */}
        <g className="font-sans font-extrabold uppercase tracking-widest text-[13px]">
          {/* Top Arching Text */}
          <text fill="#ffffff" dy="-6">
            <textPath href="#arc-top" startOffset="50%" textAnchor="middle">
              AI • TECH EDUCATION • PRIMARY SCHOOL AI
            </textPath>
          </text>

          {/* Bottom Arching Text */}
          <text fill="url(#glow-ring)" dy="24">
            <textPath href="#arc-bottom" startOffset="50%" textAnchor="middle">
              MPPS Kondaiahgaripalli • CBSE Class 3-8 | 2026-2027
            </textPath>
          </text>
        </g>

        {/* 4. Digital Brain-Tree Backdrop Overlay and Microelectronics Design */}
        <circle cx="250" cy="210" r="130" fill="url(#brain-glow)" />

        {/* Circuit Tracks on Badge Surface */}
        <g stroke="rgba(45, 212, 191, 0.12)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Circuit grids */}
          <path d="M 60 210 L 150 210 M 440 210 L 350 210" />
          <path d="M 90 150 L 130 190 M 410 150 L 370 190" />
          <path d="M 90 270 L 140 230 M 410 270 L 360 230" />
          <path d="M 120 100 L 170 140 M 380 100 L 330 140" />
        </g>

        {/* 5. Glowing Star / Sun Power Core in Center */}
        <circle cx="250" cy="200" r="60" fill="url(#energy-core)" />
        <path d="M 250 145 L 250 255 M 195 200 L 305 200" stroke="#fef08a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 215 165 L 285 235 M 215 235 L 285 165" stroke="#fbe58a" strokeWidth="1.5" strokeLinecap="round" />
        <polygon points="250,185 255,200 270,200 258,208 262,223 250,214 238,223 242,208 230,200 245,200" fill="#f59e0b" />

        {/* 6. Glowing Tech Tree Canopy & Silicon Trunk */}
        <g strokeLinecap="round">
          {/* Main Silicon Trunk and circuit branches */}
          <path d="M 250 325 L 250 200" stroke="#2dd4bf" strokeWidth="5" />
          <path d="M 250 280 L 180 230" stroke="#14b8a6" strokeWidth="3" />
          <path d="M 250 260 L 320 210" stroke="#14b8a6" strokeWidth="3" />
          <path d="M 180 230 L 140 190" stroke="#0d9488" strokeWidth="2.5" />
          <path d="M 180 230 L 210 190" stroke="#0d9488" strokeWidth="2" />
          <path d="M 320 210 L 360 170" stroke="#0d9488" strokeWidth="2.5" />
          <path d="M 320 210 L 290 170" stroke="#0d9488" strokeWidth="2" />

          {/* Brain Neural Net Shape Canopy Nodes (Green, Blue, Teal glowing endpoints) */}
          {/* Outer circle connections */}
          <path d="M 150 140 A 100,100 0 0,1 350,140" stroke="rgba(45, 212, 191, 0.2)" strokeWidth="6" strokeDasharray="10 10" />
          <path d="M 120 200 A 130,130 0 0,1 380,200" stroke="rgba(14, 165, 233, 0.15)" strokeWidth="3" />

          {/* Synthesis Node circles */}
          <circle cx="250" cy="140" r="14" fill="#042f2e" stroke="#2dd4bf" strokeWidth="2" />
          <text x="250" y="145" fill="#2dd4bf" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">AI</text>

          <circle cx="180" cy="160" r="11" fill="#042f2e" stroke="#34d399" strokeWidth="2" />
          <text x="180" y="164" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">AI</text>

          <circle cx="320" cy="160" r="11" fill="#042f2e" stroke="#10b981" strokeWidth="2" />
          <text x="320" y="164" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">AI</text>

          {/* Bright interactive synapses */}
          <circle cx="140" cy="190" r="6" fill="#f59e0b" />
          <circle cx="210" cy="190" r="5" fill="#10b981" />
          <circle cx="290" cy="170" r="5" fill="#38bdf8" />
          <circle cx="360" cy="170" r="6" fill="#f59e0b" />
          
          <circle cx="250" cy="200" r="4" fill="#ffffff" className="animate-ping" />
        </g>

        {/* 7. Cute Micro Educational Robot and Children Characters */}
        <g strokeLinejoin="round" strokeLinecap="round">
          {/* ROBOT TUTOR (Left Side) - Stylized clean representation */}
          <g transform="translate(130, 210) scale(0.65)">
            {/* Robot body/shoulders */}
            <rect x="15" y="45" width="40" height="30" rx="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
            <rect x="25" y="55" width="20" height="15" rx="3" fill="#0a2342" />
            <circle cx="35" cy="62" r="2.5" fill="#2dd4bf" />
            {/* Joint */}
            <rect x="31" y="32" width="8" height="15" fill="#94a3b8" />
            {/* Head */}
            <rect x="10" y="5" width="50" height="35" rx="12" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.5" />
            {/* Blue screen display with tech eyes */}
            <rect x="17" y="11" width="36" height="20" rx="6" fill="#0f172a" />
            <ellipse cx="27" cy="21" rx="4" ry="2" fill="#2dd4bf" />
            <ellipse cx="43" cy="21" rx="4" ry="2" fill="#2dd4bf" />
            {/* Robot ears/antennas */}
            <circle cx="10" cy="22" r="3" fill="#cbd5e1" />
            <circle cx="60" cy="22" r="3" fill="#cbd5e1" />
            <line x1="35" y1="5" x2="35" y2="-5" stroke="#cbd5e1" strokeWidth="2.5" />
            <circle cx="35" cy="-7" r="4" fill="#fbbf24" />
          </g>

          {/* TWO SCHOOL CHILDREN (Boy and Girl with Tablets - Right Side) */}
          <g transform="translate(260, 252) scale(0.62)">
            {/* Boy Coder */}
            <g transform="translate(0, 0)">
              {/* Hair/Head */}
              <circle cx="35" cy="25" r="16" fill="#475569" />
              <circle cx="35" cy="25" r="15" fill="#fbcfe8" /> {/* Skin */}
              <path d="M 20 20 Q 30 10 48 18" fill="none" stroke="#475569" strokeWidth="6" /> {/* Hair-cut */}
              {/* Eyes & Smile */}
              <circle cx="30" cy="23" r="2.5" fill="#1e293b" />
              <circle cx="41" cy="23" r="2.5" fill="#1e293b" />
              <path d="M 32 30 Q 35 34 39 30" fill="none" stroke="#1e293b" strokeWidth="2" />
              {/* Boy School Uniform shirt & Tie */}
              <path d="M 15 41 L 55 41 L 50 75 L 20 75 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
              <polygon points="30,41 35,55 40,41" fill="#3b82f6" /> {/* Tie */}
              {/* Hands holding blue tablet */}
              <rect x="22" y="52" width="26" height="18" rx="2" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
              <rect x="25" y="55" width="20" height="12" fill="#0f172a" />
              <circle cx="35" cy="61" r="1.5" fill="#38bdf8" />
            </g>

            {/* Girl Coder */}
            <g transform="translate(62, -5)">
              {/* Hair (two side pigtails) */}
              <circle cx="15" cy="25" r="9" fill="#1e293b" />
              <circle cx="55" cy="25" r="9" fill="#1e293b" />
              <circle cx="35" cy="25" r="16" fill="#1e293b" />
              <circle cx="35" cy="25" r="15" fill="#ffedd5" /> {/* Skin */}
              <path d="M 21 21 Q 35 12 49 21" fill="none" stroke="#1e293b" strokeWidth="5" />
              {/* Face details */}
              <circle cx="29" cy="24" r="2.5" fill="#1e293b" />
              <circle cx="40" cy="24" r="2.5" fill="#1e293b" />
              <path d="M 32 30 Q 35 33 38 30" fill="none" stroke="#1e293b" strokeWidth="2" />
              {/* Girl School Uniform shirt (sleeves and pink pinafore) */}
              <path d="M 15 41 L 55 41 L 50 78 L 20 78 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
              <path d="M 20 41 L 32 78 L 38 78 L 50 41 Z" fill="#ef4444" opacity="0.85" /> {/* Uniform Overalls */}
              {/* Hands holding yellow/amber tablet */}
              <rect x="22" y="52" width="26" height="18" rx="2" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
              <rect x="25" y="55" width="20" height="12" fill="#0f172a" />
              <circle cx="35" cy="61" r="1.5" fill="#10b981" />
            </g>
          </g>

          {/* Stack of Code.org textbooks underneath */}
          <g transform="translate(192, 280) scale(0.6)">
            {/* Book 1 (Bottom, Blue) */}
            <path d="M 10 30 L 70 30 Q 75 32 70 35 L 10 35 Z" fill="#2563eb" />
            <rect x="12" y="30" width="58" height="3" fill="#3b82f6" />
            <rect x="10" y="33" width="60" height="2" fill="#ffffff" />
            {/* Book 2 (Middle, Orange) */}
            <path d="M 15 22 L 75 22 Q 80 24 75 27 L 15 27 Z" fill="#ea580c" />
            <rect x="17" y="22" width="58" height="3" fill="#f97316" />
            <rect x="15" y="25" width="60" height="2" fill="#ffffff" />
            {/* Book 3 (Top, Teal) */}
            <path d="M 20 14 L 80 14 Q 85 16 80 19 L 20 19 Z" fill="#0d9488" />
            <rect x="22" y="14" width="58" height="3" fill="#14b8a6" />
            <rect x="20" y="17" width="60" height="2" fill="#ffffff" />
          </g>
        </g>

        {/* 8. The Signature Central Metallic Banner Overlay */}
        <g drop-shadow="0 10px 15px rgba(0,0,0,0.5)">
          {/* Banner Plate - Deep high contrast navy with glowing outer edge */}
          <rect x="40" y="322" width="420" height="54" rx="12" fill="#ffffff" stroke="url(#glow-ring)" strokeWidth="3" />
          <rect x="45" y="327" width="410" height="44" rx="8" fill="#0b1329" />
          
          {/* Block code style connectors inside banner margins */}
          <rect x="52" y="332" width="10" height="14" rx="2" fill="#ff8000" />
          <rect x="52" y="351" width="14" height="14" rx="2" fill="#2dd4bf" />
          <rect x="438" y="332" width="10" height="14" rx="2" fill="#3b82f6" />
          <rect x="434" y="351" width="14" height="14" rx="2" fill="#10b981" />

          {/* Bold Humanized Brand Label Text */}
          <text
            x="250"
            y="359"
            fill="#ffffff"
            fontSize="26"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="3"
            textAnchor="middle"
          >
            PRIMARY SCHOOL AI
          </text>
        </g>

        {/* 9. Lower Roots with Zero & Hero tags and circuit traces */}
        <g strokeLinecap="round">
          {/* Left Root Branch */}
          <path d="M 210 376 L 160 415" stroke="#10b981" strokeWidth="4" />
          <path d="M 160 415 L 120 415" stroke="#10b981" strokeWidth="3" />
          <circle cx="120" cy="415" r="5" fill="#10b981" />
          
          <path d="M 160 415 L 140 435" stroke="#059669" strokeWidth="2.5" />
          <circle cx="140" cy="435" r="4" fill="#34d399" />

          {/* Right Root Branch */}
          <path d="M 290 376 L 340 415" stroke="#ff8000" strokeWidth="4" />
          <path d="M 340 415 L 380 415" stroke="#ff8000" strokeWidth="3" />
          <circle cx="380" cy="415" r="5" fill="#ff8000" />

          <path d="M 340 415 L 360 435" stroke="#ea580c" strokeWidth="2.5" />
          <circle cx="360" cy="435" r="4" fill="#fb923c" />

          {/* Core Root Lines spreading to bottom */}
          <path d="M 250 376 L 250 445" stroke="#38bdf8" strokeWidth="4" />
          <path d="M 250 420 L 220 445" stroke="#38bdf8" strokeWidth="2.5" />
          <path d="M 250 420 L 280 445" stroke="#38bdf8" strokeWidth="2.5" />
          <circle cx="250" cy="445" r="4" fill="#ffffff" />
          <circle cx="220" cy="445" r="3.5" fill="#38bdf8" />
          <circle cx="280" cy="445" r="3.5" fill="#38bdf8" />

          {/* Gears in root background */}
          <g transform="translate(195, 410) scale(0.4)" stroke="none">
            <circle cx="25" cy="25" r="15" fill="#475569" />
            <circle cx="25" cy="25" r="6" fill="#040f21" />
            <path d="M 25 2 L 25 10 M 25 40 L 25 48 M 2 25 L 10 25 M 40 25 L 48 25" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
            <path d="M 9 9 L 15 15 M 35 35 L 41 41 M 9 41 L 15 35 M 35 9 L 41 15" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
          </g>

          <g transform="translate(280, 410) scale(0.4)" stroke="none">
            <circle cx="25" cy="25" r="15" fill="#ff8000" opacity="0.7" />
            <circle cx="25" cy="25" r="6" fill="#040f21" />
            <path d="M 25 2 L 25 10 M 25 40 L 25 48 M 2 25 L 10 25 M 40 25 L 48 25" stroke="#fed7aa" strokeWidth="6" strokeLinecap="round" />
            <path d="M 9 9 L 15 15 M 35 35 L 41 41 M 9 41 L 15 35 M 35 9 L 41 15" stroke="#fed7aa" strokeWidth="6" strokeLinecap="round" />
          </g>

          {/* Human readable labels "Zero" and "Hero" */}
          <g fontFamily="monospace" fontSize="16" fontWeight="900" letterSpacing="1">
            {/* Zero Label (Green) */}
            <text x="145" y="402" fill="#10b981" textAnchor="middle">Zero</text>
            <text x="100" y="440" fill="rgba(16, 185, 129, 0.4)" fontSize="14" fontWeight="bold">0</text>
            <text x="115" y="405" fill="rgba(16, 185, 129, 0.4)" fontSize="14" fontWeight="bold">0</text>
            
            {/* Hero Label (Orange) */}
            <text x="355" y="402" fill="#ff8000" textAnchor="middle">Hero</text>
            <text x="385" y="440" fill="rgba(255, 128, 0, 0.4)" fontSize="14" fontWeight="bold">1</text>
            <text x="375" y="405" fill="rgba(255, 128, 0, 0.4)" fontSize="14" fontWeight="bold">1</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

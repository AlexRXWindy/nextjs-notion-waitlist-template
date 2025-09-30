'use client';

export default function FloatingLogo() {
  return (
    <div className="relative w-64 h-64 mx-auto mb-12 perspective-1000">
      <div className="absolute inset-0 animate-float-slow">
        <div className="relative w-full h-full preserve-3d animate-rotate-slow">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
              <defs>
                <linearGradient id="silver-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#f5f5f5', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#e5e5e5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#d4d4d4', stopOpacity: 1 }} />
                </linearGradient>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3"/>
                </filter>
              </defs>
              
              <circle cx="100" cy="100" r="80" fill="url(#silver-gradient)" filter="url(#shadow)" opacity="0.1" />
              
              <text 
                x="100" 
                y="120" 
                fontSize="80" 
                fontWeight="bold" 
                fill="url(#silver-gradient)" 
                textAnchor="middle"
                filter="url(#shadow)"
              >
                IA
              </text>
              
              <circle cx="100" cy="100" r="85" fill="none" stroke="#a3a3a3" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateZ(0px); }
          50% { transform: translateY(-20px) translateZ(20px); }
        }
        @keyframes rotate-slow {
          0% { transform: rotateY(0deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(10deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
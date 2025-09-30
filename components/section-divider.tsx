'use client';

export default function SectionDivider() {
  return (
    <div className="relative h-32 md:h-48 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6">
          <div className="relative h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
    </div>
  );
}
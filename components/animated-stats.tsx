'use client';

import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 100, suffix: '+', label: 'Proyectos' },
  { value: 50000, suffix: '+', label: 'Horas Ahorradas' },
  { value: 95, suffix: '%', label: 'Satisfacción' },
  { value: 200, suffix: '%', label: 'ROI Promedio' }
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, isVisible]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function AnimatedStats() {
  return (
    <div className="bg-black py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16 text-center">
          Resultados que Hablan
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-4 sm:p-6 md:p-8 bg-neutral-950 border border-neutral-800 rounded-xl md:rounded-2xl text-center hover:border-white transition-all"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 md:mb-3 break-words">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
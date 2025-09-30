'use client';

import { useEffect, useRef } from 'react';

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.float-item');
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.02;
        const x = (window.innerWidth / 2 - mouseX) * speed;
        const y = (window.innerHeight / 2 - mouseY) * speed;
        
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const shapes = [
    { size: 100, x: '10%', y: '20%' },
    { size: 80, x: '80%', y: '15%' },
    { size: 120, x: '70%', y: '70%' },
    { size: 90, x: '20%', y: '80%' }
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="float-item absolute opacity-10 transition-transform duration-200"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-white to-neutral-500 rounded-full blur-2xl"></div>
        </div>
      ))}
    </div>
  );
}
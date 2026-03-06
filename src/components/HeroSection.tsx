import { ChevronDown } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';

export function HeroSection() {
  const roleText = useTypingEffect(['Software Developer']);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-8 md:px-10">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,0,51,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,51,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] rounded-full"
            style={{
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(255,0,51,${Math.random() * 0.4 + 0.1})`,
              animation: `float ${Math.random() * 8 + 6}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        {/* Name with glitch */}
        <h1 className="font-space text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4"
          style={{ color: '#e8e8e8', animation: 'flicker 8s infinite' }}>
          <span className="glitch" data-text="Akash Foujdar">Akash Foujdar</span>
        </h1>

        {/* Subtitle */}
        <div className="font-mono text-sm sm:text-base mb-6" style={{ color: 'rgba(180,180,180,0.5)' }}>
          <span className="text-[#ff0033]">&gt;</span>{' '}
          <span>{roleText}</span>
          <span className="cursor-blink text-[#ff0033]">_</span>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(180,180,180,0.2)' }}>
          Scroll
        </span>
        <ChevronDown className="w-3 h-3 text-[#ff0033] opacity-40" style={{ animation: 'scrollPulse 2s infinite' }} />
      </div>
    </section>
  );
}

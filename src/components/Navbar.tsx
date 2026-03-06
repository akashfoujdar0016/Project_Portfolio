import { useEffect, useState } from 'react';
import { Menu, X, Clock } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(formatted);
    };
    updateTime();
    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    const offset = 88;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] backdrop-blur-md"
      style={{ background: 'rgba(3,3,5,0.88)', borderBottom: '1px solid rgba(255,0,51,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center relative">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#ff0033] bg-transparent border-none cursor-pointer transition duration-200 group"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className="w-5 h-5 transition duration-200 group-hover:text-[#ff3355] group-hover:drop-shadow-[0_0_10px_rgba(255,0,51,0.7)]" />
          ) : (
            <Menu className="w-5 h-5 transition duration-200 group-hover:text-[#ff3355] group-hover:drop-shadow-[0_0_10px_rgba(255,0,51,0.7)]" />
          )}
        </button>

        <button
          type="button"
          className="hidden md:flex items-center gap-2 text-[#ff0033] font-mono text-xs tracking-[0.2em] absolute right-6 group"
          aria-label="Current time"
        >
          <Clock className="w-4 h-4 transition duration-200 group-hover:text-[#ff3355] group-hover:drop-shadow-[0_0_10px_rgba(255,0,51,0.7)]" />
          <span className="transition duration-200 group-hover:text-[#ff3355] group-hover:drop-shadow-[0_0_10px_rgba(255,0,51,0.7)]">
            {currentTime || '00:00:00'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(3,3,5,0.95)', borderTop: '1px solid rgba(255,0,51,0.1)' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link text-left ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <div className="font-body text-on-surface selection:bg-primary-container selection:text-on-primary">
      {/* Global Screen Overlays */}
      <div className="scanlines"></div>
      <div className="fixed inset-0 pointer-events-none z-[60] bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

      {/* Top Navigation Anchor */}
      <header className="fixed top-0 w-full z-50 rounded-none bg-[#000000] bg-opacity-90 backdrop-blur-md border-b border-[#3C4B35]/15 shadow-[0_1px_0_0_rgba(57,255,20,0.1)]">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-full">
          <div className="text-2xl font-black tracking-tighter text-[#87CEFA] drop-shadow-[0_0_8px_rgba(135,206,250,0.4)] font-headline uppercase">
            RIA
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-['Space_Grotesk'] uppercase tracking-[0.1rem] text-[0.6875rem] md:text-sm transition-all hover:skew-x-[-10deg] hover:translate-y-[-1px] ${
                    isActive
                      ? 'text-[#87CEFA] border-b-2 border-[#87CEFA] pb-1 font-bold'
                      : 'text-[#87CEFA]/60 hover:text-[#87CEFA]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-[#87CEFA]/40 tracking-widest hidden sm:block">
              SYS_STATUS: OPTIMAL
            </span>
            <span className="material-symbols-outlined text-[#87CEFA] text-xl cursor-terminal">
              terminal
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      {children}

      {/* Footer Terminal Anchor */}
      <footer className="fixed bottom-0 w-full z-50 bg-transparent">
        <div className="tonal-shift bg-gradient-to-t from-[#0E0E0E] to-transparent">
          <div className="flex justify-between items-center w-full px-6 py-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#87CEFA]">
              ©2077 RIA_OS // ALL_RIGHTS_RESERVED
            </div>
            <div className="flex items-center gap-6">
              <a
                className="font-mono text-[10px] uppercase tracking-widest text-[#3C4B35] hover:text-[#00EEFC] cursor-terminal transition-all hover:translate-x-1"
                href="#"
              >
                TERMINAL
              </a>
              <a
                className="font-mono text-[10px] uppercase tracking-widest text-[#3C4B35] hover:text-[#00EEFC] cursor-terminal transition-all hover:translate-x-1"
                href="#"
              >
                LOG_OUT
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CRT Decoration Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[70] mix-blend-screen opacity-20">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#87CEFA]/10 blur-xl animate-[scan_8s_linear_infinite]"></div>
      </div>
    </div>
  );
}

import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { name: '首页', path: '/' },
    { name: '关于我', path: '/about' },
    { name: '作品集', path: '/portfolio' },
    { name: '联系', path: '/contact' },
  ];

  return (
    <div className="font-body text-on-surface selection:bg-primary-container selection:text-on-primary min-h-screen">
      <div className="scanlines"></div>
      <div className="fixed inset-0 pointer-events-none z-[60] bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

      <header className="fixed top-0 w-full z-50 rounded-none bg-[#000000]/90 backdrop-blur-md border-b border-[#87CEFA]/15 shadow-[0_1px_0_0_rgba(135,206,250,0.16)]">
        <div className="flex justify-between items-center w-full px-5 md:px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-[#87CEFA] drop-shadow-[0_0_8px_rgba(135,206,250,0.35)] font-headline uppercase">
            QIUYI.AI
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-['Space_Grotesk'] uppercase tracking-[0.1rem] text-sm transition-all hover:skew-x-[-8deg] hover:translate-y-[-1px] ${
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
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-[#87CEFA]/45 tracking-widest hidden sm:block">
              AI_PRODUCT_PM // ONLINE
            </span>
            <span className="material-symbols-outlined text-[#87CEFA] text-xl cursor-terminal">
              terminal
            </span>
          </div>
        </div>
      </header>

      {children}

      <footer className="fixed bottom-0 w-full z-50 bg-transparent pointer-events-none">
        <div className="tonal-shift bg-gradient-to-t from-[#0E0E0E] to-transparent">
          <div className="flex justify-between items-center w-full px-5 md:px-8 py-2 max-w-7xl mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#87CEFA]">
              ©2026 QIUYI // AI PRODUCT PORTFOLIO
            </div>
            <div className="hidden md:flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-[#87CEFA]/35">
              RAG_AGENT_PROMPT
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[70] mix-blend-screen opacity-20">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#87CEFA]/10 blur-xl animate-[scan_8s_linear_infinite]"></div>
      </div>
    </div>
  );
}

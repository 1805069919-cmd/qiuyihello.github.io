// @ts-nocheck
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FluidGlass } from '../components/fluid_glass';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Fluid Glass Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <FluidGlass 
          mode="lens"
          lensProps={{
            scale: 0.25,
            ior: 1.15,
            thickness: 5,
            chromaticAberration: 0.1,
            anisotropy: 0.01  
          }}
          scale={0.25}
          ior={1.15}
          thickness={2}
          transmission={1}
          roughness={0}
          chromaticAberration={0.05}
          anisotropy={0.01}
        />
      </div>

      {/* Background Data Fragment Decals */}
      <div className="absolute top-1/4 left-10 opacity-10 pointer-events-none">
        <pre className="text-[8px] font-mono leading-none text-secondary-container">
          01010010 01001001 01000001{'\n'}
          01010010 01001001 01000001{'\n'}
          01010010 01001001 01000001
        </pre>
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-10 pointer-events-none">
        <div className="w-32 h-32 border border-primary-container/30 rotate-45 flex items-center justify-center">
          <div className="w-24 h-24 border border-secondary-container/20 -rotate-12"></div>
        </div>
      </div>

      {/* Central Hero Section */}
      <div className="z-10 text-center flicker">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none mb-8 font-headline text-[#87CEFA]">
          HI HERE IS RIA
        </h1>
        <div className="flex flex-col items-center gap-6">
          <Link
            to="/contact"
            className="group relative px-10 py-4 border border-[#87CEFA] text-[#87CEFA] font-headline uppercase tracking-[0.2rem] text-sm overflow-hidden transition-all duration-300 hover:bg-[#87CEFA]/5 neon-glow-primary active:scale-95"
          >
            <span className="relative z-10">Contact Me</span>
            {/* Glitch hover state background */}
            <div className="absolute inset-0 bg-[#87CEFA]/10 translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out"></div>
          </Link>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-1.5 h-1.5 bg-[#87CEFA] rounded-full animate-pulse"></div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-outline">
              Available for core integration // 2077
            </span>
          </div>
        </div>
      </div>

      {/* Edge Metadata UI */}
      <aside className="absolute bottom-20 left-10 hidden xl:block">
        <div className="space-y-1">
          <div className="text-[10px] text-outline font-mono">LOCATION: [REDACTED]</div>
          <div className="text-[10px] text-outline font-mono">LAT: 35.6895</div>
          <div className="text-[10px] text-outline font-mono">LONG: 139.6917</div>
        </div>
      </aside>
      <aside className="absolute top-40 right-10 hidden xl:block text-right">
        <div className="text-[10px] text-secondary-container/50 font-mono tracking-widest mb-2">
          NETWORK_LOAD
        </div>
        <div className="w-48 h-1 bg-surface-container-highest">
          <div className="w-2/3 h-full bg-secondary-container"></div>
        </div>
      </aside>
    </motion.main>
  );
}

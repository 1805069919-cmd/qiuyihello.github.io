// @ts-nocheck
import { motion } from 'framer-motion';
import { FluidGlass } from '../components/fluid_glass';

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 w-full h-screen flex flex-col justify-center px-6 md:px-24"
    >
      {/* Background Identity Anchor */}
      <div className="absolute top-32 right-0 opacity-10 select-none pointer-events-none hidden lg:block">
        <h1 className="text-[12rem] font-black leading-none tracking-tighter uppercase text-outline">
          RIA_01
        </h1>
      </div>

      {/* Fluid Glass Background Effect */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-50">
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

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        {/* Left Column: Primary Identity */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-block bg-surface-container-highest px-3 py-1 border-l-4 border-primary-container">
            <span className="text-[10px] font-mono tracking-widest text-primary-container uppercase">
              System_Status: Operational
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black font-headline leading-[0.9] tracking-tighter gradient-text uppercase">
            Architecting<br />
            Digital<br />
            Anomalies.
          </h2>
          <p className="max-w-md text-on-surface-variant text-lg leading-relaxed font-light">
            RIA is a multi-disciplinary design unit specializing in{' '}
            <span className="text-primary-container">high-frequency</span> interface structures and
            cybernetic brand systems. We operate at the intersection of brutalist architecture and
            technical precision.
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <button className="bg-primary-container text-on-primary px-8 py-3 font-bold uppercase tracking-widest text-xs glitch-hover transition-all">
              Execute_Request
            </button>
            <button className="border border-primary-container/50 text-primary-container px-8 py-3 font-bold uppercase tracking-widest text-xs glitch-hover transition-all">
              Download_Core.bin
            </button>
          </div>
        </div>

        {/* Right Column: Metadata & Technical Specs */}
        <div className="md:col-span-5 flex flex-col space-y-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[0.6875rem] uppercase tracking-[0.1rem] text-primary-container/50 block">
                Origin
              </label>
              <span className="text-sm font-mono text-on-surface">Neo-Tokyo // Sector 7</span>
            </div>
            <div className="space-y-1">
              <label className="text-[0.6875rem] uppercase tracking-[0.1rem] text-primary-container/50 block">
                Version
              </label>
              <span className="text-sm font-mono text-on-surface">RIA_OS_v4.2.0</span>
            </div>
            <div className="space-y-1">
              <label className="text-[0.6875rem] uppercase tracking-[0.1rem] text-primary-container/50 block">
                Focus
              </label>
              <span className="text-sm font-mono text-on-surface">Neural Interfaces</span>
            </div>
            <div className="space-y-1">
              <label className="text-[0.6875rem] uppercase tracking-[0.1rem] text-primary-container/50 block">
                Uptime
              </label>
              <span className="text-sm font-mono text-on-surface">24,892 Cycles</span>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 border-l-2 border-secondary-container relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-20">
              <span
                className="material-symbols-outlined text-secondary-container text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                terminal
              </span>
            </div>
            <h3 className="text-secondary-container font-mono text-xs uppercase tracking-widest mb-4">
              Core_Capabilities
            </h3>
            <ul className="space-y-3 font-mono text-[11px] text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-container"></span>
                Generative Grid Systems
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-container"></span>
                Dark Mode Logic
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-container"></span>
                Asymmetric Data Visualization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-container"></span>
                Kinetic Typography
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-24 left-6 hidden lg:block">
        <div className="h-32 w-px bg-gradient-to-b from-primary-container to-transparent opacity-40"></div>
        <div className="mt-2 text-[8px] font-mono text-primary-container/40 vertical-rl uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          Lat: 35.6895 // Long: 139.6917
        </div>
      </div>
      <div className="fixed bottom-12 right-6 hidden lg:block text-right">
        <div className="text-[8px] font-mono text-primary-container/40 uppercase tracking-widest mb-2">
          System_Load: 12%
        </div>
        <div className="w-32 h-1 bg-surface-container-highest overflow-hidden">
          <div className="h-full bg-primary-container w-1/3"></div>
        </div>
      </div>
    </motion.main>
  );
}

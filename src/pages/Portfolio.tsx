// @ts-nocheck
import { motion } from 'framer-motion';
import { FluidGlass } from '../components/fluid_glass';

export default function Portfolio() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen pt-20 pb-12 px-6 wireframe-grid"
    >
      {/* Fluid Glass Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
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

      {/* Background Decorative Element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="border-[1px] border-primary-container w-[80vw] h-[819px] rotate-45"></div>
        <div className="absolute border-[1px] border-secondary-container w-[70vw] h-[716px] -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto h-full flex flex-col">
        {/* Header Section */}
        <header className="mb-8 flex justify-between items-end">
          <div className="space-y-1">
            <span className="font-mono text-[0.6875rem] tracking-[0.2rem] text-secondary-container">
              FILE_SYSTEM // RIA_OS
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter gradient-text font-headline leading-none">
              Knowledge Notes
            </h1>
          </div>
          <div className="hidden lg:block text-right font-mono text-[0.6875rem] leading-relaxed text-outline">
            [SYSTEM_STATE: OPERATIONAL]<br />
            [DATA_NODES: 4,096]<br />
            [ACCESS_LEVEL: ROOT]
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 pb-16">
          {/* Main Featured Note */}
          <div className="md:col-span-2 md:row-span-2 border border-primary-container/30 bg-surface-container-lowest p-6 flex flex-col justify-between relative group hover:border-primary-container transition-all">
            <div className="absolute top-0 right-0 p-2 font-mono text-[0.5rem] text-primary-container/40">
              0x001
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  terminal
                </span>
                <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-primary-container">
                  Quantum_Architecture
                </span>
              </div>
              <p className="text-on-surface/80 text-lg leading-tight font-light italic">
                The disintegration of linear data structures in favor of non-Euclidean semantic maps.
              </p>
            </div>
            {/* Abstract Wireframe Visual */}
            <div className="w-full h-32 border-t border-l border-primary-container/10 mt-4 relative overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="#39FF14" strokeWidth="0.5"></path>
                <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="#00EEFC" strokeWidth="0.5"></path>
                <circle cx="50" cy="50" fill="#39FF14" r="2"></circle>
              </svg>
            </div>
          </div>

          {/* Secondary Note 1 */}
          <div className="md:col-span-1 border border-outline-variant/30 bg-surface-container-lowest p-4 flex flex-col gap-4 group hover:border-secondary-container transition-all">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[0.625rem] text-secondary-container">NODE_B7</span>
              <span className="material-symbols-outlined text-xs text-outline">open_in_new</span>
            </div>
            <h3 className="font-bold uppercase text-xs tracking-widest">Neural Interface Protocols</h3>
            <div className="flex-grow flex items-center justify-center opacity-20">
              <span className="material-symbols-outlined text-4xl">psychology</span>
            </div>
          </div>

          {/* Secondary Note 2 */}
          <div className="md:col-span-1 border border-outline-variant/30 bg-surface-container-lowest p-4 flex flex-col justify-between group hover:bg-surface-container-low transition-all">
            <div className="font-mono text-[0.625rem] text-outline">TAGS: [ENCRYPTION, GHOST]</div>
            <h3 className="font-bold uppercase text-xs tracking-widest">Cipher_Symmetry</h3>
            <div className="h-1 bg-outline-variant/20 w-full mt-2">
              <div className="h-full bg-secondary-container w-2/3"></div>
            </div>
          </div>

          {/* Small Technical Module */}
          <div className="md:col-span-1 border border-outline-variant/30 bg-surface-container-lowest p-4 flex flex-col justify-between">
            <span className="font-mono text-[10px] text-primary-container">UPLOADING... 82%</span>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="w-2 h-2 bg-primary-container"></div>
              <div className="w-2 h-2 bg-primary-container"></div>
              <div className="w-2 h-2 bg-primary-container/20"></div>
              <div className="w-2 h-2 bg-primary-container/20"></div>
            </div>
          </div>

          {/* Wider Data Module */}
          <div className="md:col-span-1 border border-outline-variant/30 bg-surface-container-lowest p-4 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-5">
              <span
                className="material-symbols-outlined text-8xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                grid_view
              </span>
            </div>
            <h3 className="font-bold uppercase text-[10px] tracking-widest mb-2">Matrix_Log</h3>
            <p className="font-mono text-[8px] text-outline leading-none">
              10:00:12 ERR_TIMEOUT<br />
              10:00:15 RECONNECTING...<br />
              10:00:18 SYNC_SUCCESS
            </p>
          </div>

          {/* Featured Secondary */}
          <div className="md:col-span-2 border border-primary-container/20 bg-surface-container-lowest p-6 flex gap-6 items-center">
            <div className="w-24 h-24 border border-secondary-container/30 flex items-center justify-center p-2">
              <svg className="w-full h-full opacity-50" viewBox="0 0 40 40">
                <rect fill="none" height="30" stroke="#00EEFC" strokeDasharray="2 1" width="30" x="5" y="5"></rect>
                <path d="M5,5 L35,35 M35,5 L5,35" stroke="#00EEFC" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold uppercase tracking-tight">Void_Theory_v0.2</h3>
              <p className="text-outline text-xs mt-1">
                Exploration of the "Nothingness" as a valid storage medium for sentient echoes.
              </p>
              <button className="mt-4 px-4 py-1 border border-primary-container text-[10px] font-mono hover:bg-primary-container hover:text-on-primary transition-all uppercase tracking-widest glitch-hover">
                Decrypt_File
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Accents */}
      <div className="fixed top-24 left-4 w-1 h-24 bg-primary-container/20"></div>
      <div className="fixed bottom-12 right-4 w-24 h-1 bg-secondary-container/20"></div>
      <div
        className="fixed top-24 right-4 text-[8px] font-mono text-outline vertical-text rotate-180 opacity-50"
        style={{ writingMode: 'vertical-rl' }}
      >
        SYSTEM_ID: B-092-ALPHA
      </div>
    </motion.main>
  );
}

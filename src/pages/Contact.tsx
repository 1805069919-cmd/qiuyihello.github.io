// @ts-nocheck
import { motion } from 'framer-motion';
import { FluidGlass } from '../components/fluid_glass';

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-full flex items-center justify-center px-6 pt-20 pb-12 relative"
    >
      {/* Fluid Glass Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
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

      <div className="grid grid-cols-1 md:grid-cols-12 w-full max-w-7xl h-full items-center gap-12 relative z-10">
        {/* Left Side: Visual Anchor (Asymmetric) */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start space-y-8">
          <div className="wireframe-box w-64 h-64 md:w-80 md:h-80 flex items-center justify-center bg-surface-container-lowest">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary-container"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary-container"></div>
            <span
              className="material-symbols-outlined text-primary-container text-6xl opacity-20"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              deployed_code
            </span>
          </div>
          <div className="space-y-2">
            <h2 className="text-primary-container font-mono text-[10px] uppercase tracking-[0.2rem]">
              Status: Online
            </h2>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter gradient-text leading-none">
              Establish<br />
              Connection
            </h1>
          </div>
        </div>

        {/* Right Side: Contact Data Fragments */}
        <div className="md:col-span-7 flex flex-col space-y-12">
          <div className="grid grid-cols-1 gap-6">
            {/* WeChat */}
            <div className="group flex items-end justify-between border-b border-outline-variant/15 pb-4 hover:border-primary-container transition-all cursor-terminal">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest mb-1">
                  01 // Instant Message
                </span>
                <span className="text-2xl md:text-4xl font-bold tracking-tight text-on-surface group-hover:text-primary-container transition-colors">
                  WeChat
                </span>
              </div>
              <div className="flex items-center space-y-[-4px] flex-col text-right">
                <span className="text-primary-container font-mono text-xs">@RIA_OFFICIAL</span>
                <span
                  className="material-symbols-outlined text-secondary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  arrow_outward
                </span>
              </div>
            </div>

            {/* GitHub */}
            <div className="group flex items-end justify-between border-b border-outline-variant/15 pb-4 hover:border-primary-container transition-all cursor-terminal">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest mb-1">
                  02 // Code Repository
                </span>
                <span className="text-2xl md:text-4xl font-bold tracking-tight text-on-surface group-hover:text-primary-container transition-colors">
                  GitHub
                </span>
              </div>
              <div className="flex items-center space-y-[-4px] flex-col text-right">
                <span className="text-primary-container font-mono text-xs">/RIA-SYSTEMS</span>
                <span
                  className="material-symbols-outlined text-secondary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  arrow_outward
                </span>
              </div>
            </div>

            {/* Xiaohongshu */}
            <div className="group flex items-end justify-between border-b border-outline-variant/15 pb-4 hover:border-primary-container transition-all cursor-terminal">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest mb-1">
                  03 // Social Log
                </span>
                <span className="text-2xl md:text-4xl font-bold tracking-tight text-on-surface group-hover:text-primary-container transition-colors">
                  Xiaohongshu
                </span>
              </div>
              <div className="flex items-center space-y-[-4px] flex-col text-right">
                <span className="text-primary-container font-mono text-xs">ID: 8820177</span>
                <span
                  className="material-symbols-outlined text-secondary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  arrow_outward
                </span>
              </div>
            </div>
          </div>

          {/* Footer-aligned text within grid */}
          <div className="pt-8 opacity-40">
            <p className="font-mono text-[10px] max-w-sm leading-relaxed tracking-wider">
              ENCRYPTED PORTAL ACCESS ONLY. ALL DATA TRANSFERS ARE MONITORED BY THE GHOST PROTOCOL.
              RESPONSE LATENCY: <span className="text-primary-container">LOW</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Background Geometry Decor */}
      <div className="fixed top-1/2 left-0 w-full h-[1px] bg-outline-variant/10 -z-10"></div>
      <div className="fixed top-0 left-1/4 w-[1px] h-full bg-outline-variant/10 -z-10"></div>
      <div className="fixed bottom-24 right-12 w-32 h-32 border border-primary-container/5 rounded-full -z-10 blur-3xl"></div>
    </motion.main>
  );
}

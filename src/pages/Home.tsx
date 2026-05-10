import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const metrics = [
  ['目标岗位', 'AI 产品经理 / AI 产品助理'],
  ['主线项目', '二手手机回收 AI 经营助手'],
  ['能力关键词', 'RAG · Agent · Prompt · 数据分析'],
  ['业务理解', '收 · 检 · 估 · 售 · 风控'],
];

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full relative overflow-hidden px-6 pt-28 pb-24"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30 wireframe-grid"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-9rem)] relative z-10">
        <section className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 border border-[#87CEFA]/30 bg-[#87CEFA]/5 px-4 py-2 font-mono text-[11px] tracking-[0.18rem] text-[#87CEFA] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#87CEFA] animate-pulse"></span>
            AI PRODUCT PORTFOLIO
          </div>

          <div className="space-y-5">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] font-headline text-[#87CEFA]">
              求一<br />AI 产品作品集
            </h1>
            <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-on-surface-variant">
              我正在从业务执行与数据标注经验，转向 AI 产品经理方向。当前主线项目是
              <span className="text-[#87CEFA] font-bold">「二手手机回收 AI 经营助手」</span>，围绕门店验机、估价、风控、客服问答和经营看板，训练自己把业务问题拆成产品方案、AI 链路和可评测指标。
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio" className="px-7 py-3 border border-[#87CEFA] text-[#87CEFA] font-bold uppercase tracking-widest text-xs hover:bg-[#87CEFA]/10 transition-all neon-glow-primary">
              查看项目作品
            </Link>
            <Link to="/about" className="px-7 py-3 border border-outline-variant text-on-surface-variant font-bold uppercase tracking-widest text-xs hover:border-[#87CEFA] hover:text-[#87CEFA] transition-all">
              了解我的能力结构
            </Link>
          </div>
        </section>

        <aside className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {metrics.map(([label, value], index) => (
            <div key={label} className="border border-[#87CEFA]/20 bg-surface-container-lowest/80 p-5 min-h-32 flex flex-col justify-between hover:border-[#87CEFA]/60 transition-all">
              <span className="font-mono text-[10px] text-[#87CEFA]/50">0{index + 1}</span>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-outline mb-2">{label}</p>
                <h3 className="text-lg font-bold text-on-surface leading-snug">{value}</h3>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </motion.main>
  );
}

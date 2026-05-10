import { motion } from 'framer-motion';

const contacts = [
  { label: 'GitHub', value: '1805069919-cmd', href: 'https://github.com/1805069919-cmd' },
  { label: '项目方向', value: 'AI 产品经理 / AI 产品助理', href: null },
  { label: '当前主题', value: '二手手机回收 AI 经营助手', href: null },
];

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full flex items-center justify-center px-6 pt-28 pb-24 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 w-full max-w-7xl items-center gap-12 relative z-10">
        <section className="md:col-span-5 flex flex-col items-start space-y-8">
          <div className="wireframe-box w-56 h-56 md:w-72 md:h-72 flex items-center justify-center bg-surface-container-lowest border border-[#87CEFA]/25 relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#87CEFA]"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#87CEFA]"></div>
            <span className="material-symbols-outlined text-[#87CEFA] text-6xl opacity-30">deployed_code</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-[#87CEFA] font-mono text-[10px] uppercase tracking-[0.2rem]">Status: Open To Opportunity</h2>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter gradient-text leading-none">建立连接</h1>
            <p className="text-on-surface-variant leading-relaxed max-w-md">
              欢迎围绕 AI 产品、RAG/Agent 项目、二手回收业务、作品集优化与岗位机会交流。
            </p>
          </div>
        </section>

        <section className="md:col-span-7 flex flex-col space-y-8">
          {contacts.map((item, index) => (
            <a
              key={item.label}
              href={item.href || undefined}
              target={item.href ? '_blank' : undefined}
              rel={item.href ? 'noreferrer' : undefined}
              className="group flex items-end justify-between border-b border-outline-variant/20 pb-5 hover:border-[#87CEFA] transition-all cursor-terminal"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest mb-1">0{index + 1} // {item.label}</span>
                <span className="text-2xl md:text-4xl font-bold tracking-tight text-on-surface group-hover:text-[#87CEFA] transition-colors">{item.value}</span>
              </div>
              <span className="material-symbols-outlined text-[#87CEFA]">arrow_outward</span>
            </a>
          ))}
        </section>
      </div>
    </motion.main>
  );
}

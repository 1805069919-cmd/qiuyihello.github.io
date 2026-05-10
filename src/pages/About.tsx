import { motion } from 'framer-motion';

const skills = [
  { title: '业务拆解', desc: '能把回收门店的收货、验机、估价、风控、销售流程拆成角色、场景、痛点和指标。' },
  { title: 'AI 产品链路', desc: '理解 RAG、意图识别、工具调用、Prompt 约束、Badcase 反馈和评测闭环。' },
  { title: '数据分析基础', desc: '持续学习 Python、Pandas、SQL，用数据看成交、取消、报价、库存和经营效率。' },
  { title: '用户共情', desc: '来自客服、咖啡、数据标注等经历，习惯观察细节、理解一线执行者的真实阻力。' },
];

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 w-full min-h-screen px-6 md:px-24 pt-28 pb-24"
    >
      <div className="absolute top-28 right-0 opacity-10 select-none pointer-events-none hidden lg:block">
        <h1 className="text-[10rem] font-black leading-none tracking-tighter uppercase text-outline">ABOUT</h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <section className="lg:col-span-6 space-y-7">
          <div className="inline-block bg-surface-container-highest px-3 py-1 border-l-4 border-[#87CEFA]">
            <span className="text-[10px] font-mono tracking-widest text-[#87CEFA] uppercase">Profile_Status: Building</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-headline leading-[0.95] tracking-tighter gradient-text uppercase">
            从执行者<br />到 AI 产品设计者
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            我的优势不是一开始就站在“技术专家”的位置，而是更接近真实业务现场：知道一线员工为什么查资料慢、为什么报价容易不统一、为什么新人培训成本高，也知道 AI 产品不能只写概念，必须落到流程、数据、工具调用和评测指标上。
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            我希望把过去的客服、咖啡服务、数据标注经历，转化成 AI 产品经理需要的三种能力：理解用户、拆解业务、把 AI 能力包装成稳定可交付的产品方案。
          </p>
        </section>

        <section className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((item, index) => (
            <article key={item.title} className="border border-outline-variant/30 bg-surface-container-lowest p-5 hover:border-[#87CEFA]/70 transition-all min-h-48">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-[#87CEFA]">CAPABILITY_0{index + 1}</span>
                <span className="material-symbols-outlined text-[#87CEFA]/50 text-lg">data_object</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">{item.desc}</p>
            </article>
          ))}
        </section>
      </div>
    </motion.main>
  );
}

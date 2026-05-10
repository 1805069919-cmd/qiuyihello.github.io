import { motion } from 'framer-motion';

const projects = [
  {
    tag: 'MAIN PROJECT',
    title: '二手手机回收 AI 经营助手',
    desc: '面向门店、质检、客服、运营的 ToB AI 助手，覆盖收、检、估、售与风控，目标是降低新人培训成本、统一验机报价标准、提升问答与经营决策效率。',
    points: ['RAG 知识问答', 'Tool Call 查价/查单/风控', '验机报告生成', '经营数据看板'],
  },
  {
    tag: 'RAG PIPELINE',
    title: '多层问答策略与知识库设计',
    desc: '设计缓存、QA 知识库、RAG 检索、Rerank、Fusion、受控生成和人工审核入库流程，用于提升高频问题响应速度与答案稳定性。',
    points: ['缓存命中阈值 ≥90%', '相似问扩展', '知识融合', 'Badcase 回流'],
  },
  {
    tag: 'EVALUATION',
    title: 'AI 链路评测体系',
    desc: '围绕 Query 改写、意图识别、槽位抽取、路由、工具调用、LLM 生成和端到端结果，建立 0/0.5/1 的可跑分评测表。',
    points: ['节点级评分', '端到端可用率', '错误归因', 'Prompt 迭代'],
  },
  {
    tag: 'DATA DASHBOARD',
    title: '经营看板与 ROI 测算',
    desc: '关注成交量、取消量、报价分布、库存周转、AI 自动应答率、人工节省时长等指标，用数据证明产品价值。',
    points: ['成交趋势', '价格分布', '人效提升', '投入产出比'],
  },
];

export default function Portfolio() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen pt-28 pb-24 px-6 wireframe-grid"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
          <div className="space-y-2">
            <span className="font-mono text-[0.6875rem] tracking-[0.2rem] text-[#87CEFA]">PROJECT_SYSTEM // AI_PM</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter gradient-text font-headline leading-none">作品集</h1>
            <p className="max-w-2xl text-on-surface-variant leading-relaxed">
              这里不是单纯放“页面效果”，而是展示我如何把一个业务场景拆成产品模块、AI 链路、数据指标和迭代闭环。
            </p>
          </div>
          <div className="hidden lg:block text-right font-mono text-[0.6875rem] leading-relaxed text-outline">
            [ROLE: AI PRODUCT BUILDER]<br />
            [DOMAIN: PHONE_RECYCLING]<br />
            [METHOD: PRD + RAG + AGENT + DATA]
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <article key={project.title} className={`border bg-surface-container-lowest/90 p-6 relative overflow-hidden hover:border-[#87CEFA] transition-all ${index === 0 ? 'md:col-span-2 border-[#87CEFA]/40' : 'border-outline-variant/30'}`}>
              <div className="absolute top-0 right-0 p-3 font-mono text-[0.6rem] text-[#87CEFA]/35">0x00{index + 1}</div>
              <span className="font-mono text-[10px] tracking-widest text-[#87CEFA]">{project.tag}</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-black tracking-tight text-on-surface">{project.title}</h2>
              <p className="mt-4 text-on-surface-variant leading-relaxed max-w-4xl">{project.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.points.map((point) => (
                  <span key={point} className="border border-[#87CEFA]/25 bg-[#87CEFA]/5 px-3 py-1 text-xs text-[#87CEFA] font-mono">
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </motion.main>
  );
}

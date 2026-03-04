'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const workflow = [
  {
    step: '01',
    title: 'Discovery & System Mapping',
    description:
      'I study your operations, user roles, bottlenecks, and expected scale so architecture decisions are made with practical business context.',
    points: [
      'Stakeholder workflow analysis',
      'Role and permission mapping',
      'Data entities and lifecycle planning',
      'Scope strategy for phased implementation'
    ]
  },
  {
    step: '02',
    title: 'Platform Architecture Blueprint',
    description:
      'I define frontend modules, backend boundaries, and dashboard structure to ensure maintainability, security, and long-term expansion capability.',
    points: [
      'Modular front-end layout planning',
      'Service and API structure decisions',
      'Admin controls and guardrails definition',
      'Operational reporting and analytics design'
    ]
  },
  {
    step: '03',
    title: 'Implementation & Automation Setup',
    description:
      'I build the full stack product with a focus on automation-ready workflows, clean interaction design, and role-specific user experience.',
    points: [
      'Feature-by-feature full stack delivery',
      'Automation event and alert integration',
      'QA-oriented state validation',
      'Interface polish with premium visual consistency'
    ]
  },
  {
    step: '04',
    title: 'Deployment & Optimization',
    description:
      'I deploy production-ready systems, validate operational flow, and optimize based on actual user interaction and process usage.',
    points: [
      'Cloud deployment and release checks',
      'Stability and uptime verification',
      'Post-launch adjustment and optimization',
      'Growth-readiness and next feature planning'
    ]
  }
];

export function ProcessSection() {
  return (
    <AnimatedSection id="process" className="px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Delivery Workflow</p>
          <h2 className="text-3xl font-black text-white md:text-5xl">How I Build Systems That Scale</h2>
          <p className="mt-4 text-white/70">
            A practical and repeatable process designed for reliability, visibility, and business impact.
          </p>
        </div>
        <div className="relative space-y-6 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-white/20 md:before:left-1/2">
          {workflow.map((item, index) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative grid md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
            >
              <div className="hidden md:block" />
              <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-7 md:mx-8">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-300">Step {item.step}</p>
                <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
                <ul className="mt-4 grid gap-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/80"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="absolute left-4 top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-300 md:left-1/2" />
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          <p className="font-mono text-purple-400 text-sm mb-3">01. about me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">
            The story so far
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
            <p className="text-slate-300 leading-8 text-lg relative z-10">
              Computer Science student passionate about <span className="text-purple-400 font-medium">full-stack development</span>,{' '}
              <span className="text-pink-400 font-medium">blockchain applications</span>, and{' '}
              <span className="text-cyan-400 font-medium">AI-driven solutions</span>.
            </p>
            <p className="text-slate-400 leading-7 mt-4 relative z-10">
              Skilled in Node.js, Express, MongoDB, JavaScript, FastAPI, and currently exploring
              modern frontend development with React and Next.js.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { num: '8+', label: 'Projects Built' },
              { num: '15+', label: 'Certifications' },
              { num: '3+', label: 'Tech Stacks' },
              { num: '∞', label: 'Curiosity' },
            ].map(s => (
              <div key={s.label} className="glass p-6 rounded-xl text-center hover:border-purple-500/30 transition-all group">
                <div className="text-3xl font-display font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">{s.num}</div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
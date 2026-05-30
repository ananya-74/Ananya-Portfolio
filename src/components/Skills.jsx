import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/skills'

const categories = ['All', 'Language', 'Frontend', 'Backend', 'Database', 'Tools']

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  // Show all by default
  const displayed = skills

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          <p className="font-mono text-pink-400 text-sm mb-3">02. skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">
            Tools of the trade
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(c => (
            <span key={c}
              className="px-4 py-1.5 rounded-full text-sm font-mono border border-purple-500/30 text-slate-400 bg-purple-500/5 cursor-default"
            >{c}</span>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayed.map((skill, i) => (
            <motion.div key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="glass p-4 rounded-xl text-center cursor-default group"
              style={{ '--skill-color': skill.color }}
            >
              <div className="w-3 h-3 rounded-full mx-auto mb-2 group-hover:scale-150 transition-transform"
                style={{ background: skill.color, boxShadow: `0 0 10px ${skill.color}` }} />
              <p className="text-white text-sm font-medium">{skill.name}</p>
              <p className="text-slate-600 text-xs mt-0.5">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
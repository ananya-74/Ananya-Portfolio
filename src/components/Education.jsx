import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const education = [
  {
    degree: 'Bachelor of Technology — Computer Science & Data Science',
    institution: 'Holy Mary Insitute of Technology & Science',   // ← fill in
    year: '2022 – 2026',
    grade: 'CGPA: 8.5',                // ← fill in
    color: '#A855F7',
  },
  {
    degree: 'Class XII (Higher Secondary)',
    institution: 'Sri Chaitanya Junior College',    
    year: '2022',
    grade: 'Percentage: 89%',          
    color: '#EC4899',
  },
  {
    degree: 'Class X (Secondary)',
    institution: 'Model Mission High School',    
    year: '2020',
    grade: 'CGPA: 10.00',          
    color: '#22D3EE',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <p className="font-mono text-cyan-400 text-sm mb-3">05. education</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">Academic journey</h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass p-6 rounded-2xl flex gap-6 items-start group hover:border-purple-500/20 transition-all"
            >
              {/* Color dot */}
              <div className="w-4 h-4 rounded-full mt-1.5 flex-shrink-0"
                style={{ background: edu.color, boxShadow: `0 0 12px ${edu.color}` }} />

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{edu.degree}</h3>
                    <p className="font-mono text-sm mt-1" style={{ color: edu.color }}>{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-sm font-mono">{edu.year}</span>
                    <p className="text-slate-500 text-xs mt-1">{edu.grade}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
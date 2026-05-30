import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <p className="font-mono text-purple-400 text-sm mb-3">04. experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">Where I've worked</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
          className="flex gap-8"
        >
          {/* Timeline line */}
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-1.5 glow-purple flex-shrink-0" />
            <div className="w-px flex-1 bg-gradient-to-b from-purple-500/40 to-transparent mt-2" />
          </div>

          <div className="glass p-8 rounded-2xl flex-1 mb-4">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-white text-xl font-semibold font-display">Content Writing & Social Media Intern</h3>
                <p className="text-purple-400 font-mono text-sm mt-1">NGO / Non-Profit Organization</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono border border-purple-500/30 text-purple-400 bg-purple-500/5 whitespace-nowrap">
                Internship
              </span>
            </div>

            <ul className="space-y-2">
              {[
                'Created engaging posts and awareness content for social media campaigns',
                'Assisted in fundraising campaigns and digital outreach initiatives',
                'Worked on digital communication and community engagement strategies',
                'Developed strong communication and cross-functional collaboration skills',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                  <span className="text-pink-400 mt-1 flex-shrink-0">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
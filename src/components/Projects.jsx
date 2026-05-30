import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import { projects } from '../data/projects'

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="glass rounded-2xl overflow-hidden cursor-pointer group relative"
    >
      {/* Banner */}
      <div className="h-40 relative overflow-hidden">
        <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="p-6">
        <p className="font-mono text-xs mb-2" style={{ color: project.accent }}>{project.category}</p>
        <h3 className="font-display text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-slate-500 text-sm mb-3">{project.subtitle}</p>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-slate-500">+{project.tech.length - 4}</span>
          )}
        </div>

        <a href={project.github} target="_blank" rel="noreferrer"
          onClick={e => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <FiGithub size={16} /> GitHub
        </a>
      </div>
    </motion.div>
  )
}

function Modal({ project, onClose }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }} transition={{ type: 'spring', damping: 20 }}
        onClick={e => e.stopPropagation()}
        className="glass rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
      >
        <button onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white"
        ><FiX /></button>

        <p className="font-mono text-xs mb-2" style={{ color: project.accent }}>{project.category}</p>
        <h2 className="font-display text-3xl font-bold text-white mb-1">{project.title}</h2>
        <p className="text-slate-400 mb-4">{project.subtitle}</p>
        <p className="text-slate-300 leading-7 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="text-xs px-3 py-1 rounded-full border text-slate-300"
              style={{ borderColor: project.accent + '40', background: project.accent + '10' }}>{t}</span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-all"
          ><FiGithub /> View on GitHub</a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm transition-all"
              style={{ background: project.accent }}
            ><FiExternalLink /> Live Demo</a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <p className="font-mono text-cyan-400 text-sm mb-3">03. projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">Featured work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={p} onClick={() => setSelected(p)} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
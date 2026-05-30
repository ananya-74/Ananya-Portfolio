import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiX, FiAward } from 'react-icons/fi'
import { certifications } from '../data/certifications'

const categories = ['All','AI / NLP','AI Foundations','Data Analytics','Data Science','Programming','Database','Professional','Research','AI / ML','Data Engineering','Engineering']

function CertCard({ cert, onClick, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="glass rounded-2xl overflow-hidden cursor-pointer group relative"
    >
      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${cert.color}50, 0 0 30px ${cert.color}20` }}
      />

      {/* Certificate Image */}
      <div className="h-40 relative overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span
            className="text-xs px-2 py-0.5 rounded-full font-mono backdrop-blur-sm"
            style={{
              background: cert.color + '40',
              color: 'white',
              border: `1px solid ${cert.color}50`,
            }}
          >
            {cert.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
          {cert.title}
        </h3>
        <p className="text-slate-500 text-xs mb-3 font-mono">{cert.org}</p>
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map(s => (
            <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function CertModal({ cert, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={e => e.stopPropagation()}
        className="glass rounded-2xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto"
        style={{ borderColor: cert.color + '40' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white"
        >
          <FiX />
        </button>

        {/* Full certificate image preview */}
        <div className="rounded-xl overflow-hidden mb-6 border border-white/10">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full object-contain max-h-64"
          />
        </div>

        {/* Category */}
        <p className="font-mono text-xs mb-1" style={{ color: cert.color }}>
          {cert.category}
        </p>

        {/* Title */}
        <h2 className="font-display text-2xl font-bold text-white mb-1">
          {cert.title}
        </h2>

        {/* Org */}
        <p className="text-slate-400 text-sm mb-5 font-mono">{cert.org}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {cert.skills.map(s => (
            <span
              key={s}
              className="text-sm px-3 py-1 rounded-full"
              style={{
                background: cert.color + '15',
                color: cert.color,
                border: `1px solid ${cert.color}30`,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All'
      ? certifications
      : certifications.filter(c => c.category === filter)

  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-pink-400 text-sm mb-3">05. certifications</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Earned achievements
          </h2>
          <p className="text-slate-500 mb-10">
            {certifications.length} certifications across AI, Data Science, Development & more.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all ${
                filter === c
                  ? 'bg-purple-600 text-white'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((cert, i) => (
            <CertCard
              key={cert.title}
              cert={cert}
              index={i}
              inView={inView}
              onClick={() => setSelected(cert)}
            />
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <CertModal cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
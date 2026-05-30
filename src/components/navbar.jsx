import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const links = ['Home','About','Skills','Projects','Experience','Education','Certifications','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <span className="font-display text-xl gradient-text font-bold">Ananya.</span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <Link
                to={l.toLowerCase()} smooth spy offset={-80}
                activeClass="text-purple-400"
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
              >{l}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button className="md:hidden text-slate-300" onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            {[0,1,2].map(i => (
              <span key={i} className="block w-6 h-0.5 bg-current transition-all" />
            ))}
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mx-4 mt-2 rounded-xl overflow-hidden"
          >
            {links.map(l => (
              <Link key={l} to={l.toLowerCase()} smooth offset={-80}
                className="block px-6 py-3 text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer"
                onClick={() => setOpen(false)}
              >{l}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
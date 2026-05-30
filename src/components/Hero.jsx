import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll'
import myPhoto from '../assets/photo.jpg'

const roles = ['Full Stack Developer', 'Blockchain Enthusiast', 'AI Explorer', 'Problem Solver']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIdx]
    const timer = setTimeout(() => {
      if (typing) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1))
        } else {
          setTimeout(() => setTyping(false), 1800)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1))
        } else {
          setRoleIdx((roleIdx + 1) % roles.length)
          setTyping(true)
        }
      }
    }, typing ? 80 : 40)
    return () => clearTimeout(timer)
  }, [displayed, typing, roleIdx])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6">

      {/* Decorative background rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full border border-purple-500/10 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-pink-500/10" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-500/10" />
      </div>

      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-12 z-10">

        {/* LEFT — Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          {/* Available badge */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 mb-6"
          >
            ✦ Available for opportunities
          </motion.span>

          {/* Name */}
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            <span className="text-white">Ananya</span>
            <br />
            <span className="gradient-text">Singh</span>
          </h1>

          {/* Typing animation */}
          <div className="h-10 flex items-center justify-center md:justify-start mb-6">
            <span className="font-mono text-lg md:text-xl text-slate-400">
              {displayed}
              <span className="animate-pulse text-purple-400">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-lg max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
            Crafting digital experiences at the intersection of
            <span className="text-purple-400"> code</span>,
            <span className="text-pink-400"> design</span>, and
            <span className="text-cyan-400"> innovation</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
            <Link to="projects" smooth duration={600} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium glow-purple hover:glow-pink transition-all"
              >
                View Projects
              </motion.button>
            </Link>

            <a href="/resume.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full glass border border-purple-500/30 text-white font-medium hover:border-purple-400/60 transition-all"
              >
                Download Resume
              </motion.button>
            </a>

            <Link to="contact" smooth duration={600} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-cyan-400/30 text-cyan-400 font-medium hover:bg-cyan-400/10 transition-all"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 justify-center md:justify-start">
            {[
              { icon: <FiGithub size={20} />, href: 'https://github.com/ananya-74', label: 'GitHub' },
              { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/ananya-singh-b4a047312', label: 'LinkedIn' },
              { icon: <FiMail size={20} />, href: 'mailto:ananya.an54@gmail.com', label: 'Email' },
            ].map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.15 }}
                className="w-11 h-11 glass rounded-full flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-400/40 transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">

            {/* Outer glow pulse */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl opacity-20 animate-pulse" />

            {/* Spinning gradient border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #A855F7, #EC4899, #22D3EE, #A855F7)',
                padding: '3px',
                borderRadius: '9999px',
              }}
            >
              <div className="w-full h-full rounded-full bg-[#0B0F1A]" />
            </motion.div>

            {/* Static border ring */}
            <div className="absolute inset-1 rounded-full border border-purple-500/30" />

            {/* Actual photo */}
            <img
              src={myPhoto}
              alt="Ananya Singh"
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full z-10"
            />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-3 -right-3 z-20 glass px-3 py-1.5 rounded-full border border-purple-500/30"
            >
              <span className="text-xs font-mono text-purple-400">✦ CS Student</span>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-3 -left-3 z-20 glass px-3 py-1.5 rounded-full border border-cyan-500/30"
            >
              <span className="text-xs font-mono text-cyan-400">⚡ Full Stack</span>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-purple-500/40 to-transparent" />
      </motion.div>

    </section>
  )
}
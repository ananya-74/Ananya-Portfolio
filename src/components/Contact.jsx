import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',    // ← Replace
        'YOUR_TEMPLATE_ID',   // ← Replace
        formRef.current,
        'YOUR_PUBLIC_KEY'     // ← Replace
      )
      setStatus('✓ Message sent! I\'ll get back to you soon.')
      formRef.current.reset()
    } catch {
      setStatus('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <p className="font-mono text-cyan-400 text-sm mb-3">06. contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Let's connect</h2>
          <p className="text-slate-400 mb-12 max-w-lg">Open to internships, collaborations, and interesting conversations. Drop me a message!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Socials */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="space-y-4">
              {[
                { icon: <FiGithub size={20}/>, label: 'GitHub', value: 'ananya-74', href: 'https://github.com/ananya-74', color: '#A855F7' },
                { icon: <FiLinkedin size={20}/>, label: 'LinkedIn', value: 'ananya-singh-b4a047312', href: 'https://www.linkedin.com/in/ananya-singh-b4a047312', color: '#EC4899' },
                { icon: <FiMail size={20}/>, label: 'Email', value: 'ananya.an54@gmail.com', href: 'mailto:ananya.an54@gmail.com', color: '#22D3EE' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 glass p-4 rounded-xl hover:border-purple-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                    style={{ background: s.color + '20', color: s.color }}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{s.label}</p>
                    <p className="text-slate-500 text-xs">{s.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form ref={formRef} onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
            className="glass p-8 rounded-2xl space-y-5"
          >
            {[
              { label: 'Name', name: 'from_name', type: 'text' },
              { label: 'Email', name: 'from_email', type: 'email' },
            ].map(f => (
              <div key={f.name}>
                <label className="block text-slate-400 text-sm mb-2">{f.label}</label>
                <input name={f.name} type={f.type} required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all"
                  placeholder={`Your ${f.label.toLowerCase()}...`}
                />
              </div>
            ))}
            <div>
              <label className="block text-slate-400 text-sm mb-2">Message</label>
              <textarea name="message" rows={4} required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                placeholder="Tell me about your project or just say hi..."
              />
            </div>

            {status && (
              <p className={`text-sm font-mono ${status.startsWith('✓') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>
            )}

            <motion.button type="submit" disabled={loading}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center justify-center gap-2 glow-purple disabled:opacity-50"
            >
              {loading ? 'Sending...' : <><FiSend /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
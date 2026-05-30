import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-xl gradient-text font-bold">Ananya.</span>

        <div className="flex gap-5">
          {[
            { icon: <FiGithub />, href: 'https://github.com/ananya-74' },
            { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/ananya-singh-b4a047312' },
            { icon: <FiMail />, href: 'mailto:ananya.an54@gmail.com' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer"
              className="text-slate-500 hover:text-purple-400 transition-colors text-lg"
            >{s.icon}</a>
          ))}
        </div>

        <div className="text-center text-slate-600 text-sm">
          <p>© 2025 Ananya Singh</p>
          <p className="mt-1">Built with <span className="text-purple-400">React</span> & <span className="text-cyan-400">Tailwind</span></p>
        </div>
      </div>
    </footer>
  )
}
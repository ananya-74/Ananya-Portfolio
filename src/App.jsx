import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'



export default function App() {
  return (
    <div className="relative bg-[#0B0F1A] min-h-screen overflow-x-hidden">
      {/* Global floating blobs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/2 right-10 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-20 left-1/3 w-64 h-64 bg-cyan-400/8 rounded-full blur-3xl pointer-events-none z-0" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
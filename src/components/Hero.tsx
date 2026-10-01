import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}><span className="eyebrow-line" /> A place to find your own way</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .25 }}>The world is<br />wide <em>open.</em></motion.h1>
      <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>Welcome to Tulas International School (TIS), one of India’s top boarding and day schools in Dehradun. Our CBSE curriculum supports academic excellence, holistic development and future global leaders.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}><a className="button button-dark" href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">Apply to Tulas <ArrowRight size={16} /></a><a className="text-link" href="#about"><span className="play-icon"><ArrowDown size={14} /></span> Get to know us</a></motion.div>
      <motion.div className="hero-note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }}><span>CBSE · BOARDING & DAY SCHOOL</span><span>ESTABLISHED 2012</span></motion.div>
    </div>
    <motion.div className="hero-visual" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} transition={{ duration: 1.15, delay: .12, ease: [.77, 0, .18, 1] }}>
      <img src="https://tis.edu.in/_next/static/media/Image%201.0a814859.webp" alt="Student life at Tulas International School" fetchPriority="high" />
      <div className="image-caption"><span>01 / A DAY FULL OF POSSIBILITY</span><span>THE TULAS EXPERIENCE <ArrowUpRight size={13} /></span></div>
      <div className="hero-stamp"><span>LEARN</span><span>LIVE</span><span>BECOME</span><i aria-hidden="true">✳</i></div>
    </motion.div>
    <div className="hero-side-label">A SCHOOL THAT OPENS DOORS</div>
  </section>
}
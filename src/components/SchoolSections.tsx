import { ArrowRight, ArrowUpRight, BookOpen, Compass, Globe2, HeartHandshake, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const learningPillars = [
  { icon: BookOpen, title: 'Academic excellence', description: 'A CBSE curriculum built around strong learning and a spirit of inquiry.' },
  { icon: HeartHandshake, title: 'Holistic development', description: 'A nurturing environment for students to grow academically, socially and culturally.' },
  { icon: Globe2, title: 'Global outlook', description: 'Preparing students to become confident, curious global leaders.' },
]

const reasons = [
  { icon: BookOpen, title: 'A CBSE education', description: 'A curriculum focused on academic excellence and lifelong learning.' },
  { icon: HeartHandshake, title: 'Room to grow', description: 'Holistic development across academic, social and cultural life.' },
  { icon: Compass, title: 'Boarding and day', description: 'A school community welcoming both boarding and day students.' },
  { icon: Sparkles, title: 'A nurturing environment', description: 'Modern facilities and a supportive setting for students to thrive.' },
]

export function AboutSection() {
  return <section className="intro section-pad" id="about">
    <Reveal className="intro-label"><span className="section-index">01</span><span>MORE THAN A SCHOOL</span></Reveal>
    <Reveal className="intro-heading"><h2>A little room<br />to <em>become.</em></h2></Reveal>
    <Reveal className="intro-body"><p>Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust. TIS is one of India’s top boarding and day schools in Dehradun.</p><a className="circle-link" href="#academics" aria-label="Discover learning at Tulas"><ArrowRight size={19} /></a></Reveal>
    <Reveal className="intro-image"><img src="https://tis.edu.in/_next/static/media/polo.973ddbae.webp" alt="Students taking part in activities at Tulas" loading="lazy" /><span className="vertical-caption">A COMMUNITY THAT GROWS TOGETHER</span></Reveal>
    <Reveal className="intro-footnote"><span>EST. 2012</span><span>ROOTED IN DEHRADUN. READY FOR WHAT’S NEXT.</span></Reveal>
    <div className="facts-strip" aria-label="Tulas International School facts"><span><strong>2012</strong><small>ESTABLISHED</small></span><span><strong>CBSE</strong><small>CURRICULUM</small></span><span><strong>Boarding & day</strong><small>SCHOOL OPTIONS</small></span></div>
  </section>
}

export function AcademicsSection() {
  return <section className="learning section-pad" id="academics">
    <Reveal className="section-heading"><div><span className="section-index">02 / ACADEMICS</span><h2>Curiosity has<br />a <em>curriculum.</em></h2></div><p>Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.</p></Reveal>
    <div className="academic-grid">{learningPillars.map(({ icon: Icon, title, description }, index) => <Reveal className="academic-card" key={title}><span className="academic-index">0{index + 1}</span><Icon size={23} strokeWidth={1.5} /><h3>{title}</h3><p>{description}</p></Reveal>)}</div>
    <Reveal className="academic-note"><span>LEARNING AT TULAS</span><p>Explore the CBSE curriculum and academic pathways with our admissions team.</p><a href="#contact">Ask us about academics <ArrowUpRight size={14} /></a></Reveal>
  </section>
}

export function WhyTisSection() {
  return <section className="why-section section-pad" id="why-tis">
    <Reveal className="section-heading"><div><span className="section-index">04 / WHY TULAS</span><h2>Made for the<br /><em>whole journey.</em></h2></div><p>World-class education, modern facilities, and a nurturing environment for students to thrive.</p></Reveal>
    <div className="why-grid">{reasons.map(({ icon: Icon, title, description }, index) => <Reveal className="why-item" key={title}><span className="why-number">0{index + 1}</span><Icon size={22} strokeWidth={1.5} /><h3>{title}</h3><p>{description}</p></Reveal>)}</div>
  </section>
}

export function AdmissionsCta() {
  return <section className="admissions-band section-pad" id="admissions"><Reveal><span className="section-index">YOUR NEXT CHAPTER</span><h2>Begin your journey<br />at <em>Tulas.</em></h2><p>Join a community that encourages leadership, innovation and lifelong learning.</p><div className="admissions-actions"><a className="button button-light" href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">Apply now <ArrowUpRight size={15} /></a><a className="button button-outline" href="#contact">Enquire with Tulas <ArrowRight size={15} /></a></div></Reveal><span className="admissions-asterisk" aria-hidden="true">✳</span></section>
}
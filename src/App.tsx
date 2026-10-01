import { motion, useScroll, useSpring } from 'framer-motion'
import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import { AboutSection, AcademicsSection, AdmissionsCta, WhyTisSection } from './components/SchoolSections'
import { ActivitiesSection, CampusSection } from './components/CampusActivities'
import ContactSection from './components/ContactSection'
import SiteFooter from './components/SiteFooter'

function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: .001 })

  return <>
    <motion.div className="reading-progress" style={{ scaleX: progress }} aria-hidden="true" />
    <SiteHeader />
    <main>
      <Hero />
      <AboutSection />
      <AcademicsSection />
      <CampusSection />
      <WhyTisSection />
      <ActivitiesSection />
      <AdmissionsCta />
      <ContactSection />
    </main>
    <SiteFooter />
  </>
}

export default App
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Campus & activities', href: '#campus' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
]

export function Brand() {
  return <a className="brand" href="#home" aria-label="Tulas International School home"><img className="brand-logo" src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png" alt="Tulas International School" /></a>
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return <>
    <div className="topline"><span>DEHRADUN, INDIA <i>/</i> EST. 2012</span><a href="tel:+919837983791">ADMISSIONS HELPLINE <b>+91 98379 83791</b><ArrowUpRight size={12} /></a></div>
    <header className="site-header">
      <Brand />
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} id="primary-navigation" aria-label="Main navigation">
        {navItems.map(item => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        <a className="nav-cta" href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">Apply now <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  </>
}
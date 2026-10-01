import { ArrowUpRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Brand } from './SiteHeader'

const footerLinks = [
  { label: 'About TIS', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Campus & activities', href: '#campus' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/?hl=en', icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in', icon: Linkedin },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw', icon: Youtube },
]

export default function SiteFooter() {
  return <footer className="footer site-footer">
    <div className="footer-main"><div className="footer-brand"><Brand /><p>A CBSE boarding and day school in Dehradun, India.</p></div><div className="footer-links"><h2>EXPLORE</h2>{footerLinks.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}</div><div className="footer-links"><h2>CONTACT</h2><a href="tel:+919837983791">+91 98379 83791</a><a href="mailto:info@tis.edu.in">info@tis.edu.in</a><a href="https://maps.app.goo.gl/maBF8syXueQkw31E6" target="_blank" rel="noreferrer">Dehradun, Uttarakhand <ArrowUpRight size={13} /></a><a href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">Admissions portal <ArrowUpRight size={13} /></a></div><div className="footer-social"><h2>FOLLOW TULAS</h2><div>{socials.map(({ label, href, icon: Icon }) => <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer"><Icon size={17} /></a>)}</div></div></div>
    <div className="footer-bottom"><span>© 2026 TULAS INTERNATIONAL SCHOOL</span><a href="#home">BACK TO THE TOP <ArrowUpRight size={13} /></a></div>
  </footer>
}
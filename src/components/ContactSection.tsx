import { useState, type FormEvent } from 'react'
import { ArrowRight, ArrowUpRight, Check, MapPin, MoveUpRight } from 'lucide-react'
import Reveal from './Reveal'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return <section className="contact" id="contact">
    <div className="contact-info"><Reveal><span className="section-index">LET'S TALK</span><h2>Let's do it<br /><em>with Tulas.</em></h2><p>Every good journey starts with a conversation. Our admissions team would love to hear from you.</p></Reveal><Reveal className="contact-details"><a href="tel:+919837983791"><span>ADMISSIONS HELPLINE</span>+91 98379 83791 <ArrowUpRight size={15} /></a><a href="mailto:info@tis.edu.in"><span>WRITE TO US</span>info@tis.edu.in <ArrowUpRight size={15} /></a><a className="map-link" href="https://maps.app.goo.gl/maBF8syXueQkw31E6" target="_blank" rel="noreferrer"><MapPin size={16} /><span>DHOOLKOT, P.O. SELAQUI<br />CHAKRATA ROAD, DEHRADUN 248011</span><ArrowUpRight size={14} /></a></Reveal></div>
    <div className="form-wrap"><Reveal><div className="form-heading"><span>ADMISSIONS ENQUIRY</span><span>LET'S TALK <MoveUpRight size={15} /></span></div>{submitted ? <div className="success-message" role="status"><span className="success-icon"><Check /></span><h3>Thank you.</h3><p>Your interest means a lot. Our admissions team will be in touch.</p><button type="button" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowRight size={14} /></button></div> : <form onSubmit={handleSubmit}><label htmlFor="full-name">Your name</label><input id="full-name" name="name" type="text" placeholder="e.g. Ananya Sharma" autoComplete="name" required /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" autoComplete="tel" required /><label htmlFor="message">How can we help?</label><textarea id="message" name="message" placeholder="Tell us a little about what you're looking for" rows={3} required /><button className="button button-dark form-submit" type="submit">Send an enquiry <ArrowRight size={16} /></button><p className="form-disclaimer">By submitting, you agree to be contacted by the Tulas admissions team.</p></form>}</Reveal></div>
  </section>
}
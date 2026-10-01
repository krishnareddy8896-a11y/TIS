import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

const campusActivities = [
  { title: 'Polo', image: 'polo.973ddbae.webp', alt: 'Students taking part in polo at Tulas' },
  { title: 'Karate', image: 'karate.4020fba5.webp', alt: 'Students practising karate at Tulas' },
  { title: 'Swimming', image: 'swimming.6fc81e65.webp', alt: 'Students taking part in swimming at Tulas' },
  { title: 'Dance', image: 'dance.88843edb.webp', alt: 'Students taking part in dance at Tulas' },
]

export function CampusSection() {
  return <section className="campus-section section-pad" id="campus">
    <Reveal className="section-heading"><div><span className="section-index">03 / CAMPUS & FACILITIES</span><h2>Space to find<br />your <em>thing.</em></h2></div><p>Tulas brings together modern facilities and a nurturing environment, with opportunities to grow in and beyond the classroom.</p></Reveal>
    <Reveal className="campus-feature"><div className="campus-feature-image"><img src="https://tis.edu.in/_next/static/media/Image%201.0a814859.webp" alt="A view of student life at Tulas International School" loading="lazy" /></div><div className="campus-feature-copy"><span className="section-index">LEARN · LIVE · GROW</span><h3>Room for every kind of curiosity.</h3><p>From academic life to activities across campus, students are encouraged to explore what they enjoy and where they can go.</p><a href="#activities">See life at Tulas <ArrowUpRight size={14} /></a></div></Reveal>
  </section>
}

export function ActivitiesSection() {
  return <section className="activities-section section-pad" id="activities">
    <Reveal className="section-heading"><div><span className="section-index">05 / LIFE AT TULAS</span><h2>More than<br />the <em>classroom.</em></h2></div><p>Explore activities featured by Tulas International School, from sports to creative pursuits.</p></Reveal>
    <div className="activity-grid">{campusActivities.map((activity, index) => <Reveal className="activity-card" key={activity.title}><div className="activity-image"><img src={`https://tis.edu.in/_next/static/media/${activity.image}`} alt={activity.alt} loading="lazy" /><span>0{index + 1}</span></div><div className="activity-caption"><h3>{activity.title}</h3><ArrowUpRight size={16} aria-hidden="true" /></div></Reveal>)}</div>
  </section>
}
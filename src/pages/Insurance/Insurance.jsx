import { useEffect, useRef, useState } from 'react'
import './Insurance.css'

const partners = [
  { name: 'Care Health Insurance', logo: '/images/Insurance/care.jpg' },
  { name: 'Niva Bupa Health Insurance', logo: '/images/Insurance/niva bupa.jpg' },
  { name: 'Star Health Insurance', logo: '/images/Insurance/Star.webp' },
  { name: 'Aditya Birla Health Insurance', logo: '/images/Insurance/adithya.jpg' },
  { name: 'HDFC ERGO', logo: '/images/Insurance/hdfc.png' },
  { name: 'ICICI Lombard', logo: '/images/Insurance/icici.jpg' },
  { name: 'IndusInd General Insurance', logo: '/images/Insurance/indusind.png' },
  { name: 'Bajaj Allianz', logo: '/images/Insurance/bajaj.png' },
  { name: 'Manipal Cigna Health Insurance', logo: '/images/Insurance/manipal.png' },
]

function initials(name) {
  return name
    .split(' ')
    .filter((w) => w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

function PartnerLogo({ name, logo }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="partner-logo-fallback" aria-label={name}>
        {initials(name)}
      </div>
    )
  }
  return (
    <img
      className="partner-logo"
      src={logo}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

function PartnerCard({ p, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`partner-card ${visible ? 'reveal' : ''}`}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
    >
      <PartnerLogo name={p.name} logo={p.logo} />
    </div>
  )
}

function Insurance() {
  const marqueeItems = [...partners, ...partners]

  return (
    <main style={{ overflowX: 'hidden' }}>

      {/* Hero */}
      <div className="insurance-hero">
        <div className="container">
          {/* <span className="insurance-pill">Insurance Partners</span> */}
          <h1>
            Trusted names, <span>one network</span>
          </h1>
          {/* <p>
            We work with India's leading insurers so you always have real cover behind you.
          </p> */}
        </div>
      </div>

      {/* Scrolling marquee strip */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {marqueeItems.map((p, i) => (
            <div className="marquee-logo" key={`${p.name}-${i}`}>
              <PartnerLogo name={p.name} logo={p.logo} />
            </div>
          ))}
        </div>
      </div>

      {/* Logo grid */}
      <div className="partners-section container">
        <div className="partners-grid">
          {partners.map((p, i) => (
            <PartnerCard p={p} index={i} key={p.name} />
          ))}
        </div>
      </div>

    </main>
  )
}

export default Insurance
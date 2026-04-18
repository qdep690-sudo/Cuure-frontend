import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './nursing.module.css'

const services = [
  {
    id: 'doctors-at-home',
    title: 'Doctors at Home',
    description: 'Experienced doctors visit your home for consultations, diagnosis, and treatment planning.',
    image: '/images/service/elder1.avif',
  },
  {
    id: 'nursing-care-at-home',
    title: 'Nursing Care at Home',
    description: 'Certified nurses provide round-the-clock medical care and monitoring at your doorstep.',
    image: '/images/service/nursing1.jpg',
  },
  {
    id: 'physiotherapy-at-home',
    title: 'Physiotherapy',
    description: 'Expert physiotherapists help with recovery, mobility, and pain management at home.',
    image: '/images/service/physio5.jpg',
  },
  {
    id: 'palliative-care',
    title: 'Palliative Care',
    description: 'Compassionate care focused on comfort and quality of life for serious illness patients.',
    image: '/images/service/nursing4.jpg',
  },
  {
    id: 'elderly-care',
    title: 'Elderly Care',
    description: 'Dedicated support for seniors including daily assistance, medication and companionship.',
    image: '/images/service/elder5.jpg',
  },
  {
    id: 'post-operative-care',
    title: 'Post-Operative Care',
    description: 'Professional nursing support after surgery to ensure safe and speedy recovery at home.',
    image: '/images/service/elder4.jpg',
  },
  {
    id: 'attenders-helpers',
    title: 'Attenders / Helpers',
    description: 'Trained attenders assist patients with daily activities, hygiene, and mobility needs.',
    image: '/images/service/elder2.avif',
  },
]

function ServiceCard({ service, highlighted }) {
  const navigate = useNavigate()
  return (
    <div
      className={`${styles.card} ${highlighted ? styles.cardHighlight : ''}`}
      id={service.id}
    >
      <div className={styles.cardImg}>
        <img src={service.image} alt={service.title} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <div className={styles.cardDivider} />
        <p className={styles.cardDesc}>{service.description}</p>
        <button
          className={styles.cardBtn}
          onClick={() => navigate('/appointment')}
        >
          Book Appointment →
        </button>
      </div>
    </div>
  )
}

export default function Nursing() {
  const [highlightedId, setHighlightedId] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) {
      setHighlightedId(hash)
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
      setTimeout(() => setHighlightedId(null), 1500)
    }
  }, [location])

  return (
    <div className={styles.pageWrapper}>

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroPill}>NURSING CARE</div>
          <h1 className={styles.heroTitle}>
            Compassionate Care By <span className={styles.heroFade}>Expert Nurses</span>
          </h1>
          <p className={styles.heroDesc}>
            Our certified nurses provide round-the-clock professional care at your home
            {/* home or clinic — from post-surgery recovery to chronic illness management. */}
          </p>
        </div>
      </div>

      <div className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <div className={styles.servicesGrid}>
            {services.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                highlighted={highlightedId === service.id}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
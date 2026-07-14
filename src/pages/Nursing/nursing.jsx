import { useState, useEffect, useRef } from 'react'
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

// ── HERO CAROUSEL DATA ──
// Swap these image paths for dedicated hero photography if/when you have it.
// Falls back to existing service images so nothing breaks out of the box.
const heroSlides = [
  {
    id: 'home-nurse',
    tag: 'Home Nursing',
    image: '/images/service/nursing1.jpg',
    title: 'Skilled Home Nurses',
    description:
      'Certified nurses for wound care, injections, IV therapy and daily monitoring — right at your doorstep.',
  },
  {
    id: 'caretaker-attender',
    tag: 'Caretaker & Attender',
    image: '/images/service/elder2.avif',
    title: 'Trusted Caretakers & Attenders',
    description:
      'Reliable attenders for daily living support, mobility assistance and personal care, with warmth and patience.',
  },
  {
    id: 'male-nurse',
    tag: 'Male Nurse',
    image: '/images/service/nursing4.jpg',
    title: 'Male Nurses for Sensitive Care',
    description:
      'Experienced male nursing staff for patient handling, post-surgical support and specialised care needs.',
  },
  {
    id: 'elderly-home-care',
    tag: 'Elderly Home Care',
    image: '/images/service/elder5.jpg',
    title: 'Complete Elderly Home Care',
    description:
      'Compassionate, round-the-clock support for seniors — medication, mobility, companionship and safety.',
  },
]

const priceBadges = [
  { label: '₹499', unit: '/ 12 Hour' },
  { label: '₹799', unit: '/ 24 Hours' },
]

const AUTOPLAY_MS = 5500

function HeroCarousel() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.heroSection}>

      <div className={styles.heroContainer}>

        {/* LEFT SIDE */}

        <div className={styles.heroLeft}>

          <span className={styles.heroBadge}>
            Trusted Nursing Services
          </span>

          <h1 className={styles.heroTitle}>
            Professional
            <span> Home Nursing </span>
            & Elderly Care
            <br />
          </h1>

          <p className={styles.heroDescription}>
            Certified nurses, experienced caretakers and compassionate
            caregivers delivering quality healthcare in the comfort of your
            home.
          </p>

          <div className={styles.trustGrid}>

            <div>✓ Certified Nurses</div>

            <div>✓ Verified Caretakers</div>

            <div>✓ 24×7 Home Care</div>

            <div>✓ Trusted by Families</div>

          </div>

          <div className={styles.priceRow}>

            <div className={styles.priceCard}>

              <small>Starting From</small>

              <h2>₹499</h2>

              <span>12 Hours</span>

            </div>

            <div className={`${styles.priceCard} ${styles.popular}`}>

              <label>Most Popular</label>

              <small>Starting From</small>

              <h2>₹799</h2>

              <span>24 Hours</span>

            </div>

          </div>

          <div className={styles.heroButtons}>
  <button
    className={styles.primaryBtn}
    onClick={() => navigate('/appointment')}
  >
    Book Appointment
  </button>

  <a
    href="tel:+917483068353"
    className={styles.secondaryBtn}
  >
    📞 Call Now
  </a>
</div>

        </div>

        {/* RIGHT SIDE */}

        <div className={styles.heroRight}>

          <div className={styles.carouselCard}>

            <img
              src={heroSlides[active].image}
              alt={heroSlides[active].title}
            />

            <div className={styles.carouselOverlay}>

              {/* <span>{heroSlides[active].tag}</span> */}

              <h3>{heroSlides[active].title}</h3>

            </div>

          </div>

          <div className={styles.carouselDots}>

            {heroSlides.map((_, i) => (

              <button
                key={i}
                className={
                  active === i
                    ? styles.activeDot
                    : styles.dot
                }
                onClick={() => setActive(i)}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

function ServiceCard({ service, highlighted }) {
  const navigate = useNavigate()
  return (
    <div
      className={`${styles.card} ${highlighted ? styles.cardHighlight : ''}`}
      id={service.id}
    >
      <div className={styles.cardImg}>
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <div className={styles.cardDivider} />
        <p className={styles.cardDesc}>{service.description}</p>
        <button
          className={styles.cardBtn}
          onClick={() => navigate('/appointment')}
        >
          Book Appointment
          <span className={styles.cardBtnArrow}>→</span>
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
      <HeroCarousel />

      <div className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <div className={styles.servicesHeader}>
            {/* <span className={styles.servicesEyebrow}>What We Offer</span> */}
            <h2 className={styles.servicesHeading}>
             Our Home Care Services
            </h2>
            <p className={styles.servicesSubtext}>
              Professional nursing and caregiving support, tailored to your
              needs and delivered with care.
            </p>
          </div>

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
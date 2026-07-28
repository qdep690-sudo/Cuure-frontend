import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { MdCall } from "react-icons/md";

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Insurance', to: '/insurance' },
  { label: 'Blog', to: '/blog' },
  { label: 'Plans', to: '/plans' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const handleNursingLink = (id) => {
    navigate(`/nursing#${id}`)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.nav}`}>
       <Link to="/" className={styles.logo}>
  <img
    src="/images/logo/logo.svg"
    alt="cuure.health"
    className={styles.logoImg}
  />
</Link>

        <nav className={`${styles.links} ${mobileOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.link} ${location.pathname === link.to ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}

          {/* NURSING DROPDOWN */}
          <div className={styles.dropdown}>
            <Link
              to="/nursing"
              className={`${styles.link} ${location.pathname === '/nursing' ? styles.active : ''}`}
            >
              Nursing ▾
            </Link>
            <div className={styles.dropdownMenu}>
              <button className={styles.dropdownItem} onClick={() => handleNursingLink('doctors-at-home')}>Doctors at Home</button>
              <button className={styles.dropdownItem} onClick={() => handleNursingLink('nursing-care-at-home')}>Nursing Care At Home</button>
              <button className={styles.dropdownItem} onClick={() => handleNursingLink('elderly-care')}>Elderly Care</button>
              <button className={styles.dropdownItem} onClick={() => handleNursingLink('palliative-care')}>Palliative Care</button>
              <button className={styles.dropdownItem} onClick={() => handleNursingLink('post-operative-care')}>Post-Operative Care</button>
              <button className={styles.dropdownItem} onClick={() => handleNursingLink('physiotherapy-at-home')}>Physiotherapy</button>
              <button className={styles.dropdownItem} onClick={() => handleNursingLink('attenders-helpers')}>Attenders</button>
            </div>
          </div>
        </nav>

        <div className={styles.cta}>
           <a href="tel:+917483068353" className={styles.btnEmergency}>
    <MdCall />
    <span>Emergency</span>
  </a>
          <Link to="/appointment" className={styles.btnBook}>
            Book Appointment
          </Link>
          <button
            className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
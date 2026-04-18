import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const links = {
  Company: ['About Us', 'Our Doctors', 'Why Choose Us', 'Plans'],
  Services: ['Doctor Consultation', 'Physiotherapy', 'Elderly Care', 'Pharmacy', 'Nursing', 'Diagnostics'],
  Support: ['Help Center', 'Book Appointment', 'Privacy Policy', 'Terms of Use'],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
      <Link
  to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <img
    src="/images/logo/image.png"
    alt="cuure.health"
    className={styles.logoImg}
  />
</Link>
            <p>
  Revolutionizing healthcare through innovative technology for better lives and improved care.
</p>

<div className={styles.socials}>
  <a
    href="https://wa.me/917483068353"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.social}
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://instagram.com/cuure.health"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.social}
  >
    <FaInstagram />
  </a>

  <a
    href="https://youtube.com/yourchannel"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.social}
  >
    <FaYoutube />
  </a>
</div>
</div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group} className={styles.col}>
              <h4>{group}</h4>
{items.map(item => {
  const paths = {
    "About Us": "/about",
    "Our Doctors": "/doctors",
    "Why Choose Us": "/",
    "Plans": "/plans",
    "Doctor Consultation": "/services",
    "Physiotherapy": "/services",
    "Elderly Care": "/services",
    "Pharmacy": "/services",
    "Nursing": "/services",
    "Diagnostics": "/services",
    "Help Center": "/contact",
    "Book Appointment": "/appointment",
    "Privacy Policy": "/",
    "Terms of Use": "/"
  }

  return (
   <Link
  key={item}
  to={paths[item]}
  className={styles.colLink}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  {item}
</Link>
  )
})}
            </div>
          ))}

          <div className={styles.col}>
            <h4>Stay Updated</h4>
            <p className={styles.newsDesc}>Get health tips and updates in your inbox.</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Your email" />
              <button>→</button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 cuure.health. All rights reserved.</p>
          <p>Made with ❤️ for better healthcare</p>
        </div>
      </div>
    </footer>
  )
}

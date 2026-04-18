import { useState } from 'react'
import styles from './Contact.module.css'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const contactInfo = [
    {
      icon: <MdLocationOn size={24} color="#1e3a8a" />,
      title: 'Visit Us',
      lines: [
        { text: '1054, Sarvajanika Hostel Rd, Vidyaranyapura', href: 'https://maps.google.com/?q=1054+Sarvajanika+Hostel+Rd+Vidyaranyapura+Mysuru' },
        { text: 'Mysuru, Karnataka 570008', href: null },
      ]
    },
    {
      icon: <MdPhone size={24} color="#1e3a8a" />,
      title: 'Call Us',
      lines: [
        { text: '+91 74830 68353', href: 'tel:+917483068353' },
        { text: '82131 56014', href: 'tel:8213156014' },
        { text: 'Available 24/7 for emergency calls', href: null },
      ]
    },
    {
      icon: <MdEmail size={24} color="#1e3a8a" />,
      title: 'Email Us',
      lines: [
        { text: 'enquire@cuure.health', href: 'mailto:enquire@cuure.health' },
        { text: 'Response within 2 hours', href: null },
      ]
    },
    {
      icon: <MdAccessTime size={24} color="#1e3a8a" />,
      title: 'Working Hours',
      lines: [
        { text: 'Weekdays: 24/7', href: null },
        { text: 'Weekends: 24/7', href: null },
      ]
    },
  ]

  return (
 <main>
  <div className={styles.sectionBreak}></div>
  <section className={styles.contactHero}>
    <div className={styles.heroContainer}>
      <div className={styles.contactPill}>GET IN TOUCH</div>

      <h2 className={styles.contactTitle}>
        Contact <span>Us</span>
      </h2>

      <p className={styles.subtitle}>
        Have questions? We'd love to hear from you...
      </p>
    </div>
  </section>

      {/* FORM + CONTACT */}
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* FORM */}
          <div className={styles.formSection}>
            {sent ? (
              <div className={styles.success}>
                <div>✅</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <h2>Send a Message</h2>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Name *</label>
                    <input required placeholder="Your name" />
                  </div>

                  <div className={styles.field}>
                    <label>Email *</label>
                    <input type="email" required placeholder="you@email.com" />
                  </div>
                </div>

                <div className={styles.field}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Your phone number" />
                </div>

                <div className={styles.field}>
                  <label>Message *</label>
                  <textarea required rows={5} placeholder="Tell us more..." />
                </div>

                <button type="submit" className={styles.btnSend}>
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* CONTACT CARDS */}
          <div className={styles.contacts}>
            {contactInfo.map((c, i) => (
              <div key={i} className={styles.contactCard}>
                <div className={styles.contactIcon}>{c.icon}</div>

                <div>
                  <h4>{c.title}</h4>

                  {c.lines.map((line, j) =>
                    line.href ? (
                      <a key={j} href={line.href} className={styles.link}>
                        {line.text}
                      </a>
                    ) : (
                      <p key={j}>{line.text}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}
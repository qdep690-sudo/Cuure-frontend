import BookingForm from "../../components/Bookings/BookingForm";
import styles from './Appointment.module.css'

export default function Appointment() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.pill}>Book a Visit</div>
          <h1>Book Your <span>Appointment</span></h1>
          <p>Schedule a consultation with our expert doctors — in-person or virtually, at your convenience.</p>
        </div>
      </div>
      <div className="container" id="booking-form">
        <div className={styles.layout}>
          <div className={styles.formWrap}>
            <BookingForm />
          </div>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>⏱️</div>
              <h3>Quick Confirmation</h3>
              <p>Get your appointment confirmed within 15 minutes of booking.</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔒</div>
              <h3>Private & Secure</h3>
              <p>Your health data is encrypted and never shared without consent.</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>💰</div>
              <h3>Free First Consultation</h3>
              <p>New patients get their first consultation completely free of charge.</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🌐</div>
              <h3>Virtual or In-Person</h3>
              <p>Choose between video call consultations or visiting our clinics.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

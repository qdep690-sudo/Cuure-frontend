import { DoctorsList } from '../components/Doctors/Doctors'
import styles from './PageHero.module.css'

export default function DoctorsPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.pill}>Our Team</div>
          <h1>Meet Our <span>Expert Doctors</span></h1>
          <p>500+ board-certified specialists across 40+ specialties, committed to your health and wellbeing.</p>
        </div>
      </div>
      <DoctorsList />
    </main>
  )
}

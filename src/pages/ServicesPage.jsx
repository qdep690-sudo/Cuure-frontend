import Services from "../components/Services/Services";
import styles from "./PageHero.module.css";

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.pill}>What We Offer</div>
          <h1>Our <span>Services</span></h1>
          <p>Comprehensive medical care across 40+ specialties, powered by top-tier specialists and cutting-edge technology.</p>
        </div>
      </div>
      <Services />
    </main>
  )
}

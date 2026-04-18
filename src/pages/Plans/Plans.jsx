import styles from "./Plans.module.css";

export default function Plans() {
  return (
    <main style={{ paddingTop: "80px" }}>

      {/* HERO */}
    <div className={styles.hero}>
  <div className="container">
    <div className={styles.pill}>PRICING PLANS</div>

    <h1>
      Choose <span>Your Plan</span>
    </h1>

    <p>
      Flexible subscription plans designed to give you and your family
      the best healthcare support anytime, anywhere.
    </p>
  </div>
</div>

      {/* PLANS */}
      <section className={styles["plans-section"]}>
        <div className={styles["plans-container"]}>

          <div className={styles["plans-grid"]}>

            <div className={styles["plan-card"]}>
              <h3>Basic Plan</h3>
              <h2>₹199<span>/month</span></h2>
              <ul>
                <li>1 Doctor Consultation / Month</li>
                <li>Basic Health Monitoring</li>
                <li>Email Support</li>
              </ul>
              <button className={styles["plan-btn"]}>Choose Plan</button>
            </div>

            <div className={`${styles["plan-card"]} ${styles.featured}`}>
              <h3>Pro Plan</h3>
              <h2>₹399<span>/month</span></h2>
              <ul>
                <li>Unlimited Doctor Consultations</li>
                <li>Health Reports Tracking</li>
                <li>Priority Support</li>
                <li>Video Consultations</li>
              </ul>
              <button className={styles["plan-btn"]}>Choose Plan</button>
            </div>

            <div className={styles["plan-card"]}>
              <h3>Family Plan</h3>
              <h2>₹799<span>/month</span></h2>
              <ul>
                <li>Up to 5 Family Members</li>
                <li>Unlimited Consultations</li>
                <li>24/7 Emergency Support</li>
                <li>Health Checkup Discounts</li>
              </ul>
              <button className={styles["plan-btn"]}>Choose Plan</button>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
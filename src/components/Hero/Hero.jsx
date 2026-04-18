import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
// import doctorImg from "../images/doctor.png";
import { useState, useEffect } from "react";

const avatars = [
  "/images/testimonials/anjali.png",
  "/images/testimonials/rajan.png",
  "/images/testimonials/sunita.png",
];

/* Rotating Heading Component */
function HeroTitle() {
  const words = [
    "Healthcare",
    "Physiotherapy",
    "Consultation",
    "Elderly Care",
    "Nursing",
    "Diagnostics"
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150); // typing speed

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setFade(false); // start fade out

        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length);
          setFade(true); // fade in next word
        }, 400);
      }, 2000);

      return () => clearTimeout(pause);
    }
  }, [charIndex, wordIndex]);

  return (
    <h1 className={styles.title}>
  {/* Advanced */}

  <span className={styles.wordContainer}>
    <span className={styles.highlight}>{text}</span>
  </span>

  At Your Home!
</h1>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={`container ${styles.inner}`}>
        {/* Left content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Trusted Home Nursing Services in Mysore
          </div>

          {/* Rotating Title */}
          <HeroTitle />

          <p className={styles.sub}>
          We provide professional home nursing services in Mysore including elderly care, post-surgery care, ICU care at home, and patient support by trained nurses.
          </p>

          <div className={styles.actions}>
            <Link to="/appointment" className={styles.btnPrimary}>
              Book Consultation
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link to="/plans" className={styles.btnGhost}>
              <span className={styles.playIcon}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Explore Our Plans
            </Link>
          </div>

          {/* Social proof */}
          <div className={styles.proof}>
            <div className={styles.avatars}>
            {avatars.map((a, i) => (
  <img key={i} src={a} className={styles.avatar} />
))}
            </div>

            <p className={styles.proofText}>
              <strong>4.9/5</strong> rating from our patients
            </p>
          </div>
        </div>

        {/* Right visual */}
        <div className={styles.visual}>
          <div className={styles.imageWrap}>
            <div className={styles.imageGlow} />

            <div className={styles.imagePlaceholder}>
              <div className={styles.doctorGraphic}>
                <img src="/images/hero/doctor.webp" className={styles.doctorImg} alt="Doctor" />
              </div>
            </div>

            {/* Floating cards */}
            <div className={`${styles.floatCard} ${styles.cardLeft}`}>
              <div className={styles.cardIcon}>🩺</div>
              <div>
                <p className={styles.cardTitle}>Next Available</p>
                <p className={styles.cardValue}>Today, 3:00 PM</p>
              </div>
            </div>

            <div className={`${styles.floatCard} ${styles.cardRight}`}>
              <div className={styles.cardIcon}>✅</div>
              <div>
                <p className={styles.cardTitle}>Appointments</p>
                <p className={styles.cardValue}>24 Today</p>
              </div>
            </div>

            <div className={`${styles.floatCard} ${styles.cardBottom}`}>
              <div className={styles.cardIcon}>❤️</div>
              <div>
                <p className={styles.cardTitle}>Heart Rate</p>
                <p className={styles.cardValue}>72 bpm — Normal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Healthcare Strip */}
      <div className={styles.statsBar}>
        <div className={styles.movingStrip}>
          <div className={styles.movingText}>
            <span className={styles.dot}>•</span>
  <span className={styles.item}>
    {/* <img src="/images/hero/home.png" alt="Healthcare at home" /> */}
    Healthcare at your home
  </span>

  <span className={styles.dot}>•</span>

  <span className={styles.item}>
    {/* <img src="/images/hero/trusted.png" alt="Trusted Doctors" /> */}

    Trusted Doctors
  </span>

  <span className={styles.dot}>•</span>

  <span className={styles.item}>
    {/* <img src="/images/hero/instant.png" alt="Instant Appointments" /> */}
    Instant Appointments
  </span>

  <span className={styles.dot}>•</span>

  <span className={styles.item}>
    {/* <img src="/images/hero/quality.png" alt="Quality Care" /> */}
    Quality Care
  </span>
</div>
        </div>
      </div>
    </section>
  );
}
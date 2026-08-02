import { useEffect, useRef, useState } from "react";
import "./Insurance.css";

const partners = [
  {
    name: "Care Health Insurance",
    logo: "/images/Insurance/care.jpg",
    desc: "Comprehensive coverage including maternity and pre-existing diseases, designed for complete family protection.",
  },
  {
    name: "Niva Bupa Health Insurance",
    logo: "/images/Insurance/niva bupa.jpg",
    desc: "Customizable plans with global coverage options and an easy, paperless claims process.",
  },
  {
    name: "Star Health Insurance",
    logo: "/images/Insurance/Star.webp",
    desc: "India’s first standalone health insurance provider with a massive network of cashless hospitals.",
  },
  {
    name: "Aditya Birla Health Insurance",
    logo: "/images/Insurance/adithya.jpg",
    desc: "Rewards for healthy behavior and extensive coverage spanning hospitalization to wellness coaching.",
  },
  {
    name: "HDFC ERGO",
    logo: "/images/Insurance/hdfc.png",
    desc: "High claim settlement ratio and 24/7 customer support ensuring a hassle-free healthcare experience.",
  },
  {
    name: "ICICI Lombard",
    logo: "/images/Insurance/icici.jpg",
    desc: "Fast, tech-driven claim settlements and comprehensive plans protecting you from unpredictable medical costs.",
  },
  {
    name: "IndusInd General Insurance",
    logo: "/images/Insurance/indusind.png",
    desc: "Affordable health insurance policies that provide quick financial assistance during medical emergencies.",
  },
  {
    name: "Bajaj Allianz",
    logo: "/images/Insurance/bajaj.png",
    desc: "Flexible family floater plans and exclusive healthcare benefits tailored to fit different budgets.",
  },
  {
    name: "Manipal Cigna Health Insurance",
    logo: "/images/Insurance/manipal.png",
    desc: "Global expertise offering robust medical coverage, including wellness programs and OPD benefits.",
  },
];

function initials(name) {
  return name
    .split(" ")
    .filter((w) => w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function PartnerLogo({ name, logo }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="partner-logo-fallback" aria-label={name}>
        {initials(name)}
      </div>
    );
  }
  return (
    <img
      className="partner-logo"
      src={logo}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function PartnerCard({ p, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`partner-card ${visible ? "reveal" : ""}`}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
    >
      <div className="partner-logo-wrap">
        <PartnerLogo name={p.name} logo={p.logo} />
      </div>
      <div className="partner-content">
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
      </div>
    </div>
  );
}

function Insurance() {
  const marqueeItems = [...partners, ...partners];

  return (
    <main style={{ overflowX: "hidden" }}>
      {/* Hero */}
      <div className="insurance-hero">
        <div className="container">
          <span className="insurance-pill">Trusted names, one network</span>
          <h1>
            Trusted names, <span>one network</span>
          </h1>
        </div>
      </div>

      {/* Scrolling marquee strip */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {marqueeItems.map((p, i) => (
            <div className="marquee-logo" key={`${p.name}-${i}`}>
              <PartnerLogo name={p.name} logo={p.logo} />
            </div>
          ))}
        </div>
      </div>

      <section className="insurance-info-section container" id="why-insurance">
        <div className="info-intro">
          <p className="info-eyebrow">Why insurance matters</p>
          <h2>
            Insurance is a long-term safeguard for your health, wealth, and
            peace of mind.
          </h2>
          <p>
            The right coverage helps you handle unexpected medical expenses,
            protect your savings, and maintain stability for your family when
            life becomes unpredictable.
          </p>
        </div>

        <div className="info-grid">
          <article className="info-card">
            <h3>What it provides</h3>
            <p>
              Insurance gives you access to timely care, reduces out-of-pocket
              costs, and helps you manage emergencies with greater confidence.
            </p>
          </article>
          <article className="info-card" id="advantages">
            <h3>Why people choose it</h3>
            <p>
              Families rely on insurance to protect their savings, support loved
              ones, and plan for the future without unnecessary financial
              strain.
            </p>
          </article>
          <article className="info-card">
            <h3>Key advantages</h3>
            <p>
              From cashless hospitalization to long-term financial security,
              insurance offers practical value at every stage of life.
            </p>
          </article>
          <article className="info-card">
            <h3>Better preparedness</h3>
            <p>
              A well-chosen plan brings clarity and confidence, allowing you to
              focus on recovery and well-being instead of worrying about costs.
            </p>
          </article>
        </div>
      </section>

      {/* Coverage Types & Considerations */}
      <section className="coverage-section container">
        <div className="coverage-intro">
          <p className="coverage-eyebrow">Choose with confidence</p>
          <h2>Different coverage for different needs</h2>
          <p>
            Understanding your insurance options helps you select a plan that
            protects what matters most. Here's what to know about the main types
            of coverage available.
          </p>
        </div>

        <div className="coverage-grid">
          <div className="coverage-card">
            <div className="coverage-icon">🏥</div>
            <h3>Hospitalization Coverage</h3>
            <p>
              Covers inpatient treatment, room charges, diagnostics, and
              surgeries. This is the foundation of most health insurance plans.
            </p>
            <ul className="coverage-list">
              <li>Room & bed charges</li>
              <li>Surgery & anesthesia</li>
              <li>Medical tests & imaging</li>
            </ul>
          </div>

          <div className="coverage-card">
            <div className="coverage-icon">💊</div>
            <h3>Outpatient & OPD Benefits</h3>
            <p>
              Covers doctor consultations, minor treatments, and medications
              without requiring hospitalization.
            </p>
            <ul className="coverage-list">
              <li>Doctor visits & consultations</li>
              <li>Prescription medications</li>
              <li>Lab tests & diagnostics</li>
            </ul>
          </div>

          <div className="coverage-card">
            <div className="coverage-icon">👨‍👩‍👧‍👦</div>
            <h3>Family Floater Plans</h3>
            <p>
              A single sum insured covers all family members, making it
              cost-effective for households.
            </p>
            <ul className="coverage-list">
              <li>Spouse coverage included</li>
              <li>Children & dependents</li>
              <li>Lower premium per person</li>
            </ul>
          </div>

          <div className="coverage-card">
            <div className="coverage-icon">🌍</div>
            <h3>Wellness & Prevention</h3>
            <p>
              Modern plans emphasize preventive care, including annual check-ups
              and health coaching.
            </p>
            <ul className="coverage-list">
              <li>Annual health screenings</li>
              <li>Wellness programs</li>
              <li>Fitness & nutrition support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Questions Section */}
      <section className="faq-section container">
        <div className="faq-intro">
          <p className="faq-eyebrow">Common questions</p>
          <h2>What matters when choosing insurance</h2>
        </div>

        <div className="faq-grid">
          <div className="faq-item">
            <h4>What's the waiting period?</h4>
            <p>
              Most plans have a waiting period (30-90 days) before coverage
              starts. Emergency coverage may apply differently.
            </p>
          </div>
          <div className="faq-item">
            <h4>How does the claim process work?</h4>
            <p>
              Most insurance providers offer cashless hospitalization at network
              hospitals. The insurer settles bills directly with the hospital.
            </p>
          </div>
          <div className="faq-item">
            <h4>Are pre-existing conditions covered?</h4>
            <p>
              Yes, but typically after a waiting period. Some plans cover them
              from the start if you pay higher premiums.
            </p>
          </div>
          <div className="faq-item">
            <h4>Can I customize my plan?</h4>
            <p>
              Most providers offer flexibility to add riders for specific needs
              like maternity, dental, or critical illness coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Logo grid */}
      <div className="partners-section container">
        <div className="partners-grid">
          {partners.map((p, i) => (
            <PartnerCard p={p} index={i} key={p.name} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Insurance;

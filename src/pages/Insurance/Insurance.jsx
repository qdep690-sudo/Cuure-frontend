import { useEffect, useRef, useState } from "react";
import heroStyles from "../PageHero.module.css";
import "./Insurance.css";

const partners = [
  {
    name: "Care Health Insurance",
    logo: "/images/Insurance/care.jpg",
    desc: "Maternity and pre-existing disease coverage built for full family protection.",
  },
  {
    name: "Niva Bupa Health Insurance",
    logo: "/images/Insurance/niva bupa.jpg",
    desc: "Flexible plans with global coverage and a fully paperless claims journey.",
  },
  {
    name: "Star Health Insurance",
    logo: "/images/Insurance/Star.webp",
    desc: "India's first standalone health insurer with one of the largest cashless networks.",
  },
  {
    name: "Aditya Birla Health Insurance",
    logo: "/images/Insurance/adithya.jpg",
    desc: "Wellness rewards plus coverage from hospitalization to health coaching.",
  },
  {
    name: "HDFC ERGO",
    logo: "/images/Insurance/hdfc.png",
    desc: "High claim settlement ratio with round-the-clock support when you need it.",
  },
  {
    name: "ICICI Lombard",
    logo: "/images/Insurance/icici.jpg",
    desc: "Tech-driven settlements and plans that shield you from sudden medical costs.",
  },
  {
    name: "IndusInd General Insurance",
    logo: "/images/Insurance/indusind.png",
    desc: "Affordable policies that move quickly when emergencies strike.",
  },
  {
    name: "Bajaj Allianz",
    logo: "/images/Insurance/bajaj.png",
    desc: "Family floater plans and add-on benefits for every budget.",
  },
  {
    name: "Manipal Cigna Health Insurance",
    logo: "/images/Insurance/manipal.png",
    desc: "Global expertise with strong OPD and preventive wellness coverage.",
  },
];

const stats = [
  // { value: "9+", label: "Partner insurers" },
  // { value: "Cashless", label: "At network hospitals" },
  // { value: "Family", label: "Floater plans available" },
  // { value: "24/7", label: "Claims assistance" },
];

const pillars = [
  {
    num: "01",
    title: "Care without the commute",
    text: "Home visits, nursing, and follow-ups stay covered when your plan includes outpatient and domiciliary benefits.",
  },
  {
    num: "02",
    title: "Predictable costs",
    text: "Know what you're protected against before a bill arrives — hospitalization, diagnostics, and emergency care included.",
  },
  {
    num: "03",
    title: "One plan, whole household",
    text: "Family floaters let spouses, children, and dependents share a single sum insured at a lower per-person cost.",
  },
  {
    num: "04",
    title: "Faster recovery, less stress",
    text: "Cashless hospitalization and guided claims mean you focus on healing, not paperwork.",
  },
];

const coverageTypes = [
  {
    tag: "Inpatient",
    title: "Hospitalization",
    text: "The core of every health plan — room charges, surgery, ICU, and post-operative care.",
    items: ["Room & ICU charges", "Surgery & anesthesia", "Diagnostics & imaging"],
  },
  {
    tag: "Outpatient",
    title: "OPD & day care",
    text: "Consultations, minor procedures, and prescriptions without an overnight stay.",
    items: ["Doctor consultations", "Prescription medicines", "Lab tests & scans"],
  },
  {
    tag: "Household",
    title: "Family floater",
    text: "One shared limit across your family — efficient for parents managing multiple dependents.",
    items: ["Spouse & children", "Shared sum insured", "Lower premium per head"],
  },
  {
    tag: "Prevention",
    title: "Wellness & screening",
    text: "Modern insurers reward healthy habits with annual check-ups and coaching programs.",
    items: ["Health screenings", "Fitness incentives", "Nutrition guidance"],
  },
];

const faqs = [
  {
    q: "How long before coverage starts?",
    a: "Most plans include a 30–90 day initial waiting period. Emergency hospitalization may be treated differently — always check your policy schedule.",
  },
  {
    q: "How do cashless claims work?",
    a: "At a network hospital, show your e-card at admission. The insurer settles eligible bills directly — you only pay non-covered items.",
  },
  {
    q: "Are pre-existing conditions covered?",
    a: "Yes, typically after a defined waiting period (often 2–4 years). Some plans offer shorter waits at a higher premium.",
  },
  {
    q: "Can I add riders to my plan?",
    a: "Most partners let you bolt on maternity, critical illness, dental, or personal accident riders to match your household's needs.",
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

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="faq-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="faq-num">{String(index + 1).padStart(2, "0")}</span>
        <span className="faq-question">{item.q}</span>
        <span className="faq-icon" aria-hidden="true" />
      </button>
      <div className="faq-answer">
        <div className="faq-answer-inner">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function Insurance() {
  const marqueeItems = [...partners, ...partners];

  return (
    <main className="insurance-page" style={{ paddingTop: "80px" }}>
      <div className={heroStyles.hero}>
        <div className="container">
          <h1>
            Healthcare at home, <span>fully covered</span>
          </h1>
          {/* <p>
            Cuure partners with India's leading insurers so home care,
            hospital visits, and family protection work together seamlessly.
          </p> */}
          {stats.length > 0 && (
            <div className="insurance-hero-stats">
              {stats.map((s) => (
                <div className="insurance-stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((p, i) => (
            <div className="marquee-logo" key={`${p.name}-${i}`}>
              <PartnerLogo name={p.name} logo={p.logo} />
            </div>
          ))}
        </div>
      </div>

      <section className="insurance-info-section container" id="why-insurance">
        <div className="info-intro info-intro--center">
          <p className="info-eyebrow">Why it matters with Cuure</p>
          <h2>
            Insurance isn't just a policy — it's what lets care reach you at
            home.
          </h2>
          {/* <p>
            When you book doctors, nursing, or follow-ups through Cuure, the
            right coverage keeps costs predictable and recovery uninterrupted.
            We partner with trusted insurers so you never have to choose
            between comfort and protection.
          </p> */}
        </div>

        <div className="pillar-grid">
          {pillars.map((p) => (
            <article className="pillar-card" key={p.num}>
              <span className="pillar-num">{p.num}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="coverage-section">
        <div className="container">
          <div className="coverage-intro coverage-intro--center">
            <p className="coverage-eyebrow">Coverage types</p>
            <h2>Four ways plans protect you</h2>
            {/* <p>
              Every insurer structures benefits differently — these are the
              building blocks to compare when picking coverage for your
              household.
            </p> */}
          </div>

          <div className="coverage-grid">
            {coverageTypes.map((c) => (
              <article className="coverage-card" key={c.title}>
                <span className="coverage-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul className="coverage-list">
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <div className="partners-heading partners-heading--center">
            <p className="partners-eyebrow">Our network</p>
            <h2>Insurers we work with</h2>
            {/* <p>
              Nine trusted partners — each vetted for network reach, claim
              reliability, and plans that complement at-home healthcare.
            </p> */}
          </div>

          <div className="partners-grid">
            {partners.map((p, i) => (
              <PartnerCard p={p} index={i} key={p.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-intro faq-intro--center">
            <p className="faq-eyebrow">Before you decide</p>
            <h2>Questions worth asking</h2>
            {/* <p>
              A few details make the difference between a plan that fits and one
              that surprises you later.
            </p> */}
          </div>

          <div className="faq-list">
            {faqs.map((item, i) => (
              <FaqItem item={item} index={i} key={item.q} />
            ))}
          </div>
        </div>
      </section>

      <section className="insurance-cta">
        <div className="container insurance-cta-inner">
          <h2>Not sure which plan fits?</h2>
          {/* <p>
            Book a consultation through Cuure and our team can point you toward
            coverage that supports the care you need at home.
          </p> */}
          <a href="/appointment" className="insurance-cta-btn">
            Talk to us
          </a>
        </div>
      </section>
    </main>
  );
}

export default Insurance;

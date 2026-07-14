import { useState, useEffect, useRef } from 'react'
import './About.css'

/* Small local reveal hook — mirrors the onLoad reveal pattern already
   used on this page, just generalized to any section via IntersectionObserver.
   If you already have a shared useReveal/useInView hook elsewhere in the
   codebase, swap this out for that instead. */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.unobserve(el); } },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Request a visit',
    text: "Tell us what you need in minutes, online or over WhatsApp. No forms, no waiting rooms.",
  },
  {
    n: '02',
    title: 'Get matched',
    text: 'We pair you with a verified doctor or specialist suited to your care, near you.',
  },
  {
    n: '03',
    title: 'Care arrives at home',
    text: 'Your provider comes fully equipped, on time, and treats you where you feel comfortable.',
  },
  {
    n: '04',
    title: 'Stay supported',
    text: 'Follow-ups, monitoring, and check-ins continue for as long as you need them — no travel.',
  },
];

const MISSION_VALUES = [
  { title: 'Real expertise', text: 'Licensed professionals with years of hands-on clinical experience.' },
  { title: 'Fast response', text: 'Flexible scheduling built around your day, not a clinic\u2019s.' },
  { title: 'Comprehensive care', text: 'From routine consultations to specialized treatment, in one visit.' },
  { title: 'Personal comfort', text: 'Care delivered in the place you feel most at ease: your home.' },
  { title: 'Transparent pricing', text: 'You know the cost upfront. No surprise charges after the visit.' },
];

const VISION_PILLARS = [
  'Mental healthcare available to everyone, regardless of location or mobility.',
  'No barriers between a patient and the professional support they need.',
  'Every visit is compassionate, personalized, and delivered somewhere safe and familiar.',
  'Continuous support and monitoring, without ever needing to travel for it.',
];

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag ref={ref} className={`${className} reveal ${visible ? 'is-visible' : ''}`} {...rest}>
      {children}
    </Tag>
  );
}

function About() {
  return (
    <main className="about-page">

      {/* ───────── Hero ───────── */}
      <section className="about-hero">
        <div className="about-hero-glow about-hero-glow--one animate-float" />
        <div className="about-hero-glow about-hero-glow--two animate-float" />
        <div className="container about-hero-inner">
          {/* <span className="eyebrow eyebrow--on-dark animate-fadeUp">Founded 2025</span> */}
          <h1 className="about-hero-title">
  Know more <span className="hero-secondary">About Us</span>
</h1>


          {/* <p className="about-hero-subtitle animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            Cuure Health connects you with qualified doctors, specialists, and nurses who
            come to you — cutting travel, cutting wait times, without cutting the quality of care.
          </p> */}
          {/* <div className="trust-chip-row">
            <span className="trust-chip">Verified specialists</span>
            <span className="trust-chip">Same-day scheduling</span>
            <span className="trust-chip">Care in your home</span>
            <span className="trust-chip">Round-the-clock support</span>
          </div> */}
        </div>
      </section>

      {/* ───────── Story ───────── */}
      <Reveal as="section" className="about-section">
        <div className="about-text">
          <span className="eyebrow">Our story</span>
          <h2 className="section-title">Care shouldn't make you wait</h2>
          <p className="about-copy">
            We believe healthcare should be accessible, convenient, and affordable for everyone.
            Our mission is to bring qualified medical professionals directly to your home,
            eliminating travel hassles and reducing wait times — whether it's a routine
            check-up or specialized care.
          </p>
          <p className="about-copy">
            We combine modern medical technology with genuinely compassionate care. Our network
            of experienced doctors, specialists, and nurses is available around the clock,
            dedicated to your well-being and recovery — because your health should never have
            to wait for an appointment slot.
          </p>
        </div>
        <div className="about-image">
          <img className="img-main show" src="/images/About/about2.jpg" alt="Doctor visiting a patient at home" />
        </div>
      </Reveal>

      {/* ───────── How it works (signature section) ───────── */}
      <Reveal as="section" className="process-section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title">From request to recovery, in four steps</h2>
          </div>
          <div className="process-grid">
            {PROCESS_STEPS.map((step, i) => (
              <div className="process-card" key={step.n} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="process-number" aria-hidden="true">{step.n}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ───────── Mission ───────── */}
      <Reveal as="section" className="about-section about-section--reverse">
        <div className="about-image">
          <img
            className="img-main show"
            src="/images/About/about1.png"
            alt="Doctor preparing for a home visit"
            style={{ objectPosition: 'top' }}
          />
        </div>
        <div className="about-text">
          <span className="eyebrow">Our mission</span>
          <h2 className="section-title">What we hold ourselves to</h2>
          <div className="value-grid">
            {MISSION_VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ───────── Vision ───────── */}
      <Reveal as="section" className="about-section">
        <div className="about-text">
          <span className="eyebrow">Our vision</span>
          <h2 className="section-title">A future where care travels to you</h2>
          <p className="about-copy">
            We're building toward a standard of mental and physical healthcare that never
            depends on location, mobility, or how close the nearest clinic is.
          </p>
          <ul className="vision-list">
            {VISION_PILLARS.map((point) => (
              <li className="vision-item" key={point}>
                <span className="vision-mark" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-image">
          <img
            className="img-main show"
            src="/images/About/about3.png"
            alt="Specialist consulting with a patient"
            style={{ objectPosition: 'top' }}
          />
        </div>
      </Reveal>

      {/* ───────── CTA ───────── */}
      {/* <Reveal as="section" className="about-cta">
        <div className="container about-cta-inner">
          <h2 className="about-cta-title">Ready to bring healthcare home?</h2>
          <p className="about-cta-subtitle">
            Book a visit in minutes and have a verified professional at your door — no clinic, no commute.
          </p> */}
          {/* NOTE: wire this to your existing booking route / handler.
              Left as a plain anchor since no router or booking handler
              was available in this file to reuse. */}
          {/* <a href="/book" className="btn btn-cta">Book a home visit</a>
        </div>
      </Reveal> */}

    </main>
  )
}
export default About;
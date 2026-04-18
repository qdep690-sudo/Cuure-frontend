import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FaUserMd, FaDumbbell, FaHandHoldingHeart, FaPills, FaUserNurse, FaMicroscope } from 'react-icons/fa'
import styles from './Services.module.css'

// ─── DATA ────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "consultation", icon: <FaUserMd />, iconBg: "#fce7f3", name: "Doctor Consultation",
    tagline: "Consult experienced doctors and book appointments easily — in-clinic or online.",
    badges: [{ label: "Home Visits" }, { label: "In-Clinic" }, { label: "Online Video" }, { label: "₹300 onwards" }],
    procedures: ["General physician consultation", "Specialist consultation", "Online video consultation", "Follow-up appointments", "Second opinion service", "Health check-up packages"],
    ctaLabel: "Book Consultation",
    learnMore: {
      title: "World-Class Consultations, Right at Your Fingertips",
      body: "Our Doctor Consultation service connects you with over 120 verified specialists spanning 40+ medical disciplines. Whether you need an urgent same-day appointment with a general physician, a specialist second opinion, or a relaxed online video call from home — Cuure.health makes it seamless.",
      highlights: [{ num: "120+", label: "Verified Doctors" }, { num: "40+", label: "Specializations" }, { num: "4.9★", label: "Avg Rating" }, { num: "15min", label: "Avg Wait Time" }],
      gallery: [
         { img: "/images/service/doctor1.jpg", span: true },
        { img: "/images/service/doctor2.jpg" },
        { img: "/images/service/doctor3.jpg" },
        { img: "/images/service/doctor4.jpg" },
        { img: "/images/service/doctor5.jpg" },
      ],
      steps: [
        { title: "Search & Select Your Doctor", desc: "Browse our curated list of verified specialists. Filter by specialty, location, language, or consultation fee." },
        { title: "Pick a Date & Time Slot", desc: "Choose from real-time available slots. Same-day appointments available for many specialists." },
        { title: "Attend Your Consultation", desc: "Visit the clinic or join a secure HD video call." },
        { title: "Receive Prescription & Follow-up", desc: "Get a digital prescription instantly. Schedule follow-ups with one tap." },
      ],
    },
  },
  {
    id: "physiotherapy", icon: <FaDumbbell />, iconBg: "#fff7ed", name: "Physiotherapy",
    tagline: "Expert physiotherapy for injury recovery, pain management, and mobility restoration.",
    badges: [{ label: "Home Visits"}, { label: "In-Clinic" }, { label: "₹500 onwards" }],
    procedures: ["Sports injury rehabilitation", "Post-surgery recovery", "Back & neck pain therapy", "Joint mobilisation", "Neurological physiotherapy", "Electrotherapy & ultrasound"],
    ctaLabel: "Book Session",
    learnMore: {
      title: "Heal Faster. Move Better. Live Fully.",
      body: "Our physiotherapy service is delivered by certified therapists trained in manual therapy, exercise science, and modern rehabilitation protocols.",
      highlights: [{ num: "35+", label: "Physiotherapists" }, { num: "92%", label: "Recovery Rate" }, { num: "Home", label: "Visits Available" }],
      gallery: [
        { img: "/images/service/physio1.avif", span: true },
        { img: "/images/service/physio2.avif" },
        { img: "/images/service/physio3.jpg" },
        { img: "/images/service/physio4.avif" },
        { img: "/images/service/physio5.jpg" },
      ],
      steps: [
        { title: "Initial Assessment", desc: "A certified physiotherapist conducts a thorough evaluation of your condition, mobility, and pain levels." },
        { title: "Personalised Treatment Plan", desc: "A tailored plan is created including exercise protocols, manual therapy, and lifestyle recommendations." },
        { title: "Regular Therapy Sessions", desc: "Attend guided sessions in-clinic or at home. Progress is monitored and plans adjusted as you improve." },
      ],
    },
  },
  {
    id: "elderly", icon: <FaHandHoldingHeart />, iconBg: "#fdf2f8", name: "Elderly Care",
    tagline: "Compassionate, professional care designed specifically for our senior community.",
    badges: [{ label: "24/7 Support" }, { label: "Home Visits" }, { label: "₹800 onwards" }],
    procedures: ["Geriatric medical assessment", "Medication management", "Companionship & daily care", "Dementia & Alzheimer's care", "Fall prevention programs", "Emergency response support"],
    ctaLabel: "Enquire Now",
    learnMore: {
      title: "Dignity, Comfort & Expert Care for Every Senior",
      body: "Our Elderly Care service is built around respect, empathy, and clinical excellence. We provide holistic care to seniors at home.",
      highlights: [{ num: "500+", label: "Seniors Cared For" }, { num: "24/7", label: "Emergency Line" }, { num: "CG", label: "Certified Caregivers" }],
      gallery: [
  { img: "/images/service/elder1.avif", span: true },
  { img: "/images/service/elder2.avif"},
  { img: "/images/service/elder3.jpg"},
  { img: "/images/service/elder4.jpg" },
  { img: "/images/service/elder5.jpg" },
],
      steps: [
        { title: "Free Home Assessment", desc: "A geriatric specialist visits to assess health status, home safety, and care requirements." },
        { title: "Custom Care Plan", desc: "A personalised plan is created covering medical, nutritional, and emotional support needs." },
        { title: "Caregiver Matching", desc: "We match a trained caregiver whose personality and skills suit your family's needs perfectly." },
      ],
    },
  },
  {
    id: "pharmacy", icon: <FaPills />, iconBg: "#f0fdf4", name: "Pharmacy",
    tagline: "Genuine medicines delivered to your door — fast, affordable, and prescription-verified.",
    badges: [{ label: "2-Hr Delivery" }, { label: "Prescription Upload" }, { label: "Genuine Medicines" }],
    procedures: ["Prescription medicines", "OTC & wellness products", "Chronic disease refills", "Refrigerated medicines", "Nutritional supplements", "Medical devices & equipment"],
    ctaLabel: "Order Medicines",
    learnMore: {
      title: "Your Medicines, Delivered in Hours — Not Days",
      body: "Cuure Pharmacy is your trusted digital pharmacy partner. We source exclusively from licensed manufacturers and distributors, ensuring 100% genuine, quality-checked medicines.",
      highlights: [{ num: "50K+", label: "Orders Fulfilled" }, { num: "2hr", label: "Avg Delivery" }, { num: "100%", label: "Genuine Meds" }],
      gallery: [
       { img: "/images/service/pharma1.jpg", span: true },
    { img: "/images/service/pharma2.jpg"},
    { img: "/images/service/pharma3.jpg"},
    { img: "/images/service/pharma4.jpg" },
    { img: "/images/service/pharma5.jpg" },
      ],
      steps: [
        { title: "Upload Prescription", desc: "Take a photo of your prescription and upload it via app or website." },
        { title: "Pharmacist Verification", desc: "Our licensed pharmacist reviews your prescription and prepares your order accurately." },
        { title: "Doorstep Delivery", desc: "Medicines delivered in sealed, tamper-proof packaging. Track your order in real time." },
      ],
    },
  },
  {
    id: "nursing", icon: <FaUserNurse />, iconBg: "#eff6ff", name: "Nursing",
    tagline: "Certified nurses providing professional medical care in the comfort of your home.",
    badges: [{ label: "24/7 Available" }, { label: "Home Visits" }, { label: "₹600 onwards" }],
    procedures: ["IV drip administration", "Wound dressing & care", "Post-surgery nursing", "Catheter management", "Vital signs monitoring", "Injection administration"],
    ctaLabel: "Book a Nurse",
    learnMore: {
      title: "Hospital-Level Nursing Care at Home",
      body: "Our home nursing service brings ICU-trained, certified nurses to your doorstep — available day and night.",
      highlights: [{ num: "200+", label: "Certified Nurses" }, { num: "24/7", label: "On-call" }, { num: "1hr", label: "Response Time" }],
      gallery: [
       { img: "/images/service/nursing1.jpg", span: true },
    { img: "/images/service/nursing2.avif"},
    { img: "/images/service/nursing3.jpg"},
    { img: "/images/service/nursing4.jpg" },
    { img: "/images/service/nursing5.jpg" },
      ],
      steps: [
        { title: "Select Nursing Type", desc: "Choose from general nursing, ICU-trained, post-surgery, or paediatric nursing based on your needs." },
        { title: "Schedule Timing", desc: "Book for a specific shift or round-the-clock care. We accommodate same-day requests." },
        { title: "Nurse Arrives & Begins Care", desc: "Background-verified nurse arrives at your home with all necessary equipment." },
      ],
    },
  },
  {
    id: "diagnostics", icon: <FaMicroscope />, iconBg: "#ecfdf5", name: "Diagnostics",
    tagline: "Accurate lab tests and imaging — at our centres or collected from your home.",
    badges: [{ label: " Home Sample Pickup" }, { label: "1000+ Tests" }, { label: "Reports in 24hr" }],
    procedures: ["Blood & urine tests", "X-ray & ultrasound", "MRI & CT scans", "ECG & Echo", "Full body health packages", "Genetic testing"],
    ctaLabel: "Book a Test",
    learnMore: {
      title: "Precise Diagnostics. Faster Answers. Better Outcomes.",
      body: "Our NABL-accredited diagnostic labs and imaging centres offer over 1,000 tests with the highest levels of accuracy.",
      highlights: [{ num: "1000+", label: "Tests Available" }, { num: "NABL", label: "Accredited Labs" }, { num: "24hr", label: "Report Time" }],
      gallery: [
       { img: "/images/service/dia1.jpg", span: true },
    { img: "/images/service/dia2.jpg"},
    { img: "/images/service/dia3.jpg"},
    { img: "/images/service/dia4.jpg" },
    { img: "/images/service/dia5.jpg" },
      ],
      steps: [
        { title: "Select Your Test", desc: "Search from 1,000+ tests or choose a health package." },
        { title: "Home Pickup or Visit Centre", desc: "A phlebotomist visits your home at your chosen time, or walk in to our nearest diagnostic centre." },
        { title: "Digital Reports in 24 Hours", desc: "Reports are emailed and available in your dashboard." },
      ],
    },
  },
]

// ─── HOMEPAGE PREVIEW — named export, used in Home.jsx ───────────────────────
export function ServicesPreview() {
  const [activeId, setActiveId] = useState('consultation')
  const active = SERVICES.find((s) => s.id === activeId)

  return (
    <section className={styles.previewSection}>
      <div className={styles.previewContainer}>

        {/* Header */}
        <div className={styles.previewHeader}>
          <div className={styles.previewLeft}>
            <span className={styles.pill}>Our Services</span>
            <h2 className={styles.previewTitle}>
              Our Services Cover<br />
              <span className={styles.previewTitleAccent}>All Areas</span>
            </h2>
          </div>
          <p className={styles.previewDesc}>
            Complete medical services across all specialties, ensuring quality care,
            accurate diagnosis, and effective treatment for everyone.
          </p>
        </div>

        {/* Tabs + Panel */}
        <div className={styles.previewLayout}>
          {/* Sidebar */}
          <div className={styles.previewTabs}>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                className={`${styles.previewTab}${activeId === s.id ? ` ${styles.previewTabActive}` : ''}`}
                onClick={() => setActiveId(s.id)}
              >
                <div
                  className={styles.previewTabIcon}
                  style={{ background: s.iconBg || '#f1f3f8', color: s.iconColor || 'inherit' }}
                >
                  {s.icon}
                </div>
                <span className={styles.previewTabLabel}>{s.name}</span>
                <span className={styles.previewTabArrow}>›</span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className={styles.previewPanel} key={activeId}>
            <div className={styles.previewPanelHeader}>
              <div
                className={styles.previewPanelIcon}
                style={{ background: active.iconBg || '#E6F7F4', color: active.iconColor || 'inherit' }}
              >
                {active.icon}
              </div>
              <div>
                <div className={styles.previewPanelTitle}>{active.name}</div>
                <div className={styles.previewPanelDesc}>{active.tagline}</div>
              </div>
            </div>
            <div className={styles.previewPanelBody}>
              <div className={styles.previewSubhead}>Key Procedures &amp; Treatments</div>
              <ul className={styles.previewList}>
                {active.procedures.map((p) => (
                  <li key={p} className={styles.previewListItem}>
                    <span className={styles.previewCheck}>✓</span> {p}
                  </li>
                ))}
              </ul>
              <div className={styles.previewActions}>
                {active.id === 'pharmacy' ? (
                  <button className={styles.previewBtnBook}>{active.ctaLabel}</button>
                ) : (
                  <Link to="/appointment#booking-form" className={styles.previewBtnBook}>{active.ctaLabel}</Link>
                )}
                <Link to={`/services?service=${active.id}&learn=${active.id}`} className={styles.previewBtnLearn}>Learn More →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* View all */}
        <div className={styles.previewViewAll}>
          <Link to="/services" className={styles.previewViewAllBtn}>
            View All Services &amp; Details →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── FULL PAGE INTERNALS ──────────────────────────────────────────────────────
function LearnMoreSection({ data }) {
  return (
    <div className={styles.learnMore}>
      <div className={styles.descCard}>
        <div className={styles.descLabel}>About This Service</div>
        <div className={styles.descTitle}>{data.title}</div>
        <div className={styles.descBody}>{data.body}</div>
        <div className={styles.descHighlights}>
          {data.highlights.map((h) => (
            <div className={styles.descHl} key={h.label}>
              <div className={styles.descNum}>{h.num}</div>
              <div className={styles.descLbl}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.galleryCard}>
        <div className={styles.cardLabel}>Facilities &amp; Photos</div>
        <div className={styles.gallery}>
          {data.gallery.map((img, i) => (
            <div className={`${styles.galleryItem}${img.span ? ` ${styles.gallerySpan}` : ''}`} key={i}>
              <div className={styles.galleryInner}>
                <img src={img.img} alt={img.caption} loading="lazy" />
                <span className={styles.galleryCaption}>{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.stepsCard}>
        <div className={styles.cardLabel}>How It Works</div>
        <div className={styles.stepsList}>
          {data.steps.map((step, i) => (
            <div className={styles.stepRow} key={i}>
              <div className={styles.stepNum}>{i + 1}</div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitle}>{step.title}</div>
                <div className={styles.stepDesc}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ServicePanel({ service, learnOpen, onToggleLearn }) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <div className={styles.panelIcon} style={{ background: service.iconBg || '#E6F7F4', color: service.iconColor || 'inherit' }}>
          {service.icon}
        </div>
        <div>
          <div className={styles.panelName}>{service.name}</div>
          <div className={styles.panelTagline}>{service.tagline}</div>
          <div className={styles.badges}>
            {service.badges.map((b) => (
              <span key={b.label} className={`${styles.badge}${b.green ? ` ${styles.badgeGreen}` : ''}`}>{b.label}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.procedures}>
        <div className={styles.cardLabel}>Key Procedures &amp; Treatments</div>
        <div className={styles.procGrid}>
          {service.procedures.map((p) => (
            <div className={styles.procItem} key={p}>
              <span className={styles.check}>✓</span> {p}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.ctaRow}>
        {service.id === 'pharmacy' ? (
          <button className={styles.btnPrimary}>{service.ctaLabel}</button>
        ) : (
          <Link to="/appointment" className={styles.btnPrimary}>{service.ctaLabel}</Link>
        )}
        <button
          className={`${styles.btnLearnMore}${learnOpen ? ` ${styles.btnLearnOpen}` : ''}`}
          onClick={onToggleLearn}
        >
          {learnOpen ? 'Show Less' : 'Learn More'}
          <span className={styles.btnArrow}>{learnOpen ? ' ↑' : ' →'}</span>
        </button>
      </div>
      {learnOpen && <LearnMoreSection data={service.learnMore} />}
    </div>
  )
}

// ─── FULL SERVICES PAGE — default export, used in App.jsx /services route ────
export default function Services() {
  const [searchParams] = useSearchParams()
  const [activeId, setActiveId] = useState('consultation')
  const [learnOpenId, setLearnOpenId] = useState(null)
  const activeService = SERVICES.find((s) => s.id === activeId)
  const contentRef = useRef(null)

  useEffect(() => {
    const service = searchParams.get('service')
    const learn = searchParams.get('learn')
    if (service) setActiveId(service)
    if (learn) setLearnOpenId(learn)
  }, [searchParams])

  return (
    <div className={styles.pageWrapper}>

      {/* ── Blue Hero ── */}
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <span className={styles.pageHeroPill}>What We Offer</span>
          <h1 className={styles.pageHeroTitle}>
            Our <span className={styles.pageHeroFade}>Services</span>
          </h1>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>Select a Service</div>
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className={`${styles.tab}${activeId === s.id ? ` ${styles.tabActive}` : ''}`}
                onClick={() => {
                setActiveId(s.id);
                setLearnOpenId(null);
                contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <div className={styles.tabIcon} style={{ color: s.iconColor || 'inherit' }}>{s.icon}</div>
                <span className={styles.tabName}>{s.name}</span>
                <span className={styles.tabArrow}>›</span>
              </div>
            ))}
          </div>
          <div className={styles.content} ref={contentRef}>
            <ServicePanel
              key={activeId}
              service={activeService}
              learnOpen={learnOpenId === activeId}
              onToggleLearn={() => setLearnOpenId((p) => (p === activeId ? null : activeId))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

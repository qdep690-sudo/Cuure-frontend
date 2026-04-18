import { useNavigate } from 'react-router-dom';
import { MdChat } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import styles from './Doctors.module.css';

const doctors = [
  {
    id: 1,
    name: "Dr Rohith K",
    specialty: "Registere Medical Practioner",
    degree: "MBBS ,  Registere Medical Practioner",
    experience: "2 years experience",
    kmc: "183073",
    clinic: "Mysore",
    rating: 4.9,
    reviews: 312,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 2,
    name: "Dr Shreyas B",
    specialty: "Registere Medical Practioner",
    degree: "MBBS, Registere Medical Practioner",
    experience: "4 years experience",
    kmc: "155488",
    clinic: " Mysore",
    rating: 4.8,
    reviews: 278,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 3,
    name: "Dr Bharath",
    specialty: "Registere Medical Practioner",
    degree: "MBBS, Registere Medical Practioner",
    experience: "10 years experience",
    clinic: " Mysore",
    rating: 4.9,
    reviews: 195,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 4,
    name: "Dr Chandrashekar",
    specialty: "Registere Medical Practioner",
    degree: "MBBS,Registere Medical Practioner",
    experience: "8 years experience",
    clinic: " Mysore",
    rating: 4.7,
    reviews: 428,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 5,
    name: "Dr Soujanya",
    specialty: "Registere Medical Practioner",
    degree: "MBBS, Registere Medical Practioner",
    experience: "10 years experience",
    clinic: "Mysore",
    rating: 4.8,
    reviews: 210,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 6,
    name: "Dr Neha Naidu",
    specialty: "Registere Medical Practioner",
    degree: "MBBS, Registere Medical Practioner",
    experience: "12 years experience",
    clinic: "Mysore",
    rating: 4.9,
    reviews: 210,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 7,
    name: "Dr Hemanth",
    specialty: " Medicine Resident",
    degree: "MBBS, Medicine Resident",
    experience: "8 years experience",
    clinic: " Mysore",
    rating: 4.7,
    reviews: 423,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 8,
    name: "Dr Anudeep",
    specialty: " Medicine Resident",
    degree: "MBBS, Medicine Resident",
    experience: "6 years experience",
    clinic: " Mysore",
    rating: 4.7,
    reviews: 425,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
];

// ── HOME CARD ──
function HomeCard({ doc }) {
  const navigate = useNavigate();
  return (
    <div className={styles.homeCard}>
      <div className={styles.homeAvatar}>
        <img src={doc.image} alt={doc.name} />
      </div>
      <div className={styles.homeName}>{doc.name}</div>
      <div className={styles.homeSpecialty}>{doc.specialty}</div>
      <div className={styles.homeMeta}>
        <span>{doc.experience}</span>
        <span className={styles.dot} />
        <span className={styles.star}>
          <FaStar size={12} />
          {doc.rating} ({doc.reviews})
        </span>
      </div>
      <div className={styles.homeBtns}>
        <button className={styles.homeBookBtn} onClick={() => navigate('/appointment')}>
          Book Now
        </button>
      </div>
    </div>
  );
}

// ── LIST CARD ──
function ListCard({ doc }) {
  const navigate = useNavigate();
  return (
    <div className={styles.listCard}>
      <div className={styles.listTop}>
        <div className={styles.listPhoto}>
          <img src={doc.image} alt={doc.name} />
        </div>
        <div className={styles.listRight}>
          <div className={styles.listName}>{doc.name}</div>
          <div className={styles.listDegree}>{doc.degree}, {doc.experience}</div>
          <div className={styles.listKmc}>KMC : {doc.kmc}</div>
          <div className={styles.listClinic}>{doc.clinic}</div>
          <div className={styles.listAvailRow}>
            <div />
            <button className={styles.listBookBtn} onClick={() => navigate('/appointment')}>
              Book Appointment →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── HOME SECTION (with header + 4 cards grid) ──
export function DoctorsHome() {
  const navigate = useNavigate();
  return (
    <section className={styles.doctorsSection}>
      <div className={styles.doctorsInner}>

        <div className={styles.doctorsHeader}>
          <div className={styles.doctorsPill}>MEET THE TEAM</div>
          <h2 className={styles.doctorsTitle}>
            Our Expert <span>Doctors</span>
          </h2>
        </div>

        <div className={styles.doctorsGrid}>
          {doctors.slice(0, 4).map(doc => (
            <HomeCard key={doc.id} doc={doc} />
          ))}
        </div>

        <div className={styles.viewAllWrap}>
          <button className={styles.viewAllBtn} onClick={() => navigate('/doctors')}>
            View All Doctors →
          </button>
        </div>

      </div>
    </section>
  );
}

// ── DOCTORS PAGE SECTION (full list) ──
export function DoctorsList() {
  return (
    <div className={styles.dsPage}>
      <div className={styles.dsList}>
        {doctors.map(doc => (
          <ListCard key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
}
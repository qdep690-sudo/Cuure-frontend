import { Helmet } from "react-helmet-async";
import { DoctorsList } from "../components/Doctors/Doctors";
import styles from "./PageHero.module.css";

export default function DoctorsPage() {
  return (
    <>
      <Helmet>
        <title>
          Expert Doctors | Online Doctor Consultation | Cuure Health
        </title>

        <meta
          name="description"
          content="Meet qualified healthcare professionals at Cuure Health. Book online doctor consultations and get convenient, trusted healthcare from experienced doctors."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.cuure.health/doctors"
        />

        <meta
          property="og:title"
          content="Expert Doctors | Online Doctor Consultation | Cuure Health"
        />

        <meta
          property="og:description"
          content="Meet qualified healthcare professionals at Cuure Health and book convenient online doctor consultations."
        />

        <meta
          property="og:url"
          content="https://www.cuure.health/doctors"
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <main style={{ paddingTop: "80px" }}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>
              Meet Our <span>Expert Doctors</span>
            </h1>

            <p>
              Connect with qualified healthcare professionals across
              multiple specialties and get trusted medical care from Cuure
              Health.
            </p>
          </div>
        </section>

        <DoctorsList />
      </main>
    </>
  );
}
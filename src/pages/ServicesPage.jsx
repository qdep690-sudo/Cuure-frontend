import { Helmet } from "react-helmet-async";
import Services from "../components/Services/Services";
import styles from "./PageHero.module.css";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Healthcare Services | Doctor Consultation & Physiotherapy at Home | Cuure Health
        </title>

        <meta
          name="description"
          content="Explore Cuure Health healthcare services including online doctor consultation, physiotherapy at home, nursing care and trusted healthcare services delivered by qualified professionals."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.cuure.health/services"
        />

        <meta
          property="og:title"
          content="Healthcare Services | Cuure Health"
        />

        <meta
          property="og:description"
          content="Explore doctor consultation, physiotherapy at home, nursing and other trusted healthcare services from Cuure Health."
        />

        <meta
          property="og:url"
          content="https://www.cuure.health/services"
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
              Our <span>Healthcare Services</span>
            </h1>

            <p>
              Comprehensive healthcare services across 40+ specialties,
              powered by top-tier specialists and cutting-edge technology.
            </p>
          </div>
        </section>

        <Services />
      </main>
    </>
  );
}
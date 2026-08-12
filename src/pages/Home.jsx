import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero/Hero";
import { ServicesPreview } from "../components/Services/Services";
import Features from "../components/Features/Features";
import { DoctorsHome } from "../components/Doctors/Doctors";

const Testimonials = lazy(() =>
  import("../components/Testimonials/Testimonials")
);

const Contact = lazy(() =>
  import("../components/Contact/Contact")
);

export default function Home() {
  return (
    <>
      <Helmet>
  <title>Doctor Consultation & Physiotherapy at Home | Cuure Health</title>

  <meta
    name="description"
    content="Book online doctor consultation and physiotherapy at home with Cuure Health. Get trusted healthcare services, expert doctors and convenient appointments."
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://www.cuure.health/"
  />

  <meta
    property="og:title"
    content="Doctor Consultation & Physiotherapy at Home | Cuure Health"
  />

  <meta
    property="og:description"
    content="Book online doctor consultation and physiotherapy at home with Cuure Health."
  />

  <meta
    property="og:url"
    content="https://www.cuure.health/"
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:site_name"
    content="Cuure Health"
  />
</Helmet>

      <main>
        <Hero />

        <ServicesPreview />

        <Features />

        <DoctorsHome />

        <Suspense fallback={<div />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<div />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
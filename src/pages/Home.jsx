import { lazy, Suspense } from 'react'

import Hero from '../components/Hero/Hero'
import { ServicesPreview } from '../components/Services/Services'
import Features from '../components/Features/Features'
import { DoctorsHome } from '../components/Doctors/Doctors'

const Testimonials = lazy(() => import('../components/Testimonials/Testimonials'))
const Contact = lazy(() => import('../components/Contact/Contact'))

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <Features />
      <DoctorsHome />

      <Suspense fallback={<div></div>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Contact />
      </Suspense>
    </main>
  )
}
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'

const Appointment = lazy(() => import('./pages/Appointment/Appointment'))
const Services = lazy(() => import('./components/Services/Services'))
const DoctorsPage = lazy(() => import('./pages/DoctorsPage'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const About = lazy(() => import('./pages/About/About'))
const Blog = lazy(() => import('./pages/Blog/Blog'))
const Plans = lazy(() => import('./pages/Plans/Plans'))
const Nursing = lazy(() => import('./pages/Nursing/nursing'))
const BlogDetail = lazy(() => import('./components/Blog/BlogDetail'))
const Insurance = lazy(() => import('./pages/Insurance/Insurance'))

import ScrollTop from './ScrollTop'
import WhatsApp from './WhatsApp'
import ChatWidget from './components/ChatWidget/ChatWidget'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const hash = window.location.hash

    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <>
      <Navbar />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/nursing" element={<Nursing />} />
          <Route path="/insurance" element={<Insurance />} />
        </Routes>
      </Suspense>

      <ChatWidget />
      <ScrollTop />
      <WhatsApp />
      <Footer />
    </>
  )
}
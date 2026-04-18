import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Appointment from './pages/Appointment/Appointment'
import Services from './components/Services/Services'
import DoctorsPage from './pages/DoctorsPage'
import Contact from './components/Contact/Contact'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Plans from './pages/Plans/Plans'
import ScrollTop from './ScrollTop'
import WhatsApp from './WhatsApp'
import Nursing from './pages/Nursing/nursing'
import BlogDetail from "./components/Blog/BlogDetail"; // ✅ ADD THIS

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />  {/* ✅ correct */}

        <Route path="/plans" element={<Plans />} />
        <Route path="/nursing" element={<Nursing />} />
      </Routes>

      <ScrollTop />
      <WhatsApp />
      <Footer />
    </>
  )
}
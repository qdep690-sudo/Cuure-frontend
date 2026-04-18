import { useState } from 'react'
import './About.css'

function About() {
    const [show, setShow] = useState(false); 
    return (
      <main style={{ paddingTop: '5rem', overflowX: 'hidden' }}>

        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%)',
          padding: '40px 0',
          color: 'white',
        }}>
          <div className="container">
            <h1 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(36px, 5vw, 60px)', 
              fontWeight: 800, 
              marginBottom: 20,
            }}>
              About <span style={{ color: 'rgba(255,255,255,0.6)' }}>cuure.health</span>
            </h1>
            <p style={{ 
              fontSize: 17, 
              color: 'rgba(255,255,255,0.7)', 
              maxWidth: 560, 
              lineHeight: 1.7,
            }}>
              Founded in 2025, Cuure Health is on a mission to make quality healthcare accessible to everyone.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="about-section">
          <div className="about-text">
            <p style={{ 
              fontSize: 20, 
              color: 'var(--text-muted)', 
              lineHeight: 1.5, 
              marginBottom: 24,
              fontFamily: 'Inter, sans-serif'
            }}>
              We believe healthcare should be accessible, convenient, and affordable 
              for everyone. Our mission is to bring qualified medical professionals 
              directly to your home, eliminating travel hassles and reducing wait times. 
              Whether it's a routine check-up or specialized care, we ensure you receive 
              the highest quality treatment — right where you feel most comfortable.
            </p>
            <p style={{ 
              fontSize: 20, 
              color: 'var(--text-muted)', 
              lineHeight: 1.5, 
              marginBottom: 24,
              fontFamily: 'Inter, sans-serif'
            }}>
              At Cuure Health, we combine cutting-edge medical technology with 
              compassionate care. Our network of experienced doctors, specialists, 
              and nurses are available around the clock, dedicated to your well-being 
              and recovery — because your health should never have to wait.
            </p>
          </div>
          <div className="about-image">
            <img
              className={`img-main ${show ? "show" : ""}`}
              src="/images/About/about1.jpg"
              alt="Doctor"
              onLoad={() => setShow(true)}
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="about-section">
          <div className="about-image">
            <img
              className={`img-main ${show ? "show" : ""}`}
              src="/images/About/about2.jpg"
              alt="Doctor"
              onLoad={() => setShow(true)}
              style={{ objectPosition: 'top' }}
            />
          </div>
          <div className="about-text">
            <h1 className="head" style={{  fontFamily: "'Poppins', sans-serif" }}>Our Mission :</h1>
            <ul style={{ 
              listStyle: 'none', 
              fontSize: 20, 
              padding: 0, 
              color: 'var(--text-muted)', 
              lineHeight: 1.8
            }}>
              <li>✓ Experienced medical professionals with years of expertise</li>
              <li>✓ Quick response time and flexible scheduling</li>
              <li>✓ Comprehensive health consultations and treatments</li>
              <li>✓ Personalized care in the comfort of your home</li>
              <li>✓ Transparent and competitive pricing</li>
            </ul>
          </div>
        </div>

        {/* Vision Section */}
        <div className="about-section">
          <div className="about-text">
            <h1 style={{  fontFamily: "'Poppins', sans-serif" }}>Our Vision :</h1>
            <ul style={{ 
              listStyle: "none", 
              fontSize: 20, 
              padding: 0, 
              color: 'var(--text-muted)', 
              lineHeight: 1.8 
            }}>
              <li>✓ To make quality mental healthcare available to everyone, regardless of location or mobility, right from the comfort of their home.</li>
              <li>✓ To eliminate barriers to mental health treatment by bringing professional care, therapy, and support directly to the patient's doorstep.</li>
              <li>✓ To ensure every patient receives compassionate, personalized mental health services in a safe and familiar environment.</li>
              <li>✓ To empower individuals on their mental health journey by providing continuous support, monitoring, and treatment without the need to travel.</li>
              <li>✓ To connect patients with experienced mental health professionals through seamless home visits, ensuring no one is left without the care they deserve.</li>
            </ul>
          </div>
          <div className="about-image">
            <img
              className={`img-main ${show ? "show" : ""}`}
              src="/images/About/about3.jpg"
              alt="Doctor"
              onLoad={() => setShow(true)}
              style={{ objectPosition: 'top' }}
            />
          </div>
        </div>

      </main>
    )
}
export default About;
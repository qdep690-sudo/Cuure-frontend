import { useNavigate } from 'react-router-dom';
import  './Blog.css';

export default function Blog() {
  const navigate = useNavigate();

  const posts = [
    { title: " 5 Warning Signs You Should See a Cardiologist",                     slug: "cardiologist-signs",    image: "/images/BlogImages/Blog1.jpg" },
    { title: "How to Improve Lung Health: Symptoms, Causes & Prevention",                 slug: "lung-health",           image: "/images/BlogImages/Blog2.jpg" },
    { title: "Virtual Doctor Consultations: Benefits, Process & When to Use Them",       slug: "virtual-consultations", image: "/images/BlogImages/Blog3.jpg" },
    { title: "How to Improve Gut Health Naturally: Diet, Symptoms & Tips",                 slug: "nutrition-gut-health",  image: "/images/BlogImages/Blog4.jpg" },
    { title: "Cancer Prevention: Symptoms, Risk Factors & Early Detection",  slug: "cancer-awareness",      image: "/images/BlogImages/Blog5.jpg" },
    { title: "High Blood Pressure: Symptoms, Causes & Prevention", slug: "high-blood-pressure", image: "/images/BlogImages/Blog6.jpg" },
  { title: "Diabetes: Symptoms, Causes & Blood Sugar Management", slug: "diabetes-management", image: "/images/BlogImages/Blog7.jpg" },
  { title: "Mental Health: Signs, Symptoms & When to Seek Help", slug: "mental-health", image: "/images/BlogImages/Blog8.jpg" },
  { title: "Women's Health: Essential Screenings & Preventive Care", slug: "womens-health", image: "/images/BlogImages/Blog9.jpg" },
  { title: "Joint Pain: Causes, Prevention & When to See an Orthopedic Doctor", slug: "joint-pain", image: "/images/BlogImages/Blog10.jpg" },
  ];

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Hero */}
      <div className="blog-hero">
        <div className="container">
          <h1 className="blog-hero__title">
            Health <span>Blog</span>
          </h1>
          <p className="blog-hero__subtitle">
            Expert articles, tips, and guides from our team of doctors.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container blog-grid-wrapper">
        <div className="blog-grid">
          {posts.map((p) => (
            <div
              key={p.slug}
              className="blog-card"
              onClick={() => navigate(`/blog/${p.slug}`)}
            >
              <img
                src={p.image}
                alt={p.title}
                className="blog-card__image"
              />
              <span className="blog-card__tag">{p.tag}</span>
              <h3 className="blog-card__title">{p.title}</h3>
              <p className="blog-card__date">{p.date}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
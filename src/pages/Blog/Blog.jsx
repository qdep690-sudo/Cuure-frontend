import { useNavigate } from 'react-router-dom';
import  './Blog.css';

export default function Blog() {
  const navigate = useNavigate();

  const posts = [
    { title: "5 Signs You Should See a Cardiologist",                     slug: "cardiologist-signs",    image: "/images/BlogImages/Blog1.jpg" },
    { title: "Understanding Your Lung Health: A Guide",                 slug: "lung-health",           image: "/images/BlogImages/Blog2.jpg" },
    { title: "How Virtual Consultations Are Changing Healthcare",       slug: "virtual-consultations", image: "/images/BlogImages/Blog3.jpg" },
    { title: "Nutrition Tips for Better Gut Health",                 slug: "nutrition-gut-health",  image: "/images/BlogImages/Blog4.jpg" },
    { title: "Cancer Awareness & Prevention: What Everyone Should Know",  slug: "cancer-awareness",      image: "/images/BlogImages/Blog5.jpg" },
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
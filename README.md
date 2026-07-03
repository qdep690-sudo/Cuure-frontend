# Cuure Health – React Website

A fully responsive healthcare website built with React, Vite, and CSS Modules.
Inspired by the MonksCare Framer template and Cuure.health Figma design.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

### Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .module.css       # Sticky responsive nav
│   ├── Hero.jsx / .module.css         # Landing hero with floating cards
│   ├── Features.jsx / .module.css     # 4-feature grid + stats band
│   ├── Services.jsx / .module.css     # Tabbed services panel (6 specialties)
│   ├── Doctors.jsx / .module.css      # Doctor cards grid
│   ├── Testimonials.jsx / .module.css # Patient reviews carousel
│   ├── BookingForm.jsx / .module.css  # Full appointment booking form
│   └── Footer.jsx / .module.css       # Newsletter + links footer
├── pages/
│   ├── Home.jsx                       # Combines all sections
│   ├── Appointment.jsx                # Full booking page
│   ├── ServicesPage.jsx               # Services page
│   ├── DoctorsPage.jsx                # Doctors page
│   └── Contact.jsx                    # Contact form + info
├── styles/
│   └── global.css                     # Design tokens, reset, animations
├── App.jsx                            # Router setup
└── main.jsx                           # Entry point
```

## 🎨 Design System

Colors defined as CSS variables in `global.css`:
- `--primary`: #1a6b4a (deep green)
- `--accent`: #00d68f (bright mint)
- `--dark`: #0d1f17 (near-black green)

Fonts:
- Display: Bricolage Grotesque (headings)
- Body: DM Sans (body text)

## 📱 Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 900px
- Mobile: 768px / 480px

## ✨ Features
- Sticky glass-morphism navbar
- Animated hero with floating metric cards
- Interactive tabbed services panel
- Doctor booking with form validation
- Testimonial switcher
- Appointment booking form with virtual/in-person toggle
- Newsletter subscription in footer
- Full routing (6 pages)

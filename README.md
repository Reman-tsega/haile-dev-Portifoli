# Haylemichael Tsega — Developer Portfolio

A personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. It showcases projects, skills, experience, and a working contact form.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.1.0 (App Router) |
| UI Library | React 18 |
| Styling | Tailwind CSS 3.3.0 |
| Animations | Framer Motion 11.0.3 |
| Contact Form | Formspree (`@formspree/react`) |
| Notifications | react-toastify |
| Images | Next.js `<Image>` with remote optimization |

---

## Project Structure

```
haile-dev-Portifoli/
├── public/                     # Static assets
│   ├── developer_photo.jpg     # Home page hero image
│   ├── my_picture.jpg          # About page profile photo
│   ├── HAILEMIKAEL ID.pdf      # Résumé / ID document
│   ├── *.png / *.PNG           # Project screenshot images
│   └── github/telegram/...png  # Social media icons
├── src/
│   ├── app/
│   │   ├── layout.js           # Root layout — wraps all pages in TransitionProvider
│   │   ├── page.jsx            # Home  /
│   │   ├── about/page.jsx      # About  /about
│   │   ├── portfolio/page.jsx  # Portfolio  /portfolio
│   │   └── contact/page.jsx    # Contact  /contact
│   └── components/
│       ├── navbar.jsx          # Top navigation bar (desktop + mobile hamburger)
│       ├── navLink.jsx         # Single nav link with active-state highlight
│       ├── transitionProvider.jsx  # Page-transition wrapper (AnimatePresence)
│       └── brain.jsx           # Animated SVG brain used on the About page
├── tailwind.config.js
├── next.config.mjs             # Enables remote image host: images.pexels.com
├── jsconfig.json               # Path alias  @/* → ./src/*
└── package.json
```

---

## Pages

### `/` — Home

**File:** [src/app/page.jsx](src/app/page.jsx)

Two-column hero layout (stacked on mobile).

| Column | Content |
|---|---|
| Left | Developer photo (`developer_photo.jpg`) with slide-in animation |
| Right | Headline, animated description text, two CTA buttons |

**CTA buttons:**
- **View My Work** → `/portfolio`
- **Contact Me** → `/contact`

Animations: staggered entrance via Framer Motion `motion.div` with `initial / animate / transition` props.

---

### `/about` — About

**File:** [src/app/about/page.jsx](src/app/about/page.jsx)

Vertically scrollable page with a sticky animated SVG brain on the right (`Brain` component).

#### Sections

**Biography**
- Profile photo (`my_picture.jpg`)
- 4+ years background in backend development (Node.js, Go, microservices, fintech)

**Skills** (27 items, scroll-triggered entrance)

| Category | Items |
|---|---|
| Languages | JavaScript, TypeScript, Python, Go, C/C++ |
| Frameworks | Express.js, Gin, React, Next.js |
| APIs | gRPC, REST API |
| Databases | MongoDB, Redis, PostgreSQL, ScyllaDB |
| DevOps | Docker, AWS, Kubernetes, Git |
| Messaging | RabbitMQ, Kafka |
| Tools | Swagger, CI/CD |
| Soft Skills | Communication, Teamwork, Leadership, Self-learning |

**Experience** (timeline layout, alternating left / right)

| Period | Role | Company |
|---|---|---|
| Feb 2025 – Present | Backend Developer | Eagle Lion System Technology |
| Oct 2024 – Jan 2025 | Full Stack Developer | Addis Technology Solution |
| Nov 2023 – Sep 2024 | Full Stack Developer | Addis Pay Financial Technology |
| Jan 2021 – Present | Freelance Full-Stack Developer | — |

Scroll progress is tracked with Framer Motion `useScroll` / `useTransform` to animate the connecting timeline line and the SVG brain graphic.

---

### `/portfolio` — Portfolio

**File:** [src/app/portfolio/page.jsx](src/app/portfolio/page.jsx)

Responsive 3-column grid of project cards. Each card has an image, title, subtitle, description, and an **Open Preview** button that opens a modal with enlarged details.

**Projects**

| # | Project | Description |
|---|---|---|
| 1 | Addis Pay | Payment gateway platform |
| 2 | Dashen Super App | Digital banking & lifestyle super app |
| 3 | Addis Systems | Landing page & ordering system |
| 4 | Blue Clerk | Housing broker CRM |
| 5 | Addis Bike Rental System | Bicycle rental with admin dashboard |
| 6 | Aurora General PLC Management | Company profile & management system |
| 7 | ChuChu Beauty School | School management system |
| 8 | Mak Beauty Salon | Beauty services landing page |
| 9 | Dir Link | Shipping connector dashboard |
| 10 | Cafe Coffee | Coffee shop landing page |
| 11 | Noliga Engineering | Engineering services landing page |

Bottom CTA: **"Do you have a project? → Hire Me"** links to `/contact`.

---

### `/contact` — Contact

**File:** [src/app/contact/page.jsx](src/app/contact/page.jsx)

Two-column layout.

**Left — Contact Info**
- Animated letter-by-letter heading ("Get in touch")
- Email: remantsega@gamil.com
- Phone: +251947731212
- Telegram: @kings\_time
- LinkedIn: /in/haylemichael-tsega-2305651b5/
- GitHub: /Reman-tsega

**Right — Contact Form**
- Integrated with **Formspree** (form ID: `myzgwjrb`)
- Fields: message (textarea) + email (input)
- Loading state on submit button
- Success / error feedback via **react-toastify**

---

## Components

### `Navbar` — [src/components/navbar.jsx](src/components/navbar.jsx)

Sticky top navigation. Desktop shows links and social icons inline. Mobile collapses to a hamburger that slides out a full-screen animated menu.

Social links rendered: GitHub, Dribbble, LinkedIn, Facebook, Instagram, Pinterest, Telegram.

### `NavLink` — [src/components/navLink.jsx](src/components/navLink.jsx)

Wraps Next.js `<Link>`. Compares `pathname` from `usePathname()` to its `href` and applies an active style.

### `TransitionProvider` — [src/components/transitionProvider.jsx](src/components/transitionProvider.jsx)

Wraps the entire app (mounted in `layout.js`). Uses Framer Motion `AnimatePresence` + `motion.div` to animate pages sliding in and out on route change. Also renders `<Navbar>` so it persists across all routes.

### `Brain` — [src/components/brain.jsx](src/components/brain.jsx)

A complex inline SVG of a brain graphic with animated rotating cog elements. Used as the sticky decorative element on the About page. Scroll progress from the parent drives an SVG path-drawing animation.

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Dev server runs at `http://localhost:3000`.

---

## Deployment

The project is a standard Next.js app and can be deployed to **Vercel** with zero configuration:

```bash
npx vercel
```

Or connect the GitHub repository to a Vercel project and push to `main`.

---

## Contact

**Haylemichael Tsega**
- Email: remantsega@gamil.com
- GitHub: [Reman-tsega](https://github.com/Reman-tsega)
- LinkedIn: [haylemichael-tsega](https://www.linkedin.com/in/haylemichael-tsega-2305651b5/)

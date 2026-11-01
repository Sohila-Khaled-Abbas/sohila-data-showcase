<div align="center">

# ✦ Sohila Khaled Abbas — Data Showcase Portfolio

> **Legacy Data Showcase — React/Vite portfolio prototype**  
> Transforming fragmented datasets into scalable, decision-ready architectures.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-6366f1?style=for-the-badge&logo=vercel&logoColor=white)](https://lovable.dev/projects/c0e6080c-79df-4076-9239-e53c9b548b64)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-BaaS-3ecf8e?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

</div>

---

## 📖 Project Overview

This repository contains the source code for a **personal data portfolio website** built for **Sohila Khaled Abbas** — a data and analytics engineering portfolio maintained as a legacy showcase project.

The site is designed to function as a living, interactive CV: showcasing real dashboards, certifications, technical skills, community contributions, and contact information — all in a single, performant single-page application.

### ✨ Key Highlights

| Area | Detail |
|---|---|
| 🏆 Certifications | Certification content displayed in the app (verify any claimed counts against the current data source) |
| 👥 Community | Mentoring and community content (quantified claims are not independently verified) |
| 📣 Influence | Social profile links and career highlights (no independently verified public ranking/count) |
| 📊 Projects | Curated BI dashboards and data engineering case studies |
| 🎨 Design | Dark-themed, animated UI with glassmorphism and ambient glow effects |

---

## 🗂️ Site Structure

The portfolio is organized as a single-page application with smooth scroll navigation through the following sections:

```
/
├── Hero               ← Name, title, and CTAs with floating animation
├── Stats              ← Animated KPI counters (certifications, followers, community)
├── About              ← Background and professional summary
├── Skills             ← Categorized tech stack with branded icons
├── Projects           ← Featured BI dashboards and data engineering projects
├── Community          ← Mentoring impact and community contributions
├── Credibility        ← Social proof, recognitions, and testimonials
├── Certifications     ← Full certification gallery with details
├── Contact            ← Contact form and social links
└── Footer             ← Legal and navigation links
```

---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI framework |
| **TypeScript 5** | Type-safe development |
| **Vite 5** | Lightning-fast dev server and bundler |
| **Tailwind CSS 3** | Utility-first styling with custom design tokens |
| **shadcn/ui** | Accessible, headless UI primitives (Radix UI) |
| **Framer Motion** | Declarative animations and scroll-triggered transitions |
| **Recharts** | Responsive data visualization charts |
| **React CountUp** | Animated numeric KPI counters |
| **React Icons** | Brand icons for tech stack display (Python, Kafka, Spark, etc.) |
| **Lucide React** | Consistent icon library |
| **React Router DOM** | Client-side routing |
| **TanStack Query** | Server state management and data fetching |
| **React Hook Form + Zod** | Form handling with runtime schema validation |

### Backend / Infrastructure

| Technology | Purpose |
|---|---|
| **Supabase** | Backend-as-a-Service: database, auth, and real-time APIs |
| **PostgreSQL** *(via Supabase)* | Relational data persistence |
| **Bun** | Fast JavaScript runtime and package manager |

---

## 🚀 Getting Started

### Prerequisites

The `predev` and `prebuild` scripts currently call `bunx`, so **Bun is required even when running npm commands**. Install Bun first. Supported package-manager choices:

- **Node.js ≥ 18** with `npm` — [Install via nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **Bun ≥ 1.0** — [Install Bun](https://bun.sh/)

### 1. Clone the Repository

```bash
git clone https://github.com/Sohila-Khaled-Abbas/sohila-data-showcase.git
cd sohila-data-showcase
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# OR using Bun (faster)
bun install
```

### 3. Configure Environment Variables

Copy the example env file and enter your *public* Supabase project URL and publishable key. The frontend deliberately receives those values; never use a Supabase service-role key in any `VITE_` variable:

```bash
cp .env.example .env
```

```env
# .env
VITE_SUPABASE_URL=https://<your-project>.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=<your-publishable-key>
```

> **Note:** You can find these values in your [Supabase project dashboard](https://app.supabase.com/) under **Project Settings → API**.

### 4. Start the Development Server

```bash
# Using npm
npm run dev

# OR using Bun
bun dev
```

The application will be available at **`http://localhost:8080`** with hot-module replacement enabled.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run build:dev` | Build bundle in development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## 📁 Project Structure

```
sohila-data-showcase/
├── public/
│   └── images/                  # Static assets (hero image, project thumbnails)
│
├── src/
│   ├── components/              # Reusable UI sections and components
│   │   ├── ui/                  # shadcn/ui primitives (button, badge, card…)
│   │   ├── projects/            # Project-specific sub-components
│   │   ├── Hero.tsx             # Landing hero with animation
│   │   ├── Stats.tsx            # Animated KPI counter cards
│   │   ├── About.tsx            # Professional summary
│   │   ├── Skills.tsx           # Tech stack categorized by domain
│   │   ├── Projects.tsx         # Portfolio project gallery
│   │   ├── Community.tsx        # Mentoring and community section
│   │   ├── Credibility.tsx      # Recognitions and social proof
│   │   ├── Certifications.tsx   # Certification showcase
│   │   ├── Contact.tsx          # Contact form with Supabase integration
│   │   ├── Header.tsx           # Sticky nav bar
│   │   └── Footer.tsx           # Site footer
│   │
│   ├── pages/
│   │   ├── Index.tsx            # Main page (composes all sections)
│   │   ├── Resume.tsx           # Dedicated resume/CV page
│   │   ├── Templates.tsx        # Template gallery page
│   │   └── NotFound.tsx         # 404 fallback
│   │
│   ├── integrations/            # Third-party integration clients (Supabase)
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions (cn, formatters…)
│   ├── App.tsx                  # Root component with router
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles and Tailwind directives
│
├── supabase/
│   ├── config.toml              # Supabase local dev configuration
│   └── migrations/              # SQL migration files
│
├── vite.config.ts               # Vite bundler configuration
├── tailwind.config.ts           # Tailwind theme and plugin configuration
├── tsconfig.json                # TypeScript compiler options
├── components.json              # shadcn/ui component registry config
└── package.json                 # Project metadata and dependencies
```

---

## 🗄️ Database (Supabase)

The project uses **Supabase** as its backend, providing:

- **PostgreSQL database** — stores contact form submissions and any dynamic content
- **Auto-generated REST & GraphQL APIs** — consumed via `@supabase/supabase-js`
- **Row Level Security (RLS)** — database-level access control
- **Realtime subscriptions** — available for future feature extensions

Database schema is version-controlled under `supabase/migrations/` and can be applied locally using the [Supabase CLI](https://supabase.com/docs/guides/cli).

```bash
# Apply migrations locally
supabase db push
```

---

## 🎨 Design System

The site uses a custom dark-themed design system built on top of Tailwind CSS with the following principles:

- **Color Palette** — HSL-based CSS custom properties (`--primary`, `--secondary`, `--accent`) enabling full dark/light theming via `next-themes`
- **Typography** — Inter font family for clean, modern readability
- **Glassmorphism** — `backdrop-blur` and semi-transparent backgrounds for layered depth
- **Ambient Glow** — Blurred radial gradients behind key UI elements
- **Micro-animations** — Framer Motion `whileInView` triggers for scroll-based entrance animations
- **Neon Hover Effects** — CSS utility class `neon-glow-hover` applied to interactive cards

---

## ☁️ Deployment

### Deploy via Lovable (Recommended)

The easiest way to publish this project:

1. Open the project on [Lovable](https://lovable.dev/projects/c0e6080c-79df-4076-9239-e53c9b548b64)
2. Click **Share → Publish**

Lovable handles CI/CD automatically; any commits pushed to this repository are reflected in the deployed environment.

### Manual Deployment (Vite Static Build)

This app compiles to a fully static bundle and can be deployed to any static host (Netlify, Vercel, Cloudflare Pages, AWS S3, etc.):

```bash
# Build production assets
npm run build

# Output is in /dist — deploy this directory to your host
```

### Custom Domain

To connect a custom domain via Lovable:

1. Navigate to **Project → Settings → Domains**
2. Click **Connect Domain** and follow the DNS configuration steps

📖 [Full guide: Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

---

## 🤝 Contributing

This is a personal portfolio project. If you spot a bug or have a suggestion:

1. **Fork** the repository
2. Create a feature branch: `git checkout -b fix/your-fix-name`
3. Commit your changes: `git commit -m 'fix: describe the fix'`
4. Push to the branch: `git push origin fix/your-fix-name`
5. Open a **Pull Request**

---

## 📬 Contact

**Sohila Khaled Abbas**

- 🌐 Portfolio: [sohila-data-showcase.lovable.app](https://lovable.dev/projects/c0e6080c-79df-4076-9239-e53c9b548b64)
- 💼 LinkedIn: [linkedin.com/in/sohila-khaled-abbas](https://www.linkedin.com/in/sohila-khaled-abbas)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

*Built with ❤️ by Sohila Khaled Abbas*

</div>


## Deployment and SEO notes (2026 maintenance)

This repository is a **legacy showcase**, separate from the primary portfolio at [sohila-khaled-abbas.vercel.app](https://sohila-khaled-abbas.vercel.app/). Avoid treating two sites as interchangeable without reviewing search-engine canonical URLs. The sitemap generator accepts `SITEMAP_BASE_URL` for this deployment and defaults to the older Lovable hostname, which may not match your current host; set it explicitly in the build environment when publishing. Verify the output `public/sitemap.xml` after building.

The Git-tracked `.env` currently contains only `VITE_SUPABASE_*` **publishable browser configuration**, not a server-side service-role key. Supabase publishable keys are designed to appear in browser bundles; security depends on correct Row Level Security (RLS), authentication and database policies. This maintenance PR adds an example file without removing the existing public config or changing production behavior. **Do not put passwords, service-role keys or other sensitive information in a `VITE_` variable or Git-tracked environment file.**

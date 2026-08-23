# Technical Documentation - prof_me Portfolio Application

## 1. Overview
`prof_me` is a modern, responsive single-page web portfolio application for **Aravind Sree U** (Python Developer & IoT Engineer). Built using **React (Vite)** and styled with **Tailwind CSS**, it features dual theme support (Dark / Light), a project showcase modal system, and embedded documentation for Python utility modules.

---

## 2. Technology Stack & Tools

- **Frontend Framework**: React 18+ (Vite)
- **Styling**: Tailwind CSS, Vanilla CSS
- **Iconography**: Inline SVG icons (Custom components)
- **Module Bundler**: Vite
- **Deployment Build Target**: Static Client Bundle (`dist/`)

---

## 3. Directory Architecture

```text
prof_me/
├── index.html                  # HTML5 Entry Point & Meta Configuration
├── package.json                # Project Dependencies & NPM Scripts
├── postcss.config.js           # PostCSS Configuration for Tailwind
├── tailwind.config.js          # Tailwind Utility & Color System Config
├── Technical_Documentation.md  # System Architecture & Specs (This File)
├── resources/                  # Design Specs & Deep Dive Notes
│   ├── Project Documentation - arvd_ap.md
│   ├── README.md
│   ├── Thulir Edtech .md
│   └── Tiny Language Design.md
└── src/                        # React Application Source
    ├── main.jsx                 # React Root Rendering & Entry Point
    ├── index.css                # Global Styles & Tailwind Directives
    └── App.jsx                  # Primary Portfolio Application Component
```

---

## 4. Key Functional Features & Components

### 4.1 Navigation Bar (`nav`)
- Sticky top navigation header with blurred backdrop (`backdrop-blur-md`).
- Brand identity badge ("AS") and quick navigation links (`About`, `Projects`, `Contact`).
- **External Link**: Quick access to external site (`arasamaram.in`).
- **Theme Switcher**: Upper-right button toggles between **Dark Mode** and **Light Mode** dynamically.

### 4.2 Hero Section (`#about`)
- Headline highlighting expertise in Electronics, AI, Python, and IoT engineering.
- Direct mail contact integration (`uaravindsree@gmail.com`).
- Social/platform integration bar (LinkedIn, Twitter/X, Discord, Ko-fi).
- Interactive **Tech & Tool Arsenal** card summarizing language proficiencies and hardware tools.

### 4.3 Featured Engineering Projects (`#projects`)
- Filterable project grid supporting categories: `All`, `EdTech & AI`, `Python Utility`, `Mobile & Security`, `Game Dev`.
- Clean card architecture displaying project titles and a dedicated **Details** button.
- Featured items:
  - **Thulir Edtech**
  - **TINY Programming Language**
  - **arvd_ap Utility Package**
  - **SecureVault Pro**
  - **Project XODA**
  - **System.Goodbye()**

### 4.4 Project Details Modal
- Triggered by clicking the **Details** button on any project card.
- Displays category badges, tagline, architecture highlights, tech stack tags, and full summary.
- **arvd_ap Explorer**: Special interactive UI inside the modal for `arvd_ap Utility Package` allowing filtering by category (`Mathematics`, `Number Theory`, `String Analysis`), function signature review, and one-click `pip install arvd_ap` copying.

---

## 5. Theme State & Design System

The application uses stateful theme switching (`'dark'` / `'light'`) managed at the root component level:

```javascript
const [theme, setTheme] = useState('dark');
const isDark = theme === 'dark';
```

- **Dark Theme** (Default): `bg-slate-950`, `text-slate-100`, glowing radial gradient ambient glows (`bg-cyan-600/15`, `bg-emerald-600/15`, `bg-indigo-600/15`).
- **Light Theme**: `bg-slate-50`, `text-slate-900`, high-contrast borders (`border-slate-200`), soft glowing backgrounds (`bg-cyan-400/25`, `bg-emerald-400/25`).

---

## 6. Development & Build Commands

- **Start Local Dev Server**:
  ```bash
  npm run dev
  ```
- **Build Production Bundle**:
  ```bash
  npm run build
  ```
- **Preview Production Build Locally**:
  ```bash
  npm run preview
  ```

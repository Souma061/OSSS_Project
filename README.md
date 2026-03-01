# OSSS Website Redesign

A modern, vibrant, and approachable tech startup website designed with a premium, enterprise-like aesthetic. Built from the ground up for performance, accessibility, and high engagement with fluid animations.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Emails:** [Resend](https://resend.com/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode support)

## 📁 Project Structure

```text
src/
├── app/          # Next.js App Router pages and layouts
├── components/   # Reusable UI components and page sections
├── config/       # Application configuration and constants
├── hooks/        # Custom React hooks
├── lib/          # Utility functions and type definitions
└── styles/       # Global CSS and Tailwind configurations
```

## 🛠️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v20+ recommended) and `npm` installed.

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up your environment variables in `.env` (make sure to set your Resend API key and any other necessary keys).

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Key Features

- **Premium UI/UX:** Clean backgrounds, contrasting text, and vibrant gradient accents inspired by top-tier modern web design trends.
- **Fluid Animations:** Smooth, subtle micro-interactions across the board leveraging Framer Motion.
- **Robust Contact Forms:** Fully typed and validated forms complete with animated feedback and reliable email delivery (including project assessment answers) via Resend.
- **Responsive Layouts:** Optimized for seamless viewing across all desktop, tablet, and mobile devices.

## 📜 Scripts

| Command         | Description                            |
|-----------------|----------------------------------------|
| `npm run dev`   | Starts the development server.         |
| `npm run build` | Builds the app for production.         |
| `npm run start` | Runs the production build locally.     |
| `npm run lint`  | Runs ESLint to check code quality.     |

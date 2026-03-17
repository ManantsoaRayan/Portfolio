# 🧠 Data Science Portfolio — Next.js + Tailwind + DaisyUI

A dark, terminal-inspired portfolio for data scientists and engineers. Projects are loaded **live from GitHub** — any repo with `DATASCIENCE` in its description is automatically featured.

## ✨ Features

- **Auto-fetched projects** via GitHub API — tag a repo `DATASCIENCE` in its description to feature it
- **Live Demo button** — add a Streamlit (or any) URL in the repo description and it appears automatically
- **Terminal hero** with typewriter animation
- **Scroll-reveal animations** throughout
- **Skills matrix** with grouped categories
- **One-click email copy** in the contact section
- **GitHub Pages deployment** via Actions (zero-cost hosting)
- Fully dark, grid-bg aesthetic with a data/terminal vibe

---

## 🚀 Quick Start

### 1. Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
```

### 2. Configure your info

Edit **`src/lib/config.ts`** — fill in your name, bio, GitHub username, skills, etc.

```ts
export const config = {
  name: "Jane Doe",
  github: "janedoe",          // ← REQUIRED for project fetching
  email: "jane@example.com",
  // ...
}
```

### 3. Run locally

```bash
npm run dev
# → http://localhost:3000
```

---

## 🏷️ Featuring Projects

For a repo to appear in the portfolio:

1. Add the word **`DATASCIENCE`** anywhere in the GitHub repo's description.
2. That's it — the portfolio fetches and displays it automatically.

### Adding a Live Demo link

Put a Streamlit (or any deployed app) URL in the description using any of these formats:

```
My cool model. DATASCIENCE demo: https://yourapp.streamlit.app
My cool model. DATASCIENCE [demo](https://yourapp.streamlit.app)
```

The parser extracts the URL and renders a **"Live Demo"** button on the project card.

---

## 🌐 Deploy to GitHub Pages

### One-time setup

1. Push this project to a GitHub repo (e.g. `username.github.io` or any repo name).
2. Go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Add your GitHub username as a repository variable:
   - **Settings → Variables → Actions → New repository variable**
   - Name: `NEXT_PUBLIC_GITHUB_USERNAME`
   - Value: `your_github_username`
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

### Optional: GitHub token for higher API rate limits

By default the GitHub API allows 60 requests/hour unauthenticated. For higher limits:

- Add a **repository secret** named `GITHUB_TOKEN` (this is auto-provided by Actions, no setup needed for public repos).

---

## 🎨 Customisation

| File | What to change |
|------|---------------|
| `src/lib/config.ts` | All personal info, skills, social links |
| `src/app/globals.css` | Colors, fonts, animations |
| `tailwind.config.js` | DaisyUI theme colors |
| `public/resume.pdf` | Drop your CV here |
| `public/favicon.ico` | Your favicon |

### Changing the accent color

The primary accent is `#e8613a` (orange-red). Search & replace across the project, or update the DaisyUI theme in `tailwind.config.js`:

```js
datatheme: {
  'primary': '#YOUR_COLOR',
  // ...
}
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Main page (server component, fetches GitHub data)
│   └── globals.css       # Global styles, animations, utility classes
├── components/
│   ├── Navbar.tsx        # Sticky nav with scroll effect
│   ├── Hero.tsx          # Typewriter terminal hero
│   ├── About.tsx         # Bio + avatar + what I bring
│   ├── Projects.tsx      # Project grid section
│   ├── ProjectCard.tsx   # Individual project card
│   ├── Skills.tsx        # Skill groups with animated badges
│   ├── Contact.tsx       # Email + social links
│   └── Footer.tsx        # Footer
└── lib/
    ├── config.ts         # ← YOUR SETTINGS HERE
    └── github.ts         # GitHub API fetcher + parser
```

---

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [GitHub API](https://docs.github.com/en/rest)

---

## 📄 License

MIT — use freely, attribution appreciated but not required.

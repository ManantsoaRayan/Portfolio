// ============================================================
// PORTFOLIO CONFIGURATION — Edit everything in this file!
// ============================================================

export const config = {
  // ── Personal Info ──────────────────────────────────────────
  name: "Randrianarivelo Manantsoa Rayan",
  title: "Data Scientist & Engineer",
  tagline: "Turning raw data into decisions.",
  bio: `I'm a data professional passionate about building end-to-end data solutions — 
from raw pipeline to production ML models. I enjoy working at the intersection of 
engineering rigor and analytical depth, and I love crafting tools that make data 
accessible and actionable.`,
  location: "Antananarivo, Madagascar",
  email: "you@example.com",
  avatar: "", // URL or leave empty for initials avatar

  // ── Social Links ───────────────────────────────────────────
  github: "ManantsoaRayan", // ← REQUIRED — also drives project fetching
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "", // or X handle — leave empty to hide
  kaggle: "https://kaggle.com/yourprofile", // leave empty to hide

  // ── Skills ─────────────────────────────────────────────────
  // Each group has a label, an emoji icon, and a list of skills
  skillGroups: [
    {
      label: "Languages",
      icon: "💻",
      skills: ["Python", "SQL", "R", "Bash", "JavaScript"],
    },
    {
      label: "Data & ML",
      icon: "🧠",
      skills: [
        "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch",
        "XGBoost", "LightGBM", "Hugging Face",
      ],
    },
    {
      label: "Data Engineering",
      icon: "⚙️",
      skills: [
        "Apache Spark", "Airflow", "dbt", "Kafka",
        "PostgreSQL", "BigQuery", "Snowflake", "DuckDB",
      ],
    },
    {
      label: "Visualisation",
      icon: "📊",
      skills: ["Matplotlib", "Plotly", "Seaborn", "Streamlit", "Tableau", "Power BI"],
    },
    {
      label: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "GCP", "Docker", "GitHub Actions", "Terraform"],
    },
  ],

  // ── Resume / CV ────────────────────────────────────────────
  resumeUrl: "/resume.pdf", // place your PDF in /public and set path here

  // ── Fun stats shown in the hero ───────────────────────────
  stats: [
    { value: "50+", label: "Datasets analysed" },
    { value: "20+", label: "Models deployed" },
    { value: "5+", label: "Years experience" },
  ],
}

export type Config = typeof config

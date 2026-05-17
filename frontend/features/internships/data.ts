import type { Application, DashboardMetric, Internship } from "@/types";

export const internships: Internship[] = [
  {
    id: "laravel-ai-fintech",
    title: "Stage Fullstack Laravel / Next.js - FinTech",
    company: "KoriPay Labs",
    city: "Douala",
    domain: "FinTech",
    mode: "hybrid",
    type: "pre-employment",
    stipend: 180000,
    tags: ["Laravel", "Next.js", "PostgreSQL", "API"],
    matchScore: 94,
    publishedAt: "2026-05-10",
    description: "Construire des modules SaaS sécurisés, optimiser des APIs REST et participer à la roadmap produit d'une FinTech en forte croissance."
  },
  {
    id: "data-analytics-edtech",
    title: "Assistant Data & Analytics RH",
    company: "EduBridge Africa",
    city: "Yaoundé",
    domain: "EdTech",
    mode: "remote",
    type: "academic",
    stipend: 120000,
    tags: ["Python", "SQL", "Power BI", "Analytics"],
    matchScore: 88,
    publishedAt: "2026-05-12",
    description: "Analyser les parcours étudiants, créer des tableaux de bord et améliorer les recommandations de stages par scoring."
  },
  {
    id: "ux-product-saas",
    title: "Product Designer Junior - SaaS B2B",
    company: "LinearWorks Studio",
    city: "Bafoussam",
    domain: "SaaS",
    mode: "onsite",
    type: "professional",
    stipend: 150000,
    tags: ["Figma", "UX Research", "Design System"],
    matchScore: 81,
    publishedAt: "2026-05-14",
    description: "Concevoir des parcours premium, documenter un design system et améliorer l’activation des utilisateurs B2B."
  }
];

export const metrics: DashboardMetric[] = [
  { label: "Candidatures", value: "18", trend: "+23% ce mois" },
  { label: "Score profil", value: "86%", trend: "+12 points" },
  { label: "Offres matchées", value: "42", trend: "9 prioritaires" },
  { label: "Entretiens", value: "5", trend: "2 planifiés" }
];

export const applications: Application[] = internships.map((internship, index) => ({
  id: `app-${internship.id}`,
  internship,
  status: (["reviewing", "viewed", "sent"] as const)[index],
  createdAt: "2026-05-15"
}));

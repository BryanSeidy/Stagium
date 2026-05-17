import { DashboardShell } from "@/components/layout/dashboard-shell";
import { internships } from "@/features/internships/data";
import { InternshipCard } from "@/features/internships/internship-card";
const nav = [{ href: "/student/dashboard", label: "Dashboard" }, { href: "/student/profile", label: "Profil" }, { href: "/student/applications", label: "Candidatures" }, { href: "/student/recommendations", label: "Recommandations" }, { href: "/student/settings", label: "Paramètres" }];
export default function RecommendationsPage() { return <DashboardShell title="Recommandations IA" nav={nav}><div className="grid gap-5 md:grid-cols-3">{internships.map((i) => <InternshipCard key={i.id} internship={i} />)}</div></DashboardShell>; }

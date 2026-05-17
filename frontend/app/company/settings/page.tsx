import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";
import { MetricCard } from "@/features/dashboard/metric-card";
const nav = [{ href: "/company/dashboard", label: "Dashboard" }, { href: "/company/internships", label: "Offres" }, { href: "/company/candidates", label: "Candidats" }, { href: "/company/settings", label: "Paramètres" }];
const metrics = [{ label: "Offres actives", value: "12", trend: "+3" }, { label: "Candidats", value: "248", trend: "+31%" }, { label: "Taux matching", value: "78%", trend: "+8 pts" }];
export default function CompanyPage() { return <DashboardShell title="Espace entreprise" nav={nav}><div className="grid gap-5 md:grid-cols-3">{metrics.map((m) => <MetricCard key={m.label} metric={m} />)}</div><Card className="mt-6"><h2 className="text-xl font-black">Pipeline recrutement</h2><p className="mt-2 text-slate-600">Publiez des offres, qualifiez les candidatures, contactez les étudiants et suivez les statistiques.</p></Card></DashboardShell>; }

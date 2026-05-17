import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";
import { MetricCard } from "@/features/dashboard/metric-card";
const nav = [{ href: "/admin/dashboard", label: "Dashboard" }, { href: "/admin/users", label: "Utilisateurs" }, { href: "/admin/analytics", label: "Analytics" }, { href: "/admin/moderation", label: "Modération" }];
const metrics = [{ label: "Utilisateurs", value: "4.8k", trend: "+18%" }, { label: "Entreprises validées", value: "214", trend: "+12" }, { label: "Alertes sécurité", value: "0", trend: "stable" }];
export default function AdminPage() { return <DashboardShell title="Administration plateforme" nav={nav}><div className="grid gap-5 md:grid-cols-3">{metrics.map((m) => <MetricCard key={m.label} metric={m} />)}</div><Card className="mt-6"><h2 className="text-xl font-black">Monitoring & modération</h2><p className="mt-2 text-slate-600">Contrôle utilisateurs, validation entreprises, suppression contenu, analytics basiques et logs système.</p></Card></DashboardShell>; }

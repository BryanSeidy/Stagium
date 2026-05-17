import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";
const nav = [{ href: "/student/dashboard", label: "Dashboard" }, { href: "/student/profile", label: "Profil" }, { href: "/student/applications", label: "Candidatures" }, { href: "/student/recommendations", label: "Recommandations" }, { href: "/student/settings", label: "Paramètres" }];
export default function SettingsPage() { return <DashboardShell title="Paramètres" nav={nav}><Card><h2 className="text-xl font-black">Sécurité du compte</h2><p className="mt-2 text-slate-600">Sessions actives, notifications email, préférences de confidentialité et changement de mot de passe.</p></Card></DashboardShell>; }

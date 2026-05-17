import { Navbar } from "@/components/layout/navbar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { internships } from "@/features/internships/data";
import { InternshipCard } from "@/features/internships/internship-card";

export default function InternshipsPage() {
  return <><Navbar /><main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-6 md:flex-row"><div><Badge>Recherche intelligente</Badge><h1 className="mt-4 text-4xl font-black tracking-tight">Offres de stage</h1><p className="mt-3 text-slate-600">Filtrez par ville, domaine, technologie, rémunération et mode.</p></div><div className="grid gap-3 sm:grid-cols-2"><Input placeholder="Ville" /><Input placeholder="Technologie" /></div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{internships.map((internship) => <InternshipCard key={internship.id} internship={internship} />)}</div></main></>;
}

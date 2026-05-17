import { Navbar } from "@/components/layout/navbar";
import { Card } from "@/components/ui/card";
const companies = ["KoriPay Labs", "EduBridge Africa", "LinearWorks Studio", "AfriCloud Systems"];
export default function CompaniesPage() { return <><Navbar /><main className="mx-auto max-w-7xl px-4 py-12"><h1 className="text-4xl font-black">Entreprises partenaires</h1><div className="mt-8 grid gap-5 md:grid-cols-4">{companies.map((company) => <Card key={company}><div className="grid size-14 place-items-center rounded-3xl bg-emerald-50 font-black text-emerald-700">{company[0]}</div><h2 className="mt-4 font-black">{company}</h2><p className="mt-2 text-sm text-slate-500">Profil vérifié, offres actives et processus de recrutement structuré.</p></Card>)}</div></main></>; }

import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { internships } from "@/features/internships/data";

export default async function InternshipDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const internship = internships.find((item) => item.id === id);
  if (!internship) notFound();
  return <><Navbar /><main className="mx-auto max-w-5xl px-4 py-12"><Card><Badge>{internship.matchScore}% compatibilité</Badge><h1 className="mt-4 text-4xl font-black tracking-tight">{internship.title}</h1><p className="mt-2 text-lg font-semibold text-primary">{internship.company} · {internship.city}</p><p className="mt-6 leading-8 text-slate-600">{internship.description} Vous contribuerez à des livrables réels, avec mentorat, objectifs hebdomadaires et évaluation structurée.</p><div className="mt-6 flex flex-wrap gap-2">{internship.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div><Button className="mt-8">Postuler avec mon profil</Button></Card></main></>;
}

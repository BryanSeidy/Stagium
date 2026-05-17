import Link from "next/link";
import { MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import type { Internship } from "@/types";

export function InternshipCard({ internship }: { internship: Internship }) {
  return (
    <Card className="group transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-primary">{internship.company}</p>
          <h3 className="mt-2 text-xl font-black tracking-tight">{internship.title}</h3>
        </div>
        {internship.matchScore ? <Badge className="bg-emerald-50 text-emerald-700"><Sparkles size={13} /> {internship.matchScore}% match</Badge> : null}
      </div>
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">{internship.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">{internship.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
      <div className="mt-6 flex items-center justify-between gap-4 text-sm text-slate-500">
        <span className="flex items-center gap-1"><MapPin size={15} /> {internship.city} · {internship.mode}</span>
        <span className="font-semibold text-slate-900">{formatCurrency(internship.stipend)}</span>
      </div>
      <Button asChild className="mt-6 w-full"><Link href={`/internships/${internship.id}`}>Voir le détail</Link></Button>
    </Card>
  );
}

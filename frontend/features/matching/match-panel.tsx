import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export function MatchPanel() {
  const criteria = ["Compétences techniques", "Localisation & mode", "Préférences métier", "Historique candidatures"];
  return (
    <Card className="bg-slate-950 text-white">
      <div className="flex items-center gap-3"><Sparkles className="text-emerald-300" /><h2 className="text-xl font-black">Matching intelligent</h2></div>
      <p className="mt-3 text-sm leading-6 text-slate-300">Le moteur MVP calcule un score pondéré entre profil étudiant et offre. Il est isolé pour évoluer vers analyse CV, embeddings et recommandations IA.</p>
      <div className="mt-6 grid gap-3">{criteria.map((item, index) => <div key={item} className="flex items-center justify-between rounded-2xl bg-white/10 p-3 text-sm"><span>{item}</span><strong>{92 - index * 7}%</strong></div>)}</div>
    </Card>
  );
}

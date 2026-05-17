import Link from "next/link";
import { BriefcaseBusiness, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-black tracking-tight">
          <span className="grid size-9 place-items-center rounded-2xl bg-primary text-primary-foreground"><BriefcaseBusiness size={18} /></span>
          Stagium
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/internships">Offres</Link>
          <Link href="/companies">Entreprises</Link>
          <Link href="/student/dashboard">Étudiants</Link>
          <Link href="/company/dashboard">Recruteurs</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/auth/login" className="hidden text-sm font-semibold sm:block">Connexion</Link>
          <Button asChild size="sm"><Link href="/auth/register"><ShieldCheck size={16} /> Commencer</Link></Button>
        </div>
      </nav>
    </header>
  );
}

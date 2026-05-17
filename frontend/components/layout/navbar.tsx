import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <BrandLogo priority markClassName="size-11" />
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/internships" className="transition hover:text-slate-950">Offres</Link>
          <Link href="/companies" className="transition hover:text-slate-950">Entreprises</Link>
          <Link href="/student/dashboard" className="transition hover:text-slate-950">Étudiants</Link>
          <Link href="/company/dashboard" className="transition hover:text-slate-950">Recruteurs</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/auth/login" className="hidden text-sm font-semibold transition hover:text-primary sm:block">Connexion</Link>
          <Button asChild size="sm"><Link href="/auth/register"><ShieldCheck size={16} /> Commencer</Link></Button>
        </div>
      </nav>
    </header>
  );
}

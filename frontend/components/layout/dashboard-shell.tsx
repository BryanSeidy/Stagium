import Link from "next/link";
import { ReactNode } from "react";
import { Bell, Search } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Input } from "@/components/ui/input";

export function DashboardShell({ title, nav, children }: { title: string; nav: { href: string; label: string }[]; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r bg-white p-6 lg:block">
        <BrandLogo markClassName="size-12 rounded-[1.35rem]" />
        <div className="mt-8 rounded-[1.75rem] border border-emerald-100 bg-emerald-50/70 p-4 text-xs font-semibold leading-5 text-emerald-900">
          Plateforme certifiée pour stages, candidatures et matching intelligent.
        </div>
        <nav className="mt-8 grid gap-2">
          {nav.map((item) => <Link key={item.href} className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950" href={item.href}>{item.label}</Link>)}
        </nav>
      </aside>
      <section className="lg:pl-64">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b bg-white/85 px-4 py-4 backdrop-blur lg:px-8">
          <div className="flex items-center gap-4">
            <BrandLogo showWordmark={false} markClassName="size-11 lg:hidden" />
            <div>
              <p className="text-sm text-slate-500">Workspace sécurisé</p>
              <h1 className="text-2xl font-black tracking-tight">{title}</h1>
            </div>
          </div>
          <div className="hidden w-96 items-center gap-2 rounded-full border bg-white px-3 md:flex"><Search size={16} /><Input className="border-0 focus:ring-0" placeholder="Recherche intelligente..." /></div>
          <button aria-label="Notifications" className="grid size-11 place-items-center rounded-full border bg-white"><Bell size={18} /></button>
        </header>
        <div className="p-4 lg:p-8">{children}</div>
      </section>
    </main>
  );
}

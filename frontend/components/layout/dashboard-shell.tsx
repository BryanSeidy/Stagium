import Link from "next/link";
import { ReactNode } from "react";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function DashboardShell({ title, nav, children }: { title: string; nav: { href: string; label: string }[]; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r bg-white p-6 lg:block">
        <Link href="/" className="text-xl font-black">Stagium</Link>
        <nav className="mt-10 grid gap-2">
          {nav.map((item) => <Link key={item.href} className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100" href={item.href}>{item.label}</Link>)}
        </nav>
      </aside>
      <section className="lg:pl-64">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b bg-white/85 px-4 py-4 backdrop-blur lg:px-8">
          <div>
            <p className="text-sm text-slate-500">Workspace sécurisé</p>
            <h1 className="text-2xl font-black tracking-tight">{title}</h1>
          </div>
          <div className="hidden w-96 items-center gap-2 rounded-full border bg-white px-3 md:flex"><Search size={16} /><Input className="border-0 focus:ring-0" placeholder="Recherche intelligente..." /></div>
          <button aria-label="Notifications" className="grid size-11 place-items-center rounded-full border bg-white"><Bell size={18} /></button>
        </header>
        <div className="p-4 lg:p-8">{children}</div>
      </section>
    </main>
  );
}

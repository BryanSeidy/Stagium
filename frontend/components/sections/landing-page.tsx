"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Building2, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "@/animations/variants";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InternshipCard } from "@/features/internships/internship-card";
import { internships } from "@/features/internships/data";

const features = [
  { icon: Sparkles, title: "Matching intelligent", text: "Scores explicables entre compétences, préférences et exigences des offres." },
  { icon: GraduationCap, title: "Profil étudiant premium", text: "Mini LinkedIn étudiant avec CV, portfolio, projets et progression." },
  { icon: Building2, title: "ATS entreprise", text: "Publication d’offres, pipeline candidats et statistiques de recrutement." },
  { icon: ShieldCheck, title: "Sécurité SaaS", text: "RBAC, JWT, refresh tokens, validation stricte et audit-ready." }
];

export function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#dcfce7,transparent_35%),#f8fafc]">
      <Navbar />
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex rounded-full border bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">MVP SaaS académique · IA-ready · Production-ready</motion.div>
            <motion.h1 variants={fadeUp} className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-7xl">La plateforme intelligente qui transforme les stages en opportunités réelles.</motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Stagium connecte étudiants, entreprises et établissements avec une expérience moderne inspirée des meilleurs SaaS, un moteur de matching extensible et des workflows sécurisés.</motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link href="/auth/register">Créer un compte <ArrowRight size={18} /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/internships">Explorer les offres</Link></Button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7 }} className="rounded-[2.5rem] border bg-white/75 p-4 shadow-2xl backdrop-blur">
            <InternshipCard internship={internships[0]} />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center"><Stat value="94%" label="match" /><Stat value="2.4k" label="talents" /><Stat value="180" label="offres" /></div>
          </motion.div>
        </section>
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">{features.map((feature) => <Card key={feature.title} className="hover:shadow-xl"><feature.icon className="text-primary" /><h3 className="mt-5 text-lg font-black">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{feature.text}</p></Card>)}</div>
        </section>
        <section className="border-y bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {["Université de Yaoundé", "KoriPay Labs", "EduBridge Africa"].map((name) => <div key={name} className="rounded-3xl border p-6 text-center font-black text-slate-500">{name}</div>)}
          </div>
        </section>
        <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <BarChart3 className="mx-auto text-primary" size={36} /><h2 className="mt-4 text-4xl font-black tracking-tight">Pensé pour la soutenance, prêt pour le marché.</h2><p className="mt-4 text-slate-600">Architecture API-first, dashboards par rôle, notifications, analytics et fondations IA pour une évolution startup.</p>
        </section>
      </main>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-3xl bg-slate-50 p-4"><div className="text-2xl font-black">{value}</div><div className="text-xs font-semibold uppercase text-slate-500">{label}</div></div>;
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginSchema, registerSchema, type LoginInput, type RegisterInput } from "@/validators/auth";

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });
  return <Card className="mx-auto max-w-md"><h1 className="text-3xl font-black">Connexion</h1><p className="mt-2 text-sm text-slate-500">Accédez à votre workspace Stagium.</p><form onSubmit={handleSubmit(console.log)} className="mt-8 grid gap-4"><Input placeholder="Email" {...register("email")} /><Error text={errors.email?.message} /><Input type="password" placeholder="Mot de passe" {...register("password")} /><Error text={errors.password?.message} /><Button type="submit">Se connecter</Button></form></Card>;
}

export function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema), defaultValues: { role: "student" } });
  return <Card className="mx-auto max-w-xl"><h1 className="text-3xl font-black">Créer un compte</h1><p className="mt-2 text-sm text-slate-500">Inscription étudiant ou entreprise avec validation sécurisée.</p><form onSubmit={handleSubmit(console.log)} className="mt-8 grid gap-4"><Input placeholder="Nom complet" {...register("name")} /><Error text={errors.name?.message} /><Input placeholder="Email" {...register("email")} /><Error text={errors.email?.message} /><Input placeholder="École ou entreprise" {...register("organization")} /><select className="h-11 rounded-2xl border px-4" {...register("role")}><option value="student">Étudiant</option><option value="company">Entreprise</option></select><Input type="password" placeholder="Mot de passe fort" {...register("password")} /><Error text={errors.password?.message} /><Button type="submit">Démarrer l’onboarding</Button></form></Card>;
}

function Error({ text }: { text?: string }) { return text ? <p className="text-xs font-medium text-red-600">{text}</p> : null; }

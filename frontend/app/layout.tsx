import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/layout/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stagium — Smart Internship Platform",
  description: "Plateforme SaaS intelligente de gestion des stages académiques et d'insertion professionnelle étudiante."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}

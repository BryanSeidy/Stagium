"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BriefcaseBusiness } from "lucide-react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href?: string;
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  priority?: boolean;
  tone?: "light" | "dark";
};

const logoSrc = "/brand/stagium-logo.png";

export function BrandLogo({
  href = "/",
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
  priority = false,
  tone = "light"
}: BrandLogoProps) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const content = (
    <span className={cn("inline-flex items-center gap-3", className)} aria-label="Stagium">
      <span className={cn("relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm", markClassName)}>
        {!imageUnavailable ? (
          <Image
            src={logoSrc}
            alt="Logo Stagium"
            fill
            sizes="40px"
            priority={priority}
            className="object-contain p-1.5"
            onError={() => setImageUnavailable(true)}
          />
        ) : (
          <span className="grid size-full place-items-center bg-gradient-to-br from-emerald-500 to-slate-950 text-white">
            <BriefcaseBusiness size={18} aria-hidden="true" />
          </span>
        )}
      </span>
      {showWordmark ? (
        <span className={cn("leading-none", wordmarkClassName)}>
          <span className={cn("block text-lg font-black tracking-[-0.03em]", tone === "dark" ? "text-white" : "text-slate-950")}>Stagium</span>
          <span className={cn("mt-1 hidden text-[10px] font-bold uppercase tracking-[0.22em] sm:block", tone === "dark" ? "text-emerald-100/80" : "text-slate-400")}>Career OS</span>
        </span>
      ) : null}
    </span>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

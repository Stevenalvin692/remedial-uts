"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const linkClass = (path) =>
    `px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border border-transparent ${
      isActive(path)
        ? "text-indigo-600 bg-indigo-500/10 border-indigo-500 dark:text-indigo-400"
        : "text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto px-6 py-3.5 gap-3">
        <Link href="/" className="text-xl font-extrabold bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent">
          PustakaKu
        </Link>
        <ul className="flex flex-wrap items-center gap-2 list-none">
          <li><Link href="/" className={linkClass("/")}>Beranda</Link></li>
          <li><Link href="/tentang" className={linkClass("/tentang")}>Tentang</Link></li>
          <li><Link href="/koleksi" className={linkClass("/koleksi")}>Koleksi</Link></li>
          <li><Link href="/kontak" className={linkClass("/kontak")}>Kontak</Link></li>
          <li><Link href="/login" className={linkClass("/login")}>Login</Link></li>
          <li><Link href="/register" className={linkClass("/register")}>Register</Link></li>
        </ul>
      </div>
    </header>
  );
}
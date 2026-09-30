import Link from "next/link";

export default function Home() {
  return (
    <section className="animate-in fade-in duration-500">
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent mb-2">
        Selamat Datang di Pustaka J.A
      </h1>
      <p className="text-lg text-slate-500 dark:text-slate-400 mb-10">
        Perpustakaan digital sederhana buat kelola data buku. Dibikin buat latihan Next.js + Prisma + Tailwind.
      </p>
      <div className="mb-5 p-6 bg-white/50 dark:bg-slate-900/60 border border-white/30 dark:border-slate-800/50 rounded-2xl shadow-lg backdrop-blur-md">
        <h3 className="mb-2.5 text-xl font-bold">a day in my life/ in another life</h3>
        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
          Disini bisa liat daftar buku, nambah koleksi baru, edit kalau ada salah ketik, sama hapus buku yang udah gak dipake. Cek juga halaman <strong>Koleksi</strong> buat liat pembagian kategori.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link href="/admin" className="inline-block px-8 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
          Masuk Dashboard →
        </Link>
        <Link href="/kontak" className="inline-block px-8 py-3 text-sm font-semibold text-slate-800 bg-slate-200 hover:bg-slate-300 dark:text-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full shadow-md transition-all">
          Hubungi Admin
        </Link>
      </div>
    </section>
  );
}
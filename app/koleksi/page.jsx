export const metadata = { title: "Koleksi" };

const koleksi = [
  { name: "Fiksi", jumlah: 24, warna: "from-indigo-500 to-indigo-400" },
  { name: "Non-Fiksi", jumlah: 18, warna: "from-emerald-500 to-emerald-400" },
  { name: "Pelajaran", jumlah: 32, warna: "from-amber-500 to-amber-400" },
  { name: "Komik", jumlah: 15, warna: "from-pink-500 to-pink-400" },
  { name: "Sejarah", jumlah: 9, warna: "from-rose-500 to-rose-400" },
];

export default function Koleksi() {
  const total = koleksi.reduce((a, b) => a + b.jumlah, 0);
  return (
    <section>
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent mb-2">
        Koleksi Buku
      </h1>
      <p className="text-lg text-slate-500 dark:text-slate-400 mb-10">
        Total ada <strong>{total} buku</strong> yang tersebar di beberapa kategori.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {koleksi.map((k) => (
          <div key={k.name} className="p-6 bg-white/50 dark:bg-slate-900/60 border border-white/30 dark:border-slate-800/50 rounded-2xl shadow-lg backdrop-blur-md">
            <h3 className="mb-1 text-lg font-bold">{k.name}</h3>
            <div className="w-full h-2.5 mt-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className={`h-full rounded-full bg-gradient-to-r ${k.warna}`} style={{ width: `${(k.jumlah / total) * 100}%` }} />
            </div>
            <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">{k.jumlah} buku</p>
          </div>
        ))}
      </div>
    </section>
  );
}
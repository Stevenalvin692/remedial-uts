export const metadata = { title: "Tentang" };

export default function Tentang() {
  return (
    <section>
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent mb-2">
        Tentang PustakaKu
      </h1>
      <p className="text-lg text-slate-500 dark:text-slate-400 mb-10">
        Mari kita kepo tentang website yang saya buat
      </p>
      <div className="mb-5 p-6 bg-white/50 dark:bg-slate-900/60 border border-white/30 dark:border-slate-800/50 rounded-2xl shadow-lg backdrop-blur-md">
        <h3 className="mb-2.5 text-xl font-bold">Apa itu Pustaka yang saya buat?</h3>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
          PustakaKu itu web sederhana buat nyatet data buku perpustakaan. Dibikin pake Next.js App Router, Prisma ORM, sama Tailwind CSS.
        </p>
      </div>
      <div className="mb-5 p-6 bg-white/50 dark:bg-slate-900/60 border border-white/30 dark:border-slate-800/50 rounded-2xl shadow-lg backdrop-blur-md">
        <h3 className="mb-2.5 text-xl font-bold">Yang Dipake adalah</h3>
        <ul className="list-disc pl-5 text-slate-500 dark:text-slate-400 leading-relaxed space-y-1">
          <li>Next.js App Router + Server Actions</li>
          <li>Prisma ORM</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
      <div className="mb-5 p-6 bg-white/50 dark:bg-slate-900/60 border border-white/30 dark:border-slate-800/50 rounded-2xl shadow-lg backdrop-blur-md">
        <h3 className="mb-2.5 text-xl font-bold">Tujuan bikin apk ini</h3>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
          Tujuannnya untuk UTS aja, soalnya pusing banget harus copy dari file sebelumnya
        </p>
      </div>
    </section>
  );
}
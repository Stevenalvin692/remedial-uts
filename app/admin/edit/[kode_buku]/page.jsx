import { prisma } from "@/lib/prisma";
import { updateBuku } from "../../actions";
import { redirect } from "next/navigation";

export default async function EditBukuPage({ params }) {
  const { kode_buku } = await params;
  const kode = Number(kode_buku);
  const buku = await prisma.pm_buku.findUnique({ where: { kode_buku: kode } });
  if (!buku) redirect("/admin");

  async function handleUpdate(formData) {
    "use server";
    await updateBuku(formData);
    redirect("/admin");
  }

  const inputClass =
    "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white/60 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15 transition-all";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent mb-8">
        Edit Buku
      </h1>
      <div className="p-8 bg-white/40 dark:bg-slate-900/50 border border-white/20 dark:border-slate-800/50 rounded-2xl shadow-lg backdrop-blur-md">
        <form action={handleUpdate} className="flex flex-col gap-6">
          <input type="hidden" name="kode_buku" value={buku.kode_buku} />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">Kode Buku</label>
            <input type="text" value={buku.kode_buku} disabled className={`${inputClass} opacity-60 cursor-not-allowed`} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">Judul Buku</label>
            <input type="text" name="judul" defaultValue={buku.judul} required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">Pengarang</label>
            <input type="text" name="pengarang" defaultValue={buku.pengarang} required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">Kategori</label>
            <select name="kategori" defaultValue={buku.kategori} required className={inputClass}>
              <option value="Fiksi">Fiksi</option>
              <option value="Non-Fiksi">Non-Fiksi</option>
              <option value="Pelajaran">Pelajaran</option>
              <option value="Komik">Komik</option>
              <option value="Sejarah">Sejarah</option>
            </select>
          </div>
          <button type="submit" className="px-8 py-3 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-md transition-all">
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
  );
}
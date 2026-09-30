import { tambahBuku } from "@/app/admin/actions";

export default function FormTambahBuku() {
  return (
    <form action={tambahBuku} className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold">
          Kode Buku
        </label>

        <input
          type="number"
          name="kode_buku"
          required
          className="w-full rounded-lg border px-4 py-2"
          placeholder="Contoh: 101"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">
          Judul Buku
        </label>

        <input
          type="text"
          name="judul"
          required
          className="w-full rounded-lg border px-4 py-2"
          placeholder="Masukkan judul buku"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">
          Pengarang
        </label>

        <input
          type="text"
          name="pengarang"
          required
          className="w-full rounded-lg border px-4 py-2"
          placeholder="Masukkan nama pengarang"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">
          Kategori
        </label>

        <select
          name="kategori"
          required
          className="w-full rounded-lg border px-4 py-2"
        >
          <option value="">Pilih kategori</option>
          <option value="Fiksi">Fiksi</option>
          <option value="Non-Fiksi">Non-Fiksi</option>
          <option value="Pelajaran">Pelajaran</option>
          <option value="Komik">Komik</option>
          <option value="Sejarah">Sejarah</option>
        </select>
      </div>

      <button
        type="submit"
        className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700"
      >
        Tambah Buku
      </button>
    </form>
  );
}
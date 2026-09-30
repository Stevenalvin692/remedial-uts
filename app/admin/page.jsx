import Link from "next/link";
import { prisma } from "@/lib/prisma";
import FormTambahBuku from "@/components/FormTambahBuku";
import TombolHapus from "@/components/TombolHapus";
import LogoutButton from "./LogoutButton";

export default async function AdminPage() {
  const daftarBuku = await prisma.pm_buku.findMany({
    orderBy: {
      kode_buku: "asc",
    },
  });

  return (
    <div className="w-full">

      <div className="flex items-start justify-between flex-wrap gap-3 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold">
            Dashboard Perpustakaan
          </h1>

          <p className="text-slate-500">
            Kelola data buku di sini
          </p>
        </div>

        <LogoutButton />
      </div>

      <h2 className="text-xl font-bold mb-4">
        Tambah Buku
      </h2>

      <div className="mb-8 p-6 bg-white border rounded-2xl shadow">
        <FormTambahBuku />
      </div>

      {/* READ */}
      <h2 className="text-xl font-bold mb-4">
        Daftar Buku
      </h2>

      {daftarBuku.length === 0 ? (
        <p className="text-slate-500 text-center py-10">
          Belum ada buku yang terdaftar.
        </p>
      ) : (
        <div className="space-y-3">
          {daftarBuku.map((buku) => (
            <div
              key={buku.kode_buku}
              className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border rounded-xl"
            >
              <div>
                <div className="font-bold">
                  #{buku.kode_buku} - {buku.judul}
                </div>

                <div className="text-sm text-slate-500">
                  Pengarang: {buku.pengarang}
                </div>

                <div className="text-sm text-slate-500">
                  Kategori: {buku.kategori}
                </div>
              </div>

              <div className="flex gap-2">

                <Link
                  href={`/admin/edit/${buku.kode_buku}`}
                  className="px-3 py-1.5 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-md"
                >
                  Edit
                </Link>

                <TombolHapus
                  kode_buku={buku.kode_buku}
                />

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
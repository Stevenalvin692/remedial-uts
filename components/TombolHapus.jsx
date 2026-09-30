import { hapusBuku } from "@/app/admin/actions";

export default function TombolHapus({ kode_buku }) {
  return (
    <form action={hapusBuku}>
      <input
        type="hidden"
        name="kode_buku"
        value={kode_buku}
      />

      <button
        type="submit"
        className="rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-600"
      >
        Hapus
      </button>
    </form>
  );
}
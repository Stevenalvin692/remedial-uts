-- CreateTable
CREATE TABLE "pm_buku" (
    "kode_buku" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "judul" TEXT NOT NULL,
    "pengarang" TEXT NOT NULL,
    "kategori" TEXT NOT NULL
);

"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function tambahBuku(formData) {
  const kode_buku = Number(formData.get("kode_buku"));
  const judul = String(formData.get("judul") || "").trim();
  const pengarang = String(formData.get("pengarang") || "").trim();
  const kategori = String(formData.get("kategori") || "").trim();

  if (!kode_buku || !judul || !pengarang || !kategori) {
    throw new Error("Semua data buku wajib diisi.");
  }

  await prisma.pm_buku.create({
    data: {
      kode_buku,
      judul,
      pengarang,
      kategori,
    },
  });

  revalidatePath("/admin");
}

export async function updateBuku(formData) {
  const kode_buku = Number(formData.get("kode_buku"));
  const judul = String(formData.get("judul") || "").trim();
  const pengarang = String(formData.get("pengarang") || "").trim();
  const kategori = String(formData.get("kategori") || "").trim();

  if (!kode_buku || !judul || !pengarang || !kategori) {
    throw new Error("Semua data buku wajib diisi.");
  }

  await prisma.pm_buku.update({
    where: {
      kode_buku,
    },
    data: {
      judul,
      pengarang,
      kategori,
    },
  });

  revalidatePath("/admin");
  redirect("/admin");
}

export async function hapusBuku(formData) {
  const kode_buku = Number(formData.get("kode_buku"));

  if (!kode_buku) {
    throw new Error("Kode buku tidak valid.");
  }

  await prisma.pm_buku.delete({
    where: {
      kode_buku,
    },
  });

  revalidatePath("/admin");
}
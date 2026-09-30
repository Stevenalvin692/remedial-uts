import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET() {
  try {
    const buku = await prisma.pm_buku.findMany({
      orderBy: {
        kode_buku: "asc",
      },
    });

    return NextResponse.json({
      status: "sukses",
      total: buku.length,
      data: buku,
    });
  } catch (error) {
    console.error("GET /api/buku error:", error);

    return NextResponse.json(
      {
        status: "gagal",
        error: "Gagal mengambil data buku",
      },
      {
        status: 500,
      }
    );
  }
}

// POST - menambah buku
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const kode_buku = Number(body.kode_buku);
    const judul = String(body.judul || "").trim();
    const pengarang = String(body.pengarang || "").trim();
    const kategori = String(body.kategori || "").trim();

    if (!kode_buku || !judul || !pengarang || !kategori) {
      return NextResponse.json(
        {
          status: "gagal",
          error: "Semua data buku wajib diisi",
        },
        {
          status: 400,
        }
      );
    }

    const bukuLama = await prisma.pm_buku.findUnique({
      where: {
        kode_buku,
      },
    });

    if (bukuLama) {
      return NextResponse.json(
        {
          status: "gagal",
          error: "Kode buku sudah digunakan",
        },
        {
          status: 409,
        }
      );
    }

    const bukuBaru = await prisma.pm_buku.create({
      data: {
        kode_buku,
        judul,
        pengarang,
        kategori,
      },
    });

    return NextResponse.json(
      {
        status: "sukses",
        message: "Buku berhasil ditambahkan",
        data: bukuBaru,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("POST /api/buku error:", error);

    return NextResponse.json(
      {
        status: "gagal",
        error: "Gagal menambahkan buku",
      },
      {
        status: 500,
      }
    );
  }
}
"use client";

import { useState } from "react";

export default function Kontak() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: "", message: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Semua field wajib diisi!" });
      return;
    }

    console.log("Data form:", form);
    setStatus({
      type: "success",
      message: "Makasih! Pesanmu udah tercatat (masih demo sih, belum ke server).",
    });
    setForm({ name: "", email: "", message: "" });
  }

  const inputClass =
    "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white/60 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15 transition-all";

  return (
    <section className="animate-in fade-in duration-500">
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent mb-2">
        Kontak
      </h1>
      <p className="text-lg text-slate-500 dark:text-slate-400 mb-10">
        kalau mau pinjem buku harus nyebut aman dan wahyu dulu ya, biar aman. <br />
        Terima kasih!
      </p>

      <div className="flex flex-wrap gap-6 mb-8 text-base">
        <span className="flex items-center gap-2.5 px-5 py-2 bg-white/40 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-full backdrop-blur-sm">
          📧 wahyu and Aman@email.comm
        </span>
        <span className="flex items-center gap-2.5 px-5 py-2 bg-white/40 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-full backdrop-blur-sm">
          📍 Jakarta, Bogor, Bekasi, dll
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-slate-800 dark:text-slate-200">Nama</label>
          <input
            id="name" name="name" type="text"
            value={form.name} onChange={handleChange}
            placeholder="Nama kamu siapa, sini kenalan sama admin ganteng" required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-slate-800 dark:text-slate-200">Email</label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={handleChange}
            placeholder="email@kamu.com" required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-semibold text-slate-800 dark:text-slate-200">Pesan</label>
          <textarea
            id="message" name="message" rows={5}
            value={form.message} onChange={handleChange}
            placeholder="Curhat saja sini sama saya"
            required
            className={`${inputClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="self-start px-8 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
        >
          Kirim Pesan
        </button>
      </form>

      {status.message && (
        <p className={`mt-6 px-5 py-3.5 text-sm rounded-xl border ${
          status.type === "success"
            ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400"
            : "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400"
        }`}>
          {status.message}
        </p>
      )}
    </section>
  );
}
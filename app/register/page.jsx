"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", username: "", email: "", password: "", confirmPassword: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) router.push("/admin");
  }, [router]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: "", message: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });
    const { name, username, email, password, confirmPassword } = form;
    if (!name || !username || !email || !password || !confirmPassword) {
      setStatus({ type: "error", message: "Semua field harus diisi!" });
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      setStatus({ type: "error", message: "Password minimal 6 karakter!" });
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setStatus({ type: "error", message: "Password dan konfirmasi gak cocok!" });
      setIsLoading(false);
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
      setStatus({ type: "error", message: "Username udah dipake!" });
      setIsLoading(false);
      return;
    }
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      setStatus({ type: "error", message: "Email udah terdaftar!" });
      setIsLoading(false);
      return;
    }
    if (username.toLowerCase() === "admin") {
      setStatus({ type: "error", message: 'Username "admin" gak boleh dipake.' });
      setIsLoading(false);
      return;
    }
    const newUser = { name, username, email, password, role: "admin" };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setStatus({ type: "success", message: "Pendaftaran berhasil! Ke halaman login..." });
    setForm({ name: "", username: "", email: "", password: "", confirmPassword: "" });
    setIsLoading(false);
    setTimeout(() => router.push("/login"), 1500);
  }

  const inputClass =
    "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white/60 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15 transition-all";

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4 py-6">
      <div className="w-full max-w-md p-8 bg-white/50 dark:bg-slate-900/60 border border-white/30 dark:border-slate-800/50 rounded-2xl shadow-xl backdrop-blur-xl">
        <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent">
          Daftar Akun
        </h1>
        <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-7">
          Bikin akun buat akses dashboard
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-semibold text-slate-800 dark:text-slate-200">Nama Lengkap</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Nama lengkap kamu" required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="username" className="text-sm font-semibold text-slate-800 dark:text-slate-200">Username</label>
            <input id="username" name="username" type="text" value={form.username} onChange={handleChange} placeholder="Pilih username" required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-slate-800 dark:text-slate-200">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@kamu.com" required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-semibold text-slate-800 dark:text-slate-200">Password</label>
            <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Minimal 6 karakter" required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword" className="text-sm font-semibold text-slate-800 dark:text-slate-200">Konfirmasi Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="Ulangi password" required className={inputClass} />
          </div>
          <button type="submit" className="w-full mt-2 px-8 py-3 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-md transition-all disabled:opacity-50" disabled={isLoading}>
            {isLoading ? "Memproses..." : "Daftar"}
          </button>
        </form>
        {status.message && (
          <p className={`mt-4 px-5 py-3.5 text-sm rounded-xl border ${
            status.type === "success"
              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400"
              : "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400"
          }`}>
            {status.message}
          </p>
        )}
        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Udah punya akun?{" "}
          <Link href="/login" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            Login aja
          </Link>
        </div>
      </div>
    </div>
  );
}
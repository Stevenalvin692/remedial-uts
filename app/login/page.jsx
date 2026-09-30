"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
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
    const username = form.username.trim();
    const password = form.password;
    if (!username || !password) {
      setStatus({ type: "error", message: "Username dan password harus diisi!" });
      setIsLoading(false);
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find((u) => u.username === username && u.password === password);
    const isAdmin = username === "admin" && password === "admin123";
    if (isAdmin) {
      localStorage.setItem("user", JSON.stringify({ name: "Admin", username: "admin", role: "admin" }));
      setStatus({ type: "success", message: "Login admin berhasil!" });
      setTimeout(() => router.push("/admin"), 800);
      return;
    }
    if (foundUser) {
      localStorage.setItem("user", JSON.stringify({ ...foundUser, role: "admin" }));
      setStatus({ type: "success", message: "Login berhasil!" });
      setTimeout(() => router.push("/admin"), 800);
      return;
    }
    setStatus({ type: "error", message: "Username atau password salah!" });
    setIsLoading(false);
  }

  const inputClass =
    "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white/60 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15 transition-all";

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4 py-6">
      <div className="w-full max-w-md p-8 bg-white/50 dark:bg-slate-900/60 border border-white/30 dark:border-slate-800/50 rounded-2xl shadow-xl backdrop-blur-xl">
        <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent">
          Login
        </h1>
        <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-7">
          Masuk buat ngelola perpustakaan
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="username" className="text-sm font-semibold text-slate-800 dark:text-slate-200">Username</label>
            <input id="username" name="username" type="text" value={form.username} onChange={handleChange} placeholder="Masukin username" required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-semibold text-slate-800 dark:text-slate-200">Password</label>
            <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Masukin password" required className={inputClass} />
          </div>
          <button type="submit" className="w-full mt-2 px-8 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md transition-all disabled:opacity-50" disabled={isLoading}>
            {isLoading ? "Memproses..." : "Login"}
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
          Belum punya akun?{" "}
          <Link href="/register" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            Daftar dulu
          </Link>
        </div>
        <div className="mt-2 text-center text-xs text-slate-400 dark:text-slate-500">
          <em>Demo Admin: admin / admin123</em>
        </div>
      </div>
    </div>
  );
}
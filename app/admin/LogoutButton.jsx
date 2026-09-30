"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/login");
  }
  return (
    <button type="button" className="px-6 py-2.5 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-full shadow-md transition-all" onClick={handleLogout}>
      Logout
    </button>
  );
}
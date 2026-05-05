import { useState } from "react";
import navLogo from "../assets/nav-logo.png";

type MenuKey = "dashboard" | "category" | "event" | "seminar";

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>("dashboard");

  const contentMap: Record<MenuKey, { title: string; description: string }> = {
    dashboard: {
      title: "Dashboard",
      description: "Selamat datang! Pilih menu pada sidebar untuk mulai mengelola data.",
    },
    category: {
      title: "Category",
      description: "Selamat datang di halaman Category! Kelola kategori data kamu di sini.",
    },
    event: {
      title: "Event",
      description: "Selamat datang di halaman Event! Kelola semua event kamu di sini.",
    },
    seminar: {
      title: "Seminar",
      description: "Selamat datang di halaman Seminar! Kelola data seminar kamu di sini.",
    },
  };

  const buttonClass = (menu: MenuKey) =>
    activeMenu === menu
      ? "w-full text-left rounded-lg px-4 py-3 bg-[#8b2551] text-white font-semibold shadow-sm hover:bg-[#6c1c3f] transition-colors"
      : "w-full text-left rounded-lg px-4 py-3 border border-[#8b2551]/30 text-[#8b2551] font-semibold hover:bg-[#8b2551]/10 transition-colors";

  return (
    <div className="min-h-screen bg-[#f7f8fb] font-sans text-gray-800">
      <div className="flex min-h-screen">
        <aside className="w-[280px] bg-white border-r border-gray-200 shadow-sm flex flex-col px-5 py-6">
          <div className="flex items-center justify-center pb-6 border-b border-gray-100">
            <img src={navLogo} alt="INVOFEST Logo" className="w-full max-w-[190px] h-auto object-contain" />
          </div>

          <nav className="flex-1 flex flex-col justify-center gap-4 py-6">
            <button onClick={() => setActiveMenu("dashboard")} className={buttonClass("dashboard")}>
              Dashboard
            </button>
            <button onClick={() => setActiveMenu("category")} className={buttonClass("category")}>
              Category
            </button>
            <button onClick={() => setActiveMenu("event")} className={buttonClass("event")}>
              Event
            </button>
            <button onClick={() => setActiveMenu("seminar")} className={buttonClass("seminar")}>
              Seminar
            </button>
          </nav>

          <div className="pt-6 border-t border-gray-100">
            <button
              onClick={() => {
                window.location.href = "/login";
              }}
              className="w-full text-left rounded-lg px-4 py-3 bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-colors"
            >
              Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 p-8 md:p-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm min-h-[300px]">
            <h1 className="text-3xl font-bold text-[#6e2242] mb-3">{contentMap[activeMenu].title}</h1>
            <p className="text-slate-600">{contentMap[activeMenu].description}</p>
          </div>
        </main>
      </div>
    </div>
  );
}

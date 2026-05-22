import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import CategoryPanel from '../components/dashboard/CategoryPanel';
import PembicaraPanel from '../components/dashboard/PembicaraPanel';
import EventPanel from '../components/dashboard/EventPanel';
import BiodataPage from "./BiodataPage";
import navLogo from "../assets/nav-logo.png";
import { Home, FolderOpen, Mic, Calendar, User, LogOut, type LucideIcon } from "lucide-react";

type MenuKey = "dashboard" | "category" | "pembicara" | "event" | "biodata";

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>("dashboard");
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems: { key: MenuKey; label: string; icon: LucideIcon }[] = [
    { key: "dashboard", label: "Dashboard", icon: Home },
    { key: "category", label: "Category", icon: FolderOpen },
    { key: "pembicara", label: "Pembicara", icon: Mic },
    { key: "event", label: "Event", icon: Calendar },
    { key: "biodata", label: "Biodata", icon: User },
  ];

  const btnClass = (menu: MenuKey) =>
    activeMenu === menu
      ? "w-full text-left rounded-lg px-4 py-3 bg-[#8b2551] text-white font-semibold shadow-sm hover:bg-[#6c1c3f] transition-colors flex items-center gap-3"
      : "w-full text-left rounded-lg px-4 py-3 border border-[#8b2551]/30 text-[#8b2551] font-semibold hover:bg-[#8b2551]/10 transition-colors flex items-center gap-3";

  const renderContent = () => {
    switch (activeMenu) {
      case "category": return <CategoryPanel />;
      case "pembicara": return <PembicaraPanel />;
      case "event": return <EventPanel />;
      case "biodata": return <BiodataPage />;
      default:
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#8b2551] to-[#c2185b] rounded-2xl p-8 text-white">
              <h1 className="text-3xl font-bold mb-2">Selamat Datang, {user?.name || "User"}!</h1>
              <p className="text-white/80">Kelola data event dengan mudah melalui dashboard ini.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button onClick={() => setActiveMenu("category")} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col items-start">
                <FolderOpen className="w-8 h-8 text-[#8b2551] mb-3" />
                <p className="font-bold text-gray-800">Category</p>
                <p className="text-sm text-gray-500">Kelola kategori event</p>
              </button>
              <button onClick={() => setActiveMenu("pembicara")} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col items-start">
                <Mic className="w-8 h-8 text-[#8b2551] mb-3" />
                <p className="font-bold text-gray-800">Pembicara</p>
                <p className="text-sm text-gray-500">Kelola data pembicara</p>
              </button>
              <button onClick={() => setActiveMenu("event")} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col items-start">
                <Calendar className="w-8 h-8 text-[#8b2551] mb-3" />
                <p className="font-bold text-gray-800">Event</p>
                <p className="text-sm text-gray-500">Kelola data event</p>
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f8fb] font-sans text-gray-800">
      <div className="flex min-h-screen">
        <aside className="w-[280px] bg-white border-r border-gray-200 shadow-sm flex flex-col px-5 py-6">
          <div className="flex items-center justify-center pb-6 border-b border-gray-100">
            <img src={navLogo} alt="INVOFEST Logo" className="w-full max-w-[190px] h-auto object-contain" />
          </div>
          <nav className="flex-1 flex flex-col gap-3 py-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button key={item.key} onClick={() => setActiveMenu(item.key)} className={btnClass(item.key)}>
                  <Icon className="w-5 h-5" /> {item.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-6 border-t border-gray-100 space-y-2">
            <div className="px-4 py-2 text-xs text-gray-400">Login: {user?.nim || "-"}</div>
            <button onClick={handleLogout} className="w-full text-left rounded-lg px-4 py-3 bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-colors flex items-center gap-3">
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </div>
        </aside>
        <main className="flex-1 p-8 md:p-10">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

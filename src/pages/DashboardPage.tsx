import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import navLogo from "../assets/nav-logo.png";
import { Home, FolderOpen, Mic, Calendar, User, LogOut, type LucideIcon } from "lucide-react";
import { BACKEND_URL } from "../lib/api";

type MenuKey = "dashboard" | "category" | "pembicara" | "event" | "biodata";

export default function DashboardPage() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const pathParts = location.pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];
  const activeMenu: MenuKey = (lastPart === "dashboard" || !lastPart) ? "dashboard" : (lastPart as MenuKey);

  const menuItems: { key: MenuKey; label: string; icon: LucideIcon }[] = [
    { key: "dashboard", label: "Dashboard", icon: Home },
    { key: "category", label: "Category", icon: FolderOpen },
    { key: "pembicara", label: "Pembicara", icon: Mic },
    { key: "event", label: "Event", icon: Calendar },
    { key: "biodata", label: "Biodata", icon: User },
  ];

  const handleNav = (key: MenuKey) => {
    if (key === "dashboard") {
      navigate("/dashboard");
    } else {
      navigate(`/dashboard/${key}`);
    }
  };

  const btnClass = (menu: MenuKey) =>
    activeMenu === menu
      ? "w-full text-left rounded-lg px-4 py-3 bg-[#8b2551] text-white font-semibold shadow-sm hover:bg-[#6c1c3f] transition-colors flex items-center gap-3"
      : "w-full text-left rounded-lg px-4 py-3 border border-[#8b2551]/30 text-[#8b2551] font-semibold hover:bg-[#8b2551]/10 transition-colors flex items-center gap-3";

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
                <button key={item.key} onClick={() => handleNav(item.key)} className={btnClass(item.key)}>
                  <Icon className="w-5 h-5" /> {item.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center gap-3 px-3 py-2 bg-[#fdf5f9] rounded-xl border border-[#8b2551]/10">
              <div className="w-10 h-10 rounded-full bg-[#8b2551] text-white flex items-center justify-center font-bold text-sm overflow-hidden shrink-0 shadow-inner">
                {user?.photo ? (
                  <img src={user.photo.startsWith("data:") ? user.photo : `${BACKEND_URL}${user.photo}`} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  user?.name?.charAt(0).toUpperCase() || "M"
                )}
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-[#8b2551] truncate">{user?.name || "User"}</p>
                <p className="text-xs text-slate-500 truncate">{user?.nim || ""}</p>
              </div>
            </div>
            <button onClick={handleLogout} className="w-full text-left rounded-lg px-4 py-3 bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-colors flex items-center gap-3">
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </div>
        </aside>
        <main className="flex-1 p-8 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import { FolderOpen, Mic, Calendar, Users } from "lucide-react";

export default function DashboardOverview() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-[#8b2551] to-[#c2185b] rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Selamat Datang, {user?.name || "User"}!</h1>
        <p className="text-white/80">Kelola data event dengan mudah melalui dashboard ini.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          onClick={() => navigate("/dashboard/category")}
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col items-start"
        >
          <FolderOpen className="w-8 h-8 text-[#8b2551] mb-3" />
          <p className="font-bold text-gray-800">Category</p>
          <p className="text-sm text-gray-500">Kelola kategori event</p>
        </button>
        <button
          onClick={() => navigate("/dashboard/pembicara")}
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col items-start"
        >
          <Mic className="w-8 h-8 text-[#8b2551] mb-3" />
          <p className="font-bold text-gray-800">Pembicara</p>
          <p className="text-sm text-gray-500">Kelola data pembicara</p>
        </button>
        <button
          onClick={() => navigate("/dashboard/event")}
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col items-start"
        >
          <Calendar className="w-8 h-8 text-[#8b2551] mb-3" />
          <p className="font-bold text-gray-800">Event</p>
          <p className="text-sm text-gray-500">Kelola data event</p>
        </button>
        <button
          onClick={() => navigate("/dashboard/users")}
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col items-start"
        >
          <Users className="w-8 h-8 text-[#8b2551] mb-3" />
          <p className="font-bold text-gray-800">Users</p>
          <p className="text-sm text-gray-500">Kelola data peserta</p>
        </button>
      </div>
    </div>
  );
}

// ==================== Biodata Page ====================
// Menu khusus menampilkan biodata mahasiswa pembuat website

import { useAuthStore } from "../stores/authStore";

export default function BiodataPage() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-[#8b2551] to-[#c2185b] rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl font-bold">
            {user?.name?.charAt(0)?.toUpperCase() || "M"}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user?.name || "Nama Mahasiswa"}</h2>
            <p className="text-white/80 text-lg">{user?.nim || "NIM"}</p>
            <p className="text-white/60 text-sm mt-1">Mahasiswa D4 Teknik Informatika</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#6e2242] mb-4 flex items-center gap-2">
            <span className="text-xl"></span> Informasi Pribadi
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Nama Lengkap</p>
              <p className="text-gray-800 font-medium">{user?.name || "-"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">NIM</p>
              <p className="text-gray-800 font-medium">{user?.nim || "-"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Program Studi</p>
              <p className="text-gray-800 font-medium">D4 Teknik Informatika</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Fakultas</p>
              <p className="text-gray-800 font-medium">Sekolah Vokasi</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Universitas</p>
              <p className="text-gray-800 font-medium">Universitas Harkat Negeri</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#6e2242] mb-4 flex items-center gap-2">
            <span className="text-xl">📝</span> Bio & Event
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Bio</p>
              <p className="text-gray-800 leading-relaxed">{user?.bio || "-"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Event Diikuti</p>
              <p className="text-gray-800 font-medium">{user?.event || "-"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Bergabung Sejak</p>
              <p className="text-gray-800 font-medium">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric", month: "long", year: "numeric"
                }) : "-"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#6e2242] mb-4 flex items-center gap-2">
          <span className="text-xl">🎓</span> Informasi Akademik
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#fdf5f9] rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-[#8b2551]">4</p>
            <p className="text-sm text-gray-500">Semester</p>
          </div>
          <div className="bg-[#fdf5f9] rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-[#8b2551]">2025/2026</p>
            <p className="text-sm text-gray-500">Tahun Akademik</p>
          </div>
          <div className="bg-[#fdf5f9] rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-[#8b2551]">Pemweb 2</p>
            <p className="text-sm text-gray-500">Mata Kuliah</p>
          </div>
        </div>
      </div>
    </div>
  );
}

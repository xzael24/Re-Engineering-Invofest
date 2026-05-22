import { useAuthStore } from "../stores/authStore";
import { User, FileText, GraduationCap, Camera, Loader2 } from "lucide-react";
import { BACKEND_URL } from "../lib/api";
import { useRef, useState } from "react";

export default function BiodataPage() {
  const { user, updatePhoto } = useAuthStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setUploadMessage({ type: 'error', text: 'Hanya file gambar (.jpg, .png, etc.) yang diperbolehkan' });
      setTimeout(() => setUploadMessage(null), 4000);
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      setUploadMessage({ type: 'error', text: 'Ukuran file maksimal adalah 3MB' });
      setTimeout(() => setUploadMessage(null), 4000);
      return;
    }

    setIsUploading(true);
    setUploadMessage(null);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      try {
        const success = await updatePhoto(base64String);
        if (success) {
          setUploadMessage({ type: 'success', text: 'Foto profil berhasil diperbarui!' });
        } else {
          setUploadMessage({ type: 'error', text: 'Gagal mengupload foto profil (Max 3MB)' });
        }
      } catch (err: any) {
        setUploadMessage({ type: 'error', text: err.message || 'Terjadi kesalahan saat upload' });
      } finally {
        setIsUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
        setTimeout(() => setUploadMessage(null), 4000);
      }
    };

    reader.onerror = () => {
      setUploadMessage({ type: 'error', text: 'Gagal membaca file gambar' });
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setTimeout(() => setUploadMessage(null), 4000);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      {uploadMessage && (
        <div className={`p-4 rounded-xl text-sm font-semibold border flex items-center gap-2 transition duration-300 animate-fadeIn ${
          uploadMessage.type === 'success' 
            ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
            : 'bg-rose-50 border-rose-200 text-rose-800'
        }`}>
          {uploadMessage.text}
        </div>
      )}

      <div className="bg-gradient-to-br from-[#8b2551] to-[#c2185b] rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-6">
          <div 
            onClick={handlePhotoClick}
            className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/40 cursor-pointer group shadow-inner flex items-center justify-center bg-white/20 backdrop-blur-sm transition duration-300 hover:border-white"
            title="Klik untuk ganti foto profil (Max 3MB)"
          >
            {user?.photo ? (
              <img 
                src={user.photo.startsWith("data:") ? user.photo : `${BACKEND_URL}${user.photo}`} 
                alt={user.name} 
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="text-4xl font-bold text-white transition duration-300 group-hover:scale-105">
                {user?.name?.charAt(0)?.toUpperCase() || "M"}
              </div>
            )}
            
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <Camera className="w-7 h-7 text-white/90" />
            </div>
            
            {isUploading && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <Loader2 className="w-7 h-7 text-white animate-spin" />
              </div>
            )}
          </div>
          <input 
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <div>
            <h2 className="text-2xl font-bold">{user?.name || "Nama Mahasiswa"}</h2>
            <p className="text-white/80 text-lg">{user?.nim || "NIM"}</p>
            <p className="text-white/60 text-sm mt-1">Mahasiswa D4 Teknik Informatika</p>
            <p className="text-white/40 text-xs mt-2">Format: JPG, PNG, WEBP (Maksimal 3MB)</p>
          </div>


        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#6e2242] mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-[#8b2551]" /> Informasi Pribadi
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
            <FileText className="w-5 h-5 text-[#8b2551]" /> Bio & Event
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
          <GraduationCap className="w-5 h-5 text-[#8b2551]" /> Informasi Akademik
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

import { useEffect, useState } from "react";
import { useUserStore } from "../../stores/userStore";
import { useAuthStore } from "../../stores/authStore";
import type { User } from "../../types";
import { Pencil, Trash2, X, Eye, EyeOff } from "lucide-react";

const EVENT_OPTIONS = ["IT Seminar", "IT Workshop", "IT Talkshow", "IT Competition"];

interface EditForm {
  name: string;
  bio: string;
  event: string;
  password: string;
}

export default function UserPanel() {
  const { users, isLoading, error, fetchUsers, updateUser, deleteUser, clearError } = useUserStore();
  const { user: currentUser } = useAuthStore();

  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<User | null>(null);
  const [form, setForm] = useState<EditForm>({ name: "", bio: "", event: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const openEdit = (user: User) => {
    setEditItem(user);
    setForm({ name: user.name, bio: user.bio ?? "", event: user.event ?? "", password: "" });
    setFormError(null);
    setShowPassword(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditItem(null);
    setFormError(null);
    clearError();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!form.name.trim() || form.name.trim().length < 3) {
      setFormError("Nama minimal 3 karakter");
      return;
    }

    if (form.password && form.password.length > 0) {
      if (form.password.length < 8) {
        setFormError("Password minimal 8 karakter");
        return;
      }
      if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(form.password)) {
        setFormError("Password harus berisi huruf dan angka");
        return;
      }
    }

    const payload: { name: string; bio: string; event: string; password?: string } = {
      name: form.name.trim(),
      bio: form.bio.trim(),
      event: form.event,
    };
    if (form.password) payload.password = form.password;

    const ok = await updateUser(editItem!.id, payload);
    if (ok) closeModal();
  };

  const handleDelete = async (user: User) => {
    if (confirm(`Yakin ingin menghapus user "${user.name}" (NIM: ${user.nim})?`)) {
      await deleteUser(user.id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#6e2242]">Kelola User</h2>
          <p className="text-sm text-gray-500 mt-0.5">Daftar peserta terdaftar di INVOFEST</p>
        </div>
        <span className="bg-[#fdf5f9] text-[#8b2551] border border-[#f3d5e4] text-sm font-semibold px-4 py-2 rounded-lg">
          Total: {users.length} user
        </span>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>
      )}

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {isLoading && users.length === 0 ? (
          <div className="p-8 text-center text-gray-400">Memuat data...</div>
        ) : users.length === 0 ? (
          <div className="p-8 text-center text-gray-400">Belum ada user terdaftar</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">No</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Nama</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">NIM</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Event</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Bio</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Bergabung</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((u, i) => (
                  <tr key={u.id} className={`hover:bg-gray-50 transition-colors ${u.id === currentUser?.id ? "bg-[#fdf5f9]" : ""}`}>
                    <td className="px-6 py-4 text-sm text-gray-600">{i + 1}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#8b2551] text-white flex items-center justify-center font-bold text-xs overflow-hidden shrink-0">
                          {u.photo ? (
                            <img
                              src={u.photo.startsWith("data:") ? u.photo : u.photo}
                              alt={u.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            u.name?.charAt(0).toUpperCase()
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-800">
                          {u.name}
                          {u.id === currentUser?.id && (
                            <span className="ml-2 text-xs bg-[#8b2551] text-white px-1.5 py-0.5 rounded-full">Anda</span>
                          )}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-mono">{u.nim}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-2 py-1 rounded-full font-medium">
                        {u.event || "-"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-[200px] truncate">{u.bio || "-"}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(u.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEdit(u)}
                          title="Edit"
                          className="p-1.5 rounded-md text-blue-600 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(u)}
                          title="Hapus"
                          className="p-1.5 rounded-md text-red-600 hover:bg-red-50 hover:text-red-800 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {showModal && editItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-[#6e2242]">Edit User</h3>
              <button onClick={closeModal} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
              {/* NIM (readonly) */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">NIM</label>
                <input
                  type="text"
                  value={editItem.nim}
                  readOnly
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-400 font-mono text-sm cursor-not-allowed"
                />
              </div>

              {/* Nama */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  value={form.bio}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  placeholder="Ceritakan sedikit tentang diri Anda..."
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Event */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event</label>
                <select
                  value={form.event}
                  onChange={(e) => setForm({ ...form, event: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none transition-all bg-white"
                  required
                >
                  <option value="">Pilih event</option>
                  {EVENT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Password (opsional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password Baru <span className="text-gray-400 font-normal">(opsional)</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Kosongkan jika tidak ingin mengubah"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {formError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">{formError}</p>
              )}
              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">{error}</p>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-1">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-[#8b2551] text-white font-semibold py-2.5 rounded-lg hover:bg-[#6c1c3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 border border-gray-300 text-gray-600 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

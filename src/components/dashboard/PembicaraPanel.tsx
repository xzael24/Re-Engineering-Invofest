import { useEffect, useState } from "react";
import { usePembicaraStore } from "../../stores/pembicaraStore";
import type { Pembicara } from "../../types";

export default function PembicaraPanel() {
  const { pembicaras, isLoading, error, fetchPembicaras, createPembicara, updatePembicara, deletePembicara } = usePembicaraStore();
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<Pembicara | null>(null);
  const [form, setForm] = useState({ name: "", title: "", bio: "", photo: "", expertise: "" });

  useEffect(() => { fetchPembicaras(); }, []);

  const resetForm = () => { setForm({ name: "", title: "", bio: "", photo: "", expertise: "" }); setEditItem(null); setShowForm(false); };

  const handleEdit = (item: Pembicara) => {
    setEditItem(item);
    setForm({ name: item.name, title: item.title, bio: item.bio, photo: item.photo || "", expertise: (item.expertise || []).join(", ") });
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name: form.name, title: form.title, bio: form.bio, photo: form.photo, expertise: form.expertise.split(",").map(s => s.trim()).filter(Boolean) };
    let ok: boolean;
    if (editItem) { ok = await updatePembicara(editItem.id, data); }
    else { ok = await createPembicara(data); }
    if (ok) resetForm();
  };

  const handleDelete = async (id: number) => {
    if (confirm("Yakin ingin menghapus pembicara ini?")) await deletePembicara(id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#6e2242]">Kelola Pembicara</h2>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="bg-[#8b2551] text-white px-4 py-2 rounded-lg hover:bg-[#6c1c3f] transition-colors text-sm font-semibold">+ Tambah Pembicara</button>
      </div>

      {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>}

      {showForm && (
        <div className="bg-[#fdf5f9] border border-[#f3d5e4] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#6e2242] mb-4">{editItem ? "Edit Pembicara" : "Tambah Pembicara Baru"}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
              <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title/Jabatan</label>
              <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none" required />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} rows={3} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none resize-none" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL Foto</label>
              <input value={form.photo} onChange={e => setForm({...form, photo: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none" placeholder="https://..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expertise (pisah koma)</label>
              <input value={form.expertise} onChange={e => setForm({...form, expertise: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none" placeholder="Web Dev, AI, Cloud" />
            </div>
            <div className="md:col-span-2 flex gap-3 pt-2">
              <button type="submit" disabled={isLoading} className="bg-[#8b2551] text-white px-6 py-2.5 rounded-lg hover:bg-[#6c1c3f] disabled:opacity-50 font-semibold">{isLoading ? "..." : editItem ? "Update" : "Simpan"}</button>
              <button type="button" onClick={resetForm} className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold text-gray-600">Batal</button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {isLoading && pembicaras.length === 0 ? (
          <div className="p-8 text-center text-gray-400">Memuat data...</div>
        ) : pembicaras.length === 0 ? (
          <div className="p-8 text-center text-gray-400">Belum ada data pembicara</div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">No</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Nama</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Title</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Expertise</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pembicaras.map((p, i) => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600">{i + 1}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{p.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{p.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{(p.expertise || []).join(", ") || "-"}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button onClick={() => handleEdit(p)} className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
                    <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:text-red-800 text-sm font-medium">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

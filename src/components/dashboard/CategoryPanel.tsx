import { useEffect, useState } from "react";
import { useCategoryStore } from "../../stores/categoryStore";
import type { Category } from "../../types";
import { Pencil, Trash2 } from "lucide-react";

export default function CategoryPanel() {
  const { categories, isLoading, error, fetchCategories, createCategory, updateCategory, deleteCategory } = useCategoryStore();
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<Category | null>(null);
  const [name, setName] = useState("");

  useEffect(() => { fetchCategories(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    let ok: boolean;
    if (editItem) {
      ok = await updateCategory(editItem.id, { name });
    } else {
      ok = await createCategory({ name });
    }
    if (ok) { setShowForm(false); setEditItem(null); setName(""); }
  };

  const handleEdit = (item: Category) => {
    setEditItem(item); setName(item.name); setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Yakin ingin menghapus category ini?")) await deleteCategory(id);
  };

  const cancelForm = () => { setShowForm(false); setEditItem(null); setName(""); };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#6e2242]">Kelola Category</h2>
        <button onClick={() => { cancelForm(); setShowForm(true); }} className="bg-[#8b2551] text-white px-4 py-2 rounded-lg hover:bg-[#6c1c3f] transition-colors text-sm font-semibold">
          + Tambah Category
        </button>
      </div>

      {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>}

      {showForm && (
        <div className="bg-[#fdf5f9] border border-[#f3d5e4] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#6e2242] mb-4">{editItem ? "Edit Category" : "Tambah Category Baru"}</h3>
          <form onSubmit={handleSubmit} className="flex gap-3 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Category</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan nama category" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none" required />
            </div>
            <button type="submit" disabled={isLoading} className="bg-[#8b2551] text-white px-6 py-2.5 rounded-lg hover:bg-[#6c1c3f] disabled:opacity-50 font-semibold">
              {isLoading ? "..." : editItem ? "Update" : "Simpan"}
            </button>
            <button type="button" onClick={cancelForm} className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold text-gray-600">Batal</button>
          </form>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {isLoading && categories.length === 0 ? (
          <div className="p-8 text-center text-gray-400">Memuat data...</div>
        ) : categories.length === 0 ? (
          <div className="p-8 text-center text-gray-400">Belum ada data category</div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">No</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Nama Category</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Tanggal Dibuat</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {categories.map((cat, i) => (
                <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600">{i + 1}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{cat.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{new Date(cat.createdAt).toLocaleDateString("id-ID")}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => handleEdit(cat)} title="Edit" className="p-1.5 rounded-md text-blue-600 hover:bg-blue-50 hover:text-blue-800 transition-colors">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(cat.id)} title="Hapus" className="p-1.5 rounded-md text-red-600 hover:bg-red-50 hover:text-red-800 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
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

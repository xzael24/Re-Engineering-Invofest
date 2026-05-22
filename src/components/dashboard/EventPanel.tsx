import { useEffect, useState } from "react";
import { useEventStore } from "../../stores/eventStore";
import { useCategoryStore } from "../../stores/categoryStore";
import { usePembicaraStore } from "../../stores/pembicaraStore";
import type { Event } from "../../types";
import { Pencil, Trash2 } from "lucide-react";

export default function EventPanel() {
  const { events, isLoading, error, fetchEvents, createEvent, updateEvent, deleteEvent } = useEventStore();
  const { categories, fetchCategories } = useCategoryStore();
  const { pembicaras, fetchPembicaras } = usePembicaraStore();
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<Event | null>(null);
  const [form, setForm] = useState({ name: "", categoryId: "", pembicaraId: "", location: "", dateEvent: "", description: "" });

  useEffect(() => { fetchEvents(); fetchCategories(); fetchPembicaras(); }, []);

  const resetForm = () => { setForm({ name: "", categoryId: "", pembicaraId: "", location: "", dateEvent: "", description: "" }); setEditItem(null); setShowForm(false); };

  const handleEdit = (item: Event) => {
    setEditItem(item);
    setForm({ name: item.name, categoryId: String(item.categoryId), pembicaraId: String(item.pembicaraId), location: item.location, dateEvent: item.dateEvent ? item.dateEvent.slice(0, 10) : "", description: item.description });
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name: form.name, categoryId: Number(form.categoryId), pembicaraId: Number(form.pembicaraId), location: form.location, dateEvent: form.dateEvent, description: form.description };
    const ok = editItem ? await updateEvent(editItem.id, data) : await createEvent(data);
    if (ok) resetForm();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#6e2242]">Kelola Event</h2>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="bg-[#8b2551] text-white px-4 py-2 rounded-lg hover:bg-[#6c1c3f] transition-colors text-sm font-semibold">+ Tambah Event</button>
      </div>
      {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>}
      {showForm && (
        <div className="bg-[#fdf5f9] border border-[#f3d5e4] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#6e2242] mb-4">{editItem ? "Edit Event" : "Tambah Event Baru"}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Nama Event</label><input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none" required /></div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori (Dropdown)</label>
              <select value={form.categoryId} onChange={e => setForm({...form, categoryId: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none bg-white" required>
                <option value="">-- Pilih Kategori --</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pembicara (Dropdown)</label>
              <select value={form.pembicaraId} onChange={e => setForm({...form, pembicaraId: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none bg-white" required>
                <option value="">-- Pilih Pembicara --</option>
                {pembicaras.map(p => <option key={p.id} value={p.id}>{p.name} — {p.title}</option>)}
              </select>
            </div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label><input value={form.location} onChange={e => setForm({...form, location: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none" required /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Event</label><input type="date" value={form.dateEvent} onChange={e => setForm({...form, dateEvent: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none" required /></div>
            <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label><textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={3} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none resize-none" required /></div>
            <div className="md:col-span-2 flex gap-3 pt-2">
              <button type="submit" disabled={isLoading} className="bg-[#8b2551] text-white px-6 py-2.5 rounded-lg hover:bg-[#6c1c3f] disabled:opacity-50 font-semibold">{isLoading ? "..." : editItem ? "Update" : "Simpan"}</button>
              <button type="button" onClick={resetForm} className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold text-gray-600">Batal</button>
            </div>
          </form>
        </div>
      )}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {isLoading && events.length === 0 ? <div className="p-8 text-center text-gray-400">Memuat data...</div> : events.length === 0 ? <div className="p-8 text-center text-gray-400">Belum ada data event</div> : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">No</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Nama Event</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Kategori</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Pembicara</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Lokasi</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Tanggal</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {events.map((ev, i) => (
                <tr key={ev.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 text-sm text-gray-600">{i + 1}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-800">{ev.name}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{ev.category?.name || "-"}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{ev.pembicara?.name || "-"}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{ev.location}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{new Date(ev.dateEvent).toLocaleDateString("id-ID")}</td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => handleEdit(ev)} title="Edit" className="p-1.5 rounded-md text-blue-600 hover:bg-blue-50 hover:text-blue-800 transition-colors">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => { if (confirm("Yakin hapus?")) deleteEvent(ev.id); }} title="Hapus" className="p-1.5 rounded-md text-red-600 hover:bg-red-50 hover:text-red-800 transition-colors">
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

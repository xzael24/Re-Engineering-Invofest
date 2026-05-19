import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/layout/Header';
import { useAuthStore } from "../stores/authStore";
import navLogo from "../assets/nav-logo.png";

export default function LoginPage() {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Zustand auth store
  const { login, isLoading, error, clearError } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (!nim || !password) return;

    const success = await login(nim, password);
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-pink-200">
      <Header />
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex items-center justify-center bg-[#fdf5f9] border border-[#f3d5e4] rounded-2xl px-6 py-12 min-h-[320px]">
            <img src={navLogo} alt="INVOFEST Logo" className="w-full max-w-[420px] h-auto object-contain" />
          </div>

          <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 mb-1 text-center">Masuk Akun</h1>
            <p className="text-center text-slate-500 mb-6">Silakan login dengan NIM untuk melanjutkan.</p>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="nim" className="block text-sm font-medium text-gray-700 mb-1">NIM</label>
                <input
                  id="nim"
                  type="text"
                  value={nim}
                  onChange={(e) => setNim(e.target.value)}
                  placeholder="Masukkan NIM"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2551] focus:border-transparent outline-none transition-all pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <div className="mt-2 text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#8b2551] text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-[#6c1c3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Memproses..." : "Login"}
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
              Belum punya akun?{" "}
              <a href="/register" className="font-semibold text-[#8b2551] hover:underline">
                Daftar sekarang
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

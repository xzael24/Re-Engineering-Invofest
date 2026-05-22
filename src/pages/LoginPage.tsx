import LoginForm from '../components/auth/LoginForm';
import navLogo from "../assets/nav-logo.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-pink-200">
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex items-center justify-center bg-[#fdf5f9] border border-[#f3d5e4] rounded-2xl px-6 py-12 min-h-[320px]">
            <img src={navLogo} alt="INVOFEST Logo" className="w-full max-w-[420px] h-auto object-contain" />
          </div>

          <LoginForm />
        </div>
      </section>
    </div>
  );
}

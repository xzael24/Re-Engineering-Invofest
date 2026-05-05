import { useForm } from "react-hook-form";
import Header from "../components/Header";
import { Input } from "../components/atoms/Input";
import { PasswordInput } from "../components/atoms/PasswordInput";
import { Button } from "../components/atoms/Button";
import navLogo from "../assets/nav-logo.png";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
    window.location.href = "/dashboard";
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
            <p className="text-center text-slate-500 mb-6">Silakan login untuk melanjutkan.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <Input
                label="Email"
                name="email"
                type="email"
                register={register}
                rules={{
                  required: "Email wajib diisi",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Format email tidak valid",
                  },
                }}
                error={errors.email?.message as string}
              />
              <PasswordInput
                label="Password"
                name="password"
                register={register}
                rules={{
                  required: "Password wajib diisi",
                  minLength: {
                    value: 8,
                    message: "Password minimal 8 karakter",
                  },
                }}
                error={errors.password?.message as string}
              />
              <div className="mt-2 text-center">
                <Button type="submit" label="Login" />
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

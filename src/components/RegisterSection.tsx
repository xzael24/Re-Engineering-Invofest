import RegisterForm from './organisms/RegisterForm';

export default function RegisterSection() {
  return (
    <section id="registrasi" className="py-20 lg:py-28 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1b1b1b] mb-4">
            Daftar <span className="text-[#8b2551]">Sekarang</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Bergabunglah dengan ratusan peserta lainnya dalam festival teknologi vokasi terbesar tahun ini.
          </p>
        </div>
        
        <RegisterForm />
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-[-20%] translate-y-[-20%] pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-[20%] translate-y-[20%] pointer-events-none"></div>
    </section>
  );
}

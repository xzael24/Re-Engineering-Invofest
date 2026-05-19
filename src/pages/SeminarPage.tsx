import Header from '../components/layout/Header';
import seminarHero from '../assets/Maskot-Seminar.png';
import deryImage from '../assets/Dery.png';
import sowamImage from '../assets/Sowam.png';
import { CalendarDays, Clock3, MapPin, Building2 } from 'lucide-react';
import Button from '../components/ui/Button';
import ButtonScroll from '../components/ui/ButtonScroll';
import FaqSection from '../components/sections/FaqSection';
import Footer from '../components/layout/Footer';

export default function SeminarPage() {
  const handleScrollToAbout = () => {
    const target = document.getElementById('seminar-description');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 relative overflow-hidden flex flex-col selection:bg-pink-200">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-10 lg:pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="z-10 relative flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-[#6e2242] text-4xl md:text-5xl font-extrabold mb-3">
            IT Seminar
          </h1>
          <h2 className="text-[#6e2242] text-2xl md:text-4xl font-bold mb-5">
            “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”
          </h2>
          <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8 max-w-[560px]">
            Seminar nasional yang membahas strategi dan arsitektur teknologi untuk
            menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang
            sinergis.Yang bertujuan mengubah paradigma dari persaingan menjadi
            kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang
            teknologi AI yang berpusat pada manusia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleScrollToAbout}>Daftar Sekarang</Button>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 fill-mode-both">
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-fuchsia-400/20 rounded-full blur-[80px] scale-125 -z-10 group-hover:bg-fuchsia-400/30 transition-colors duration-700" />
            <img
              src={seminarHero}
              alt="Maskot Seminar Invofest"
              className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] drop-shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </main>

      <section id="seminar-description" className="relative overflow-hidden">
        <svg
          className="block w-full h-20 md:h-28 text-[#f6dce7]"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,96L80,80C160,64,320,32,480,26.7C640,21,800,43,960,53.3C1120,64,1280,64,1360,64L1440,64L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z" />
        </svg>

        <div className="bg-[#f6dce7]">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-16 text-center">
            <h2 className="text-[#6e2242] text-3xl md:text-5xl font-extrabold mb-6">
              Tentang IT SEMINAR
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI),
              narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor.
              Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan mengangkat tema “Human-AI Integration:
              Merancang Arsitektur Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi.
              Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia-bukan sebagai pengganti.
            </p>
          </div>
        </div>

        <svg
          className="block w-full h-20 md:h-28 text-[#f6dce7]"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,64L80,58.7C160,53,320,43,480,58.7C640,75,800,117,960,128C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        <h2 className="text-[#6e2242] text-3xl md:text-5xl font-extrabold text-center mb-20">
          Temui Pembicara Khusus Kami
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <article className="relative border-[3px] border-[#8b2551] rounded-xl pt-20 pb-12 px-8 md:px-10 text-center shadow-[0_8px_18px_rgba(139,37,81,0.25)] min-h-[260px] flex flex-col justify-end w-full">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-[3px] border-[#8b2551] bg-white p-1.5">
              <img src={deryImage} alt="Dery Agung Triyadi" className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-[#6e2242] text-2xl md:text-3xl font-bold mb-2 leading-tight">Dery Agung Triyadi</h3>
            <p className="text-slate-500 text-lg md:text-xl">Aws Indonesia</p>
          </article>

          <article className="relative border-[3px] border-[#8b2551] rounded-xl pt-20 pb-12 px-8 md:px-10 text-center shadow-[0_8px_18px_rgba(139,37,81,0.25)] min-h-[260px] flex flex-col justify-end w-full">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-[3px] border-[#8b2551] bg-white p-1.5">
              <img src={sowamImage} alt="Sowam Habibi" className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-[#6e2242] text-2xl md:text-3xl font-bold mb-2 leading-tight">Sowam Habibi</h3>
            <p className="text-slate-500 text-lg md:text-xl">Google Indonesia</p>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <svg
          className="block w-full h-20 md:h-28 text-[#f6dce7]"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,96L80,80C160,64,320,32,480,26.7C640,21,800,43,960,53.3C1120,64,1280,64,1360,64L1440,64L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z" />
        </svg>

        <div className="bg-[#f6dce7]">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
            <h2 className="text-[#6e2242] text-3xl md:text-5xl font-extrabold text-center mb-10">
              Pelaksanaan IT Seminar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-[6px_0_0_0_#8b2551] p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#8b2551] text-white flex items-center justify-center shrink-0">
                  <CalendarDays size={26} />
                </div>
                <p className="text-slate-600 text-xl md:text-2xl">Kamis, 27 November 2025</p>
              </div>

              <div className="bg-white rounded-xl shadow-[6px_0_0_0_#8b2551] p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#8b2551] text-white flex items-center justify-center shrink-0">
                  <Clock3 size={26} />
                </div>
                <p className="text-slate-600 text-xl md:text-2xl">08.00 WIB - 12.00 WIB</p>
              </div>

              <div className="bg-white rounded-xl shadow-[6px_0_0_0_#8b2551] p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#8b2551] text-white flex items-center justify-center shrink-0">
                  <MapPin size={26} />
                </div>
                <p className="text-slate-600 text-xl md:text-2xl">Aula Gedung C</p>
              </div>

              <div className="bg-white rounded-xl shadow-[6px_0_0_0_#8b2551] p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#8b2551] text-white flex items-center justify-center shrink-0">
                  <Building2 size={26} />
                </div>
                <p className="text-slate-600 text-xl md:text-2xl">Kampus 1 (Mataram) Universitas Harkat Negeri</p>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="block w-full h-20 md:h-28 text-[#f6dce7]"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,64L80,58.7C160,53,320,43,480,58.7C640,75,800,117,960,128C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
      </section>

      <FaqSection />
      <Footer />
      <ButtonScroll />
    </div>
  );
}

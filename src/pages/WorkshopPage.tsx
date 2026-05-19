import Header from '../components/layout/Header';
import workshopHero from '../assets/Maskot-Workshop.png';
import lhuqitaImage from '../assets/lhuqita.png';
import dendiImage from '../assets/dendi.png';
import danangImage from '../assets/danang.png';
import { CalendarDays, Clock3, MapPin, Code2, Smartphone, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
import ButtonScroll from '../components/ui/ButtonScroll';
import FaqSection from '../components/sections/FaqSection';
import Footer from '../components/layout/Footer';

export default function WorkshopPage() {
  const handleScrollToAbout = () => {
    const target = document.getElementById('workshop-description');
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
            IT Workshop
          </h1>
          <h2 className="text-[#6e2242] text-2xl md:text-4xl font-bold mb-5">
            “AI for a Sustainable Future: The Role of Z Generation in the Digital Era”
          </h2>
          <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8 max-w-[560px]">
            IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk
            menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan
            alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata
            dan terukur di era digital.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleScrollToAbout}>Daftar Sekarang</Button>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 fill-mode-both">
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-fuchsia-400/20 rounded-full blur-[80px] scale-125 -z-10 group-hover:bg-fuchsia-400/30 transition-colors duration-700" />
            <img
              src={workshopHero}
              alt="Maskot Workshop Invofest"
              className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] drop-shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </main>

      <section id="workshop-description" className="relative overflow-hidden">
        <svg
          className="block w-full h-20 md:h-28 text-[#f6dce7]"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,96L80,80C160,64,320,32,480,26.7C640,21,800,43,960,53.3C1120,64,1280,64,1360,64L1440,64L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z" />
        </svg>

        <div className="bg-[#f6dce7]">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 md:py-16 text-center">
            <h2 className="text-[#6e2242] text-3xl md:text-5xl font-extrabold mb-6">
              Tentang IT Workshop
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Workshop “AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini didesain khusus untuk Generasi Z,
              para digital natives yang berada di persimpangan antara inovasi teknologi dan tantangan keberlanjutan global.
              Peserta akan diajak untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya sekadar teknologi canggih,
              tetapi juga alat yang ampuh untuk menciptakan solusi nyata bagi isu-isu lingkungan. Melalui sesi inspiratif, pengenalan konsep,
              dan praktik langsung (hands-on), workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen perubahan di era digital,
              menggunakan keahlian mereka untuk masa depan bumi yang lebih baik.
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <article className="relative border-[3px] border-[#8b2551] rounded-xl pt-20 pb-10 px-6 text-center shadow-[0_8px_18px_rgba(139,37,81,0.25)] min-h-[260px] flex flex-col justify-end">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-[3px] border-[#8b2551] bg-white p-1.5">
              <img src={lhuqitaImage} alt="Lhuqita Fazry" className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-[#6e2242] text-2xl md:text-3xl font-bold mb-2">Lhuqita Fazry</h3>
            <p className="text-slate-500 text-lg md:text-xl">Mobile Development</p>
            <p className="text-slate-500 text-base md:text-lg mt-1">Developer, Founder Rumah Coding Indonesia</p>
          </article>

          <article className="relative border-[3px] border-[#8b2551] rounded-xl pt-20 pb-10 px-6 text-center shadow-[0_8px_18px_rgba(139,37,81,0.25)] min-h-[260px] flex flex-col justify-end">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-[3px] border-[#8b2551] bg-white p-1.5">
              <img src={dendiImage} alt="M. Dendi Purwanto" className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-[#6e2242] text-2xl md:text-3xl font-bold mb-2">M. Dendi Purwanto</h3>
            <p className="text-slate-500 text-lg md:text-xl">Artificial Intelligence</p>
            <p className="text-slate-500 text-base md:text-lg mt-1">Software Engineer, PT. Mayar Kernel Supernova</p>
          </article>

          <article className="relative border-[3px] border-[#8b2551] rounded-xl pt-20 pb-10 px-6 text-center shadow-[0_8px_18px_rgba(139,37,81,0.25)] min-h-[260px] flex flex-col justify-end md:col-span-2 xl:col-span-1 md:max-w-xl md:mx-auto xl:max-w-none">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-[3px] border-[#8b2551] bg-white p-1.5">
              <img src={danangImage} alt="Danang Avan M" className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-[#6e2242] text-2xl md:text-3xl font-bold mb-2">Danang Avan M</h3>
            <p className="text-slate-500 text-lg md:text-xl">Cyber Security</p>
            <p className="text-slate-500 text-base md:text-lg mt-1">Security Analyst, Founder | Contributor TegalSec</p>
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
              Pelaksanaan IT Workshop
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-[6px_0_0_0_#8b2551] p-6 flex gap-4">
                <div className="w-20 h-20 rounded-2xl bg-[#8b2551] text-white flex items-center justify-center shrink-0">
                  <Code2 size={32} />
                </div>
                <div>
                  <h3 className="text-slate-700 text-3xl font-bold mb-2">Mobile Development</h3>
                  <p className="text-slate-500 text-lg flex items-center gap-2"><CalendarDays size={18} />Selasa, 25 November 2025</p>
                  <p className="text-slate-500 text-lg flex items-center gap-2"><Clock3 size={18} />08.00 WIB - 16.30 WIB</p>
                  <p className="text-slate-500 text-lg flex items-center gap-2"><MapPin size={18} />Lab Kom D.1</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-[6px_0_0_0_#8b2551] p-6 flex gap-4">
                <div className="w-20 h-20 rounded-2xl bg-[#8b2551] text-white flex items-center justify-center shrink-0">
                  <Smartphone size={32} />
                </div>
                <div>
                  <h3 className="text-slate-700 text-3xl font-bold mb-2">Artificial Intelegence</h3>
                  <p className="text-slate-500 text-lg flex items-center gap-2"><CalendarDays size={18} />Selasa, 25 November 2025</p>
                  <p className="text-slate-500 text-lg flex items-center gap-2"><Clock3 size={18} />08.00 WIB - 16.30 WIB</p>
                  <p className="text-slate-500 text-lg flex items-center gap-2"><MapPin size={18} />Lab Kom D.2</p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-[6px_0_0_0_#8b2551] p-6 flex gap-4">
                <div className="w-20 h-20 rounded-2xl bg-[#8b2551] text-white flex items-center justify-center shrink-0">
                  <Shield size={32} />
                </div>
                <div>
                  <h3 className="text-slate-700 text-3xl font-bold mb-2">Cyber Security</h3>
                  <p className="text-slate-500 text-lg flex items-center gap-2"><CalendarDays size={18} />Rabu, 26 November 2025</p>
                  <p className="text-slate-500 text-lg flex items-center gap-2"><Clock3 size={18} />08.00 WIB - 16.30 WIB</p>
                  <p className="text-slate-500 text-lg flex items-center gap-2"><MapPin size={18} />Lab Kom D.1</p>
                </div>
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

import Header from '../components/Header';
import talkshowHero from '../assets/Maskot-Talkshow.png';
import ichsanImage from '../assets/ichsan.png';
import zaimImage from '../assets/zaim.png';
import daffaImage from '../assets/daffa.png';
import bayuImage from '../assets/bayu.png';
import { CalendarDays, Clock3, MapPin, Building2 } from 'lucide-react';
import Button from '../components/ui/Button';
import ButtonScroll from '../components/ui/ButtonScroll';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

export default function TalkshowPage() {
  const handleScrollToAbout = () => {
    const target = document.getElementById('talkshow-description');
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
            IT Talkshow
          </h1>
          <h2 className="text-[#6e2242] text-2xl md:text-4xl font-bold mb-5">
            “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
          </h2>
          <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8 max-w-[560px]">
            Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif yang mengeksplorasi cara
            mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan.
            yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif yang memperkuat potensi unik manusia,
            bukan sebagai penggantinya.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleScrollToAbout}>Daftar Sekarang</Button>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 fill-mode-both">
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-fuchsia-400/20 rounded-full blur-[80px] scale-125 -z-10 group-hover:bg-fuchsia-400/30 transition-colors duration-700" />
            <img
              src={talkshowHero}
              alt="Maskot Talkshow Invofest"
              className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] drop-shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </main>

      <section id="talkshow-description" className="relative overflow-hidden">
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
              Tentang IT Talkshow
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin meresap ke dalam setiap aspek kehidupan kita, muncul
              sebuah pertanyaan fundamental: Apakah kita sedang menciptakan teknologi yang melayani manusia, atau justru sebaliknya?
              Untuk menjawab pertanyaan tersebut, kami mempersembahkan talkshow berskala nasional: “Humanizing Technology:
              Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin
              dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan-seperti empati, etika,
              dan kreativitas-ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi
              pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          <article className="relative border-[3px] border-[#8b2551] rounded-xl pt-20 pb-8 px-4 text-center shadow-[0_8px_18px_rgba(139,37,81,0.25)] min-h-[250px] flex flex-col justify-end">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full border-[3px] border-[#8b2551] bg-white p-1.5">
              <img src={ichsanImage} alt="Moh. Ichsan Maulana" className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-[#6e2242] text-xl md:text-2xl font-bold mb-2">Moh. Ichsan Maulana</h3>
            <p className="text-slate-500 text-lg">Human Capital Information</p>
            <p className="text-slate-500 text-lg">System (HCIS), PT. Garuda Daya Pratama Sejahtera</p>
          </article>

          <article className="relative border-[3px] border-[#8b2551] rounded-xl pt-20 pb-8 px-4 text-center shadow-[0_8px_18px_rgba(139,37,81,0.25)] min-h-[250px] flex flex-col justify-end">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full border-[3px] border-[#8b2551] bg-white p-1.5">
              <img src={zaimImage} alt="M. Zaim Zamzami" className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-[#6e2242] text-xl md:text-2xl font-bold mb-2">M. Zaim Zamzami</h3>
            <p className="text-slate-500 text-lg">Programmer, PT. Pertamina</p>
            <p className="text-slate-500 text-lg">Drilling Service Indonesia</p>
          </article>

          <article className="relative border-[3px] border-[#8b2551] rounded-xl pt-20 pb-8 px-4 text-center shadow-[0_8px_18px_rgba(139,37,81,0.25)] min-h-[250px] flex flex-col justify-end">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full border-[3px] border-[#8b2551] bg-white p-1.5">
              <img src={daffaImage} alt="Daffa Zuhdan Muhtar" className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-[#6e2242] text-xl md:text-2xl font-bold mb-2">Daffa Zuhdan Muhtar</h3>
            <p className="text-slate-500 text-lg">Android Developer, PT. Astra</p>
            <p className="text-slate-500 text-lg">Internasional</p>
          </article>

          <article className="relative border-[3px] border-[#8b2551] rounded-xl pt-20 pb-8 px-4 text-center shadow-[0_8px_18px_rgba(139,37,81,0.25)] min-h-[250px] flex flex-col justify-end">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full border-[3px] border-[#8b2551] bg-white p-1.5">
              <img src={bayuImage} alt="Bayu Adi Prasetiyo" className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-[#6e2242] text-xl md:text-2xl font-bold mb-2">Bayu Adi Prasetiyo</h3>
            <p className="text-slate-500 text-lg">Software Engineer, KOMPAS.ID</p>
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
              Pelaksanaan IT Talkshow
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-[6px_0_0_0_#8b2551] p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#8b2551] text-white flex items-center justify-center shrink-0">
                  <CalendarDays size={26} />
                </div>
                <p className="text-slate-600 text-xl md:text-2xl">Senin, 24 November 2025</p>
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

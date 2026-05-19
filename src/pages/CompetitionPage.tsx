import Header from '../components/layout/Header';
import competitionHero from '../assets/Maskot-Lomba.png';
import posterDesignImage from '../assets/Poster-Design.png';
import uiuxDesignImage from '../assets/UI_UX-Design.png';
import webDesignImage from '../assets/Web-Design.png';
import Button from '../components/ui/Button';
import ButtonScroll from '../components/ui/ButtonScroll';
import FaqSection from '../components/sections/FaqSection';
import SponsorSection from '../components/sections/SponsorSection';
import MediaSection from '../components/sections/MediaSection';
import Footer from '../components/layout/Footer';

export default function CompetitionPage() {
  const handleScrollToDescription = () => {
    const target = document.getElementById('competition-description');
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
            IT Competition
          </h1>
          <h2 className="text-[#6e2242] text-2xl md:text-4xl font-bold mb-5">
            "From Creation to Innovation"
          </h2>
          <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8 max-w-[560px]">
            Kompetisi dalam INVOFEST ini mengusung tema <strong className="text-slate-700">"From Creation to Innovation"</strong>,
            Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan
            kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang
            mampu mewujudkan masa depan yang berkelanjutan.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleScrollToDescription}>INFO SELENGKAPNYA</Button>
            <Button variant="outline">HUBUNGI PANITIA</Button>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 fill-mode-both">
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-fuchsia-400/20 rounded-full blur-[80px] scale-125 -z-10 group-hover:bg-fuchsia-400/30 transition-colors duration-700" />
            <img
              src={competitionHero}
              alt="Maskot Competition Invofest"
              className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] drop-shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </main>

      <section id="competition-description" className="relative overflow-hidden">
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
              DESKRIPSI KOMPETISI
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Kompetisi atau perlombaan yang ada dalam kegiatan <strong>INVOFEST (Infomatics Vocational Festival) 2025</strong> adalah diantaranya
              National Poster Design Competition, UI UX Design Competition, dan juga UI/UX Design Competition. Kompetisi dalam INVOFEST ini mengusung tema <strong>"From Creation to Innovation"</strong>
              Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu
              mewujudkan masa depan yang berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini akan berperan dalam menciptakan solusi-solusi baru untuk tantangan masa kini dan mendatang,
              baik dalam hal teknologi, lingkungan, pendidikan, maupun tanggung jawab sosial.
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
        <div className="text-center mb-10">
          <h2 className="text-[#6e2242] text-3xl md:text-5xl font-extrabold mb-2">DAFTAR KOMPETISI</h2>
          <p className="text-slate-600 text-base md:text-lg">
            Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src={posterDesignImage}
              alt="Poster Design Competition"
              className="w-full h-auto block"
            />
            <div className="p-5">
              <h3 className="text-slate-700 text-3xl font-bold mb-3 leading-tight">Poster Design Competition</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-5">
                Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif,
                guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.
              </p>
              <Button>INFO SELENGKAPNYA</Button>
            </div>
          </article>

          <article className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={uiuxDesignImage} alt="UI/UX Design Competition" className="w-full h-auto block" />
            <div className="p-5">
              <h3 className="text-slate-700 text-3xl font-bold mb-3 leading-tight">UI/UX Design Competition</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-5">
                UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta
                dapat membuat nyaman calon pengguna.
              </p>
              <Button>INFO SELENGKAPNYA</Button>
            </div>
          </article>

          <article className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={webDesignImage} alt="Web Design Competition" className="w-full h-auto block" />
            <div className="p-5">
              <h3 className="text-slate-700 text-3xl font-bold mb-3 leading-tight">Web Design Competition</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-5">
                Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada
                semua device serta sesuai dengan tema kompetisi.
              </p>
              <Button>INFO SELENGKAPNYA</Button>
            </div>
          </article>
        </div>
      </section>

      <FaqSection />
      <SponsorSection />
      <MediaSection />
      <Footer />

      <ButtonScroll />
    </div>
  );
}

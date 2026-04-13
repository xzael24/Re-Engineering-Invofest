import Header from './components/Header';
import maskotHero from './assets/Maskot-Hero.png';
import textImage from './assets/text-image.png';
import Button from './components/ui/Button';
import ButtonScroll from './components/ui/ButtonScroll';
import PembicaraSection from './components/PembicaraSection';
import TentangSection from './components/TentangSection';
import SeminarSection from './components/SeminarSection';
import TalkshowSection from './components/TalkshowSection';
import WorkshopSection from './components/WorkshopSection';
import CompetitionSection from './components/CompetitionSection';
import FaqSection from './components/FaqSection';
import SponsorSection from './components/SponsorSection';
import MediaSection from './components/MediaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 relative overflow-hidden flex flex-col selection:bg-pink-200">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 lg:px-12 pt-10 lg:pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="z-10 relative flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <img 
            src={textImage} 
            alt="INVOFEST" 
            className="w-full max-w-[280px] md:max-w-[380px] mb-5 drop-shadow-sm hover:scale-[1.02] transition-transform duration-500"
          />
          <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8 max-w-[520px]">
            Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan
            untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam
            menghadapi era digital. Dengan mengusung tema <strong className="text-slate-800 font-bold">"Beyond Limits, Beyond
            Intelligence: Innovate for a Smarter Tomorrow "</strong>.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>INFO SELENGKAPNYA</Button>
            <Button variant="outline">HUBUNGI PANITIA</Button>
          </div>
        </div>

        {/* Right Mascot */}
        <div className="relative z-10 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 fill-mode-both">
          <div className="relative group perspective-1000">
            {/* Glow effect matching mascot theme */}
            <div className="absolute inset-0 bg-fuchsia-400/20 rounded-full blur-[80px] scale-125 -z-10 group-hover:bg-fuchsia-400/30 transition-colors duration-700" />
            <img 
              src={maskotHero} 
              alt="Invofest Mascot" 
              className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] drop-shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </main>

      {/* Pembicara Section */}
      <PembicaraSection />

      {/* Tentang Section */}
      <TentangSection />

      {/* Seminar Section */}
      <SeminarSection />

      {/* Talkshow Section */}
      <TalkshowSection />

      {/* Workshop Section */}
      <WorkshopSection />

      {/* Competition Section */}
      <CompetitionSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Sponsor Section */}
      <SponsorSection />

      {/* Media Partner Section */}
      <MediaSection />

      {/* Footer Section */}
      <Footer />

      {/* Floating Action Button (Up Arrow) */}
      <ButtonScroll />
    </div>
  )
}

export default App

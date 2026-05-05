import { Home, Trophy, Presentation, Monitor, Mic, UserCircle } from 'lucide-react';
import navLogo from '../assets/nav-logo.png';
import Navlink from './ui/Navlink';

export default function Header() {
  const pathname = window.location.pathname;
  const isCompetitionPage = pathname === '/competition';
  const isSeminarPage = pathname === '/seminar';
  const isWorkshopPage = pathname === '/workshop';
  const isTalkshowPage = pathname === '/talkshow';
  const isLoginPage = pathname === '/login';
  const isRegisterPage = pathname === '/register';
  const isHomePage = !isCompetitionPage && !isSeminarPage && !isWorkshopPage && !isTalkshowPage && !isLoginPage && !isRegisterPage;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-[0_1px_5px_rgba(0,0,0,0.05)] transition-all duration-300 font-sans">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer flex items-center h-full">
            <img src={navLogo} alt="Invofest Logo" className="h-8 md:h-10 hover:opacity-90 transition-opacity" />
          </div>
          
          <div className="flex items-center gap-6 lg:gap-10">
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              <Navlink href="/" icon={Home} active={isHomePage}>Beranda</Navlink>
              <Navlink href="/competition" icon={Trophy} active={isCompetitionPage}>Competition</Navlink>
              <Navlink href="/seminar" icon={Presentation} active={isSeminarPage}>Seminar</Navlink>
              <Navlink href="/workshop" icon={Monitor} active={isWorkshopPage}>Workshop</Navlink>
              <Navlink href="/talkshow" icon={Mic} active={isTalkshowPage}>Talkshow</Navlink>
            </nav>

            <div className="flex items-center">
              <button
                onClick={() => { window.location.href = '/login'; }}
                className="text-slate-600 hover:text-[#8b2551] rounded-full hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
                aria-label="Buka halaman login"
              >
                <UserCircle className="w-8 h-8 fill-slate-500 text-white hover:fill-[#8b2551]" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

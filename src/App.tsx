import HomePage from './pages/HomePage.tsx';
import CompetitionPage from './pages/CompetitionPage.tsx';
import SeminarPage from './pages/SeminarPage.tsx';
import WorkshopPage from './pages/WorkshopPage.tsx';
import TalkshowPage from './pages/TalkshowPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';

function App() {
  const pathname = window.location.pathname;
  if (pathname === '/competition') return <CompetitionPage />;
  if (pathname === '/seminar') return <SeminarPage />;
  if (pathname === '/workshop') return <WorkshopPage />;
  if (pathname === '/talkshow') return <TalkshowPage />;
  if (pathname === '/login') return <LoginPage />;
  if (pathname === '/register') return <RegisterPage />;
  if (pathname === '/dashboard') return <DashboardPage />;
  return <HomePage />;
}

export default App

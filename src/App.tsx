import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import CompetitionPage from './pages/CompetitionPage.tsx';
import SeminarPage from './pages/SeminarPage.tsx';
import WorkshopPage from './pages/WorkshopPage.tsx';
import TalkshowPage from './pages/TalkshowPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import DashboardOverview from './components/dashboard/DashboardOverview.tsx';
import CategoryPanel from './components/dashboard/CategoryPanel.tsx';
import PembicaraPanel from './components/dashboard/PembicaraPanel.tsx';
import EventPanel from './components/dashboard/EventPanel.tsx';
import BiodataPage from './pages/BiodataPage.tsx';
import { useAuthStore } from './stores/authStore.ts';


function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/competition" element={<CompetitionPage />} />
      <Route path="/seminar" element={<SeminarPage />} />
      <Route path="/workshop" element={<WorkshopPage />} />
      <Route path="/talkshow" element={<TalkshowPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Dashboard Nesting Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }>
        <Route index element={<DashboardOverview />} />
        <Route path="category" element={<CategoryPanel />} />
        <Route path="pembicara" element={<PembicaraPanel />} />
        <Route path="event" element={<EventPanel />} />
        <Route path="biodata" element={<BiodataPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App

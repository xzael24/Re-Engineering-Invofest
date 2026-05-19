import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import CompetitionPage from './pages/CompetitionPage.tsx';
import SeminarPage from './pages/SeminarPage.tsx';
import WorkshopPage from './pages/WorkshopPage.tsx';
import TalkshowPage from './pages/TalkshowPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import { useAuthStore } from './stores/authStore.ts';

// Protected Route — redirect ke login jika belum login
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
      {/* Public routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/competition" element={<CompetitionPage />} />
      <Route path="/seminar" element={<SeminarPage />} />
      <Route path="/workshop" element={<WorkshopPage />} />
      <Route path="/talkshow" element={<TalkshowPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected route — hanya bisa diakses setelah login */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      } />

      {/* Fallback — redirect ke home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App

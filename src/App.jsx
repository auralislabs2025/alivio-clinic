import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SiteFooter from './components/SiteFooter.jsx';
import HomePage from './pages/Home.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div id="top" className="min-h-svh bg-background-warm">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

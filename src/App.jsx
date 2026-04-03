import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SiteFooter from './components/SiteFooter.jsx';
import AboutPage from './pages/About.jsx';
import BlogPage from './pages/Blog.jsx';
import BookingPage from './pages/Booking.jsx';
import ConditionsPage from './pages/Conditions.jsx';
import ContactPage from './pages/Contact.jsx';
import HomePage from './pages/Home.jsx';
import MethodologyPage from './pages/Methodology.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-svh bg-background-warm">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

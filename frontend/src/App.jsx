import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from "./pages/EventsPage";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';
import AdminReviews from './components/AdminReviews';
import PackageManager from './pages/admin/PackageManager';
import Footer from './components/Footer';
import './App.css';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPanel />}>
            <Route index element={<AdminReviews />} />
            <Route path="reviews" element={<AdminReviews />} />
            <Route path="packages" element={<PackageManager />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
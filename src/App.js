import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import NotFound from "./pages/notFound/NotFound";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from 'react-floating-whatsapp';
import './App.css';
import Scroll from './Scroll';


const App = () => {
  return (
    <>
      
      <FloatingWhatsApp
        phoneNumber="+2348102227734"
        accountName="MCI Academy"
        allowClickAway="true"
        notification
        notificationDelay={600000}
        notificationSound="true"
        className="chat"
      />
      <BrowserRouter>
        <Scroll/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App

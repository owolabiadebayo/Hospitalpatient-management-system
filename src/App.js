import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Chat from "./components/Chat";
import Choose from "./components/Choose";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HospitalSect from "./components/HospitalSect";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonial";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <About />
      <HospitalSect />
      <Consultation />
      <Choose />
      <Testimonials />
      <Chat />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

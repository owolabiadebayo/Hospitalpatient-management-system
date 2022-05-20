import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import HospitalSect from "./HospitalSect";
import Consultation from "./Consultation";
import Choose from "./Choose";
import Testimonials from "./Testimonial";
import Chat from "./Chat";
import Blog from "./Blog";
import Footer from "./Footer";

function Home() {
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

export default Home;

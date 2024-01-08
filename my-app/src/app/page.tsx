import Image from "next/image";
import Navbar from "./navbar/navbar";
import SignupForm from "./form/inputform";
import Footer from "./footer/footer";
import HeroPage from "./hero/heropage";
import AboutUsSection from "./aboutus/aboutussection";
import MuiSignup from "./form/muisignup";
import { Button } from "@/components/ui/button";
import { CarouselSection } from "./carousel/carouselsection";
import { Framer } from "lucide-react";
import { Card } from "@/components/ui/card";
import { global } from "styled-jsx/css";
import LineBreak from "./linebrak";

export default function Home() {
  return (
    <div className="flex-items-center w-full h-full bg-gray-700 bg-cover bg-center animate-fade-in">
      <div id="navbar-section">
        <Navbar />
      </div>
      <section id="hero-section">
        <HeroPage />
      </section>
      <section id="about-section">
        <AboutUsSection />
      </section>
      <div className="items-center">
        <section
          id="carousel"
          className="flex justify-center items-center bg-gray-700 w-full h-96"
        >
          <CarouselSection />
        </section>
      </div>
      <section className="mh-20 mb-20 bg-gray-700" id="signup-section">
        <SignupForm />
      </section>
      {/* <MuiSignup /> */}
      {/* <Carousel /> */}
      {/* <SecondSection /> */}
      {/* <Button onClick={} /> */}
      {/* <InputForm /> */}
      {/* <FormField /> */}
      <Footer />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] py-16 px-4 hero-animated-bg overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cvk-purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cvk-blue/10 rounded-full blur-3xl -z-10" />

      {/* Left Side: Text Content */}
      <div className="flex-1 flex flex-col items-start justify-center md:pr-12 z-10">
        <div className="mb-10 px-10 py-8 hero-glass-card flex flex-col items-start shadow-2xl">
          {/* Logo */}
          <Logo className="w-28 h-28 rounded-full shadow-lg mb-4" />
          {/* Tagline */}
          <span className="px-7 py-2 rounded-full bg-cvk-lightpurple text-cvk-darkpurple font-semibold text-lg mb-1 shadow-sm tracking-wide">
            #1 Customer-Centric CRM
          </span>
        </div>
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-left leading-tight mb-8 text-black drop-shadow-lg">
          Transform your relationships with{" "}
          <span className="text-black">
            CVK CRM
          </span>
        </h1>
        {/* Subheading */}
        <p className="text-lg md:text-2xl text-black text-left max-w-2xl mb-12">
          The modern CRM built for businesses that put relationships first.<br />
          <span className="text-black font-medium">Spend less time on data entry and more time building relationships.</span>
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            size="lg"
            className="hero-btn-glass text-lg px-10 py-4 font-bold"
            onClick={() => navigate("/try-for-free")}
          >
            Start your free trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="hero-btn-neon text-lg px-10 py-4 font-bold"
            onClick={() => navigate("/get-demo")}
          >
            Get a demo
          </Button>
        </div>
      </div>

      {/* Right Side: Animated CRM Image */}
      <div className="flex-1 flex items-center justify-center mt-12 md:mt-0 z-10">
        <img
          src="https://c8.alamy.com/comp/MW913G/young-businessman-explaining-graphs-to-his-colleagues-on-projector-MW913G.jpg"
          alt="CRM Presentation"
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain rounded-2xl shadow-2xl animate-slide-up mt-8"
        />
      </div>

      {/* Animation keyframes (add to global CSS if not present) */}
      {/*
      @keyframes slideUp {
        0% { opacity: 0; transform: translateY(60px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      */}
    </section>
  );
};

export default Hero;

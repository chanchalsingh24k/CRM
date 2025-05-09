import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import AuthModal from "./FreeTrialModal";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-padding pt-16 md:pt-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-4 py-2 rounded-full bg-cvk-lightpurple text-cvk-darkpurple font-medium inline-block mb-6">
              #1 Customer-Centric CRM
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform your relationships with 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cvk-purple to-cvk-blue"> CVK CRM</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              The modern CRM built for businesses that put relationships first. Spend less time on data entry and more time building relationships.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                size="lg"
                className="bg-cvk-purple hover:bg-cvk-darkpurple text-white"
                onClick={() => navigate("/try-for-free")}
              >
                Start your free trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cvk-purple text-cvk-purple hover:bg-cvk-purple hover:text-white"
                onClick={() => navigate("/get-demo")}
              >
                Get a demo
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Customer 1"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Customer 2"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="Customer 3"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Customer 4"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-bold">10,000+</span> happy customers
              </p>
            </div>
            <div className="mt-6">
              <Button
                size="lg"
                className="bg-white border border-cvk-purple text-cvk-purple hover:bg-cvk-purple hover:text-white font-semibold shadow-sm rounded-full px-6 py-2 transition"
                onClick={() => navigate("/email-integration")}
              >
                See Email Integration
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 top-1/4 right-1/4 w-72 h-72 rounded-full bg-cvk-purple/20 blur-3xl"></div>
            <div className="bg-white rounded-xl border p-2 card-shadow rotate-3 animate-float">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-cvk-purple/30 via-white to-cvk-blue/20 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                  alt="Business Teamwork"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl border p-2 card-shadow -rotate-3 mt-4 -ml-8 animate-float" style={{ animationDelay: '1s' }}>
              <div className="aspect-[3/2] rounded-lg bg-gradient-to-br from-cvk-blue/30 via-white to-cvk-purple/20 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthModal open={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Hero;

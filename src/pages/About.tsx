
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cvk-purple/5 to-cvk-blue/5">
      <div className="container-custom py-4">
        <Button 
          variant="ghost" 
          className="flex items-center text-gray-600 mb-6" 
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Button>
      </div>
      
      <div className="container-custom px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <Logo className="mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">About Us</h1>
          <div className="max-w-3xl text-center">
            <p className="text-lg text-gray-600 mb-6">
              We provide intuitive workflow management solutions that help businesses streamline their operations, 
              enhance collaboration, and drive growth.
            </p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to empower businesses of all sizes with easy-to-use yet powerful tools that 
                transform how teams work together. We believe in creating software that adapts to your workflow, 
                not the other way around.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where technology eliminates the friction in business processes, 
                allowing teams to focus on what truly matters: creating value for their customers 
                and growing their business.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cvk-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12L11 15L16 10" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Simplicity</h3>
                <p className="text-gray-600">We believe in making complex things simple through thoughtful design.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cvk-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">We help teams work better together through intuitive tools.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cvk-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">We're committed to delivering exceptional quality in everything we do.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              Our diverse team brings together expertise from various fields including software development, 
              design, customer success, and business operations. We're united by our passion for creating 
              tools that make work better.
            </p>
            <div className="bg-cvk-purple/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Join Us</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who share our vision and values. 
                Check our careers page for current openings.
              </p>
              <Button className="bg-cvk-purple hover:bg-cvk-darkpurple">
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// This file should be renamed to Index.jsx
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import FreeTrialModal from "@/components/FreeTrialModal";

const Index = () => {
  return (
    <>
      <FreeTrialModal />
      <div className="min-h-screen flex flex-col">
        <main>
          <Hero />
          <Features />
          <DashboardPreview />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

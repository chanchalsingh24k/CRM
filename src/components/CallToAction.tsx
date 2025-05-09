import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  "30-day free trial",
  "No credit card required",
  "Cancel anytime",
  "24/7 support"
];

const CallToAction = () => {
  const navigate = useNavigate();

  const handleTrialClick = () => {
    navigate('/try-for-free');
  };

  const handleDemoClick = () => {
    navigate('/login');
  };

  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Trusted by leading teams</h3>
          <p className="text-gray-500 mb-8">Join 10,000+ businesses who use our CRM to grow faster.</p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition-all duration-200" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition-all duration-200" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition-all duration-200" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" alt="Slack" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition-all duration-200" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Zoom_Communications_Logo.svg" alt="Zoom" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition-all duration-200" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Shopify_logo_2018.svg" alt="Shopify" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition-all duration-200" />
          </div>
        </div>
      </div>
      <section id="pricing" className="section-padding" style={{ background: "#eee", border: "2px solid red" }}>
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cvk-purple to-cvk-blue"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_400px_at_0%_0%,rgba(255,255,255,0.3),transparent)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_400px_at_100%_100%,rgba(255,255,255,0.3),transparent)]"></div>
            </div>
            <div className="relative p-8 md:p-12 lg:p-16 text-white text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Get started with CVK CRM today</h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                Join thousands of businesses that use CVK CRM to build better customer relationships and grow faster.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <CheckIcon className="h-4 w-4 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-cvk-purple hover:bg-gray-100"
                  onClick={handleTrialClick}
                >
                  Start your free trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10"
                  onClick={handleDemoClick}
                >
                  Schedule a demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;

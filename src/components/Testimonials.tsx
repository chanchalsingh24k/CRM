import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Sales Manager",
    company: "TechGrow Inc.",
    content: "CVK CRM has transformed how we manage client relationships. The intuitive interface saves us hours of data entry, and the insights help us close deals faster. It's been a game-changer for our team.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
  },
  {
    name: "Michael Chen",
    position: "Marketing Director",
    company: "Pulse Media",
    content: "After trying multiple CRM solutions, CVK stands out for its perfect balance of powerful features and ease of use. Our team adopted it quickly, and our customer satisfaction scores have improved by 28%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
  },
  {
    name: "Alisha Patel",
    position: "Customer Success Lead",
    company: "Momentum SaaS",
    content: "The automation capabilities in CVK CRM have saved our small team countless hours. We're able to provide personalized service at scale, which was impossible before. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
  },
  {
    name: "Thomas Wilson",
    position: "CEO",
    company: "Elevate Consulting",
    content: "CVK CRM gives us the perfect view of our client interactions across multiple touchpoints. The insights we've gained have been invaluable for our strategic planning and growth initiatives.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
  },
  {
    quote: "CVK CRM has transformed the way our team works. The integrations and automation are a game changer!",
    name: "Priya Sharma",
    company: "Google"
  },
  {
    quote: "We closed 30% more deals after switching to CVK CRM. The analytics are fantastic.",
    name: "John Miller",
    company: "Amazon"
  },
  {
    quote: "The support team is amazing and the product is super easy to use.",
    name: "Emily Chen",
    company: "Slack"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };
  
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by businesses worldwide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience with CVK CRM.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -z-10 -top-20 -right-20 w-72 h-72 rounded-full bg-cvk-purple/10 blur-3xl"></div>
          <div className="absolute -z-10 -bottom-20 -left-20 w-72 h-72 rounded-full bg-cvk-blue/10 blur-3xl"></div>
          
          {/* Testimonial Cards */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="bg-white border shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Mobile Slider */}
          <div className="md:hidden">
            <Card className="bg-white border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonials[currentIndex].content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={prevTestimonial}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={nextTestimonial}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
         
      
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

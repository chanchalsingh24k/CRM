
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/Logo";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckIcon } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  companyName: z.string().min(2, { message: "Company name is required" }),
  phoneNumber: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const benefits = [
  "30-day free trial with full functionality",
  "No credit card required to start",
  "Easily import your data from other CRMs",
  "Personalized onboarding support",
  "Cancel anytime - no commitments",
];

const TryForFree = () => {
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // In a real app, you would send this data to your backend
    navigate("/login");
  };

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
      
      <div className="container-custom max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center pb-20">
          {/* Left column - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="mb-8">
              <Logo className="mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Start your free trial
              </h1>
              <p className="text-gray-600">
                Get started with CVK CRM today. No credit card required.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="name@company.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-cvk-purple hover:bg-cvk-darkpurple text-lg py-6"
                >
                  Start your free trial
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </Form>
          </div>
          
          {/* Right column - Benefits */}
          <div className="flex flex-col justify-center px-4 md:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why choose CVK CRM?
            </h2>
            
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="rounded-full bg-cvk-purple/10 p-1">
                      <CheckIcon className="h-5 w-5 text-cvk-purple" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-cvk-lightpurple rounded-xl p-6">
              <p className="text-lg font-medium text-cvk-darkpurple mb-2">
                "CVK CRM has transformed how we manage relationships with our clients. The intuitive interface and powerful automations save us hours every week."
              </p>
              <p className="text-cvk-purple font-medium">
                Chanchal Thakur, CEO at CVK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryForFree;

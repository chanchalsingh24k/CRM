import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckIcon, Mail, User, Building2, Phone } from "lucide-react";
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

  const { register, handleSubmit } = useForm<FormValues>({
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border-4 border-transparent bg-clip-padding p-8"
              style={{
                borderImage: "linear-gradient(90deg, #a78bfa 0%, #38bdf8 100%) 1",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
              }}
            >
              {/* Logo and Header moved inside the card */}
              <div className="flex flex-col items-center text-center mb-8">
                <Logo className="w-16 h-16 rounded-full shadow mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Start your free trial</h1>
                <p className="text-gray-600 max-w-xs">
                  Get started with CVK CRM today. No credit card required.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block font-semibold mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-cvk-purple" size={18} />
                    <Input
                      {...register("fullName", { required: true })}
                      placeholder="Your name"
                      className="pl-10 py-3 rounded-xl border border-cvk-purple/30 shadow focus:border-cvk-purple focus:ring-cvk-purple transition bg-white/90"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-cvk-blue" size={18} />
                    <Input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="name@company.com"
                      className="pl-10 py-3 rounded-xl border border-cvk-blue/30 shadow focus:border-cvk-blue focus:ring-cvk-blue transition bg-white/90"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Company Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-cvk-purple" size={18} />
                    <Input
                      {...register("companyName", { required: true })}
                      placeholder="Your company"
                      className="pl-10 py-3 rounded-xl border border-cvk-purple/30 shadow focus:border-cvk-purple focus:ring-cvk-purple transition bg-white/90"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Phone Number (Optional)</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-cvk-blue" size={18} />
                    <Input
                      {...register("phoneNumber")}
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="pl-10 py-3 rounded-xl border border-cvk-blue/30 shadow focus:border-cvk-blue focus:ring-cvk-blue transition bg-white/90"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-8 bg-gradient-to-r from-cvk-purple to-cvk-blue text-lg py-4 rounded-xl shadow-lg font-bold tracking-wide transition-all duration-200 hover:scale-105"
              >
                🚀 Start your free trial
              </Button>

              <p className="text-xs text-center text-gray-500 mt-4">
                By signing up, you agree to our{" "}
                <a href="/terms-of-service" className="underline text-cvk-purple">Terms of Service</a> and{" "}
                <a href="/privacy-policy" className="underline text-cvk-blue">Privacy Policy</a>.
              </p>
            </form>
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

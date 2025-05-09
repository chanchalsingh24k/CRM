import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import TryForFree from "./pages/TryForFree";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import UserDashboard from "./pages/UserDashboard";
import About from "./pages/About";
import Contacts from "./components/Contacts";
import Deals from "./components/Deals";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import MeetingScheduler from "./components/MeetingScheduler";
import SalesAnalytics from "./components/SalesAnalytics";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import ContactManagement from "./components/ContactManagement";
import SalesChat from "./components/SalesChat";
import GetDemoForm from "./components/GetDemoForm";
import CrmInfo from "./components/CrmInfo";
import EmailIntegration from "./components/EmailIntegration";
import MailDetails from "./components/MailDetails";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import SecurityPage from "./pages/SecurityPage";
import UpdatesPage from "./pages/UpdatesPage";
import SalesPage from "./pages/SalesPage";
import MarketingPage from "./pages/MarketingPage";
import CustomerServicePage from "./pages/CustomerServicePage";
import SupportPage from "./pages/SupportPage";
import BlogPage from "./pages/BlogPage";
import DocumentationPage from "./pages/DocumentationPage";
import CommunityPage from "./pages/CommunityPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import CareersPage from "./pages/CareersPage";
import PartnersPage from "./pages/PartnersPage";
import ContactUsPage from "./pages/ContactUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookieSettingsPage from "./pages/CookieSettingsPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/try-for-free" element={<TryForFree />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/employee" element={<EmployeeDashboard />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/meeting-scheduler" element={<MeetingScheduler />} />
            <Route path="/sales-analytics" element={<SalesAnalytics />} />
            {/* Temporarily removing ContactManagement route until component is available */}
            <Route path="/sales" element={<SalesChat />} />
            <Route path="/get-demo" element={<GetDemoForm />} />
            <Route path="/crm-info" element={<CrmInfo />} />
            <Route path="/email-integration" element={<EmailIntegration />} />
            <Route path="/mail-details" element={<MailDetails />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/customer-service" element={<CustomerServicePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/help-center" element={<HelpCenterPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/contact-management" element={<ContactManagement />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-settings" element={<CookieSettingsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

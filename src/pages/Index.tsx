
import Navbar from "@/components/Navbar";
import HeroSection from "@/pages/HeroSection/HeroSection";
import Features from "@/pages/Features/Features";
import HowItWorks from "@/components/HowItWorks";
import ExclusiveFeatures from "@/pages/ExclusiveFeatures/ExclusiveFeatures";
import TrustSecurity from "@/pages/TrustSecurity/TrustSecurity";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-shamir-dark text-white overflow-x-hidden"
    >
      <ScrollProgressBar />
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="unique-functions">
        <ExclusiveFeatures />
      </div>
      <TrustSecurity />
      <div id="download">
        <Footer />
      </div>
      <ScrollToTop />
    </motion.div>
  );
};

export default Index;

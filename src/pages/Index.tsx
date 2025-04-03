
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatIs from "@/components/WhatIs";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatIs />
      <HowItWorks />
      <Results />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

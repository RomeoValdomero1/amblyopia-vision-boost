
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatIs from "@/components/WhatIs";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatIs />
      <HowItWorks />
      <Results />
    </div>
  );
};

export default Index;

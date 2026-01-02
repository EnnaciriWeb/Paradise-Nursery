import React from 'react';
import { ArrowRight } from 'lucide-react';
import AboutUs from './AboutUs';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section using CSS Class from App.css */}
      <div className="landing-page-background relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Welcome to Paradise Nursery
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light drop-shadow-md text-emerald-50">
            Curated plants to transform your living space into a green sanctuary.
          </p>
          <button
            onClick={onGetStarted}
            className="group bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 flex items-center gap-2 mx-auto"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
};

export default LandingPage;
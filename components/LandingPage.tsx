import React from 'react';
import { ArrowRight, Wind, Droplets, Sun } from 'lucide-react';
import { ViewState } from '../types';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
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
      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              At Paradise Nursery, we believe that nature belongs in every home. Founded in 2024, 
              we started as a small family-owned greenhouse and have grown into a premier online 
              destination for plant enthusiasts. We meticulously select every plant, ensuring that 
              you receive only the healthiest, most vibrant greenery. Whether you are a seasoned 
              gardener or just starting your journey, we are here to help you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-emerald-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Air Purifying</h3>
              <p className="text-gray-600">Plants chosen specifically to improve your indoor air quality and boost focus.</p>
            </div>
            <div className="text-center p-6 bg-emerald-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainably Grown</h3>
              <p className="text-gray-600">Our plants are grown using eco-friendly practices that respect the earth.</p>
            </div>
            <div className="text-center p-6 bg-emerald-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Care</h3>
              <p className="text-gray-600">Every order comes with detailed care instructions to ensure your plants thrive.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
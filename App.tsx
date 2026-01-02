import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import CartPage from './components/CartItem'; // As per requested file mapping
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen flex flex-col">
      {/* 
         Logic to hide Navbar on Landing Page usually isn't standard in E-commerce, 
         but allows for the "Get Started" flow described in the assignment. 
         However, the assignment asks for a navbar on both Product Listing and Cart pages.
         It doesn't explicitly forbid it on Landing, but typically Landing pages 
         have specific headers. Let's keep it consistent:
         If View is Landing, we can show a transparent one or just hide it until 'Get Started'.
         Based on "Include a navbar that appears on both the Product Listing and Cart pages",
         I will show it always or condition it. Let's show it always for better UX.
      */}
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
      />

      <main className="flex-grow">
        {currentView === 'landing' && (
          <LandingPage onGetStarted={() => handleNavigate('products')} />
        )}
        
        {currentView === 'products' && (
          <ProductList />
        )}
        
        {currentView === 'cart' && (
          <CartPage onContinueShopping={() => handleNavigate('products')} />
        )}
      </main>

      {/* Simple Footer */}
      {currentView !== 'landing' && (
        <footer className="bg-emerald-900 text-emerald-200 py-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Paradise Nursery. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}

export default App;
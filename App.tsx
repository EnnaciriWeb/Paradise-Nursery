import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import CartPage from './components/CartItem';
import { ViewState } from './types';
import './App.css'; // Import global styles

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen flex flex-col">
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

      {currentView !== 'landing' && (
        <footer className="bg-emerald-900 text-emerald-200 py-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Paradise Nursery. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}

export default App;
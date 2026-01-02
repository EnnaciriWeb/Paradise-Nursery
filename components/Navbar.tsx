import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <nav className="sticky top-0 z-50 w-full bg-emerald-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <div 
            className="flex items-center gap-2 cursor-pointer hover:text-emerald-200 transition-colors"
            onClick={() => onNavigate('landing')}
          >
            <div className="bg-emerald-100 p-2 rounded-full">
              <Leaf className="h-6 w-6 text-emerald-800" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide">Paradise Nursery</h1>
              <p className="text-xs text-emerald-300 hidden sm:block">Where Green Meets Serenity</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('products')}
              className={`text-lg font-medium transition-colors hover:text-emerald-300 ${currentView === 'products' ? 'text-emerald-300 underline underline-offset-4' : ''}`}
            >
              Plants
            </button>
            
            <button 
              onClick={() => onNavigate('cart')}
              className="relative p-2 hover:bg-emerald-800 rounded-full transition-colors group"
            >
              <ShoppingCart className={`h-7 w-7 ${currentView === 'cart' ? 'text-emerald-300' : ''}`} />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md animate-pulse">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
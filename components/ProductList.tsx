import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { RootState } from '../store/store';
import { Plant } from '../types';
import { Plus, Check } from 'lucide-react';

const PLANTS_DATA: Plant[] = [
  // Air Purifying
  { id: 1, category: "Air Purifying", name: "Snake Plant", price: 15, description: "Excellent at removing toxins.", image: "https://images.unsplash.com/photo-1593482886870-890204c6b13e?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 2, category: "Air Purifying", name: "Spider Plant", price: 12, description: "Easy to grow and propagate.", image: "https://images.unsplash.com/photo-1572688484279-a27d5b4355f6?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 3, category: "Air Purifying", name: "Peace Lily", price: 18, description: "Beautiful white flowers and air cleaning.", image: "https://images.unsplash.com/photo-1593691509543-c55ce32e01b5?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 4, category: "Air Purifying", name: "Boston Fern", price: 20, description: "Lush green fronds for humid spots.", image: "https://images.unsplash.com/photo-1615895963378-cd60de634e30?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 5, category: "Air Purifying", name: "Rubber Plant", price: 25, description: "Bold leaves and striking presence.", image: "https://images.unsplash.com/photo-1611211232932-da3113c5b960?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 6, category: "Air Purifying", name: "Aloe Vera", price: 10, description: "Healing gel and unique look.", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=300&h=300" },

  // Succulents
  { id: 7, category: "Succulents", name: "Echeveria", price: 8, description: "Rosette shaped beauty.", image: "https://images.unsplash.com/photo-1534068590799-09895a701e3e?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 8, category: "Succulents", name: "Jade Plant", price: 14, description: "Symbol of good luck.", image: "https://images.unsplash.com/photo-1616428253106-960249c57e84?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 9, category: "Succulents", name: "Zebra Cactus", price: 11, description: "Striped leaves, very hardy.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 10, category: "Succulents", name: "String of Pearls", price: 16, description: "Cascading spherical leaves.", image: "https://images.unsplash.com/photo-1563714272633-882d27774d6c?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 11, category: "Succulents", name: "Burro's Tail", price: 15, description: "Trailing succulent, loves sun.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 12, category: "Succulents", name: "Panda Plant", price: 9, description: "Fuzzy leaves with brown tips.", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=300&h=300" },

  // Flowering
  { id: 13, category: "Flowering", name: "Orchid", price: 30, description: "Elegant and long-lasting blooms.", image: "https://images.unsplash.com/photo-1566958760253-195f269a8356?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 14, category: "Flowering", name: "African Violet", price: 12, description: "Vibrant purple flowers.", image: "https://images.unsplash.com/photo-1563245159-f793f19d8c37?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 15, category: "Flowering", name: "Bromeliad", price: 22, description: "Tropical flair with bright colors.", image: "https://images.unsplash.com/photo-1602157544062-a5e227092102?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 16, category: "Flowering", name: "Anthurium", price: 24, description: "Heart-shaped waxy red flowers.", image: "https://images.unsplash.com/photo-1611736152125-96dbbf196728?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 17, category: "Flowering", name: "Kalanchoe", price: 10, description: "Clusters of tiny bright flowers.", image: "https://images.unsplash.com/photo-1627931398864-16259021c172?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 18, category: "Flowering", name: "Christmas Cactus", price: 15, description: "Blooms in winter.", image: "https://images.unsplash.com/photo-1572251394142-b9b008d3e232?auto=format&fit=crop&q=80&w=300&h=300" },
];

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  // Extract unique categories
  const categories = Array.from(new Set(PLANTS_DATA.map(p => p.category)));

  const handleAddToCart = (plant: Plant) => {
    dispatch(addItem(plant));
  };

  const isAdded = (plantId: number) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">Our Beautiful Plants</h2>
        
        {categories.map(category => (
          <div key={category} className="mb-16">
            <div className="flex items-center mb-8">
               <h3 className="text-2xl font-semibold text-emerald-800 bg-white px-6 py-2 rounded-full shadow-sm border border-emerald-100">
                 {category}
               </h3>
               <div className="flex-grow h-px bg-emerald-200 ml-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PLANTS_DATA.filter(p => p.category === category).map(plant => {
                const added = isAdded(plant.id);
                return (
                  <div key={plant.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100">
                    <div className="relative h-64 overflow-hidden group">
                      <img 
                        src={plant.image} 
                        alt={plant.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      {added && (
                        <div className="absolute top-4 right-4 bg-emerald-600 text-white p-2 rounded-full shadow-lg">
                          <Check size={20} />
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-gray-800">{plant.name}</h4>
                        <span className="text-lg font-bold text-emerald-600">${plant.price}</span>
                      </div>
                      <p className="text-gray-500 text-sm mb-6 flex-grow">{plant.description}</p>
                      
                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={added}
                        className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all duration-300
                          ${added 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg active:scale-95'
                          }`}
                      >
                        {added ? (
                          <>Added to Cart</>
                        ) : (
                          <>
                            <Plus size={18} /> Add to Cart
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
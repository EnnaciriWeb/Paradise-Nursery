import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeItem, updateQuantity } from '../store/cartSlice';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

interface CartItemProps {
  onContinueShopping: () => void;
}

const CartPage: React.FC<CartItemProps> = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const { items, totalAmount, totalQuantity } = useSelector((state: RootState) => state.cart);

  const handleCheckout = () => {
    alert("Coming Soon! Thank you for your interest in Paradise Nursery.");
  };

  const handleIncrease = (id: number, currentQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecrease = (id: number, currentQuantity: number) => {
    // If quantity is 1, decrease becomes 0, which is handled by slice to remove the item
    dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full">
          <div className="bg-emerald-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
             <ShoppingBag className="h-12 w-12 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any green friends to your home yet.</p>
          <button 
            onClick={onContinueShopping}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
           <button onClick={onContinueShopping} className="flex items-center text-gray-500 hover:text-emerald-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-1" /> Continue Shopping
           </button>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-10 border-b pb-4">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-xl"
                />
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.category}</p>
                  <p className="text-emerald-600 font-semibold mt-1">${item.price} <span className="text-gray-400 text-xs font-normal">/ unit</span></p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button 
                      onClick={() => handleDecrease(item.id, item.quantity)}
                      className="p-2 bg-white rounded-md shadow-sm hover:bg-gray-50 text-gray-600 transition-all"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center font-semibold text-gray-800">{item.quantity}</span>
                    <button 
                      onClick={() => handleIncrease(item.id, item.quantity)}
                      className="p-2 bg-white rounded-md shadow-sm hover:bg-gray-50 text-gray-600 transition-all"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <div className="text-sm font-medium text-gray-500">
                    Subtotal: <span className="text-gray-900 font-bold">${item.price * item.quantity}</span>
                  </div>
                </div>

                <button 
                  onClick={() => dispatch(removeItem(item.id))}
                  className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:sticky lg:top-24 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-3 text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span>{totalQuantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Cart Amount</span>
                  {/* Task 7: Display the total cart amount dynamically */}
                  <span className="text-2xl font-bold text-emerald-600">${totalAmount}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
              >
                Checkout
              </button>
              
              <button 
                onClick={onContinueShopping}
                className="w-full mt-4 text-emerald-600 font-semibold py-2 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;
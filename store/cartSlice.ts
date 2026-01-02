import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState, Plant } from '../types';

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Plant>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
        state.totalQuantity++;
      } else {
        // Depending on requirements, we might just increment, 
        // but the prompt implies the "Add" button disables after adding,
        // suggesting a single add flow initially. 
        // However, robust logic handles re-adding safely.
        existingItem.quantity++;
        state.totalQuantity++;
      }
      // Recalculate totals handled in component or basic logic here?
      // Keeping state sync'd is better practice.
      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
      }
      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
      }
      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
          state.totalQuantity--;
        } else {
          existingItem.quantity--;
          state.totalQuantity--;
        }
      }
      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = { show: false, items: [], totalQuantity: 0, totalAmout: 0 };
const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        toggleCart(state) {
            state.show = !state.show;
        },
        add(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    title: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        remove(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
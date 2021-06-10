import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {show: false};
const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        toggleCart(state) {
            state.show = !state.show;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
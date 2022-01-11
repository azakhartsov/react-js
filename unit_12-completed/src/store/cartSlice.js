import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
        }
    }
});

export const { increment } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;
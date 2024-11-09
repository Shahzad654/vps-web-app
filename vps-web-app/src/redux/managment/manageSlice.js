import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Your initial state for the managed data
  items: [],
  isLoading: false,
  error: null,
};

const manageSlice = createSlice({
  name: 'manage',
  initialState,
  reducers: {
    // Action to fetch data
    fetchDataStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Other actions for managing data, e.g., adding, removing, updating
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    // ... other reducers
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, addItem, removeItem } = manageSlice.actions;
export default manageSlice.reducer;
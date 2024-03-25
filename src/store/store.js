// store.js
import { configureStore } from '@reduxjs/toolkit';

// Reducer
const valueReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return action.payload;
    default:
      return state;
  }
};

// Create Redux store
const store = configureStore({
  reducer: {
    value: valueReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
const valueReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return action.payload;
    default:
      return state;
  }
};
const store = configureStore({
  reducer: {
    value: valueReducer,
  },
});
export default store;

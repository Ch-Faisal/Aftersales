import { configureStore } from '@reduxjs/toolkit';
const valueReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return action.payload;
    default:
      return state;
  }
};
const printUrlReducer = (state = null, action) => {
  // Define your logic for handling printurl actions here
  // For example:
  switch (action.type) {
    case 'SET_PRINT_URL':
      return action.payload;
    default:
      return state;
  }
};
const store = configureStore({
  reducer: {
    value: valueReducer,
    printurl: printUrlReducer,
  },
});
export default store;

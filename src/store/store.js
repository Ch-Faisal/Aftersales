import { configureStore } from '@reduxjs/toolkit';
const valueReducer = (state = 'OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE', action) => {
  return state;
};

const store = configureStore({
  reducer: {
    value: valueReducer
  }
});

export default store;

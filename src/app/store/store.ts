// Главный редюсер

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/entities/products/store/ProductsSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

// Типы для доступа к состоянию и диспетчеру
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

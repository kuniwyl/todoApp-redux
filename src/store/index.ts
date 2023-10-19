import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducers/counterReducer.ts";
import todoReducer from "./Reducers/todoReducer.ts";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
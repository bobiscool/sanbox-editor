import { configureStore } from "@reduxjs/toolkit";
import editor from "./editor";

const store = configureStore({
  reducer: {
    editor
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

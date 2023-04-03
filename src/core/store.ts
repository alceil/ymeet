import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import mediaReducer from "./reducers/media";
import meetReducer from "./reducers/meeting";
const store = configureStore({
  reducer: {
    mediaReducer,
    authReducer,
    // themeReducer,
    meetReducer,
    // chatReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

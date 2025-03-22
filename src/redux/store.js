import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistCombineReducers,
    persistReducer,
    REGISTER,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
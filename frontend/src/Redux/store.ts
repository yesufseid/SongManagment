import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songReducer from "./songSlice";
import songSaga from "./songSaga";
import statsReducer from "./slices/statsSlice";
import statsSaga from "./slices/statsSaga";
import filterReducer from "./slices/filterSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
     songs: songReducer,
     stats: statsReducer,
     filter: filterReducer, 
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(songSaga);
sagaMiddleware.run(statsSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

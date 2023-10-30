import { configureStore } from '@reduxjs/toolkit';
import gameSlice from 'state/slices/gameSlice';
import playerSlice from 'state/slices/playerSlice';

// The root reducer for the store.
const rootReducer = {
    game: gameSlice.reducer,
    player: playerSlice.reducer
};

/**
 * Setup the redux store. This automatically sets up the redux thunk middleware. We also add
 * the middleware for querying the Person API.
 */
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
});

// Infer the `RootState` type from the store itself. The inferred RootState type is based on the root reducer.
export type RootState = ReturnType<typeof store.getState>;

// Infer the type of the dispatch function. Call this AppDispatch as recommended by redux toolkit.
export type AppDispatch = typeof store.dispatch;

export default store;
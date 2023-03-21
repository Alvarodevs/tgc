import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice'

export const store = configureStore({
	reducer: {
		products: productsReducer
	},
});

// Rootstate brings every state from reducers i.e: bookingsState, roomsState...
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
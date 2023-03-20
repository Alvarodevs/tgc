import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		
	},
});

// Rootstate brings every state from reducers i.e: bookingsState, roomsState...
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
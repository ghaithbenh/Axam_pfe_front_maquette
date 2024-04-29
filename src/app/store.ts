import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/ProductSlice';
import { productApi } from './services/product';
import { authApi } from './services/auth';

export const store = configureStore({
	reducer: {
		products: productReducer,
		[productApi.reducerPath]: productApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(productApi.middleware)
			.concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

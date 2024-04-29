import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResponse } from '../../utils/AuthResponse';
import { AuthRequest } from '../../utils/AuthRequest';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://localhost:7236/api/',
		credentials: 'include',
	}),
	endpoints: (builder) => ({
		signUp: builder.mutation<AuthResponse, AuthRequest>({
			query: (request) => ({
				url: '/auth/register',
				method: 'POST',
				body: request,
			}),
		}),

		login: builder.mutation<AuthResponse, AuthRequest>({
			query: (request) => ({
				url: '/auth/login',
				method: 'POST',
				body: request,
			}),
		}),
	}),
});

export const {
  useSignUpMutation,
  useLoginMutation,
} = authApi;
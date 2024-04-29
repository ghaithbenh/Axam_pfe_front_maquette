import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ElasticResponse } from '../../utils/ElasticResponse';
import { AdminCosineSearchRequest } from '../../utils/AdminCosineSearchRequest';

export const productApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7236/api/' }),
	endpoints: (builder) => ({
		cosineSearch: builder.query<ElasticResponse[], string>({
			query: (productName) => `products/cosine_search?q=${productName}`,
		}),
		adminCosineSearch: builder.query<ElasticResponse[], AdminCosineSearchRequest>(
			{
				query: (request) => ({
					url: `products/admin/cosine_searchq=${request.q}&num_candidates_desc=${request.numCandidatesDesc}&num_candidates_prodlabel=${request.numCandidatesProdLabel}&top_res_desc=${request.topResDesc}&top_res_prodlabel=${request.topResProdLabel}`,
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token'),
					},
				}),
			}
		),
	}),
});


export const { useCosineSearchQuery, useAdminCosineSearchQuery } = productApi;

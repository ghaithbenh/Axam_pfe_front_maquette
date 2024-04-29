import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ElasticResponse } from '../../utils/ElasticResponse';
import { RootState } from '../store';

interface ProductState {
	products: ElasticResponse[];
}

const initialState: ProductState = {
	products: [],
};

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<ElasticResponse[]>) => {
			state.products = action.payload;
		},
	},
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export default productSlice.reducer;
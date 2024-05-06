import { SubmitHandler, useForm } from 'react-hook-form';
import { useCosineSearchQuery } from '../app/services/product';
import { useState } from 'react';

type ClientInput = {
	search: string;
};

const ClientHome: React.FC = () => {
	const { register, handleSubmit } = useForm<ClientInput>();
	const [searchQuery, setSearchQuery] = useState<string>('');

	const { data, error, isLoading } = useCosineSearchQuery(searchQuery, {
		skip: searchQuery.length === 0,
	});

	const handleSearch: SubmitHandler<ClientInput> = (data: {
		search: string;
	}) => {
		setSearchQuery(data.search);
	};


	return (
		<div className="client-home">
			<h2>Bonjour! vous pouvez cherchez les produits ci-dessous</h2>
			<form onSubmit={handleSubmit(handleSearch)}>
				<input
					{...register('search')}
					type="text"
					placeholder="Rechercher produits..."
					defaultValue={searchQuery}
				/>

				<button type="submit">Search</button>
			</form>

			{isLoading && <p>Loading...</p>}
			{error && <p>Error occurred.</p>}
			{data && (
				<div>
					{data.map((response) => (
						<div key={response.product.codeInterne}>
							{response.product.seoLabelProduit}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ClientHome;

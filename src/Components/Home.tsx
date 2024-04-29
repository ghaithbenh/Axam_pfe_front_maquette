import { SubmitHandler, useForm } from 'react-hook-form';
import { useCosineSearchQuery } from '../app/services/product';
import { getRoleFromToken } from '../utils/functions/extractRoleFromToken';
import { useEffect, useState } from 'react';

type ClientInput = {
    search: string;
}

const ClientHome: React.FC = () => {
	const { register, handleSubmit } = useForm<ClientInput>();
	const [searchQuery, setSearchQuery] = useState<string>('');

	const { data, error, isLoading } = useCosineSearchQuery(searchQuery, {
		skip: searchQuery.length === 0,
	});

	const handleSearch: SubmitHandler<ClientInput> = (data: { search: string }) => {
		setSearchQuery(data.search);
	};
    const role = getRoleFromToken();

    useEffect(() => { console.log(role)}, [role])


	return (
		<div className="client-home">
			<h1>Welcome to Our Product Page</h1>
			<form onSubmit={handleSubmit(handleSearch)}>
				<input
					{...register('search')}
					type="text"
					placeholder="Search for a product..."
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

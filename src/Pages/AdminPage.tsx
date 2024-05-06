import { useEffect, useState } from 'react';
import { useAdminCosineSearchQuery } from '../app/services/product';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getRoleFromToken } from '../utils/functions/extractRoleFromToken';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { setProducts } from '../app/features/ProductSlice';
import { ClipLoader } from 'react-spinners';
import './AdminPage.css';

type AdminFormInput = {
	q: string;
	num_candidates_desc: number;
	num_candidates_prodlabel: number;
	top_res_desc: number;
	top_res_prodlabel: number;
};

const AdminPage: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [numCandidatesDesc, setNumCandidatesDesc] = useState<number>(20);
	const [numCandidatesProdLabel, setNumCandidatesProdLabel] =
		useState<number>(10);
	const [topResDesc, setTopResDesc] = useState<number>(5);
	const [topResProdLabel, setTopResProdLabel] = useState<number>(5);
	const { data: productData, isLoading } = useAdminCosineSearchQuery(
		{
			q: searchQuery,
			numCandidatesDesc, // Example value, adjust as needed
			numCandidatesProdLabel, // Example value, adjust as needed
			topResDesc, // Example value, adjust as needed
			topResProdLabel, // Example value, adjust as needed
		},
		{
			skip: searchQuery.length === 0,
		}
	);
	const { register, handleSubmit } = useForm<AdminFormInput>();
	const dispatch = useAppDispatch();

	const role = getRoleFromToken();
	const navigate = useNavigate();

	useEffect(() => {
		if (role !== 'ADMIN') navigate('home', { replace: true });
		if (productData) {
			dispatch(setProducts(productData!));
			navigate('/dashboard');
		}
	}, [navigate, role, dispatch, productData]);

	const handleSearch: SubmitHandler<AdminFormInput> = (data) => {
		setSearchQuery(data.q);
	};

	if (isLoading) {
		return <ClipLoader color="#36d7b7" loading={isLoading} size={150} />;
	}

	return (
		<div className="admin">
			<h2>Bonjour! vous pouvez cherchez les produits ci-dessous</h2>
			<form onSubmit={handleSubmit(handleSearch)}>
				<div className="form-group">
					<label htmlFor="search">Rechercher produits:</label>
					<input
						{...register('q', { required: true })}
						type="text"
						id="search"
						placeholder="Rechercher produits..."
						defaultValue={searchQuery}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="numCandidatesDesc">
						Un entier reprèsentant le nombre total des produits que nous
						souhaitons rechercher par la description, valeur par dèfaut : 20.
					</label>
					<input
						type="number"
						id="numCandidatesDesc"
						placeholder="Number of Candidates Desc"
						value={numCandidatesDesc}
						onChange={(e) => setNumCandidatesDesc(parseInt(e.target.value))}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="numCandidatesProdLabel">
						Un entier reprèsentant le nombre total des produits que nous
						souhaitons rechercher par la label produit, valeur par dèfaut : 10
					</label>
					<input
						type="number"
						id="numCandidatesProdLabel"
						placeholder="Number of Candidates ProdLabel"
						value={numCandidatesProdLabel}
						onChange={(e) =>
							setNumCandidatesProdLabel(parseInt(e.target.value))
						}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="topResDesc">
						Un entier reprèsentant le nombre des meilleurs résultats par
						recherche vectorielle de « Description », valeur par dèfaut : 5.
					</label>
					<input
						type="number"
						id="topResDesc"
						placeholder="Top Results Desc"
						value={topResDesc}
						onChange={(e) => setTopResDesc(parseInt(e.target.value))}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="topResProdLabel">
						Un entier reprèsentant le nombre des meilleurs résultats par
						recherche vectorielle de « LabelProduit », valeur par dèfaut : 5.
					</label>
					<input
						type="number"
						id="topResProdLabel"
						placeholder="Top Results ProdLabel"
						value={topResProdLabel}
						onChange={(e) => setTopResProdLabel(parseInt(e.target.value))}
					/>
				</div>
				<button type="submit">Rechercher</button>
			</form>
		</div>
	);
};

export default AdminPage;

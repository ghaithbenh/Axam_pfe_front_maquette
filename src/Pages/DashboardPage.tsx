import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import KeywordPieChart from '../Components/KeywordPieChart';
import { useAppSelector } from '../app/hooks';
import { selectProducts } from '../app/features/ProductSlice';
import { ElasticResponse } from '../utils/ElasticResponse';
import './DashboardPage.css';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
	const products = useAppSelector(selectProducts);
	const chartData: { name: string; score: number }[] | undefined =
		products?.map((item: ElasticResponse) => ({
			name: item.product.seoLabelProduit,
			score: item.score,
		}));

	return (
		<>
			<div className="dashboard-container">
				{products.length === 0 && <>
				<Link to="/admin">
				<button>Vous n'avez pas recherché un produit? Retourner</button>
			</Link>
				</>}
				{products.length > 0 && (
					<>
						<div>
							<h3>Produits avec le meilleur score</h3>
							<ResponsiveContainer width={600} height={600}>
								{/* <BarChart
							width={Math.max(800, chartData.length * 80)}
							layout='vertical'
							height={500}
							data={chartData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis
								dataKey="name"
								interval={0}
								angle={-10}
								textAnchor="end"
								height={150}
								tickFormatter={(value) => abbreviateName(value)}
							/>
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="score" fill="#8884d8" />
						</BarChart> */}

								<BarChart
									layout="vertical"
									width={500}
									data={chartData}
									margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis type="number" />
									<YAxis
										type="category"
										dataKey="name"
										width={150}
										tickMargin={10}
										minTickGap={20}
									/>
									<Tooltip />
									<Legend />
									<Bar dataKey="score" fill="#8884d8" barSize={30} />
								</BarChart>
							</ResponsiveContainer>
						</div>
					</>
				)}

				<div className="piechart">
					<ResponsiveContainer width="100%">
						<KeywordPieChart />
					</ResponsiveContainer>
					<h3>Les mots les plus recherchés</h3>
				</div>
			</div>

			<Link to="/admin">
				<button>Retourner pour rechercher un autre produit</button>
			</Link>
		</>
	);
};

export default Dashboard;

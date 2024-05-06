import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { useKeywordSearchQuery } from '../app/services/product';

const COLORS = [
	'#0088FE',
	'#00C49F',
	'#FFBB28',
	'#FF8042',
	'#8884D8',
	'#FF9999',
];

const KeywordPieChart = () => {
	const {
		data: keywordData,
		error: keywordError,
		isLoading: isKeywordsLoading,
	} = useKeywordSearchQuery(undefined);

	if (isKeywordsLoading) return <div>Loading...</div>;
	if (keywordError) return <div>Error occurred while fetching data.</div>;

	const topKeywords = [...keywordData!.keywords] // Spread operator to create a new array copy
		.sort((a, b) => b.count - a.count)
		.slice(0, 10);

	const pieData = topKeywords.map((keyword) => ({
		name: keyword.word,
		value: keyword.count,
	}));

	return (
		<PieChart width={800} height={450}>
			<Pie
				data={pieData}
				cx={400}
				cy={250}
				labelLine={true}
				label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
				outerRadius={130}
				fill="#8884d8"
				dataKey="value">
				{pieData.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
			<Tooltip />
			<Legend align="center" verticalAlign="bottom" layout="horizontal" />
		</PieChart>
	);
};

export default KeywordPieChart;

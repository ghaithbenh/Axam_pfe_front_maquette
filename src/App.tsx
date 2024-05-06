import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import SignIn from './Pages/SignInPage';
import SignUp from './Pages/SignUpPage';
import HomePage from './Pages/HomePage';
import AdminPage from './Pages/AdminPage';
import DashboardPage from './Pages/DashboardPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <WelcomePage />,
	},
	{
		path: '/signin',
		element: <SignIn />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
	{
		path: '/home',
		element: <HomePage />,
	},
	{
		path: '/adminsearch',
		element: <AdminPage />,
	},
	{
		path: '/dashboard', // Add this new route
		element: <DashboardPage />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

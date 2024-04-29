import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import SignIn from './Pages/SignInPage';
import SignUp from './Pages/SignUpPage';
import HomePage from './Pages/HomePage';

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
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

import { useNavigate } from 'react-router-dom';
import SignIn from '../Components/SignIn';
import './SignInPage.css';
import { useEffect } from 'react';

const SignInPage: React.FC = () => {
	const token = localStorage.getItem('token');
	const navigate = useNavigate();

	useEffect(() => {
		if (token) navigate('/home');
	}, [token, navigate]);

	return (
		<div className="signin-client-page">
			<h1>Sign In</h1>
			<SignIn />
		</div>
	);
};

export default SignInPage;

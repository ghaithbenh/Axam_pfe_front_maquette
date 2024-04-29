import React, { useEffect } from 'react';
import SignUp from '../Components/SignUp';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

const SignUpPage: React.FC = () => {
	const token = localStorage.getItem('token');
	const navigate = useNavigate();

	useEffect(() => {
		if (token) navigate('/home');
	}, [token, navigate]);
	return (
		<div className="signup-client-page">
			<h1>Sign Up</h1>
			<SignUp />
		</div>
	);
};

export default SignUpPage;

import { useNavigate } from 'react-router-dom'; // Updated import
import './Welcome.css';

const Welcome: React.FC = () => {
	const navigate = useNavigate(); // Updated hook

	const handleNavigation = (path: string, replace: boolean = false) => {
		navigate(path, { replace });
	};

	return (
		<div className="welcome-container">
			<h1>Welcome</h1>
			<div>
				<button onClick={() => handleNavigation('/signin')}>
					Sign In 
				</button>
				<button onClick={() => handleNavigation('/signup')}>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default Welcome;

import { useEffect } from 'react';
import Welcome from '../Components/Welcome';  // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate('/home');
  }, [token, navigate])
  return (
    <div>
      <Welcome />
    </div>
  );
};

export default WelcomePage;

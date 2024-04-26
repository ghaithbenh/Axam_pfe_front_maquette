import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import
import './Welcome.css';

const Welcome: React.FC = () => {
  const navigate = useNavigate();  // Updated hook
  const [isClient, setIsClient] = useState(true);  // true for client, false for admin

  const handleNavigation = (path: string, replace: boolean = false) => {
    navigate(path, { replace });
  };

  const toggleRole = () => {
    setIsClient(!isClient);
  };

  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      <div className="role-buttons">
        <button onClick={() => setIsClient(true)} className={isClient ? 'active' : ''}>Client</button>
        <button onClick={() => setIsClient(false)} className={!isClient ? 'active' : ''}>Admin</button>
      </div>
      {isClient ? (
        <div>
          <button onClick={() => handleNavigation('/SigninClient')}>Sign In as Client</button>
          <button onClick={() => handleNavigation('/SignupClient')}>Sign Up as Client</button>
        </div>
      ) : (
        <div>
          <button onClick={() => handleNavigation('/SigninAdmin')}>Sign In as Admin</button>
          <button onClick={() => handleNavigation('/SignupAdmin')}>Sign Up as Admin</button>
        </div>
      )}
    </div>
  );
};

export default Welcome;

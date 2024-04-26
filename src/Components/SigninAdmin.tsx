import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SigninAdmin: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you'd typically authenticate with the backend
        console.log('Admin Logged In:', username, password);
        // Simulate successful login and navigation
        // navigate('/admin-dashboard'); // Uncomment or modify as needed for your routing
    };

    return (
        <div className="signin-admin">
            <h2>Admin Sign In</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">
                    Username:
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SigninAdmin;

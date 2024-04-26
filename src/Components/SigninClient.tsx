import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SigninClient.css"

const SigninClient: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you'd typically handle authentication.
        // This is a placeholder for the login logic.
        console.log('Login attempt:', username, password);
        // After login, navigate to another route or show login status
        // navigate('/client-dashboard'); // Uncomment or modify based on your routing setup.
    };

    return (
        <div className="signin-client">
            <form onSubmit={handleLogin}>
                <h2>Client Sign In</h2>
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

export default SigninClient;

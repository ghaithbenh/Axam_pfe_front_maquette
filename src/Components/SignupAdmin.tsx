import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupAdmin.css'

const SignupAdmin: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you would typically send the data to a backend server for processing
        console.log('Admin Registered:', { username, email, password });
        // After successful registration, navigate to admin dashboard or login page
        // navigate('/admin-dashboard'); // Uncomment or modify as needed for your routing
    };

    return (
        <div className="signup-admin">
            <h2>Create Admin Account</h2>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupAdmin;

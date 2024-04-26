import React from 'react';
import SigninClient from '../Components/SigninClient';  
import './SigninClientPage.css'

const SigninClientPage: React.FC = () => {
    return (
        <div className="signin-client-page">
            <h1>Client Sign-In</h1>
            <SigninClient />
        </div>
    );
};

export default SigninClientPage;

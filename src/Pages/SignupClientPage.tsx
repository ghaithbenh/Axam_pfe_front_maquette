import React from 'react';
import SignupClient from '../Components/SignupClient';
import './SignupClientPage.css'

const SignupClientPage: React.FC = () => {
    return (
        <div className="signup-client-page">
            <h1>Sign Up for Client Access</h1>
            <SignupClient />
        </div>
    );
};

export default SignupClientPage;

import React from 'react';
import SignupAdmin from '../Components/SignupAdmin';  
import './SignupAdminPage.css/'

const SignupAdminPage: React.FC = () => {
    return (
        <div className="signup-admin-page">
            <h1>Admin Sign-Up</h1>
            <SignupAdmin />
        </div>
    );
};

export default SignupAdminPage;

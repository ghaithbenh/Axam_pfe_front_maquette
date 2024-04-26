import React from 'react';
import ClientHome from '../Components/ClientHome';
import './ClientHomePage.css'

const ClientHomePage: React.FC = () => {
    return (
        <div className="client-home-page">
            <header>
                <h1>Client Dashboard</h1>
            </header>
            <ClientHome />
            <footer>
                <p>© 2024 Axam. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ClientHomePage;

import React, { useState } from 'react';

const ClientHome: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Searching for:', searchQuery);
        // Here you would typically handle the search operation,
        // such as querying a database or calling an API.
    };

    return (
        <div className="client-home">
            <h1>Welcome to Our Product Page</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search for a product..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default ClientHome;

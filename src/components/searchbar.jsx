import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        if (/^[a-zA-Z0-9_-]{1,15}$/.test(input)) {
            onSearch(input);
        } else {
            alert('Invalid Username');
        }
    };

    return (
        <div className="user-container">
            <p>Enter your username below:</p>
            <div className="user-input-container">
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;

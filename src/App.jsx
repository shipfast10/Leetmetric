import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/searchbar';
import StatsDashboard from './components/StatsDashboard';

function App() {
  const [username, setUsername] = useState('');
  const [platform, setPlatform] = useState('LeetCode');
  const [userStats, setUserStats] = useState(null);

  return (
    <div className="container">
      <h1>LeetMetric</h1>
      <div className="platform-select">
        <label>Select Platform:</label>
        <select onChange={(e) => setPlatform(e.target.value)} value={platform}>
          <option value="LeetCode">LeetCode</option>
          <option value="GFG">GeeksforGeeks</option>
        </select>
      </div>
      <SearchBar onSearch={setUsername} />
      <StatsDashboard
        username={username}
        platform={platform}
        userStats={userStats}
        setUserStats={setUserStats}
      />
    </div>
  );
}

export default App;

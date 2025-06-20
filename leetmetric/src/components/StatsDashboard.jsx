import React, { useEffect } from 'react';
import ProgressCircle from './ProgressCircle';
import StatCard from './statCard';
import { fetchLeetCodeStats } from '../services/leetcodeService';
import { fetchGFGStats } from '../services/gfgService';

function StatsDashboard({ username, platform, userStats, setUserStats }) {
    useEffect(() => {
        if (!username || !platform) return;

        const fetchStats = async () => {
            try {
                let stats;
                if (platform === 'LeetCode') {
                    stats = await fetchLeetCodeStats(username);
                } else if (platform === 'GFG') {
                    stats = await fetchGFGStats(username);
                }
                setUserStats(stats);
            } catch (error) {
                setUserStats({ error: 'Failed to fetch data' });
            }
        };

        fetchStats();
    }, [username, platform, setUserStats]);

    if (!username) return null;
    if (userStats?.error) return <p>{userStats.error}</p>;
    if (!userStats) return <p>Loading...</p>;

    const { solved, total, submissions } = userStats;

    return (
        <div className="stats-container">
            <div className="progress">
                {['Easy', 'Medium', 'Hard'].map((level) => (
                    <ProgressCircle
                        key={level}
                        level={level}
                        solved={solved[level] || 0}
                        total={total[level] || 1}
                    />
                ))}
            </div>

            <div className="stats-cards">
                {Object.keys(submissions).map((key) => (
                    <StatCard key={key} label={key} value={submissions[key]} />
                ))}
            </div>
        </div>
    );
}

export default StatsDashboard;

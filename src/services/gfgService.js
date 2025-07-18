export async function fetchGFGStats(username) {
    const proxy = "https://corsproxy.io/?";
    const apiUrl = `https://geeks-for-geeks-api.vercel.app/${username}`;
    const fullUrl = proxy + encodeURIComponent(apiUrl);

    const response = await fetch(fullUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch GFG data");
    }

    const data = await response.json();

    const info = data.info;
    const stats = data.solvedStats;

    return {
        solved: {
            Easy: stats.easy?.count || 0,
            Medium: stats.medium?.count || 0,
            Hard: stats.hard?.count || 0
        },
        total: {
            Easy: 400,
            Medium: 300,
            Hard: 200
        },
        submissions: {
            "Total Solved": info.totalProblemsSolved || 0,
            "Coding Score": info.codingScore || "-",
            "Monthly Score": info.monthlyScore || "-",
            "Current Streak": info.currentStreak || "-",
            "Institution": info.institute || "-",
            "Languages Used": info.languagesUsed || "-"
        }
    };
}

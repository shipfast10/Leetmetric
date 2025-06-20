export async function fetchLeetCodeStats(username) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://leetcode.com/graphql/';
    const query = {
        query: `
      query userSessionProgress($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
            totalSubmissionNum {
              difficulty
              submissions
            }
          }
        }
      }
    `,
        variables: { username }
    };

    const headers = { 'Content-Type': 'application/json' };
    const response = await fetch(proxy + url, {
        method: 'POST',
        headers,
        body: JSON.stringify(query)
    });

    const data = await response.json();
    const parsed = data.data;

    const solved = {};
    const total = {};
    const submissions = {};

    parsed.allQuestionsCount.forEach(q => total[q.difficulty] = q.count);
    parsed.matchedUser.submitStats.acSubmissionNum.forEach(q => solved[q.difficulty] = q.count);
    parsed.matchedUser.submitStats.totalSubmissionNum.forEach(q => submissions[q.difficulty] = q.submissions);

    return { solved, total, submissions };
}

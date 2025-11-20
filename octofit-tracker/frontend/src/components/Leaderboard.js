import React, { useEffect, useState } from 'react';

const getApiUrl = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  if (codespace) {
    return `https://${codespace}-8000.app.github.dev/api/leaderboard/`;
  }
  return 'http://localhost:8000/api/leaderboard/';
};

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const apiUrl = getApiUrl();

  useEffect(() => {
    console.log('Fetching leaderboard from:', apiUrl);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaderboard(results);
        console.log('Fetched leaderboard:', results);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [apiUrl]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Leaderboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((l, i) => (
            <tr key={i}>
              <td>{l.user}</td>
              <td>{l.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;

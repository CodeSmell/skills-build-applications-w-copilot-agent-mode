import React, { useEffect, useState } from 'react';

const getApiUrl = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  if (codespace) {
    return `https://${codespace}-8000.app.github.dev/api/activities/`;
  }
  return 'http://localhost:8000/api/activities/';
};

function Activities() {
  const [activities, setActivities] = useState([]);
  const apiUrl = getApiUrl();

  useEffect(() => {
    console.log('Fetching activities from:', apiUrl);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Fetched activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [apiUrl]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Activities</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User</th>
            <th>Type</th>
            <th>Duration (min)</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a, i) => (
            <tr key={i}>
              <td>{a.user}</td>
              <td>{a.activity_type}</td>
              <td>{a.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;

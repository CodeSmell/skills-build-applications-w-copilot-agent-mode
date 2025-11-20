
import React from 'react';

function App() {
  return (
    <div>
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">OctoFit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        {/* Bootstrap Heading */}
        <h1 className="display-4 mb-4 text-center">Welcome to OctoFit Tracker</h1>

        {/* Bootstrap Card */}
        <div className="card mb-4 shadow">
          <div className="card-body">
            <h5 className="card-title">Track Your Fitness Journey</h5>
            <p className="card-text">Log activities, join teams, and climb the leaderboard with OctoFit Tracker!</p>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>
        </div>

        {/* Bootstrap Table Example */}
        <h2 className="h4 mb-3">Sample Leaderboard</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>1100</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Charlie</td>
                <td>950</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bootstrap Button Example */}
        <div className="text-center mt-4">
          <button className="btn btn-success me-2">Log Activity</button>
          <button className="btn btn-outline-secondary">View Teams</button>
        </div>
      </div>
    </div>
  );
}

export default App;

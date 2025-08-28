import React from "react";

function Dashboard() {
  return (
    <div>
      <h2>📊 Dashboard</h2>
      <div className="cards">
        <div className="card purple">15,420<br/>Total Calls Today</div>
        <div className="card blue">12,336<br/>Successful Calls</div>
        <div className="card green">25<br/>Active AI Agents</div>
        <div className="card red">2,084<br/>Failed Calls</div>
        <div className="card yellow">1,000<br/>Pending Calls</div>
        <div className="card orange">156<br/>Follow-ups Required</div>
      </div>
    </div>
  );
}

export default Dashboard;

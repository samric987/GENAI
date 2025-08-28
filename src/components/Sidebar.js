import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>AI Calling Agent</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/file-upload">File Upload</Link></li>
        <li><Link to="/call-management">Call Management</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/emi-reminder">📌 EMI Reminder</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;

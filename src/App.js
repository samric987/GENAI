import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import EMIForm from "./components/EMIForm";
import Analytics from "./components/Analytics";
import CallManagement from "./components/CallManagement";
import FileUpload from "./components/FileUpload";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/file-upload" element={<FileUpload />} />
            <Route path="/call-management" element={<CallManagement />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/emi-reminder" element={<EMIForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

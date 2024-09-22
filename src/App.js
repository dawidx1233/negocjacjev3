// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NegotiationBoard from './components/NegotiationBoard';
import History from './components/History';
import Summary from './components/Summary';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Negocjacje
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Tablica
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/history">
                  Historia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/summary">
                  Podsumowanie
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<NegotiationBoard />} />
        <Route path="/history" element={<History />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;

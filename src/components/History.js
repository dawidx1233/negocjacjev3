// src/components/History.js
import React, { useContext } from 'react';
import { ProposalContext } from '../context/ProposalContext';

const History = () => {
  const { proposals } = useContext(ProposalContext);

  return (
    <div className="container mt-4">
      <h2>Historia Negocjacji</h2>
      {proposals.map((proposal) => (
        <div key={proposal.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{proposal.title}</h5>
            <p className="card-text">{proposal.description}</p>
            <span
              className={`badge ${
                proposal.status === 'accepted'
                  ? 'bg-success'
                  : proposal.status === 'rejected'
                  ? 'bg-danger'
                  : 'bg-secondary'
              }`}
            >
              {proposal.status.toUpperCase()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
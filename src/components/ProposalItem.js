// src/components/ProposalItem.js
import React from 'react';
import { database } from '../firebase';

const ProposalItem = ({ proposal }) => {
  const { id, title, description, status } = proposal;

  const updateStatus = (newStatus) => {
    database.ref('proposals/' + id).update({ status: newStatus });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div>
          <button
            className="btn btn-success btn-sm me-2"
            onClick={() => updateStatus('accepted')}
          >
            Akceptuj
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => updateStatus('rejected')}
          >
            Odrzuć
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalItem;
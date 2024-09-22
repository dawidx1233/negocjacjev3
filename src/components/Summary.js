// src/components/Summary.js
import React, { useContext } from 'react';
import { ProposalContext } from '../context/ProposalContext';

const Summary = () => {
  const { proposals } = useContext(ProposalContext);

  const accepted = proposals.filter((p) => p.status === 'accepted');
  const rejected = proposals.filter((p) => p.status === 'rejected');
  const pending = proposals.filter((p) => p.status === 'pending');

  return (
    <div className="container mt-4">
      <h2>Podsumowanie Negocjacji</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Zaakceptowane:</strong> {accepted.length}
        </li>
        <li className="list-group-item">
          <strong>Odrzucone:</strong> {rejected.length}
        </li>
        <li className="list-group-item">
          <strong>Oczekujące:</strong> {pending.length}
        </li>
      </ul>
    </div>
  );
};

export default Summary;
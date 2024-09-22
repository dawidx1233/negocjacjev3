// src/components/NegotiationBoard.js
import React from 'react';
import ProposalForm from './ProposalForm';
import ProposalList from './ProposalList';

const NegotiationBoard = () => {
  return (
    <div className="container mt-4">
      <h1>Tablica Negocjacyjna</h1>
      <ProposalForm />
      <ProposalList />
    </div>
  );
};

export default NegotiationBoard;
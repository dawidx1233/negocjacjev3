// src/components/ProposalList.js
import React, { useContext } from 'react';
import { ProposalContext } from '../context/ProposalContext';
import ProposalItem from './ProposalItem';

const ProposalList = () => {
  const { proposals } = useContext(ProposalContext);

  return (
    <div className="mt-5">
      <h2>Lista Propozycji</h2>
      {proposals
        .filter((proposal) => proposal.status === 'pending')
        .map((proposal) => (
          <ProposalItem key={proposal.id} proposal={proposal} />
        ))}
    </div>
  );
};

export default ProposalList;
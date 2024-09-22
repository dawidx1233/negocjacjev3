// src/context/ProposalContext.js
import React, { createContext, useState, useEffect } from 'react';
import { database } from '../firebase';

export const ProposalContext = createContext();

export const ProposalProvider = ({ children }) => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const proposalsRef = database.ref('proposals');

    proposalsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const proposalList = data ? Object.values(data) : [];
      setProposals(proposalList);
    });

    return () => {
      proposalsRef.off();
    };
  }, []);

  return (
    <ProposalContext.Provider value={{ proposals, setProposals }}>
      {children}
    </ProposalContext.Provider>
  );
};

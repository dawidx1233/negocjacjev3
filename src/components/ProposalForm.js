// src/components/ProposalForm.js
import React, { useState } from 'react';
import { database } from '../firebase';
import { ref, set } from 'firebase/database';

const ProposalForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProposal = {
      id: Date.now(),
      title,
      description,
      status: 'pending',
    };
    database.ref('proposals/' + newProposal.id).set(newProposal);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label className="form-label">Tytuł</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Opis</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Dodaj Propozycję
      </button>
    </form>
  );
};

export default ProposalForm;
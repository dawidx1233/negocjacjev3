// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProposalProvider } from './context/ProposalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

ReactDOM.render(
  <ProposalProvider>
    <App />
  </ProposalProvider>,
  document.getElementById('root')
);
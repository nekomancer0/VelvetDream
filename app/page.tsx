'use client'

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

export default function Page() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}


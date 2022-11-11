import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './hero.js';
import Execs from './exec.js';
import WhyKTP from './whyktp.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <WhyKTP />
    <Execs />
  </React.StrictMode>
);
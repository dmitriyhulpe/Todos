import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './loader.css';
import Application from './Application';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Application></Application>
  </React.StrictMode>
);
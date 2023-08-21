import React from 'react';
import ReactDom from 'react-dom/client';

import App from './App';
import './index.css';

//only place where we fetch from DOM
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<App />);

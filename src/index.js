import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

/*
const text = (
  <>
  <p> Phone Book App </p>
   <input type='text' />
   <button> Search</button>
   <div id='result'></div>
   </>
)
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


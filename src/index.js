import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';

render(
  <Router>
    <Header />
    <App />
  </Router>,
  document.getElementById('root')
);

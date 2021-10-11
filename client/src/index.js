import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    <SignUp />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);



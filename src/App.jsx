import React from 'react';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Login />
      <SignUp />
    </div>
  );
}

export default App;

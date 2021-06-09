import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

// components
import NavBar from './components/NavBar'
import LandingPage from "./pages/LandingPage";

// styles
import './App.scss'

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// components
import NavBar from './components/NavBar'
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";

// styles
import './App.scss'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

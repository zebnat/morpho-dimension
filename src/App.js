import './App.css';
import Layout from './Layout';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// context
import React from 'react'

// pages
import Home from './components/pages/Home';
import MainPage from './components/pages/MainPage';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Terms from './components/pages/Terms';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
      <Layout>
        {/* Global App Routes */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/principal">
            <MainPage />
          </Route>
          <Route path="/acerca-de">
            <About />
          </Route>
          <Route path="/terminos-de-uso">
            <Terms />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

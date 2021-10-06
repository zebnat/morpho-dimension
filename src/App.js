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
      {/* Global App Routes */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/principal">
          <Layout>
            <MainPage />
          </Layout>
        </Route>
        <Route path="/acerca-de">
          <Layout>
            <About />
          </Layout>
        </Route>
        <Route path="/terminos-de-uso">
          <Layout>
            <Terms />
          </Layout>
        </Route>
        <Route path="/contacto">
          <Layout>
            <Contact />
          </Layout>
        </Route>
        <Route path="/login">
          <Layout>
            <Login />
          </Layout>
        </Route>
        <Route path="/profile">
          <Layout>
            <Profile />
          </Layout>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;

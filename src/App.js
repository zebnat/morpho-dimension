import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/pages/Home';
import MainPage from './components/pages/MainPage';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Terms from './components/pages/Terms';
import TestModal from './components/TestModal';

function App() {
  return (
    <>
      <div className="animatedbg bg-morpho-pattern">
        <div className="lg:w-3/4 lg:m-auto">
          <Router>
            <Header />
            <ScrollToTop>
              <Main>
                {/* Global App Routes */}
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/principal">
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
                </Switch>
              </Main>
            </ScrollToTop>
            <Footer>
              <span>Versión: {process.env.REACT_APP_VERSION}</span>
            </Footer>
          </Router>
        </div>
      </div>
      <ScrollToTopButton />
      <TestModal />
    </>
  );
}

export default App;

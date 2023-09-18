import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Learn from './components/Learn';
import Trade from './components/Trade';
import News from './components/News';
import Cryptocurrencies from './components/Cryptocurrencies';
import Scrollbar from './components/Scrollbar';
import Marquee from './components/Marquee';
import ProtectedRoute from "./components/ProtectedRoute";
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <>
            {location.pathname !== '/login' && <Marquee />}
            <Switch>
              <Route exact path="/login" component={LoginForm} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/trade" component={Trade} />
              <ProtectedRoute component={Scrollbar}>
                <Route
                  exact
                  path="/cryptocurrencies"
                  component={Cryptocurrencies}
                />
              </ProtectedRoute>
              <Route component={NotFound} />
            </Switch>
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default App;

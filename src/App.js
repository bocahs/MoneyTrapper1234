import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Website from './Website';
import Earn from './Earn';
import Gambling from './Gambling';
import Cashback from './Cashback';
import Wallet from './Wallet';
import Footer from './Footer';
import Fade from 'react-reveal/Fade';

const App = () => {
  return (
    <div>
      <Router>
        <Website />
        <Switch>
          <div id='referrals'>
            <Route exact path='/'>
              <Route component={Earn} />
              <Route component={Gambling} />
              <Route component={Cashback} />
              <Route component={Wallet} />
            </Route>
            <Route exact path='/earn' component={Earn} />
            <Route exact path='/gambling' component={Gambling} />
            <Route exact path='/cashback' component={Cashback} />
            <Route exact path='/wallet' component={Wallet} />
          </div>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;

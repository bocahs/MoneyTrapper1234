import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Website from './Website';
import Earn from './Earn';
import Gambling from './Gambling';
import Cashback from './Cashback';
import Wallet from './Wallet';
import Footer from './Footer';
import All from './All';
import Loading from './Loading';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <Router>
          <Website />

          <Switch>
            <div id='referrals'>
              <Route exact path='/' component={All} />
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
  }
};

export default App;

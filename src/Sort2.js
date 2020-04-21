import React, { Fragment, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sort2 = () => {
  let currentLocation = useLocation();
  return (
    <Fragment>
      <div className="allbuttons">
        <span>
          <Link
            exact={true}
            className={currentLocation.pathname === '/' ? 'selected' : 'button'}
            to="/"
          >
            All Sites
          </Link>
        </span>
        <span>
          <Link
            className={
              currentLocation.pathname === '/earn' ? 'selected' : 'button'
            }
            to="/earn"
          >
            Earn Sites
          </Link>
        </span>

        <span>
          <Link
            className={
              currentLocation.pathname === '/gambling' ? 'selected' : 'button'
            }
            to="/gambling"
          >
            Gambling Sites
          </Link>
        </span>

        <span>
          <Link
            className={
              currentLocation.pathname === '/cashback' ? 'selected' : 'button'
            }
            to="/cashback"
          >
            Cashback Apps
          </Link>
        </span>

        <span>
          <Link
            className={
              currentLocation.pathname === '/wallet' ? 'selected' : 'button'
            }
            to="/wallet"
          >
            Virtual Wallets
          </Link>
        </span>
      </div>
    </Fragment>
  );
};

export default Sort2;

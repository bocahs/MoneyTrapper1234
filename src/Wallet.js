import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';

const Wallet = () => {
  return (
    <Fragment>
      <div className='ref-links'>
        <a href='https://coinbase.com/join/valli_qh' target='_blank'>
          <img src={require('./img/ref/5.png')} width={240} alt='' />
        </a>
        <p>
          Coinbase
          <br />
          Free $10.00 of BTC
          <br />
          Referral Link
        </p>
      </div>

      <div className='ref-links'>
        <a href='https://cash.app/app/KNGJXTG/' target='_blank'>
          <img src={require('./img/ref/1.png')} width={240} alt='' />
        </a>
        <p>
          CashApp
          <br />
          Free $5.00
          <br />
          KNGJXTG
        </p>
      </div>
    </Fragment>
  );
};

export default Wallet;

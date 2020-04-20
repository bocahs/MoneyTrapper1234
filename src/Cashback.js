import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';

const Cashback = () => {
  return (
    <Fragment>
      <div className='ref-links'>
        <a href='https://ibotta.com/r/psrkbaf' target='_blank'>
          <img src={require('./img/ref/2.png')} width={240} alt='' />
        </a>
        <p>
          Ibotta
          <br />
          Cashback at Stores
          <br />
          Code: Shacob
        </p>
      </div>

      <div className='ref-links'>
        <a
          href='https://fetchrewards.onelink.me/vvv3/referraltext?code=GFJM6'
          target='_blank'
        >
          <img src={require('./img/ref/6.png')} width={240} alt='' />
        </a>
        <p>
          FetchRewards
          <br />
          Free $2.00
          <br />
          Code: GFJM6
        </p>
      </div>
    </Fragment>
  );
};

export default Cashback;

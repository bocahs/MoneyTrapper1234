import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';

const Earn = () => {
  return (
    <Fragment>
      <div className="ref-links">
        <a href="https://gain.gg/r/kill" target="_blank">
          <img src={require('./img/ref/44.png')} width={240} alt="" />
        </a>
        <p>
          Gain.GG
          <br />
          Free $0.10
          <br />
          Referral Link
        </p>
      </div>

      <div className="ref-links">
        <a href="https://gamermine.com/r/shacob/" target="_blank">
          <img src={require('./img/ref/41.png')} width={240} alt="" />
        </a>
        <p>
          GamerMine
          <br />
          Free Offer Boost
          <br />
          Referral Link
        </p>
      </div>

      <div className="ref-links">
        <a href="https://roobet.com/?ref=bocahs" target="_blank">
          <img src={require('./img/ref/43.png')} width={240} alt="" />
        </a>
        <p>
          RooBet
          <br />
          Free Balance
          <br />
          Referral Link
        </p>
      </div>

      <div className="ref-links">
        <a href="https://freeskins.com/r/shacob" target="_blank">
          <img src={require('./img/ref/9.png')} width={240} alt="" />
        </a>
        <p>
          FreeSkins
          <br />
          Free $0.10
          <br />
          Referral Link
        </p>
      </div>

      <div className="ref-links">
        <a href="https://premium.gg2u.org?referrer=shacob" target="_blank">
          <img src={require('./img/ref/8.png')} width={240} alt="" />
        </a>
        <p>
          GG2U
          <br />
          Free $1.00
          <br />
          Referral Link
        </p>
      </div>

      <div className="ref-links">
        <a href="https://freeskins.com/r/shacob" target="_blank">
          <img src={require('./img/ref/10.png')} width={240} alt="" />
        </a>
        <p>
          FreeSkins
          <br />
          Free $0.10
          <br />
          Code: Shacob
        </p>
      </div>
    </Fragment>
  );
};

export default Earn;

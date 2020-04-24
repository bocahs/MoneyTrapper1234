import React from 'react';

import Sort2 from './Sort2';

const Website = () => {
  return (
    <div>
      <div id="header">
        <a href="http://MoneyTrapper.com">
          <img
            src={require('./img/ref/MoneyTrapper1.png')}
            alt="Money Trapper Banner"
          />
        </a>
      </div>
      <div className="info">
        <p>
          All the best sites and apps for making money.
          <br />
          All sites have been tested by me personally and are legit.
          <br />
          Use my code or referral link for a bonus on the site and to support
          me.
        </p>
      </div>
      <Sort2 />
    </div>
  );
};

export default Website;

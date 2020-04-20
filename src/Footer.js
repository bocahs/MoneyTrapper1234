import React from 'react';

const Footer = () => {
  return (
    <div id='socials'>
      <div className='media'>
        <a href='https://twitter.com/RefEmpire/' target='_blank'>
          <img src={require('./img/socials/1.png')} width={50} alt='' />
        </a>
        <p>@RefEmpire</p>
      </div>
      <div className='media'>
        <a href='https://steamcommunity.com/id/bocahs' target='_blank'>
          <img src={require('./img/socials/2.png')} width={50} alt='' />
        </a>
        <p>/id/bocahs</p>
      </div>
      <div className='media'>
        <a href target='_blank'>
          <img src={require('./img/socials/3.png')} width={50} alt='' />
        </a>
        <p>shacob#1460</p>
      </div>
      {/*<div class="media">
  <a href="https://twitch.tv/KingShacob" target="_blank"><img src="img/socials/4.png" width="45" alt=""></a>
  <p>@KingShacob</p>
  </div> */}
      <div className='media'>
        <a href='https://reddit.com/r/MoneyTrapper/' target='_blank'>
          <img src={require('./img/socials/5.png')} width={50} alt='' />
        </a>
        <p>r/MoneyTrapper</p>
      </div>
    </div>
  );
};

export default Footer;

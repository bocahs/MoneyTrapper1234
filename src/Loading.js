import React, { Fragment } from 'react';
import Load from './loading.gif';

const Loading = () => {
  return (
    <Fragment>
      <img
        src={Load}
        alt='load'
        style={{
          marginTop: '30vh',
          marginLeft: '45vw',
          display: 'block',
        }}
      />
    </Fragment>
  );
};

export default Loading;

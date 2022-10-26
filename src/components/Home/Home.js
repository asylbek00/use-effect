import React from 'react';

import Cardd from '../UI/Card/Cardd';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Cardd className={classes.home}>
      <h1>Welcome back!</h1>
    </Cardd>
  );
};

export default Home;

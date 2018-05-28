// @flow

// 3rd-party imports

import * as React from 'react';

import { injectGlobal } from 'styled-components';

import system_ui from 'system-ui';
import 'babel-polyfill';
import 'normalize.css';
import 'sanitize.css';

// local imports

import Hero from '~/components/hero';

// globals

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Rubik');

  body {
    font-size: 20px;
    font-family: 'Rubik', ${system_ui}, sans-serif;

    color: #04286E;

  }

  @media screen and (max-width: 350px) {
    body {
        font-size: 16px;
    }
  }
`;

// components

const App = () => {
  return (
    <React.Fragment>
      <Hero />
    </React.Fragment>
  );
};

export default App;

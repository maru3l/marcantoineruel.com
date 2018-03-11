import React from 'react';

import 'normalize.css';

import SiteHeader from '../components/SiteHeader';

export default ({ children }) => (
  <div>
    <SiteHeader />

    {children()}
  </div>
);

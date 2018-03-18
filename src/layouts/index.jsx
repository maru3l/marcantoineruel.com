import React from 'react';

import 'normalize.css';

import './../assets/styles/main.scss';

import SiteHeader from '../components/SiteHeader';

export default ({ children }) => (
  <div>
    <a href="#main" className="visually-hidden">Sauter au contenu principal</a>

    <SiteHeader />

    {children()}
  </div>
);

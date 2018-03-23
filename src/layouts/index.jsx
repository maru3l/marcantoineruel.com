import React from 'react';

import 'normalize.css';

import './../assets/styles/main.scss';

import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default ({ children }) => (
  <div>
    <a href="#main" className="visually-hidden">Sauter au contenu principal</a>

    <SiteHeader />

    <main id="main" role="main">

      {children()}

    </main>

    <SiteFooter />

  </div>
);

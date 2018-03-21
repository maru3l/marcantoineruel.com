import React from 'react';

import SiteLogo from './SiteLogo';
import SiteNavigation from './SiteNavigation';

import './styles.scss';

export default () => (
  <header className="site-header">
    <SiteLogo />
    <SiteNavigation />
  </header>
)

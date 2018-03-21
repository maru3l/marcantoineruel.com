import React from 'react';

import SiteLogo from './SiteLogo';
import SiteNavigation from './SiteNavigation';
import MenuButton from './MenuButton';

import './styles.scss';

export default class SiteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    }
  }

  render () {
    return (
      <header className="site-header">
        <SiteLogo />
        <MenuButton open={this.state.menuOpen} onClick={() => this.setState({ menuOpen: !this.state.menuOpen })} />
        <SiteNavigation open={this.state.menuOpen} />
      </header>
    )
  }
}

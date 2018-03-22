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
      isDesktop: false,
      longLogo: false,
    }
  }

  componentWillMount() {
    this.handleResize()
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.handleResize()); // FIXME: Change for global window resize
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
  }

  handleResize() {
    const width = window.innerWidth;

    if (width < 768 && this.state.isDesktop) {
      this.setState({ isDesktop: false });
    }

    if (width >= 768 && !this.state.isDesktop) {
      this.setState({ isDesktop: true, menuOpen: false });
    }

    if (width < 1024 && this.state.longLogo) {
      this.setState({ longLogo: false });
    }

    if (width >= 1024 && !this.state.longLogo) {
      this.setState({ longLogo: true });
    }
  }

  render () {
    return (
      <header className="site-header">
        <div className="site-header__wrapper">
          <SiteLogo long={this.state.longLogo} />
          <SiteNavigation open={this.state.menuOpen} desktop={this.state.isDesktop} />
          <MenuButton
            open={this.state.menuOpen}
            hidden={this.state.isDesktop}
            onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
          />
        </div>
      </header>
    )
  }
}

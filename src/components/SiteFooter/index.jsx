import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export default class SiteFooter extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      visible: true,
    }
  }
  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', () => this.handleScroll())
  }

  handleScroll() {
    const scroll = window.scrollY;

    if (scroll > 0 && this.state.visible) {
      this.setState({ visible: false });
    }

    if (scroll < 1 && !this.state.visible) {
      this.setState({ visible: true });
    }
  }

  render () {
    const siteFooterClass = classNames(
      'site-footer',
      {'site-footer--hidden': !this.state.visible}
    )
    return (
      <footer className={siteFooterClass}>
        <p className="site-footer__email-area">
          hello[at]marcantoineruel.com
        </p>

        <ul className="site-footer__lang-list">
          <li className="site-footer__lang-item">fr</li>
          <li className="site-footer__lang-item">en</li>
        </ul>
      </footer>
    )
  };
};

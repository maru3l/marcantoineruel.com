import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

import Cursor from '../../Cursor';

import './styles.scss';

const ListItemLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="site-navigation__link"
      activeClassName="site-navigation__link--is-active"
    >{children}</Link>
  </li>
)

export default class SiteNavigation extends React.Component {
  render () {
    const siteNavigationClassNames = classNames(
      'site-navigation',
      {'site-navigation--is-open': this.props.open},
      {'site-navigation--is-desktop': this.props.desktop}
    );

    const buttonClassNames = classNames(
      'btn',
      {'btn--reverse': !this.props.desktop}
    );
    return (
      <nav className={siteNavigationClassNames}>
        <div className="site-navigation__container">
          <p className="site-navigation__title">Menu<Cursor flashing='true' /></p>

          <ul className="site-navigation__list">
            <ListItemLink to="/">À propos</ListItemLink>
            <ListItemLink to="/realisations">Réalisations</ListItemLink>
            <ListItemLink to="/blogue">Blogue</ListItemLink>
            <ListItemLink to="/contact">Contact</ListItemLink>
          </ul>

          <a href="https://www.messenger.com/t/maru3l" className={buttonClassNames} target="_blank" rel='noopener noreferrer'>je t'attends...</a>
        </div>
      </nav>
    )
  }
}

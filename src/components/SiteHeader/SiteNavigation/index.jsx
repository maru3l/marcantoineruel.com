import React from 'react';
import Link from 'gatsby-link';

import Cursor from '../../Cursor';

import './styles.scss';

const ListItemLink = ({ to, children }) => (
  <li>
    <Link to={to} className="site-navigation__link">{children}</Link>
  </li>
)

export default class SiteNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <nav className={
        this.props.open
          ? "site-navigation site-navigation--is-open"
          : "site-navigation"
        }
      >
        <div className="site-navigation__container">
          <p className="site-navigation__title">Menu<Cursor flashing='true' /></p>

          <ul className="site-navigation__list">
            <ListItemLink to="/">À propos</ListItemLink>
            <ListItemLink to="/realisations/">Réalisations</ListItemLink>
            <ListItemLink to="/blogue/">Blogue</ListItemLink>
            <ListItemLink to="/contact/">Contact</ListItemLink>
          </ul>

          <a href="https://www.messenger.com/t/maru3l" className="btn btn--reverse" target="_blank" rel='noopener noreferrer'>je t'attends...</a>
        </div>
      </nav>
    )
  }
}

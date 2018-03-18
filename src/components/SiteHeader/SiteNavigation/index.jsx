import React from 'react';
import Link from 'gatsby-link';

const ListItemLink = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
)

export default () => (
  <nav>
    <ul>
      <ListItemLink to="/">Moi</ListItemLink>
      <ListItemLink to="/realisations/">Réalisations</ListItemLink>
      <ListItemLink to="/blogue/">Blogue</ListItemLink>
      <ListItemLink to="/contact/">Contact</ListItemLink>
    </ul>
  </nav>
)

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
      <ListItemLink to="/">Qui suis-je?</ListItemLink>
      <ListItemLink to="/realisations/">Réalisations</ListItemLink>
      <ListItemLink to="/contact/">Contact</ListItemLink>
    </ul>
  </nav>
)

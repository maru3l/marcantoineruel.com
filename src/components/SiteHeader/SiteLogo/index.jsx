import React from 'react';

import Cursor from '../../Cursor';

import './styles.scss';

export default ({ long }) => {
  const content = long ? 'Marc-Antoine Ruel' : 'Marc';
  return(
    <p className="site-logo">{content}<Cursor flashing='true' /></p>
  )
}

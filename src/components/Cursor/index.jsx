import React from 'react';

import './styles.scss';

export default ({ flashing }) => (
  <span className={
    flashing !== undefined && flashing
      ? 'cursor cursor--is-flashing'
      : 'cursor'
    }
  />
)

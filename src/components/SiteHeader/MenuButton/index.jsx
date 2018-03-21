import React from 'react';

import './styles.scss';

export default props => (
  <button
    onClick={() => props.onClick()}
    className={
      props.open
        ? 'menu-button menu-button--is-open menu-button--is-dark'
        : 'menu-button'}
  >
    <span className="menu-button__bread">
      <span className="menu-button__bread-crust" />
    </span>
    <span className="menu-button__bread">
      <span className="menu-button__bread-crust" />
    </span>
  </button>
)

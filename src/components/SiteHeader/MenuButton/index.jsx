import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export default props => (
  <button
    onClick={() => props.onClick()}
    className={
      classNames(
        'menu-button',
        {'menu-button--is-open': props.open},
        {'menu-button--is-dark': props.open},
        {'menu-button--hidden': props.hidden}
      )
    }
  >
    <span className="menu-button__bread">
      <span className="menu-button__bread-crust" />
    </span>
    <span className="menu-button__bread">
      <span className="menu-button__bread-crust" />
    </span>
  </button>
)

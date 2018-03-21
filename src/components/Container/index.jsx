import React from 'react';

import './index.scss';

export default class SiteContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="site-container">
        {this.props.children}
      </div>
    )
  }
}

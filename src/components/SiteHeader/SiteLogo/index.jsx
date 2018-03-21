import React from 'react';

import './styles.scss';

export default class SiteLogor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: 'Marc',
    }
  }

  render () {
    const content = 'Marc';

    return (
      <p className="site-logo">{content}_</p>
    )
  }
}

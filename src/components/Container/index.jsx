import React from 'react';
import classNames from 'classnames';

import Header from './Header';

import './index.scss';

export default class SiteContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 100);
  }

  render () {
    const siteContainerClass = classNames(
      'site-container',
      {'site-container--is-loaded': !this.state.loading}
    )

    return (
      <div className={siteContainerClass}>
        <Header title={this.props.title} loading={this.state.loading} />
        <div className="site-container__content">
          <div className="site-container__skew" />
          <div className="site-container__wrapper">{this.props.children}</div>
        </div>
      </div>
    )
  }
}

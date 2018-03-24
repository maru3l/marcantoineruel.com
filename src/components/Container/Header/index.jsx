import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export default class ClassName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const { innerHeight, scrollY } = window;

    const delta = scrollY / innerHeight * 50;

    this.setState({ position: delta });
  }

  render() {
    const wrapperStyle = {
      transform: `translateY(${this.state.position}vh)`
    }

    const containerHeaderClass = classNames(
      'container-header',
      {'container-header--is-loaded': !this.props.loading}
    );

    return (
      <div className={containerHeaderClass} >
        <div className="container-header__wrapper" style={wrapperStyle} >
          <h1 className="container-header__title">{this.props.title}</h1>
        </div>
      </div>
    )
  }
}

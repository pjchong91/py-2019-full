import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import appConfig from 'src/config/app.conf';

class Intl extends Component {
  state = {};

  getLocaleURL = () => {
    return this.props.locale === appConfig.defaultLocale
      ? ''
      : `/${this.props.locale}`;
  };

  render() {
    return (
      <Fragment>
        {this.props.children(this.props.t, {
          locale: this.props.locale,
          getLocaleURL: this.getLocaleURL,
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  t: state.intl.translations,
  locale: state.intl.locale,
});

export default connect(
  mapStateToProps,
  {}
)(Intl);

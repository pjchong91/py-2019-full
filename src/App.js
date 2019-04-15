import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import { ParallaxProvider } from 'react-scroll-parallax';

import { prerenderStyles } from 'src/plugins/prerender';
import routes from 'src/routes';

import Header from 'components/Header';
import Menu from 'components/Menu';

class App extends Component {
  state = {
    menuOpen: false,
  };
  componentDidMount() {
    prerenderStyles();
  }

  generateRoutes() {
    return routes.map((route, index) => {
      const { path, component } = route;
      const Component = require(`src/${component}`).default;
      return <Route exact path={path} component={Component} key={index} />;
    });
  }

  handleMenu = bool => {
    this.setState({ menuOpen: bool });
    console.log(this.state.menuOpen);
  };

  render() {
    return (
      <ParallaxProvider>
        <Route
          render={({ location }) => (
            <AppWrapper>
              <Header
                menuOpen={this.state.menuOpen}
                handleMenu={this.handleMenu}
              />
              <Menu
                menuOpen={this.state.menuOpen}
                handleMenu={this.handleMenu}
                mobileHidden
              />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="fade"
                >
                  <Switch location={location}>{this.generateRoutes()}</Switch>
                </CSSTransition>
              </TransitionGroup>
            </AppWrapper>
          )}
        />
      </ParallaxProvider>
    );
  }
}

const AppWrapper = styled.div`
  .fade-enter {
    opacity: 0;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 0.5s;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: all 0.5s;
  }
`;

export default hot(module)(App);

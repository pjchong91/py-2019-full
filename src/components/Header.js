import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import Intl from 'src/components/Intl';
import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';
import Menu from 'components/Menu';

export default class Header extends Component {
  render() {
    console.log(this.props.menuOpen);

    return (
      <Intl>
        {(t, { getLocaleURL }) => (
          <Root>
            <Link to="/">
              {' '}
              <h1>P&Y</h1>
            </Link>
            <nav>
              <Menu menuOpen={this.props.menuOpen} />
            </nav>

            <Hamburger
              src={
                this.props.menuOpen
                  ? require('src/assets/images/close-icon.png')
                  : require('src/assets/images/hamburger.svg')
              }
              onClick={() => this.props.handleMenu(!this.props.menuOpen)}
            />
          </Root>
        )}
      </Intl>
    );
  }
}

const Root = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${vwMobile(20)};
  background: ${({ theme }) => theme.colorNavy};
  z-index: 100;
  text-align: center;
  height: ${vwMobile(50)};
  box-shadow: 0px 2px 2px ${({ theme }) => theme.colorNavy};
  nav {
    display: none;
    /* display: flex; */
  }

  h1 {
    color: white;
    cursor: pointer;
  }
  @media (min-width: ${media.xsup}) and (max-width: ${media.md}) {
    height: ${vwTablet(80)};
    padding: ${vwTablet(20)};
  }
  @media (min-width: ${media.mdup}) {
    height: ${vw(100)};
    padding: ${vw(20)};
    align-items: Center;
    nav {
      display: flex;
    }
  }
`;

const Hamburger = styled.img`
  cursor: pointer;
  @media (min-width: ${media.mdup}) {
    display: none;
  }
`;

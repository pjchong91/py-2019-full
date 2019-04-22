import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

const routes = [
  // {
  //   name: 'Home',
  //   link: '/',
  // },
  {
    name: 'Wedding Party',
    link: '/wedding-party',
  },
  {
    name: 'FAQ',
    link: '/faq',
  },
  {
    name: 'Wedding Day Timeline',
    link: '/wedding-timeline',
  },
];

const Menu = ({ handleMenu, menuOpen, mobileHidden }) => {
  return (
    <Root isOpen={menuOpen} mobileHidden={mobileHidden}>
      {routes.map((route, index) => (
        <NavLink
          exact
          to={route.link}
          activeClassName="isActive"
          key={index}
          onClick={() => handleMenu(false)}
        >
          {route.name}
        </NavLink>
      ))}
    </Root>
  );
};

export default Menu;
const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.8s;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background: ${({ theme }) => theme.colorNavy};
  a {
    color: white;
    margin-bottom: ${vwMobile(30)};
    /* margin: 0 15px; */
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontBody};
    font-weight: 300;
    letter-spacing: 1px;
    padding: 5px;
    border-bottom: 0px solid white;
    transition: all 0.2s;
    position: relative;

    &.isActive {
      font-weight: 600;
    }

    &:hover {
      font-weight: 600;
    }
  }
  @media (min-width: ${media.mdup}) {
    flex-direction: row;
    height: auto;
    width: auto;
    position: static;
    transform: none;
    display: ${props => props.mobileHidden && 'none'};
    top: auto;
    left: auto;
    a {
      margin-bottom: 0;
      margin-left: ${vw(20)};
      &:after {
        content: '';
        border-bottom: 2px solid white;
        transition: all 0.2s;
        transform: scaleX(0);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      &:hover:after {
        transform: scaleX(1);
      }

      &.isActive:after {
        transform: scaleX(1);
      }
    }
  }
`;

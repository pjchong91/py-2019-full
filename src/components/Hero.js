import React from 'react';
import styled, { keyframes } from 'styled-components';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

const Hero = ({ image }) => {
  console.log(image);
  return (
    <Root>
      <Image background={image} />
      <Text>
        <h1>YVES & PAM</h1>
        <p>Are getting married</p>
        <p>08.23.2019</p>
        <Animate>
          <img src={require('src/assets/images/home/down-arrow.png')} />
        </Animate>
      </Text>
    </Root>
  );
};

export default Hero;

const Root = styled.div`
  height: 100vh;
  min-height: ${vwMobile(300)};
  width: 100%;
  @media (min-width: ${media.xsup}) and (max-width: ${media.md}) {
    min-height: ${vwTablet(500)};
  }
  @media (min-width: ${media.mdup}) {
    min-height: ${vw(600)};
  }
`;

const Image = styled.div`
  background: ${props =>
    `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4)),url(${
      props.background
    })`};
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  h1 {
    font-size: ${vwMobile(20)};
    font-family: ${({ theme }) => theme.fontBody};
    font-weight: 300;
    color: white;
    text-shadow: 2px 2px 2px #888888;
    letter-spacing: ${vw(3)};
    margin-bottom: ${vw(20)};
  }
  p {
    color: white;
    text-transform: uppercase;
  }
  @media (min-width: ${media.xsup}) {
    p {
      font-size: ${vwTablet(18)};
    }
  }
  @media (min-width: ${media.mdup}) {
    font-size: ${vw(50)};
  }
`;

const showScroll = keyframes`
0{
  opacity:0;
  transform:translateY(0);
}
20%{
  opacity:1;
  transform:translateY(50%);
}
100%{
  transform:translateY(50%);
}
`;

const Animate = styled.div`
  opacity: 0;
  animation: ${showScroll} 5s;
  animation-iteration-count: infinite;
`;

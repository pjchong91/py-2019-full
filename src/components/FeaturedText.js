import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

const FeaturedText = ({ title, body }) => {
  return (
    <Root>
      <Reveal effect="fadeInUp">
        <h1>{title}</h1>
        <p>{body}</p>
      </Reveal>
    </Root>
  );
};

export default FeaturedText;

const Root = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.colorNavy};
  color: white;
  padding: ${vwMobile(50)} ${vwMobile(20)};
  h1 {
    margin-bottom: ${vwMobile(10)};
  }
  p {
    line-height: 2;
    text-align: left;
  }
  @media (min-width: ${media.xsup}) and (max-width: ${media.md}) {
    padding: ${vwTablet(70)} ${vwTablet(40)};
    h1 {
      margin-bottom: ${vwTablet(30)};
    }
  }
  @media (min-width: ${media.mdup}) {
    padding: ${vw(70)} ${vw(40)};
    h1 {
      margin-bottom: ${vw(30)};
    }
    p {
      max-width: ${vw(1000)};
      text-align: center;
      margin: 0 auto;
    }
  }
`;

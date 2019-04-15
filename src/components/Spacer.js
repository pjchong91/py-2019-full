import React from 'react';
import styled from 'styled-components';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

const Spacer = () => {
  return <Root />;
};

export default Spacer;

const Root = styled.div`
  height: ${vwMobile(50)};
  @media (min-width: ${media.xsup}) and (max-width: ${media.md}) {
    height: ${vwTablet(80)};
  }
  @media (min-width: ${media.mdup}) {
    height: ${vw(100)};
  }
`;

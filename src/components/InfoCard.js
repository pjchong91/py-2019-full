import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

const InfoCard = ({ info }) => {
  const { image, text } = info;
  return (
    <Root>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <TextContainer>
        <Reveal effect="fadeInUp">
          <Text>{text}</Text>
        </Reveal>
      </TextContainer>
    </Root>
  );
};

export default InfoCard;

const Root = styled.div`
  @media (min-width: ${media.xsup}) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
    &:nth-child(odd) {
      > div:nth-child(odd) {
        margin-right: 0;
        padding-right: 0;
      }
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      > div:nth-child(even) {
        margin-right: 0;
        padding-right: 0;
      }
    }

    /* > div:nth-child(even) {
      margin-right: 0;
    } */
  }
  @media (min-width: ${media.md}) {
    max-width: ${vw(1000)};
    margin: 0 auto;
  }
`;

const ImageContainer = styled.div`
  padding-top: ${vwMobile(20)};
  height: ${vwMobile(300)};
  @media (min-width: ${media.xsup}) and (max-width: ${media.md}) {
    padding: ${vwTablet(40)};
    flex: 0 1 50%;
    height: ${vwTablet(300)};
  }
  @media (min-width: ${media.mdup}) {
    padding: ${vw(70)} ${vw(40)};
    height: ${vw(300)};
    flex: 0 1 50%;
    box-sizing: content-box;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  margin: ${vwMobile(20)} ${vwMobile(20)};
  @media (min-width: ${media.xsup}) and (max-width: ${media.md}) {
    margin: ${vwTablet(40)} ${vwTablet(40)};
    flex: 0 1 50%;
  }
  @media (min-width: ${media.mdup}) {
    display: flex;
    align-items: flex-end;
    margin: ${vw(70)} ${vw(40)};
    flex: 0 1 50%;
  }
`;

const Text = styled.p`
  @media (min-width: ${media.mdup}) {
  }
`;

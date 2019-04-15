import React from 'react';
import styled from 'styled-components';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';
import { Parallax } from 'react-scroll-parallax';

const StaggerCard = ({ disabled, text, label, image }) => {
  return (
    <Root>
      <TextContainer>
        <Text>
          <Label>{label}</Label>

          <p>{text}</p>
        </Text>
      </TextContainer>

      <ImageContainer>
        <Parallax
          className="parallax"
          y={[-20, 20]}
          tagOuter="figure"
          disabled={disabled}
        >
          <Image src={image} />
        </Parallax>
      </ImageContainer>
    </Root>
  );
};

export default StaggerCard;

const Root = styled.div`
  @media (min-width: ${media.mdup}) {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: ${vw(1000)};
    margin: ${vw(200)} auto;
    justify-content: space-between;
    &:nth-child(odd) {
      flex-direction: row-reverse;
      h1 {
        left: ${vw(50)};
        top: ${vw(-100)};
      }
      > div {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }
  .parallax {
    @media (min-width: ${media.mdup}) {
      padding: ${vw(20)};
    }
  }
`;

const TextContainer = styled.div`
  @media (min-width: ${media.mdup}) {
    /* position: absolute; */
  }
`;

const Text = styled.div`
  background: ${({ theme }) => theme.colorNavy};
  color: white;
  padding: ${vwMobile(50)} ${vwMobile(20)};
  box-shadow: 0px 2px 2px #888888;
  /* margin-bottom: ${vwMobile(50)}; */

  @media (min-width: ${media.xsup}) and (max-width: ${media.md}) {
    padding: ${vwTablet(70)} ${vwTablet(40)};
    margin-bottom: 0;
    h1 {
      margin-bottom: ${vwTablet(30)};
    }
  }
  @media (min-width: ${media.mdup}) {
    padding: ${vw(70)} ${vw(40)};
    position: relative;
    margin-bottom: 0;

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

const ImageContainer = styled.div`
  max-height: ${vwMobile(300)};
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  /* margin-bottom: ${vwMobile(50)}; */
  @media (min-width: ${media.mdup}) {
    width: 80%;
    margin-left: auto;
    max-height: ${vw(500)};
    max-width:${vw(500)};
  }
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;

const Label = styled.h1`
  @media (min-width: ${media.mdup}) {
    position: absolute;
    bottom: ${vw(-100)};
    right: ${vw(50)};
    color: #343434;
    white-space: nowrap;
  }
`;

import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { Waypoint } from 'react-waypoint';
import scrollToElement from 'scroll-to-element';

import Spacer from 'components/Spacer';
import Footer from 'components/Footer';
import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

const accomodations = [
  { question: 'QUestion question question', answer: 'answer answer answer' },
  { question: 'QUestion question question', answer: 'answer answer answer' },

  { question: 'QUestion question question', answer: 'answer answer answer' },

  { question: 'QUestion question question', answer: 'answer answer answer' },

  { question: 'QUestion question question', answer: 'answer answer answer' },
];
class FAQ extends Component {
  // state = {
  //   activeIndex: 0,
  // };

  // handleToggle = index => {
  //   if (index === this.state.activeIndex) {
  //     this.setState({ activeIndex: null });
  //   } else this.setState({ activeIndex: index });
  // };

  constructor(props) {
    super(props);
  }

  state = {
    activeCategory: 0,
  };

  handleClickCategory = index => {
    // const $element = this.$refs[index].current;
    scrollToElement($element, {
      offset: -75,
    });
  };

  handleEnterWaypoint = category => {
    this.setState({ activeCategory: category });
    console.log(category, 'ENTERED');
  };

  render() {
    return (
      <Root>
        <Spacer />

        <Parallax x={[-20, 20]} tagOuter="figure" className="parallax">
          <h1>{this.state.activeCategory}</h1>
        </Parallax>
        <h1>Frequently Asked Questions</h1>

        <Navigation>
          <a onClick={() => this.handleClickCategory(0)}>accomodations</a>
          <a onClick={() => this.handleClickCategory(1)}>parking</a>
          <a onClick={() => this.handleClickCategory(2)}>rsvp</a>
          <a onClick={() => this.handleClickCategory(3)}>gifts/registry</a>
        </Navigation>

        <Waypoint
          key="accomodations"
          onEnter={() => this.handleEnterWaypoint('accomodations')}
          topOffset="25%"
          bottomOffset="25%"
        >
          <Section>
            {accomodations.map((question, index) => (
              <QuestionBlock
                key={index}
                // isActive={index === this.state.activeIndex}
                // onClick={() => this.handleToggle(index)}
              >
                <h2>{question.question}</h2>
                <p>{question.answer}</p>
              </QuestionBlock>
            ))}
          </Section>
        </Waypoint>
        <Waypoint
          key="parking"
          onEnter={() => this.handleEnterWaypoint('parking')}
          topOffset="25%"
          bottomOffset="25%"
        >
          <Section>
            {/* <Parallax y={[-20, 20]} tagOuter="figure" className="parallax">
              <h1>accomodations</h1>
            </Parallax> */}
            {accomodations.map((question, index) => (
              <QuestionBlock
                key={index}
                // isActive={index === this.state.activeIndex}
                // onClick={() => this.handleToggle(index)}
              >
                <h2>{question.question}</h2>
                <p>{question.answer}</p>
              </QuestionBlock>
            ))}
          </Section>
        </Waypoint>
        <Waypoint
          key="rsvp"
          onEnter={() => this.handleEnterWaypoint('rsvp')}
          topOffset="25%"
          bottomOffset="25%"
        >
          <Section>
            {/* <Parallax y={[-20, 20]} tagOuter="figure" className="parallax">
              <h1>accomodations</h1>
            </Parallax> */}
            {accomodations.map((question, index) => (
              <QuestionBlock
                key={index}
                // isActive={index === this.state.activeIndex}
                // onClick={() => this.handleToggle(index)}
              >
                <h2>{question.question}</h2>
                <p>{question.answer}</p>
              </QuestionBlock>
            ))}
          </Section>
        </Waypoint>
        <Waypoint
          key="gifts"
          onEnter={() => this.handleEnterWaypoint('gifts/registry')}
          topOffset="25%"
          bottomOffset="25%"
        >
          <Section>
            {/* <Parallax y={[-20, 20]} tagOuter="figure" className="parallax">
              <h1>accomodations</h1>
            </Parallax> */}
            {accomodations.map((question, index) => (
              <QuestionBlock
                key={index}
                // isActive={index === this.state.activeIndex}
                // onClick={() => this.handleToggle(index)}
              >
                <h2>{question.question}</h2>
                <p>{question.answer}</p>
              </QuestionBlock>
            ))}
          </Section>
        </Waypoint>

        <Footer />
      </Root>
    );
  }
}

export default FAQ;

const rotato = keyframes`
  0% {
    transform:  translate(${vwMobile(-20)}, -50%) rotate(0);
  }
  100% {
    transform:  translate(${vwMobile(-20)}, -50%) rotate(360deg);
  }
`;

const fadeIn = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
}
`;
const Root = styled.div`
  padding: ${vwMobile(20)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  h1:first-of-type {
    margin-bottom: ${vwMobile(20)};
  }

  padding-top: ${vwMobile(30)};
  .parallax {
    position: fixed;
    top: 50vh;
    right: 0;
    transform: rotate(-90deg);
    transform-origin: bottom;
    width: 0;
    opacity: 0;

    animation: ${fadeIn} 0.3s forwards;

    h1 {
      letter-spacing: 2px;
      color: #cca47f;
      font-size: ${vwMobile(40)};
    }
  }

  a {
    text-transform: uppercase;
    letter-spacing: 1.2px;
    line-height: 1.7;
    margin-left: ${vwMobile(20)};
    color: ${({ theme }) => theme.colorNavy};
    position: relative;
    animation: all 0.2s;
    &:after {
      content: '';
      border-bottom: 2px solid ${({ theme }) => theme.colorNavy};
      transition: all 0.2s;
      /* transform: scaleX(0); */
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
    }
    &:hover {
      /* text-decoration: underline; */
      cursor: pointer;

      &:hover:after {
        /* transform: scaleX(1); */
        width: 100%;
      }

      &.isActive:after {
        transform: scaleX(1);
      }
      &:before {
        animation: ${rotato} 1s infinite;
      }
    }
  }
  a::before {
    position: absolute;
    top: 50%;
    left: 0%;
    content: '';
    height: 10px;
    width: 10px;
    background: url(${require('src/assets/images/hexagon.png')});
    background-size: contain;
    background-position: center;
    transform: translate(${vwMobile(-20)}, -50%);
  }
`;

const QuestionBlock = styled.div`
position:relative;
z-index:3;
  p {
    /* height: ${props => (props.isActive ? 'auto' : '0')};
    max-height: ${props => (props.isActive ? '500px' : '0')};
    opacity: ${props => (props.isActive ? 1 : 0)}; */
    transition: all 0.5s;
  }
`;

const Section = styled.div`
  position: relative;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${vwMobile(20)};
`;

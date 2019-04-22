import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { Waypoint } from 'react-waypoint';
import scrollToElement from 'scroll-to-element';

import Spacer from 'components/Spacer';
import Footer from 'components/Footer';
import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

const locationQuestions = [
  {
    question: 'Have you guys picked a venue?',
    answer:
      'Indeed we have!  We plan to have our ceremony and reception at the Rosewood Hotel Georgia in Vancouver.  It is located across the street from the Vancouver Art Gallery.',
  },
  {
    question: "I'm coming from out of town.  Where should I stay?",
    answer:
      'Firstly, thank you for planning to travel all the way to Vancouver for our wedding :)!  We have a special room rate with the Rosewood Hotel Georgia that you may inquire with us about but we would also recommend looking into AirBnB.  Pam and Yves are based out in Richmond.  Please let us know if we can help you with planning your accomodations.',
  },
];
const transportationQuestions = [
  {
    question: 'Will there be parking?',
    answer: (
      <span>
        <p>
          Valet parking is available but it is not covered. We recommend using the
          public parkades nearby. In particular:
        </p>
        <ul>
          <li>
            <a
              href="https://lots.impark.com/imp?utm_source=google&utm_medium=maps&utm_content=0011646&utm_campaign=local_canada#details=1,1646"
              target="_blank"
            >
              Winners/Future Shop Lot (5 minute walk, 24hr){' '}
            </a>
          </li>

          <li>
            <a
              href="https://lots.impark.com/imp?utm_source=google&utm_medium=maps&utm_content=10011880&utm_campaign=local_canada#details=1,1880"
              target="_blank"
            >
              HSBC Lot (2 minute walk, 24hr){' '}
            </a>
          </li>
        </ul>
        <p>
          The location is also close to Vancouver City Center Skytrain Station
        (Canada Line) and Granville Skytrain Station (Expo/Millenium Line).
        </p>
      </span>
    ),
  },
  { question: 'How can I get there by transit?', answer: (
    <p>
      The location is also close to Vancouver City Center Skytrain Station (Canada Line) and Granville Skytrain Station (Expo/Millenium Line).
    </p>
    )
  },
];
const rsvpQuestions = [
  {
    question: 'When will I receive my invitation?  When should I RSVP by?',
    answer:
      'Invitations will be sent out around May and RSVPs to be returned around July.  If you live in or around Vancouver, we will be hand delivering our invitations.',
  },
  {
    question: "I won't be able to make it to your wedding :(",
    answer:
      "We're sad to hear you won't be joining us! Whenever you find out you can't make it, please let us know so we can plan accordingly.",
  },
];
const giftsQuestions = [
  { question: 'Do you guys have a wedding registry?', answer: "Since we've lived together for the past two years, we have a lot of the essentials already and not a ton of space for physical gifts. Though if you would like, we would appreciate monetary contributions toward our honeymoon fund to Japan following our wedding in September! :)" },
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
    this.$locations=React.createRef()
    this.$transportation=React.createRef()
    this.$rsvp=React.createRef()
    this.$gifts=React.createRef()
  }

  state = {
    activeCategory: 0,
  };

  handleClickCategory = category => {
    console.log(category)
    scrollToElement(category, {
      offset: -60,
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
        <Intro>We thought you might have some questions we can answer. Should there be any questions you still have that aren't found here feel free to contact us.</Intro>
        <br/>

        <Navigation>
          <a onClick={() => this.handleClickCategory(this.$locations.current)}>locations</a>
          <a onClick={() => this.handleClickCategory(this.$transportation.current)}>transportation</a>
          <a onClick={() => this.handleClickCategory(this.$rsvp.current)}>rsvp</a>
          <a onClick={() => this.handleClickCategory(this.$gifts.current)}>gifts/registry</a>
        </Navigation>

        <Waypoint
          key="locations"
          onEnter={() => this.handleEnterWaypoint('locations')}
          topOffset="25%"
          bottomOffset="25%"
        >
          <Section ref={this.$locations}>
            {locationQuestions.map((question, index) => (
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
          key="transportation"
          onEnter={() => this.handleEnterWaypoint('transportation')}
          topOffset="25%"
          bottomOffset="25%"
        >
          <Section ref={this.$transportation}>
            {/* <Parallax y={[-20, 20]} tagOuter="figure" className="parallax">
              <h1>locations</h1>
            </Parallax> */}
            {transportationQuestions.map((question, index) => (
              <QuestionBlock
                key={index}
                // isActive={index === this.state.activeIndex}
                // onClick={() => this.handleToggle(index)}
              >
                <h2>{question.question}</h2>
                {question.answer}
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
          <Section ref={this.$rsvp}>
            {/* <Parallax y={[-20, 20]} tagOuter="figure" className="parallax">
              <h1>locations</h1>
            </Parallax> */}
            {rsvpQuestions.map((question, index) => (
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
          <Section ref={this.$gifts}>
            {/* <Parallax y={[-20, 20]} tagOuter="figure" className="parallax">
              <h1>locations</h1>
            </Parallax> */}
            {giftsQuestions.map((question, index) => (
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
  ul {
    margin-left: ${vwMobile(20)};
    a {
      color: ${({ theme })=> theme.colorNavy};
    }
  }
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

const Intro = styled.p`
  padding-right: ${vwMobile(50)};
`

const Section = styled.div`
  position: relative;
  padding-right: ${vwMobile(50)};
  h2 {
    margin-top: ${vwMobile(25)};
    margin-bottom: ${vwMobile(10)};
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${vwMobile(20)};
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

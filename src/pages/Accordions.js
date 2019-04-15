import React, { Component } from 'react';
import styled from 'styled-components';

import Spacer from 'components/Spacer';
import Footer from 'components/Footer';
import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

const questions = [
  { question: 'QUestion question question', answer: 'answer answer answer' },
  { question: 'QUestion question question', answer: 'answer answer answer' },

  { question: 'QUestion question question', answer: 'answer answer answer' },

  { question: 'QUestion question question', answer: 'answer answer answer' },

  { question: 'QUestion question question', answer: 'answer answer answer' },
];
class Accordions extends Component {
  state = {
    activeIndex: 0,
  };

  handleToggle = index => {
    if (index === this.state.activeIndex) {
      this.setState({ activeIndex: null });
    } else this.setState({ activeIndex: index });
  };

  render() {
    return (
      <Root>
        <Spacer />
        {questions.map((question, index) => (
          <QuestionBlock
            key={index}
            isActive={index === this.state.activeIndex}
            onClick={() => this.handleToggle(index)}
          >
            <h1>{question.question}</h1>
            <p>{question.answer}</p>
          </QuestionBlock>
        ))}
        <Footer />
      </Root>
    );
  }
}

export default Accordions;

const Root = styled.div``;

const QuestionBlock = styled.div`
  margin: ${vwMobile(20)};
  p {
    height: ${props => (props.isActive ? 'auto' : '0')};
    max-height: ${props => (props.isActive ? '500px' : '0')};
    opacity: ${props => (props.isActive ? 1 : 0)};
    transition: all 0.5s;
  }
`;

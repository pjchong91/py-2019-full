import React, { Component } from 'react';
import styled from 'styled-components';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';
import Spacer from 'components/Spacer';
import StaggerCard from 'components/StaggerCard';
import Footer from 'components/Footer';

class WeddingParty extends Component {
  componentDidMount() {
    this.handleResize();
    addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    this.handleResize();
    removeEventListener('resize', this.handleResize);
  }

  state = {
    disabled: true,
  };

  handleResize = () => {
    if (window.innerWidth > 992) {
      this.setState({ disabled: false });
    } else this.setState({ disabled: true });
    console.log(window.innerWidth);
  };

  render() {
    return (
      <Root>
        <Spacer />
        <StaggerCard
          disabled={this.state.disabled}
          image={require('src/assets/images/bridesmaids.jpeg')}
          text={
            <>
              I'm probably the definition of #NoNewFriends. I have loved E & D
              for more than half my life at this point. I didn't remember to ask
              them to be my bridesmaids. I added them to a group chat and just
              went from there. Without question I knew, I wasn't getting married
              without them. C, is going to be my future sister in law. She loves
              to laugh and cares intensely for the people around her. I figured
              I wouldn't get to pick my sister in law but fate did a kindness by
              making her the sister I would get to have for the rest of my life.
              <br />
              <br />
              And of course, there's mom. Not a bridesmaid but the #1 support.
              Thank you always to mom for loving Yves like her own son and for
              not really taking our money when we lose at mahjong.
            </>
          }
          label="THE BRIDESMAIDS & MOM"
        />
        <StaggerCard
          disabled={this.state.disabled}
          text={
            <>
            These are some of the finest gentlemen I happen to come across in life. Ryan was probably my very first friend since the age of 5. He had a mushroom haircut back but I still thought he was a pretty cool kid. I met Jeff a year after, and pretty much everything that came out of Jeff's mouth was hilarious. Jeff, Ryan, and I were lucky enough to get through elementary school, middle school, and high school together. After high school, we continued to find time to catch up, and it was always a good time. Without a doubt if I were in trouble or made a mess of any sort, I know these two would have my back or clean up any theoretical messes I would have made, respectfully.
            <br/>
            <br/>

          After my first degree of studying Biochemistry, I decided to make a career pivot and study Computer Science at UBC. This is where I met my good bud Vincent. He was just as passionate as I was about programming. We pretty much joined any Hackathon that was in Vancouver during our time in the program to hone our skills. Aside from that we also started doing jiu jitsu together and literally got closer as we try to choke each other out.
          <br/>
          <br/>

          Combining the three forces of nature, they form the group known as the GROOMS OF HONOUR
        </>}
          label="THE GROOMS OF HONOUR"
          />
        <Footer />
      </Root>
    );
  }
}

export default WeddingParty;

const Root = styled.div``;

const Passage = styled.div`
  margin: 0 auto;
  margin-top: ${vwMobile(50)};
  margin-bottom: ${vwMobile(50)};
  padding-left: ${vwMobile(20)};
  padding-right: ${vwMobile(20)};

  @media (min-width: ${media.mdup}) {
    margin: 0 auto;

    margin-top: ${vw(200)};
    margin-bottom: ${vw(100)};
    max-width: ${vw(1000)};
  }
`;

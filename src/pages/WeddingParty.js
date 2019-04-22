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
        <StaggerCard disabled={this.state.disabled} />

        <Passage>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </Passage>
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

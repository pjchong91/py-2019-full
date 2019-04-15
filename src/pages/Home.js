import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Intl from 'src/components/Intl';

import FeaturedText from 'components/FeaturedText';
import InfoCard from 'components/InfoCard';
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import Button from 'components/Button';
const infoCards = [
  {
    image: require('src/assets/images/home/story1.jpeg'),
    text: `After the late night, post-study heart to hearts, Yves asked Pam out.  And she said yes!  Not too shortly after (literally, only 6 weeks after they started dating), Yves broke his arm while training Brazilian JiuJitsu.  His parents were leaving town that week and he would be left to fend for himself.  Lucky for him, Pam had just finished nursing school and was working in Rehab nursing.  He stayed with Pam's family for the next few weeks.`,
  },
  {
    image: require('src/assets/images/home/story2.jpeg'),
    text: `"Wow that was great!" Pam had thought to herself.  It was so great, she wondered why they couldn't just live together all the time.  While Yves was really preoccupied with studying for his last term of school, Pam proposed they move in together.  "Yeah yeah yeah, sure okay.  Sounds good."  He may not have been actually listening.  He seemed surprised to find himself moving out after the exams were over.`,
  },
  {
    image: require('src/assets/images/home/story3.jpeg'),
    text:
      'Things were going great and finally, they were ready to seal the deal as two young and free adults.  She had successfully tied him down to a home and now it was time to trap him forever.  It was time to get a dog.',
  },
  {
    image: require('src/assets/images/home/story4.jpeg'),
    text: `After all the pieces fell into place, she knew it was only a matter of time until he popped the question.  She couldn't remember what he said at the time but she knew she couldn't wait for him to finish before saying "Yes!"`,
  },
];

class Home extends Component {
  render() {
    return (
      <Root>
        <Hero image={require('src/assets/images/home/home-hero.jpg')} />
        <FeaturedText
          title="The Story"
          body="Not so long ago, Pam and Yves were students in school studying for exams.  One of their awesome mutual friends decided to put together a study group.  Little did they know where that would go but that's where this love story begins."
        />
        <InfoCard info={infoCards[0]} />
        <InfoCard info={infoCards[1]} />

        <InfoCard info={infoCards[2]} />
        <InfoCard info={infoCards[3]} />

        <Button path="/wedding-party" label="Gather the Wedding Party!" />

        {/* <InfoCard info={infoCards[0]} /> */}

        <Footer />
      </Root>
    );
  }
}

export default Home;

const Root = styled.div``;

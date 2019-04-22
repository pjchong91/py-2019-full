import React, { Component } from 'react';
import styled from 'styled-components';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';
import Spacer from 'components/Spacer';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Footer from 'components/Footer';
import Theme from '../styles/theme';

class WeddingTimeline extends Component {
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
  };

  render() {
    return (
      <Root>
        <Spacer />
        <Timeline lineColor={Theme.colorGold}>
          <TimelineItem
            key="001"
            dateText="3:00PM"
            dateInnerStyle={{ background: Theme.colorNavy, color: '#FFF' }}
          >
          <h3> Doors Open </h3>
          <p> Welcome to the event! Feel free to mingle with others who have gathered for our momentous occasion :). </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="4:00PM-5:00PM"
            dateInnerStyle={{ background: Theme.colorNavy, color: '#FFF' }}
          >
          <h3> Ceremony </h3>
          <p> Pam and Yves will exchange vows, and Pam will walk down the aisle. :) </p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="5:00PM-6:00PM"
            dateInnerStyle={{ background: Theme.colorNavy, color: '#FFF' }}
          >
          <h3> Cocktail hour </h3>
          <p> Enjoy some complimentary drinks and Canapes! During this time, Pam and Yves will be walking around to connect with our guests! :) </p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="6:00PM-12:00AM"
            dateInnerStyle={{ background: Theme.colorNavy, color: '#FFF' }}
          >
          <h3> Dinner Reception </h3>
          <p> Enjoy a complimentary buffet featuring the below: </p>
          <br/>
          <ul>
            <li> Selection of Bread Rolls </li>
            <li> Zucchini Salad, Almonds, Fennel, Olive Oil, Lemon </li>
            <li> Panzella Salad, Vine Ripened Tomatoes, Mozzarella </li>
            <li> Smoked and Candied Salmon, Horseradish, Capers, Creme Fraiche </li>
            <li> Pan-seared Ross Down Farms Chicken Breast, Tarragon Cream </li>
            <li> AAA Alberta Beef Striploin, Wild Mushroom and Herb Demi </li>
            <li> West Coast Seafood Thermidor, Wild Mushroom, Gruyete </li>
            <li> Roasted Seasonal Vegetables, Herbs and Olive Oil </li>
            <li> Baked Sagnarelli, Napolitana, Pepperoncino, Mozzarella </li>
            <li> Lemon Tart </li>
            <li> Almond Peach Mousse </li>
            <li> Chocolate Pot de Crème </li>
            <li> Freshly Brewed Cafe Milano Coffee and a Collection of "TWG" Teas </li>
          </ul>
          </TimelineItem>
        </Timeline>
        <Footer />
      </Root>
    );
  }
}

export default WeddingTimeline;

const Root = styled.div`
  li{
    margin-left:20px;
  }
`;

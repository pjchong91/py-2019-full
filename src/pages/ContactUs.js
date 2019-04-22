import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import media from 'src/styles/media';

class ContactUs extends Component {
  render() {
    return (
      <Root>
          <h1>Contact</h1>
          <p>
            If questions or concerns arise, please feel free to contact either
            of us by phone or by email or our planner, Alicia, by email.
          </p>

          <ContactList>
            <div>
              <h2>pam</h2>
              <a href="tel:1-778-688-2337">778.688.2337</a>
              <a href="mailto:pjchong91@gmail.com" target="_blank">
                pjchong91@gmail.com
              </a>
            </div>

            <div>
              <h2>yves</h2>
              <a href="tel:1-604-767-6722">604.767.6722</a>
              <a href="mailto:chanyves@gmail.com" target="_blank">
                chanyves@gmail.com
              </a>
            </div>

            <div>
              <h2>alicia</h2>
              {/* <a href="tel:1-604-767-6722">604.767.6722</a> */}
              <a href="mailto:info@aliciakeats.com" target="_blank">
                info@aliciakeats.com
              </a>
            </div>
          </ContactList>
      </Root>
    );
  }
}

export default ContactUs;

const Root = styled.div`
  min-height: 100vh;
  padding: 15px;
  padding-top: 80px;
  @media (min-width: ${media.smup}) {
    padding: 30px;
    padding-top: 80px;
  }

  h1 {
    /* text-transform: uppercase; */
    margin-top: 50px;
    font-size: 30px;
    color: ${({ theme }) => theme.colorText};
    letter-spacing: 1.5px;
    /* text-decoration: underline; */
    /* text-align: center; */

    @media (min-width: ${media.smup}) {
      font-size: 48px;
    }
  }
  p {
    font-size: 14px;
    padding-top: 20px;
    max-width: 400px;
    line-height: 2;
    @media (min-width: ${media.smup}) {
      font-size: 16px;
    }
  }
`;

const ContactList = styled.div`
  @media (min-width: ${media.smup}) {
    display: flex;
    flex-direction: row;
    width: 100%;
    > div {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }
  h2 {
    font-weight: 600;
    font-size: 16px;
    margin-top: 50px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-family: 'Playfair Display';
    letter-spacing: 2px;
    @media (min-width: ${media.smup}) {
      font-size: 20px;
    }
  }
  a {
    display: block;
    letter-spacing: 1.2px;
    margin-bottom: 20px;
    color: ${({ theme }) =>  theme.colorNavy};
  }
`;

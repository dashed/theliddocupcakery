// @flow

// 3rd-party imports

import * as React from 'react';
import styled from 'styled-components';

// components

const Headline = styled.div`
  font-size: 88px;
  text-shadow: 2px 2px #f8f0fc;

  font-weight: bold;

  text-transform: uppercase;
  letter-spacing: 0.25em;
  margin-right: -0.25em;

  opacity: 0.8;

  @media screen and (max-width: 740px) {
    font-size: 72px;
  }

  @media screen and (max-width: 620px) {
    font-size: 64px;
  }

  @media screen and (max-width: 560px) {
    font-size: 56px;
  }

  @media screen and (max-width: 480px) {
    font-size: 48px;
  }

  @media screen and (max-width: 420px) {
    font-size: 40px;
  }

  @media screen and (max-width: 350px) {
    font-size: 24px;
  }
`;

const Container = styled.div`
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  text-align: right;

  max-width: 960px;

  margin-left: auto;
  margin-right: auto;
`;

const SubHeadline = styled.div``;

const Description = styled.div`
  text-align: center;
  margin-top: 50px;

  text-shadow: 1px 0px 0px rgba(255, 255, 255, 0.4);
`;

const Social = styled.div`
  text-align: center;
  margin-top: 20px;

  text-shadow: 1px 0px 0px rgba(255, 255, 255, 0.4);

  & * + * {
    margin-left: 16px;
  }

  @media screen and (max-width: 390px) {
    display: flex;
    flex-direction: column;

    & * + * {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

const Link = styled.a`
  color: inherit;

  font-size: 0.8rem;

  text-decoration: none;

  background-color: rgba(255, 222, 235, 0.3);
  padding: 8px;
  border-radius: 3px;

  box-shadow: 0 2px 20px rgba(4, 40, 110, 0.1);

  transition: box-shadow 350ms ease-out, background-color 350ms ease-out;

  &:hover {
    text-decoration: none;
    box-shadow: 0 10px 30px rgba(4, 40, 110, 0.2);
    background-color: rgba(255, 222, 235, 0.5);
  }
`;

const linkEvent = event => {
  event.stopPropagation();
};

const Content = () => {
  return (
    <Container>
      <Headline>{'the'}</Headline>
      <Headline>{'liddo'}</Headline>
      <Headline>{'cupcakery'}</Headline>
      <SubHeadline>
        {'by '}
        <strong>{'Nicole'}</strong>
        {', the Cupcake Queen'}
      </SubHeadline>

      <Description>{'Cupcakes or cakes from my kitchen to your belly 🍰'}</Description>

      <Social>
        <Link onClick={linkEvent} href="https://www.instagram.com/theliddocupcakery" target="_blank">
          {'@theliddocupcakery'}
        </Link>

        <Link
          onClick={linkEvent}
          href="mailto:orders@theliddocupcakery.com?Subject=Order%20Inquiry&body=Hi%20Nicole,"
          target="_blank"
        >
          {'orders@theliddocupcakery.com'}
        </Link>
      </Social>
    </Container>
  );
};

export default Content;

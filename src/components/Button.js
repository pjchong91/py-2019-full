import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = ({ path, label }) => {
  return (
    <Root to={path}>
      <Link to={path}>{label}</Link>
    </Root>
  );
};

export default Button;

const Root = styled.div`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontBody};
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  a:hover {
    background: ${({ theme }) => theme.colorNavy};

    color: white;
    transition: all 0.8s;
  }

  a {
    margin: 0 auto;
    color: ${({ theme }) => theme.colorNavy};
    border: 2px solid ${({ theme }) => theme.colorNavy};
    display: block;
    text-align: center;
    width: auto;
    padding: 10px 20px;
    font-weight: bold;
  }
`;

import React from 'react'
import styled from 'styled-components'
import Spacer from './Spacer'

const Footer=()=>{
  return(
    <Root>
      <h1>P&Y</h1>
      <br/>
        <h3>Pamela Chong and Yves Chan</h3>
        <p>August 23 2019</p>
      </Root>
  )
}

export default Footer

const Root=styled.div`
width: 100%;
height: 200px;
background: ${({theme})=>theme.colorNavy};
box-shadow: 0px 2px 2px ${({ theme }) => theme.colorNavy};
padding: 20px;

h1 {
  color: white;
  cursor: pointer;
}

h3 {
  color: white;
  cursor: pointer;
}

p {
  color: white;
  cursor: pointer;
  align-items:center;
}
`

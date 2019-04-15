import React from 'react'
import styled from 'styled-components'

const Footer=()=>{
  return(
    <Root>
      <h1>Footer</h1>
      </Root>
  )
}

export default Footer

const Root=styled.div`
width: 100%;
height: 200px;
background: ${({theme})=>theme.colorNavy};
color: white;
`

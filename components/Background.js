import React, { Component } from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  width: 100%;
  height: 100px;
`

const BGImaage = styled.Image`
  width: 100%;
  height: 100%;
`

export default ({ source }) => (
  <Container>
    <BGImaage source={source}/>
  </Container>
)

import React from 'react'
import Search from '@components/search'
import { lightGray } from '@theme/colors'
import styled from 'styled-components'

type Props = {

}
export default function Navigation(props: Props) {
  return (
    <Container>
      <LogoBox />
      <Search />
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoBox = styled.div`
  border: 1px solid ${lightGray};
  width: 32px;
  height: 32px;
`
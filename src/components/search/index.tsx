import React from 'react'
import { SearchIcon } from '@icons/index'
import styled from 'styled-components'
type Props = {

}
export default function Search(props: Props) {
  return (
    <Container>
      <SearchIcon />
    </Container>
  )
}

const Container = styled.div`
  flex: 0 200px;
  margin-left: 10px;
  height: 32px;
  border: 1px solid blue;
  cursor: text;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
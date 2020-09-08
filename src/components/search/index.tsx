import React, { useState } from 'react'
import { lightGray, main } from '@theme/colors'

import { SearchIcon } from '@icons/index'
import styled from 'styled-components'

type Props = {

}
export default function Search(props: Props) {
  const [isFocus, setFocus] = useState(false)

  const handleFocus = () => {
    setFocus(true)
  }

  const handleBlur = () => {
    setFocus(false)
  }
  return (
    <Container isFocus={isFocus}>
      <SearchIcon />
      <Input onFocus={handleFocus} onBlur={handleBlur} placeholder={'Search'} />
    </Container>
  )
}

const Container = styled.div<{ isFocus: boolean }>`
  flex: 0 200px;
  margin-left: 10px;
  height: 32px;
  border: 1px solid ${(props) => props.isFocus ? main : lightGray};
  border-radius: 8px;
  cursor: text;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  transition: all 0.1s ease;
`

const Input = styled.input`
  flex: 0 160px;
  height: 30px;
  border: none;
  outline: none;
  margin-left: 8px;
`
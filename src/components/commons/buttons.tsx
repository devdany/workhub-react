import React from 'react'
import { clickableBright } from '@theme/interaction'
import styled from 'styled-components'

type IconButtonProps = {
  children?: JSX.Element
}

export function IconButton(props: IconButtonProps) {
  return (
    <IconButtonBox>
      {props.children}
    </IconButtonBox>
  )
}

const IconButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${clickableBright}
`
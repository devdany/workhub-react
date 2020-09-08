import React from 'react'
import Styles from '@src/types/styles'
import { clickableBright } from '@theme/interaction'
import { styleToString } from '@utils/stringUtils'
import styled from 'styled-components'

type IconButtonProps = {
  children?: JSX.Element
  styles?: Styles
}

export function IconButton(props: IconButtonProps) {
  let styleString = ''
  if (props.styles) {
    styleString = styleToString(props.styles)
  }

  return (
    <IconButtonBox styles={styleString} >
      {props.children}
    </IconButtonBox>
  )
}

const IconButtonBox = styled.div<{ styles: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${clickableBright};
  ${(props) => props.styles}
`
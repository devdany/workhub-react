import { main, main_invalid } from '@theme/colors'

import { CircularProgress } from '@material-ui/core'
import React from 'react'
import Styles from '@src/types/styles'
import { clickableDark } from '@theme/interaction'
import { styleToString } from '@utils/stringUtils'
import styled from 'styled-components'

type InputProps = {
  placeholder?: string
  onChange: (e: any) => void
  value: string
  type?: string
  styles?: Styles
}
export function FormInput(props: InputProps) {
  const handleChange = (e: any) => {
    props.onChange(e)
  }

  let styleString = ''
  if (props.styles) {
    styleString = styleToString(props.styles)
  }
  return (
    <Input type={props.type} styles={styleString} value={props.value} placeholder={props.placeholder} onChange={handleChange}/>
  )
}

type SubmitProps = {
  title: string
  onClick: (e: any) => void
  styles?: Styles
  loading?: boolean
}
export function FormSubmit(props: SubmitProps) {
  let styleString = ''
  if (props.styles) {
    styleString = styleToString(props.styles)
  }

  let handleClick = props.onClick

  if (props.loading) {
    handleClick = () => {} 
  }

  return (
    <SubmitBox loading={props.loading} styles={styleString} onClick={handleClick}>
      {props.loading ? (
        <CircularProgress size={24} />
      ): (
        <SubmitText>{props.title}</SubmitText>
      )}
    </SubmitBox>
  )
}

type DividerProps = {
  size: string
  margin: number
  vertical?: boolean
}
export function FormDivider(props: DividerProps) {
  if (props.vertical) {
    return <VerticalDivider size={props.size} margin={props.margin}/>
  } else {
    return <Divider size={props.size} margin={props.margin}/>
  }
}

type LinkTextProps = {
  styles?: Styles
  text: string
  onClick: (e: any) => void
}
export function FormLinkText(props: LinkTextProps) {
  let styleString = ''
  if (props.styles) {
    styleString = styleToString(props.styles)
  }
  return <LinkText onClick={props.onClick} styles={styleString}>{props.text}</LinkText>
}

const Input = styled.input<{ styles?: string }>`
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 14px 16px;
  font-size: 16px;
  height: 14px;
  ${(props) => props.styles}
`

const SubmitBox = styled.div<{ styles?: string, loading?: boolean }>`
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) => props.loading ? main_invalid : main};
  ${(props) => props.styles};
  ${clickableDark};
`

const SubmitText = styled.span`
  color: #ffffff;
  font-size: 16px;
`

const Divider = styled.div<{ size: string, margin: number }>`
  width: ${(props) => props.size};
  height: 1px;
  border-bottom: 1px solid #dddddd;
  margin-top: ${(props) => props.margin}px;
  margin-bottom: ${(props) => props.margin}px;
`

const VerticalDivider = styled.div<{ size: string, margin: number }>`
  width: 1px;
  height: ${(props) => props.size};
  border-right: 1px solid #dddddd;
  margin-left: ${(props) => props.margin}px;
  margin-right: ${(props) => props.margin}px;
`



const LinkText = styled.span<{ styles?: string }>`
  color: ${main};
  font-size: 14px;
  font-weight: 500;
  ${clickableDark};
  ${(props) => props.styles}
`
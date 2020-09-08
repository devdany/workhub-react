import React from 'react'
import { main } from '@theme/colors'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

type Props = {
  label: string
  path: string
  icon: JSX.Element
}
export default function NavigationItem(props: Props) {
  const history = useHistory()
  const move = () => {
    history.push(props.path)
  }
  return (
    <Container onClick={move}>
      {history.location.pathname === props.path && <Selected />}
      {props.icon}
    </Container>
  )
}

const Container = styled.div`
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`

const Selected = styled.div`
  width: 100%;
  height: 5px;
  position: absolute;
  background-color: ${main};
  bottom: 0px;
`

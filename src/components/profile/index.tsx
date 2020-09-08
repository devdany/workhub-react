import React from 'react'
import { User } from '@src/types/graphql'
import { lightGray } from '@theme/colors'
import styled from 'styled-components'

type Props = {
  user: User
}
export default function Profile(props: Props) {
  console.log(props.user)
  return (
    <Container>
      {props.user.profileImg ? (
        <Image src={props.user.profileImg}/>
      ): (
        <NoProfileImage>{props.user.username.substring(0, 1).toUpperCase()}</NoProfileImage>
      )}
      
    </Container>
  )
}

const Container = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${lightGray};
`

const Image = styled.img`
  width: 36px;
  height: auto;
`

const NoProfileImage = styled.span`
  font-weight: 500;
  font-size: 24px;
`
import React from 'react'
import { black } from '@theme/colors'
import styled from 'styled-components'

type Props = {
  close: () => void
}
export default function SetUserInfo(props: Props) {
  return (
    <Container>
      <Header>
        <HeaderText>Edit profile</HeaderText>
      </Header>
      <SubHeader>
        <SubHeaderText>Profile</SubHeaderText>
      </SubHeader>
      <ProfileBox>
        <ProfileImageBox>

        </ProfileImageBox>
        <ProfileIntroBox>

        </ProfileIntroBox>
      </ProfileBox>
    </Container>
  )
}

const Container = styled.div`
  width: 760px;
  margin-left: 20px;
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Header = styled.div`
  width: 800px;
  flex-basis: 50px; 
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  padding-top: 20px;
  top: 0px;
  background: #ffffff;
`

const HeaderText = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: ${black};
`

const SubHeader = styled.div`
  width: 100%;
  flex-basis: 30px; 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`

const SubHeaderText = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${black};
`

const ProfileBox = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  margin-top: 20px;
  border: 1px solid red;
  justify-content: flex-start;
  align-items: center;
`

const ProfileImageBox = styled.div`
  display: flex;
  flex-basis: 250px;
  height: 250px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid blue
`

const ProfileIntroBox = styled.div`
  display: flex;
  flex-basis: 450px;
  height: 250px;
  margin-left: 20px;
  border: 1px solid green;
`

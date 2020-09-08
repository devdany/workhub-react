import { FEED, FOLLOW, PROJECT, TEAM } from '@routes/path'
import { FollowIcon, HomeIcon, MoreIcon, NotificationIcon, ProjectIcon, TeamIcon } from '@icons/index'

import { IconButton } from '../commons/buttons'
import { LOGIN_USER } from '@cache/query/user'
import NavigationItem from './item'
import Profile from '@components/profile'
import React from 'react'
import Search from '@components/search'
import { SetLoginUser } from '@cache/model'
import { lightGray } from '@theme/colors'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

type Props = {

}
export default function Navigation(props: Props) {
  const { data } = useQuery<SetLoginUser>(LOGIN_USER)
  return (
    <Container>
      <LeftBox>
        <LogoBox />
        <Search />
      </LeftBox>
      <NavigationButtonsBox>
        <NavigationItem icon={<HomeIcon size={'lg'}/>} path={FEED} label={'Feed'}/>
        <NavigationItem icon={<FollowIcon size={'lg'}/>} path={FOLLOW} label={'Follow'}/>
        <NavigationItem icon={<ProjectIcon size={'lg'}/>} path={PROJECT} label={'Project'}/>
        <NavigationItem icon={<TeamIcon size={'lg'}/>} path={TEAM} label={'Team'}/>
      </NavigationButtonsBox>
      <RightBox>
        {data && data.loginUser && (
          <ProfileBox>
            <Profile user={data.loginUser}/>
            <LoginUserName>
              {data.loginUser.username}
            </LoginUserName>
          </ProfileBox>
        )}
        <IconButton styles={{ "margin-left": '20px' }}>
          <NotificationIcon size={'lg'} />
        </IconButton>
        <IconButton styles={{ "margin-left": '20px' }}>
          <MoreIcon size={'lg'}/>
        </IconButton>
      </RightBox>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)
`

const LeftBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 260px;
  margin-left: 20px;
  height: 100%;
`

const RightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 260px;
  margin-right: 20px;
  height: 100%;
`

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginUserName = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin-left: 10px;
`

const LogoBox = styled.div`
  border: 1px solid ${lightGray};
  width: 44px;
  height: 44px;
`

const NavigationButtonsBox = styled.div`
  width: 440px;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
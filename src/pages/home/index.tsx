import { FacebookIcon, GithubIcon, GoogleIcon } from '@icons/index'
import { FormDivider, FormInput, FormLinkText, FormSubmit } from '@components/form'
import React, { useState } from 'react'
import { black, main } from '@theme/colors'
import { homeBanner, homeContainer, homeHeader } from '@theme/media'

import { IconButton } from '@components/commons/buttons'
import styled from 'styled-components'

type Props = {

}
export default function Home(props: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }
  
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value)
  }
  
  const handleLogin = (e: any) => {

  }
  
  const linkToFind = () => {

  }

  const openSignupModal = () => {

  }
  
  return (
    <Container>
      <HomeHeader>
        <HomeHeaderTitle>Work Hub</HomeHeaderTitle>
      </HomeHeader>
      <BodyContainer>
        <HomeBannerBox>
          <HomeBannerTitle>Work Hub</HomeBannerTitle>
          <HomeBannerDescription>Complete your project on Workhub.</HomeBannerDescription>
        </HomeBannerBox>
        <HomeAuthBox>
          <FormInput styles={{ width: '360px', 'margin-top': '15px;' }} value={email} placeholder={'Email'} onChange={handleChangeEmail} />
          <FormInput styles={{ width: '360px', 'margin-top': '15px;' }} type={'password'} value={password} placeholder={'Password'} onChange={handleChangePassword} />
          <FormSubmit styles={{ width: '394px', 'margin-top': '15px;' }} onClick={handleLogin} title={'Login'} />
          <FormLinkText styles={{ 'margin-top': '15px;' }} onClick={linkToFind} text={'Forgot your account?'}/>
          <FormDivider margin={20} size={'394px'} />
          <SignUpBox>
            <FormLinkText onClick={openSignupModal} text={'Sign Up'}/>
            <FormDivider vertical={true} margin={70} size={'20px'} />
            <ExAuthBox>
              <IconButton>
                <GoogleIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <GithubIcon />
              </IconButton>
            </ExAuthBox>
          </SignUpBox>
        </HomeAuthBox>
      </BodyContainer>
    </ Container>
  )
}

const Container = styled.div`
  background-color: #EDEFF2;
  height: 100vh;
`

const HomeHeader = styled.div`
  width: 100%;
  display: none;
  justify-content: center;
  ${homeHeader};
`

const HomeHeaderTitle = styled.span`
  color: ${main};
  margin-top: 50px;
  font-size: 54px;
  font-weight: 700;
`

const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${homeContainer}
`

const HomeBannerBox = styled.div`
  flex-basis: 550px;
  height: 300px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  justify-content: center;
  align-items: flex-start;
  ${homeBanner}
`

const HomeBannerTitle = styled.span`
  color: ${main};
  font-size: 54px;
  font-weight: 700;
`

const HomeBannerDescription = styled.span`
  color: ${black};
  font-size: 32px;
  font-weight: 400;
  margin-top: 10px;
`

const HomeAuthBox = styled.div`
  flex-basis: 430px;
  flex-shrink: 0;
  height: 292px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
  border-radius: 8px;
  background-color: #ffffff;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
`

const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-basis: 42px;
  width: 100%;
`

const ExAuthBox = styled.div`
  display: flex;
  flex-basis: 80px;
  justify-content: space-between;
  align-items: center;
`

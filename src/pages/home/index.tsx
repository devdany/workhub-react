import { CONFIRM_TOKEN, SIGN_IN } from '@query/mutation'
/* eslint-disable react-hooks/exhaustive-deps */
import { FacebookIcon, GithubIcon, GoogleIcon } from '@icons/index'
import { FormDivider, FormInput, FormLinkText, FormSubmit } from '@components/form'
import { Mutation, MutationConfirmTokenArgs, MutationSignInArgs } from '@src/types/graphql'
import React, { useEffect, useState } from 'react'
import { black, main } from '@theme/colors'
import { homeBanner, homeContainer, homeHeader } from '@theme/media'

import CircularProgress from '@material-ui/core/CircularProgress'
import { FEED } from '@routes/path'
import { IconButton } from '@components/commons/buttons'
import ReactModal from 'react-modal'
import SignUpModal from '@src/components/modals/signUp'
import { getToken } from '@utils/localStorageService'
import { setLoginUser } from '@write/user'
import { setToken } from '@utils/localStorageService'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { useModal } from 'react-modal-hook'
import { useMutation } from '@apollo/client'

type Props = {

}
export default function Home(props: Props) {
  const [emailOrUsername, setEmailOrUsername] = useState('')
  const [isNeedAuth, setNeedAuth] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmTokenReq] = useMutation<Mutation, MutationConfirmTokenArgs>(CONFIRM_TOKEN)
  const [signInReq, { loading }] = useMutation<Mutation, MutationSignInArgs>(SIGN_IN)
  const history = useHistory()

  useEffect(() => {
    const authToken = getToken()
    if (!authToken) {
      setNeedAuth(true)
      return
    }

    confirmTokenReq({
      variables: {
        token: authToken
      }
    })
      .then(({ data }) => {
        if (data) {
          const { user, token } = data.confirmToken
          setToken(token)
          setLoginUser(user)
          history.push(FEED)
        }
      })
      .catch((err) => {
        setNeedAuth(true)
      })
  }, [])

  const [showModal, hideModal] = useModal(() => {
    const modalStyle = {
      overlay : {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      content: {
        width: '380px',
        height: '400px',
        margin: 'auto',
        border: 'none'
      }
    }
    return (
      <ReactModal isOpen onRequestClose={hideModal} style={modalStyle}>
        <SignUpModal close={hideModal} />
      </ReactModal>
    )
  })
  const handleChangeEmailOrUsername = (e: any) => {
    setEmailOrUsername(e.target.value)
  }
  
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value)
  }
  
  const handleLogin = (e: any) => {
    if (emailOrUsername === '') {
      toast.error('Email or username can not be empty.')
    }

    if (password === '') {
      toast.error('Password can not be empty.')
    }

    signInReq({
      variables: {
        emailOrUsername: emailOrUsername,
        password: password,
      }
    })
      .then(({ data }) => {
        if (data) {
          const { user, token } = data.signIn
          setToken(token)
          setLoginUser(user)
          history.push(FEED)
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(err.message)
        }
      })
  }
  
  const linkToFind = () => {

  }

  const openSignupModal = () => {
    showModal()
  }
  
  return (
    <Container>
      { isNeedAuth && (
        <>
        <HomeHeader>
          <HomeHeaderTitle>Work Hub</HomeHeaderTitle>
        </HomeHeader>
        <BodyContainer>
          <HomeBannerBox>
            <HomeBannerTitle>Work Hub</HomeBannerTitle>
            <HomeBannerDescription>Complete your project on Workhub.</HomeBannerDescription>
          </HomeBannerBox>
          <HomeAuthBox>
            { loading && (
              <HomeAuthBoxVail>
                <CircularProgress />
              </HomeAuthBoxVail>
            ) }
            <FormInput styles={{ width: '360px', 'margin-top': '15px;' }} value={emailOrUsername} placeholder={'Email or Username'} onChange={handleChangeEmailOrUsername} />
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
        </>
      )}
    </ Container>
  )
}

const Container = styled.div`
  background-color: #EDEFF2;
  height: 100vh;
  width: 100%;
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
  position: relative;
`

const HomeAuthBoxVail = styled.div`
  width: 430px;
  height: 292px;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
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

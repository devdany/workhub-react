import { FormInput, FormSubmit } from '@components/form'
import React, { useEffect, useState } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import { SIGN_UP } from '@query/mutation'
import { SignUpRes } from '@src/types/graphql'
import { black } from '@theme/colors'
import emailValidator from 'email-validator'
import { setLoginUser } from '@write/user'
import { setToken } from '@utils/localStorageService'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { useMutation } from '@apollo/client'

type Props = {
  close: () => void
}
export default function SignUp(props: Props) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [signUpReq, { data, loading, error }] = useMutation<{ signUp: SignUpRes }>(SIGN_UP)

  const handleEmail = (e: any) => {
    setEmail(e.target.value)
  }
  
  const handlePassword = (e: any) => {
    setPassword(e.target.value)
  }
  
  const handleUsername = (e: any) => {
    setUsername(e.target.value)
  }
  
  const handleConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = () => {
    if (loading) {
      toast.error('Processing to sign up...')
      return
    }
    if (email.length === 0) {
      toast.error('Email can not be empty.')
      return
    }

    if(!emailValidator.validate(email)) {
      toast.error('Email format is incorrect.')
      return
    }

    if (username.length === 0) {
      toast.error('Username can not be empty.')
      return
    }

    if (password.length === 0) {
      toast.error('Password can not be empty.')
      return
    }

    if (password !== confirmPassword) {
      toast.error('Check confirm password!')
      return
    }
    
    signUpReq({
      variables: {
        email: email,
        username: username,
        password: password
      }
    })
  }

  useEffect(() => {
    if (data) {
      const { user, token } = data.signUp
      setToken(token)
      setLoginUser(user)
      toast.success('Signup has been completed successfully')
      props.close()
    }
  }, [data, props])

  useEffect(() => {
    if (error) {
      toast.error('Fail to sign up')
    }
  }, [error])
  return (
    <>
    {loading && (
      <Vail>
        <CircularProgress />
      </Vail>
    )}
    <Container>
      <Header>
        <HeaderText>Sign Up</HeaderText>
      </Header>
      <FormInput styles={{ width: '300px', 'margin-top': '20px' }} onChange={handleEmail} value={email} placeholder={'Email'} />
      <FormInput styles={{ width: '300px', 'margin-top': '20px' }} onChange={handleUsername} value={username} placeholder={'Username'} />
      <FormInput type={'password'} styles={{ width: '300px', 'margin-top': '20px' }} onChange={handlePassword} value={password} placeholder={'Password'} />
      <FormInput type={'password'} styles={{ width: '300px', 'margin-top': '20px' }} onChange={handleConfirmPassword} value={confirmPassword} placeholder={'Confirm Password'} />
      <FormSubmit onClick={handleSubmit} styles={{ width: '100px', 'margin-top': '30px' }} title={'Submit'} />
    </Container>
    </>
  )
}

const Container = styled.div`
  width: 380px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Header = styled.div`
  width: 100%;
  flex-basis: 50px; 
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderText = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: ${black};
`

const Vail = styled.div`
  width: 420px;
  height: 440px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`
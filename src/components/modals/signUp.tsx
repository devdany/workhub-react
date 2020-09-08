import { FormInput, FormSubmit } from '@components/form'
import { Mutation, MutationSignUpArgs } from '@src/types/graphql'
import React, { useState } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import { FEED } from '@routes/path'
import { History } from 'history'
import { SIGN_UP } from '@query/mutation'
import { black } from '@theme/colors'
import emailValidator from 'email-validator'
import { setToken } from '@utils/localStorageService'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { useMutation } from '@apollo/client'
import { userVar } from '@cache/dispatch'

type Props = {
  close: () => void
  history: History
}
export default function SignUp(props: Props) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [signUpReq, { loading }] = useMutation<Mutation, MutationSignUpArgs>(SIGN_UP)


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

    const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/

    if (pattern_spc.test(username)) {
      toast.error('Special characters cannot be used in Username.')
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
      .then(({ data }) => {
        if (data) {
          const { user, token } = data.signUp
          setToken(token)
          userVar(user)
          props.history.push(FEED)
          props.close()
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(err.message)
        }
      })
  }

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
import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!, $username: String!) {
    signUp(email: $email, username: $username, password: $password) {
      user {
        id
        email
        username
        profileImg
        createdAt
        isInitalize
      }
      token
    }
  }
`

export const CONFIRM_TOKEN = gql`
    mutation confirmToken($token: String!) {
      confirmToken(token: $token) {
        user {
          id
          email
          username
          profileImg
          createdAt
          isInitalize
        }
        token
      }
    }
`

export const SIGN_IN = gql`
  mutation signIn($emailOrUsername: String!, $password: String!) {
    signIn(emailOrUsername: $emailOrUsername, password: $password) {
      user {
        id
        email
        username
        profileImg
        createdAt
        isInitalize
      }
      token
    }
  }
`
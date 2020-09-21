import { gql } from '@apollo/client'
import { user } from './responseData'

export const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!, $username: String!) {
    signUp(email: $email, username: $username, password: $password) {
      user {
        ${user}
      }
      token
    }
  }
`

export const CONFIRM_TOKEN = gql`
    mutation confirmToken($token: String!) {
      confirmToken(token: $token) {
        user {
          ${user}
        }
        token
      }
    }
`

export const SIGN_IN = gql`
  mutation signIn($emailOrUsername: String!, $password: String!) {
    signIn(emailOrUsername: $emailOrUsername, password: $password) {
      user {
        ${user}
      }
      token
    }
  }
`

export const EDIT_PROFILE = gql`
  mutation editProfile($userId: Float!, $profileImg: String, $lastName: String, $firstName: String, $headLine: String) {
    editProfile(userId: $userId, profileImg: $profileImg, lastName: $lastName, firstName: $firstName, headLine: $headLine) {
      ${user}
    }
  }
`
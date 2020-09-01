import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!, $username: String!) {
    signUp(email: $email, username: $username, password: $password) {
      user {
        id
        email
        username
        createdAt
      }
      token
    }
  }
`
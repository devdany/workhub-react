import { gql } from '@apollo/client'
export const LOGIN_USER = gql`
  query loginUser {
    loginUser @client
  }
`
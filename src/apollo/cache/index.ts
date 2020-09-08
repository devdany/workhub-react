import { InMemoryCache } from '@apollo/client'
import { loginUser } from './model'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        loginUser
      }
    }
  }
})
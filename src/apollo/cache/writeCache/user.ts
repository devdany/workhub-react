import { LOGIN_USER } from '@src/apollo/cache/query/user'
import { User } from '@src/types/graphql'
import cache from '@src/apollo/cache'

export const setLoginUser = (user: User) => {
  cache.writeQuery({
    query: LOGIN_USER,
    data: user
  })
}
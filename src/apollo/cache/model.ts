import { User } from '@src/types/graphql'
import { userVar } from './dispatch'

export type SetLoginUser = {
  loginUser: User
}

export const loginUser = {
  read() {
    return userVar()
  }
}
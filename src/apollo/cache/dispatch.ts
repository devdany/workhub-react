import { User } from '@src/types/graphql'
import { makeVar } from '@apollo/client'

export const userVar = makeVar<User | null>(null)
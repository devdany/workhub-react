/* eslint-disable react-hooks/exhaustive-deps */
import { Mutation, MutationConfirmTokenArgs } from '@src/types/graphql'
import React, { useEffect } from 'react'
import { getToken, setToken } from '@utils/localStorageService'

import { CONFIRM_TOKEN } from '@query/mutation'
import Navigation from '@components/navigation'
import ReactModal from 'react-modal'
import SetUserInfo from '@components/modals/setUserInfo'
import styled from 'styled-components'
import { useModal } from 'react-modal-hook'
import { useMutation } from '@apollo/client'
import { userVar } from '@cache/dispatch'

type Props = {

}
export default function Feed(props: Props) {
  const [confirmTokenReq] = useMutation<Mutation, MutationConfirmTokenArgs>(CONFIRM_TOKEN)
  const [showModal, hideModal] = useModal(() => {
    const modalStyle = {
      overlay : {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      content: {
        width: '800px',
        height: '90vh',
        margin: 'auto',
        border: 'none',
        padding: '0px'
      }
    }
    return (
      <ReactModal isOpen onRequestClose={hideModal} style={modalStyle}>
        <SetUserInfo close={hideModal} />
      </ReactModal>
    )
  })

  useEffect(() => {
    const authToken = getToken()
    
    if (!authToken) {
      return
    }

    confirmTokenReq({
      variables: {
        token: authToken
      }
    })
      .then(({ data }) => {
        if (data) {
          const { user, token } = data.confirmToken
          setToken(token)
          userVar(user)
          if (!user.isInitalize) {
            showModal()
          }
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <Container>
      <Navigation />
    </Container>
  )
}

const Container = styled.div`

`
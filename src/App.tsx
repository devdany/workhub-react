import 'react-toastify/dist/ReactToastify.css'

import { ApolloProvider } from '@apollo/client'
import { ModalProvider } from 'react-modal-hook'
import React from 'react'
import Root from '@routes/root'
import { ToastContainer } from 'react-toastify'
import client from '@src/apollo/clilent'

function App() {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Root />
        <ToastContainer 
          position={'top-right'}
          autoClose={5000}
          hideProgressBar={true}
          closeOnClick
        />
      </ModalProvider>
    </ApolloProvider>
  )
}

export default App

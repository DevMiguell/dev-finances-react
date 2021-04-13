import { useState } from 'react'

import Header from '../components/Header'
import { ContainerGlobal } from './styles'
import Summary from '../components/Summary'
import BtnNewTransition from '../components/BtnNewTransaction'
import TransactionTable from '../components/TransactionTable'
import NewTransactionModal from '../components/NewTransactionModal'

function Home() {
  const [modalNewTransition, setModalNewTransition] = useState(false)

  const toggleModal = () => setModalNewTransition(!modalNewTransition)

  return (
    <>
      <Header />

      <ContainerGlobal>
        <Summary />
        <BtnNewTransition openModal={toggleModal} />
        <TransactionTable />
      </ContainerGlobal>

      {modalNewTransition && <NewTransactionModal closeModal={toggleModal} />}
    </>
  )
}

export default Home

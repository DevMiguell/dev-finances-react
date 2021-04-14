import { useState } from 'react'

import Header from '../components/Header'
import { ContainerGlobal } from './styles'
import Summary from '../components/Summary'
import BtnNewTransaction from '../components/BtnNewTransaction'
import TransactionTable from '../components/TransactionTable'
import NewTransactionModal from '../components/NewTransactionModal'

function Home() {
  const [modalNewTransaction, setModalNewTransaction] = useState(false)

  const [arrayTransactions, setArrayTransactions] = useState([])

  const toggleModal = () => {
    setModalNewTransaction(!modalNewTransaction)
  }

  const addTransaction = objTransaction => {
    setArrayTransactions([...arrayTransactions, objTransaction])
  }

  const removeTransaction = id => {
    const removedATransactions = arrayTransactions.filter(transaction => transaction.id !== id)
    setArrayTransactions(removedATransactions)
  }

  const totalSoma = [...arrayTransactions].reduce(function (acumulador, objetoAtual) {
    return acumulador + objetoAtual.amount
  }, 0)

  return (
    <>
      <Header />

      <ContainerGlobal>
        <Summary totalSoma={totalSoma} />
        <BtnNewTransaction openModal={toggleModal} />
        <TransactionTable arrayTransactions={arrayTransactions} removeTransaction={removeTransaction} />
      </ContainerGlobal>

      {modalNewTransaction && <NewTransactionModal closeModal={toggleModal} addTransaction={addTransaction} />}
    </>
  )
}

export default Home

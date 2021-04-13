import { useState } from 'react'
import { formatAmount, formatDate } from '../../../util'

import { Modal, ModalOverlay } from './styles'

function NewTransactionModal({ closeModal, addTransaction }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const handleDescription = (event) => setDescription(event.target.value)

  const handleAmount = (event) => setAmount(event.target.value)

  const handleDate = (event) => setDate(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    const amountFormated = formatAmount(amount)
    const dateFormated = formatDate(date)

    const type = (amount > 0) ? "income" : "expense"

    const objTransaction = {
      id: Date.now(),
      description,
      amount: amountFormated,
      date: dateFormated,
      type,
    }

    addTransaction(objTransaction)

    closeModal()
  }

  return (
    <ModalOverlay>
      <Modal>
        <div className="form">
          <h2>Nova Transação</h2>

          <form action="" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="sr-only" for="description">Descrição</label>
              <input type="text" value={description} onChange={handleDescription} id="description" name="description" placeholder="Descrição" />
            </div>

            <div className="input-group">
              <label className="sr-only" for="description">Valor</label>
              <input type="number" value={amount} onChange={handleAmount} step="0.01" id="amount" name="amount" placeholder="0,00" />

              <small className="help">
                Use o sinal - (Negativo) para despesas e, (Vírgula) para casas decimais.
              </small>
            </div>

            <div className="input-group">
              <label>Descrição</label>
              <input type="date" value={date} onChange={handleDate} id="date" name="date" />
            </div>

            <div className="input-group actions">
              <button type="button" className="cancel" onClick={closeModal}>Cancelar</button>
              <button type="submit"> Salvar</button>
            </div>
          </form>
        </div>
      </Modal>
    </ModalOverlay>
  )
}

export default NewTransactionModal

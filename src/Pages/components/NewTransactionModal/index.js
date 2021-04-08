import { Modal, ModalOverlay } from "./styles"



function NewTransactionModal() {
  return (

    <ModalOverlay>
      <Modal>
        <div className="form">
          <h2>Nova Transação</h2>

          <form action="" onsubmit="Form.submit(event)">
            <div className="input-group">
              <label className="sr-only" for="description">Descrição</label>
              <input type="text" id="description" name="description" placeholder="Descrição" />
            </div>

            <div className="input-group">
              <label className="sr-only" for="description">Valor</label>
              <input type="number" step="0.01" id="amount" name="amount" placeholder="0,00" />

              <small className="help">
                Use o sinal - (Negativo) para despesas e, (Vírgula) para casas decimais.</small>
            </div>

            <div className="input-group">
              <label>Descrição</label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="input-group actions">
              <button className="cancel">Cancelar</button>
              <button>Salvar</button>
            </div>
          </form>
        </div>
      </Modal>
    </ModalOverlay>
  )
}

export default NewTransactionModal

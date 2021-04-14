import { Container } from './styles'

import income from '../../../assets/income.svg'
import expense from '../../../assets/expense.svg'
import total from '../../../assets/total.svg'
import { formatCurrency } from '../../../util'

function Summary(totalSoma) {

  let formatTotal = Object.values(totalSoma)
  let formatAmoeda = formatCurrency(formatTotal)

  return (
    <Container>
      <div>
        <h3>
          <span>Entradas</span>
          <img src={income} alt="Imagem de Entradas" />
        </h3>

        <p>R$ 0,00</p>
      </div>

      <div>
        <h3>
          <span>Saidas</span>
          <img src={expense} alt="Imagem Saida" />
        </h3>

        <p>R$ 0,00</p>
      </div>

      <div className="total">
        <h3>
          <span>Total</span>
          <img src={total} alt="Imagem Total" />
        </h3>

        <p>{formatAmoeda}</p>
      </div>
    </Container>
  )
}

export default Summary

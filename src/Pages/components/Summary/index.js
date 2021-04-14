import { formatCurrency } from '../../../util'

import { Container } from './styles'

import incomeSvg from '../../../assets/income.svg'
import expenseSvg from '../../../assets/expense.svg'
import totalSvg from '../../../assets/total.svg'

function Summary({ arrayTransactions }) {
  let income = 0
  let expense = 0

  arrayTransactions.forEach(transaction => {
    if (transaction.amount > 0) {
      income += transaction.amount
    } else {
      expense += transaction.amount
    }
  })

  const incomeFormatted = formatCurrency(income)
  const expenseFormatted = formatCurrency(expense)
  const totalFormatted = formatCurrency(income + expense)

  return (
    <Container>
      <div>
        <h3>
          <span>Entradas</span>
          <img src={incomeSvg} alt="Imagem de Entradas" />
        </h3>

        <p>{incomeFormatted}</p>
      </div>

      <div>
        <h3>
          <span>Saidas</span>
          <img src={expenseSvg} alt="Imagem Saida" />
        </h3>

        <p>{expenseFormatted}</p>
      </div>

      <div className="total">
        <h3>
          <span>Total</span>
          <img src={totalSvg} alt="Imagem Total" />
        </h3>

        <p>{totalFormatted}</p>
      </div>
    </Container>
  )
}

export default Summary

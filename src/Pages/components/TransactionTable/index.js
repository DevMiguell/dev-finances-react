import { formatCurrency } from '../../../util'

import { Table } from './styles'
import minus from '../../../assets/minus.svg'

function TransactionTable({ arrayTransactions }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {arrayTransactions.map(transaction => (
          <tr key={transaction.id}>
            <td className="description">{transaction.description}</td>
            <td className={transaction.type}>{formatCurrency(transaction.amount)}</td>
            <td className="date">{transaction.date}</td>
            <td>
              <img src={minus} alt="Remover transação" />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TransactionTable

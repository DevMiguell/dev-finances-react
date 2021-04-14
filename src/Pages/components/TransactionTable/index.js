import { formatCurrency } from '../../../util'

import { Table } from './styles'
import trash from '../../../assets/trash.svg'

function TransactionTable({ arrayTransactions, removeTransaction }) {
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
              <button onClick={() => removeTransaction(transaction.id)}>
                <img src={trash} alt="Remover transação" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TransactionTable

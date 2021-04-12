import { Table } from './styles'
import minus from '../../../assets/minus.svg'

function TransactionTable() {
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
        <tr>
          <td className="description">Compra</td>
          <td className="income">R$ 18,00</td>
          <td className="date">12/04/2021</td>
          <td>
            <img src={minus} alt="Remover transação" />
          </td>
        </tr>

        <tr>
          <td className="description">Compra</td>
          <td className="income">R$ 18,00</td>
          <td className="date">12/04/2021</td>
          <td>
            <img src={minus} alt="Remover transação" />
          </td>
        </tr>

        <tr>
          <td className="description">Compra</td>
          <td className="expense">- R$ 18,00</td>
          <td className="date">12/04/2021</td>
          <td>
            <img src={minus} alt="Remover transação" />
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TransactionTable

import Header from '../components/Header'
import { ContainerGlobal } from './styles'
import Summary from '../components/Summary'
import BtnNewTransition from '../components/BtnNewTransaction'
import TransactionTable from '../components/TransactionTable'

function Home() {
  return (
    <>
      <Header />

      <ContainerGlobal>
        <Summary />
        <BtnNewTransition />
        <TransactionTable />
      </ContainerGlobal>
    </>
  )
}

export default Home

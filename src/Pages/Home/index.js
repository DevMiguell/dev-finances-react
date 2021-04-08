import Header from '../components/Header'
import { ContainerGlobal } from './styles'
import Summary from '../components/Summary'
import BtnNewTransition from '../components/BtnNewTransaction'

function Home() {
  return (
    <>
      <Header />

      <ContainerGlobal>
        <Summary />
        <BtnNewTransition />
      </ContainerGlobal>
    </>
  )
}

export default Home

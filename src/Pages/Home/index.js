import Header from '../components/Header'
import { ContainerGlobal } from './styles'
import Summary from '../components/Summary'

function Home() {
  return (
    <>
      <Header />

      <ContainerGlobal>
        <Summary />
      </ContainerGlobal>
    </>
  )
}

export default Home

import { HeaderContainer } from './styles'
import logo from '../../../assets/logo.svg'

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Dev Finance Logo" />
    </HeaderContainer>
  )
}

export default Header

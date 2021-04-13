import { Button } from './styles'

function BtnNewTransition({ openModal }) {
  return (
    <Button onClick={openModal}>+ Nova Transação</Button>
  )
}

export default BtnNewTransition

import styled from 'styled-components'

export const Button = styled.button`
  margin-bottom: 0.8rem;
  color: var(--green);
  cursor: pointer;
  outline: none;
  border: none;
  transition: color 0.2s;

  &:hover {
    color: var(--light-green);
  }
`

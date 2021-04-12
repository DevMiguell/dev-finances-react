import styled from 'styled-components'

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    opacity: 1;
    visibility: visible;
  }
`

export const Modal = styled.div`
  background: #f0f2f5;
  padding: 2.4rem;

  input {
    border: none;
    border-radius: 0.2rem;
    padding: 0.8rem;
    width: 100%;
  }

  .input-group {
    margin-top: 0.8rem;

    small {
      opacity: 0.4;
    }
  }

  .input-group.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;

    button {
      width: 48%;
    }
  }

  button {
    height: 50px;
    border: none;
    color: white;
    background-color: var(--green);
    padding: 0;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: var(--light-green);
    }
  }

  .cancel {
    height: 50px;
    background: none;
    color: var(--red);
    border: 2px var(--red) solid;
    border-radius: 0.25rem;
    opacity: 0.6;
    transition: 0.3s;

    &:hover {
      opacity: 1;
      background: none;
    }
  }
`

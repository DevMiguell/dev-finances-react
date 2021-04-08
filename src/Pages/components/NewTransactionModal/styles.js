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
  /* opacity: 0;
  visibility: hidden; */

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
}

.input-group small {
    opacity: 0.4;
}

.input-group.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.input-group.actions .button, .input-group.actions button {
    width: 48%;
}

button {
    width: 100%;
    height: 50px;
    border: none;
    color: white;
    background-color: var(--green);
    padding: 0;
    border-radius: 0.25rem;
    cursor: pointer;
}

button:hover {
    background-color: var(--light-green);
    transition: 0.3ms;
}

.cancel {
    color: var(--red);
    border: 2px var(--red) solid;
    border-radius: 0.25rem;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    background: none;
}

.cancel:hover {
    opacity: 1;
    transition: 0.3ms;
    background: none;
}

`

import styled from 'styled-components'

export const Container = styled.section`
  margin-top: -7rem;

  div {
    background-color: white;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    margin-bottom: 2rem;
    color: var(--dark-blue);

    h3 {
      font-weight: normal;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    p {
      font-size: 2rem;
      line-height: 3rem;
      margin-top: 1rem;
    }
  }

  .total {
    background-color: var(--green);
    color: white;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`

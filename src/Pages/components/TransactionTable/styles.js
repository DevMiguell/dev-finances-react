import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  color: #969cb3;

  thead tr td:first-child,  tbody tr td:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  thead tr td:last-child,  tbody tr td:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }

  thead th {
    background-color: white;
    opacity: 0.6;
    font-weight: normal;
    padding: 1rem 2rem;
    text-align: left;
  }

  tbody tr {
    opacity: 0.7;
  }

  tbody tr:hover {
    opacity: 1;
  }

  tbody td {
    background: white;
    padding: 1rem 2rem;
  }

  td.description {
    color: var(--dark-blue);
  }

  td.income {
    color: #12a454;
  }

  td.expense {
    color: #e92929;
  }

`

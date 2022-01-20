import styled from 'styled-components';

import TableElement from './TableElement';

const Table = () => {
  return (
  <TableWrapper>
    <TableElement header={true}/>
    <TableElement/>
    <TableElement/>
    <TableElement/>
    <TableElement/>
    <TableElement/>
    <TableElement/>
    <TableElement/>
    <TableElement/>
    <TableElement/>
  </TableWrapper>
  );
};

const TableWrapper = styled.ul`
    border: 2px solid var(--border);
    border-radius:3px;
`

export default Table;

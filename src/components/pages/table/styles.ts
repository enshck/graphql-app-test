import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 2px solid #ccc;
`;

export const TableHeader = styled(TableRow)`
  background: #fff;
  font-weight: 500;
`;

export const GridElement = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 18px;
`;

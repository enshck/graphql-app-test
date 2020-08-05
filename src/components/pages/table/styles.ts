import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 2px solid #ccc;

  @media (max-width: 800px) {
    grid-template-columns: 1fr repeat(5, 2fr);
    min-width: 720px;
  }
`;

export const GridElement = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 18px;
  box-sizing: border-box;
  text-align: center;
  @media (max-width: 950px) {
    font-size: 14px;
  }
  @media (max-width: 800px) {
    padding: 10px 0;
  }
`;

export const TableHeader = styled(TableRow)`
  background: #fff;
  font-weight: 500;
`;

export const ImageContainer = styled.div`
  margin-top: 10px;
  fill: #000;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }

  ${({ isChanged }: { isChanged?: boolean }) =>
    isChanged &&
    css`
      fill: #f88030;
    `}

  @media (max-width: 800px) {
    margin-top: 5px;
  }
`;

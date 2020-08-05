import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f6f8fa;
  padding: 10px;
  box-sizing: border-box;
`;

export const NutritionListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  h2 {
    font-size: 30px;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 22px;
    }
  }
  @media (max-width: 400px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const SubHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  background: #dec1c1;
  opacity: 0.7;
  margin-top: 10px;

  p {
    font-size: 18px;
    color: #ad2269;
  }

  @media (max-width: 600px) {
    P {
      font-size: 16px;
    }
  }
  @media (max-width: 400px) {
    P {
      font-size: 14px;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
`;

interface IButtonProps {
  isDeleteButton?: boolean;
  isBlocked?: boolean;
}

export const Button = styled.div<IButtonProps>`
  background: #fff;
  color: #46b171;
  padding: 5px;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }

  ${({ isDeleteButton }) =>
    isDeleteButton &&
    css`
      color: red;
    `}
  ${({ isBlocked }) =>
    isBlocked &&
    css`
      opacity: 0.3;
    `}
`;

export const ResetDataButton = styled.div`
  padding: 5px;
  background: #46b171;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

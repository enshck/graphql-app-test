import styled from "styled-components";

export const CheckboxSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  box-sizing: border-box;
  width: 20px;
  background-color: #eee;
  border: 1px solid ${(props) => props.theme.secondaryTextColor};
  border-radius: 3px;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const CheckboxInput = styled.input``;

export const CheckBoxMainContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 14px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  :hover {
    ${CheckboxSpan} {
      background-color: #f88030;
      border: none;
      :after {
        display: block;
        left: 6px;
        top: 1px;
      }
    }
  }

  ${CheckboxInput} {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ ${CheckboxSpan} {
      background-color: #f88030;
      border: none;
    }
    &:checked ~ ${CheckboxSpan}:after {
      display: block;
      left: 6px;
      top: 1px;
    }
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  ${CheckboxSpan}:after {
    left: 5px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

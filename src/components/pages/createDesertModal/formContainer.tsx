import React, { BaseSyntheticEvent } from "react";

import {
  ContentContainer,
  WarningContainer,
  Form,
  StyledInput,
  StyledLabel,
  InputContainer,
  SubmitButton,
  ModalHeader,
} from "./styles";
import { INewDesertData } from "./";
import closeIcon from "assets/close.svg";

interface IProps {
  newDesertData: INewDesertData;
  inputDesertDataHandler: (e: BaseSyntheticEvent) => void;
  setOpenDesertModal: (newState: boolean) => void;
  submitDesertHandler: () => void;
  isValidForm: boolean;
}

const FormContainer = ({
  newDesertData,
  inputDesertDataHandler,
  setOpenDesertModal,
  submitDesertHandler,
  isValidForm,
}: IProps) => {
  return (
    <ContentContainer>
      <ModalHeader>
        <img
          src={closeIcon}
          alt={"close"}
          onClick={() => setOpenDesertModal(false)}
        />
      </ModalHeader>
      <WarningContainer>
        Please fill all details before you submit
      </WarningContainer>
      <Form>
        <InputContainer>
          <StyledLabel>Dessert Name*</StyledLabel>
          <StyledInput
            onInput={inputDesertDataHandler}
            name={"name"}
            value={newDesertData.name}
            type={"text"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Calories*</StyledLabel>
          <StyledInput
            onInput={inputDesertDataHandler}
            name={"calories"}
            value={newDesertData.calories}
            type={"number"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Fat*</StyledLabel>
          <StyledInput
            onInput={inputDesertDataHandler}
            name={"fat"}
            value={newDesertData.fat}
            type={"number"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Carbs*</StyledLabel>
          <StyledInput
            onInput={inputDesertDataHandler}
            name={"carbs"}
            value={newDesertData.carbs}
            type={"number"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Protein*</StyledLabel>
          <StyledInput
            onInput={inputDesertDataHandler}
            name={"protein"}
            value={newDesertData.protein}
            type={"number"}
          />
        </InputContainer>
        <SubmitButton onClick={submitDesertHandler} isBlocked={!isValidForm}>
          Submit
        </SubmitButton>
      </Form>
    </ContentContainer>
  );
};

export default FormContainer;

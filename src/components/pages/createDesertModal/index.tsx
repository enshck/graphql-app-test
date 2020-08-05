import React, { useState, BaseSyntheticEvent, useMemo } from "react";
import { useMutation } from "@apollo/client";

import { MainContainer } from "./styles";
import FormContainer from "./formContainer";
import { initialDesertData } from "common";
import { ADD_DESERTS } from "apollo/requests";

interface IProps {
  isOpenDeserModal: boolean;
  setOpenDesertModal: (newState: boolean) => void;
  refetch: () => void;
}

export interface INewDesertData {
  name: string;
  calories: string;
  fat: string;
  carbs: string;
  protein: string;
}

const CreateDesertModal = ({
  isOpenDeserModal,
  setOpenDesertModal,
  refetch,
}: IProps) => {
  const [newDesertData, setDesertData] = useState<INewDesertData>(
    initialDesertData
  );
  const [addDeserts] = useMutation(ADD_DESERTS);
  const isValidForm = useMemo(() => {
    const { calories, protein, carbs, fat, name } = newDesertData;

    return Boolean(
      calories.length > 0 &&
        calories.length <= 9 &&
        protein.length > 0 &&
        protein.length <= 9 &&
        carbs.length > 0 &&
        carbs.length <= 9 &&
        fat.length > 0 &&
        fat.length <= 9 &&
        name.length > 0 &&
        name.length < 20
    );
  }, [newDesertData]);

  const inputDesertDataHandler = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target;

    setDesertData({
      ...newDesertData,
      [name]: value,
    });
  };

  const submitDesertHandler = () => {
    const { calories, fat, carbs, name, protein } = newDesertData;

    if (isValidForm) {
      addDeserts({
        variables: {
          calories: +calories,
          fat: +fat,
          carbs: +carbs,
          name,
          protein: +protein,
        },
      });
      setDesertData(initialDesertData);
      setOpenDesertModal(false);
      refetch();
    }
  };

  return (
    <MainContainer isOpen={isOpenDeserModal}>
      <FormContainer
        newDesertData={newDesertData}
        inputDesertDataHandler={inputDesertDataHandler}
        setOpenDesertModal={setOpenDesertModal}
        submitDesertHandler={submitDesertHandler}
        isValidForm={isValidForm}
      />
    </MainContainer>
  );
};

export default CreateDesertModal;

import React, { BaseSyntheticEvent } from "react";

import { MainContainer, GridElement, TableHeader, TableRow } from "./styles";
import Checkbox from "components/inputs/checkbox";

interface IDesertsData {
  id: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

interface IProps {
  changedNutritions: string[];
  desertsData: IDesertsData[];
  setChangedNutritions: (newValue: string[]) => void;
}

const Table = ({
  changedNutritions,
  desertsData,
  setChangedNutritions,
}: IProps) => {
  const isAllDesertsChanged = desertsData.length === changedNutritions.length;

  const changeAllElementsHandler = () => {
    if (isAllDesertsChanged) {
      setChangedNutritions([]);
    } else {
      setChangedNutritions(desertsData.map((elem) => elem.id));
    }
  };

  const changedElementHandler = (id: string) => {
    const changedNutritionsClone = [...changedNutritions];

    if (changedNutritionsClone.includes(id)) {
      const changedNutritionKey = changedNutritionsClone.findIndex(
        (elem) => elem === id
      );

      if (changedNutritionKey !== -1) {
        changedNutritionsClone.splice(changedNutritionKey, 1);
      }
    } else {
      changedNutritionsClone.push(id);
    }

    setChangedNutritions(changedNutritionsClone);
  };

  return (
    <MainContainer>
      <TableHeader>
        <GridElement>
          <Checkbox
            checked={isAllDesertsChanged}
            onChange={changeAllElementsHandler}
            name={"all-change"}
          />
        </GridElement>
        <GridElement>Desert(100g serving)</GridElement>
        <GridElement>Calories</GridElement>
        <GridElement>Fat (g)</GridElement>
        <GridElement>Carbs (g)</GridElement>
        <GridElement>Protein (g)</GridElement>
      </TableHeader>
      {desertsData.map((elem) => {
        const { calories, carbs, fat, id, name, protein } = elem;
        return (
          <TableRow>
            <GridElement>
              <Checkbox
                checked={changedNutritions.includes(id)}
                onChange={(e: BaseSyntheticEvent) => changedElementHandler(id)}
                name={`${id}-checkbox`}
              />
            </GridElement>
            <GridElement>{name}</GridElement>
            <GridElement>{calories}</GridElement>
            <GridElement>{fat}</GridElement>
            <GridElement>{carbs}</GridElement>
            <GridElement>{protein}</GridElement>
          </TableRow>
        );
      })}
    </MainContainer>
  );
};

export default Table;

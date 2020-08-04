import React from "react";

import TableList from "./table";
import { FilterKey } from "apollo/requests";

export interface IDesertsData {
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
  setChangedSortType: (sortType: FilterKey | null) => void;
  changedSortType: FilterKey | null;
}

const Table = ({
  changedNutritions,
  desertsData,
  setChangedNutritions,
  setChangedSortType,
  changedSortType,
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
    <TableList
      changedNutritions={changedNutritions}
      desertsData={desertsData}
      changeAllElementsHandler={changeAllElementsHandler}
      changedElementHandler={changedElementHandler}
      isAllDesertsChanged={isAllDesertsChanged}
      setChangedSortType={setChangedSortType}
      changedSortType={changedSortType}
    />
  );
};

export default Table;

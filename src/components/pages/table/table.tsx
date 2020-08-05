import React, { BaseSyntheticEvent } from "react";

import {
  MainContainer,
  GridElement,
  TableHeader,
  TableRow,
  ImageContainer,
} from "./styles";
import { IDesertsData } from "./";
import Checkbox from "components/inputs/checkbox";
import { FilterKey } from "apollo/requests";
import { ReactComponent as Sort } from "assets/sort.svg";
import { tableHeaderElements } from "common";

interface IProps {
  isAllDesertsChanged: boolean;
  changeAllElementsHandler: () => void;
  desertsData: IDesertsData[];
  changedNutritions: string[];
  changedElementHandler: (id: string) => void;
  setChangedSortType: (sortType: FilterKey | null) => void;
  changedSortType: FilterKey | null;
}

const Table = ({
  isAllDesertsChanged,
  changeAllElementsHandler,
  desertsData,
  changedNutritions,
  changedElementHandler,
  setChangedSortType,
  changedSortType,
}: IProps) => {
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
        {tableHeaderElements.map((elem, key) => {
          const { name, sortType } = elem;

          return (
            <GridElement onClick={() => setChangedSortType(sortType)} key={key}>
              {name}
              <ImageContainer isChanged={changedSortType === sortType}>
                <Sort />
              </ImageContainer>
            </GridElement>
          );
        })}
      </TableHeader>
      {desertsData.map((elem, key) => {
        const { calories, carbs, fat, id, name, protein } = elem;
        return (
          <TableRow key={id}>
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

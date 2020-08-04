import { FilterKey } from "apollo/requests";

interface ITableHeaderElement {
  name: string;
  sortType: FilterKey | null;
}

export const tableHeaderElements: ITableHeaderElement[] = [
  {
    name: "Desert(100g serving)",
    sortType: "name",
  },
  {
    name: "Calories",
    sortType: "calories",
  },
  {
    name: "Fat (g)",
    sortType: "fat",
  },
  {
    name: "Carbs (g)",
    sortType: "carbs",
  },
  {
    name: "Protein (g)",
    sortType: "protein",
  },
];

export const initialDesertData = {
  name: "",
  calories: "",
  fat: "",
  carbs: "",
  protein: "",
};

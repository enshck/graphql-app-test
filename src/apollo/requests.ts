import { gql } from "@apollo/client";

export type filterKey = "name" | "calories" | "fat" | "carbs" | "protein";

export const GET_SORTED_DESERTS = (key?: filterKey) => {
  if (key) {
    return gql`
      query {
        getSortedDeserts(key: key) {
          id
          name
          protein
          calories
          fat
          carbs
        }
      }
    `;
  }
  return gql`
    query {
      getSortedDeserts {
        id
        name
        protein
        calories
        fat
        carbs
      }
    }
  `;
};

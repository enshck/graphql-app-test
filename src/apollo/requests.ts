import { gql } from "@apollo/client";

export type FilterKey = "name" | "calories" | "fat" | "carbs" | "protein";

export const GET_SORTED_DESERTS = gql`
  query getDeserts($key: String) {
    getSortedDeserts(key: $key) {
      id
      name
      protein
      calories
      fat
      carbs
    }
  }
`;

export const DELETE_DESERTS = gql`
  mutation deleteDeserts($idOfDeserts: [ID]!) {
    deleteDeserts(idOfDeserts: $idOfDeserts) {
      id
      name
      protein
      calories
      fat
      carbs
    }
  }
`;

export const RESET_DESERTS = gql`
  mutation {
    resetDeserts {
      id
      name
      protein
      calories
      fat
      carbs
    }
  }
`;

export const ADD_DESERTS = gql`
  mutation addDeserts(
    $name: String!
    $calories: Int!
    $fat: Int!
    $carbs: Int!
    $protein: Int!
  ) {
    addDeserts(
      name: $name
      calories: $calories
      fat: $fat
      carbs: $carbs
      protein: $protein
    ) {
      id
      name
      protein
      calories
      fat
      carbs
    }
  }
`;

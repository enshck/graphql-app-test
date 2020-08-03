import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import {
  MainContainer,
  NutritionListHeader,
  ResetDataButton,
  Controls,
  SubHeader,
  Button,
} from "./styles";
import { GET_SORTED_DESERTS } from "apollo/requests";
import Loading from "components/Loading";
import Table from "./table";

const MainPage = () => {
  const { data: desertsData, loading, error } = useQuery(GET_SORTED_DESERTS(), {
    pollInterval: 500,
  });
  const [changedNutritions, setChangedNutritions] = useState<string[]>([]);
  // const data = desertsData.getSortedDeserts;

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <MainContainer>
      <NutritionListHeader>
        <h2>Nutrition List</h2>
        <ResetDataButton>Reset Data</ResetDataButton>
      </NutritionListHeader>
      <SubHeader>
        <p>{changedNutritions.length} selected</p>
        <Controls>
          <Button style={{ marginRight: "10px" }}>Add New</Button>
          <Button isBlocked={changedNutritions.length < 1}>Delete</Button>
        </Controls>
      </SubHeader>
      {desertsData && desertsData.getSortedDeserts && (
        <Table
          changedNutritions={changedNutritions}
          desertsData={desertsData.getSortedDeserts}
          setChangedNutritions={setChangedNutritions}
        />
      )}
    </MainContainer>
  );
};

export default MainPage;

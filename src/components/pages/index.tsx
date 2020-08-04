import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import {
  MainContainer,
  NutritionListHeader,
  ResetDataButton,
  Controls,
  SubHeader,
  Button,
} from "./styles";
import {
  GET_SORTED_DESERTS,
  FilterKey,
  DELETE_DESERTS,
  RESET_DESERTS,
} from "apollo/requests";
import Loading from "components/Loading";
import Table from "./table";
import CreateDesertModal from "./createDesertModal";

const MainPage = () => {
  const [isOpenDeserModal, setOpenDesertModal] = useState(false);
  const [changedSortType, setChangedSortType] = useState<FilterKey | null>(
    null
  );
  const [changedNutritions, setChangedNutritions] = useState<string[]>([]);
  const { data: desertsData, loading, refetch } = useQuery(GET_SORTED_DESERTS, {
    variables: {
      key: changedSortType ? changedSortType : null,
    },
  });
  const [deleteDeserts] = useMutation(DELETE_DESERTS);
  const [resetDeserts] = useMutation(RESET_DESERTS);

  const deleteDesertsHandler = () => {
    if (changedNutritions.length > 0) {
      deleteDeserts({ variables: { idOfDeserts: changedNutritions } });
      setChangedNutritions([]);
      refetch();
    }
  };

  const resetDesertsHandler = () => {
    resetDeserts();
    setChangedNutritions([]);
    refetch();
  };

  if (loading) return <Loading />;

  return (
    <MainContainer>
      <CreateDesertModal
        isOpenDeserModal={isOpenDeserModal}
        setOpenDesertModal={setOpenDesertModal}
        refetch={refetch}
      />
      <NutritionListHeader>
        <h2>Nutrition List</h2>
        <ResetDataButton onClick={() => resetDesertsHandler()}>
          Reset Data
        </ResetDataButton>
      </NutritionListHeader>
      <SubHeader>
        <p>{changedNutritions.length} selected</p>
        <Controls>
          <Button
            style={{ marginRight: "10px" }}
            onClick={() => setOpenDesertModal(true)}
          >
            Add New
          </Button>
          <Button
            isBlocked={changedNutritions.length < 1}
            onClick={() => deleteDesertsHandler()}
          >
            Delete
          </Button>
        </Controls>
      </SubHeader>
      {desertsData && desertsData.getSortedDeserts && (
        <Table
          changedNutritions={changedNutritions}
          desertsData={desertsData.getSortedDeserts}
          setChangedNutritions={setChangedNutritions}
          setChangedSortType={setChangedSortType}
          changedSortType={changedSortType}
        />
      )}
    </MainContainer>
  );
};

export default MainPage;

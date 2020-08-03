import React from "react";
import { ApolloProvider } from "@apollo/client";
import styled from "styled-components";

import MainPage from "./components/pages";
import { client } from "apollo";
import GlobalStyles from "./GlobalStyles";

const MainContainer = styled.div`
  background: #fff;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <MainContainer>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <MainPage />
      </ApolloProvider>
    </MainContainer>
  );
};

export default App;

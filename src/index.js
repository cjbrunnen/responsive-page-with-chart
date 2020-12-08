import React from "react";
import ReactDOM from "react-dom";

import ButtonAppBar from "./Appbar";
import MainPage from "./MainPage";
import Footer from "./Footer";
import styled from 'styled-components'

const App = styled.div`
  font-family: sans-serif;
  font-size: 20px;
  text-align: center;
  color: #4d5968;
`

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
     <App>
      <ButtonAppBar />
      <MainPage />
      <Footer />
    </App>
  </React.StrictMode>,
  rootElement
);

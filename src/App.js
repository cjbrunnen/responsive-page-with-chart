import React from "react";
import ButtonAppBar from "./Appbar";
import MainPage from "./MainPage";
import Footer from "./Footer";
import styled from 'styled-components'

const MainApp = styled.div`
  font-family: sans-serif;
  font-size: 20px;
  text-align: center;
  color: #4d5968;
  margin: 0 !important;
  padding: 0 !important;
`

export default function App() {
  return (
    <MainApp>
      <ButtonAppBar />
      <MainPage />
      <Footer />
    </MainApp>
  );
}

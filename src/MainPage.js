import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Cta from "./Cta";
import LineChart from "./InteractiveChart";
import EnhancedTable from "./DataTable";

const StyledContainer = styled(Container)`
  margin-top: 35px;
`;
const Sitename = styled(Typography)`
  font-size: 26px !important;
  margin: 9px 4px;
  display: inline-block;
  font-family: Arial, sans-serif;
  text-align: left;
`;
const WebLink = styled(Sitename)`
  font-size: 20px;
`;

export default function MainPage() {
  return (
    <StyledContainer maxWidth="md">
      <Sitename>Leicester City Council</Sitename>{' '}
      <WebLink> https://www.leicester.gov.uk</WebLink>
      <Cta />
      <LineChart />
      <EnhancedTable />
    </StyledContainer>
  );
}

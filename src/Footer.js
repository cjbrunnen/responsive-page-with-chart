import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const StyledFooter = styled.footer`
  background-color: #2a2a2a;
  color: white;
  margin-top: 30px;
  padding: 20px 5px;
  text-align: left;
`
const MenuList = styled.ul`
  list-style: none;
  margin-left: -40px;
  li {
    font-size: 14px;
  }
`
const GridDisclaimer = styled(Grid)`
  color: #969696;
  font-size: 8px;
  margin-top: 30px;
`
const GridSocial = styled(Grid)`
  margin-top: 30px;
  text-align: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Grid container>
        <Grid item xs={12} sm={3}>
          Assessment Categories
          <MenuList>
            <li>Accessibility</li>
            <li>Brand</li>
            <li>Code Quality</li>
          </MenuList>
        </Grid>
        <Grid item xs={12} sm={3}>
          Assessment Views
          <MenuList>
            <li>Dashboard</li>
            <li>Summary</li>
            <li>Inventories</li>
          </MenuList>
        </Grid>
        <Grid item xs={12} sm={3}>
          Products
          <MenuList>
            <li>SMARTVIEW</li>
            <li>HEARTBEAT</li>
            <li>INCMS</li>
          </MenuList>
        </Grid>
        <Grid item xs={12} sm={3}>
          About
          <MenuList>
            <li>Benchmark</li>
            <li>Blig</li>
            <li>Careers</li>
          </MenuList>
        </Grid>
        <GridDisclaimer item xs={12}>
          Sitemorse (UK Sales) Ltd hereby expressly reserves all rights, without
          waiver, election or other limitation to the full extent permitted by
          law, in and to this material and the information contained therein.
          Any reproduction, use or display or other disclosure or dissemination,
          by any method now known or later developed, of this material or the
          information contained herein, in whole or in part, without the prior
          written consent of Sitemorse (UK Sales) Ltd is strictly prohibited.
        </GridDisclaimer>
        <GridSocial item xs={12}>
          Social Links
        </GridSocial>
      </Grid>
    </StyledFooter>
  )
}

export default Footer

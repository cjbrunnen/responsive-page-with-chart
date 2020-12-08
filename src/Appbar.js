import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Logo from './images/sitemorse-logo.png'

const StyledAppBar = styled(AppBar)`
  flex-grow: 1;
  position: static;
  background-color: #337ab7 !important;
`
const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`
const StyledImg = styled.img`
  max-width: 30%;
`
export default function ButtonAppBar() {
  return (
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledImg src={Logo} />
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>
  )
}

// notes:
// mobile-first. update to show menu items on larger screens

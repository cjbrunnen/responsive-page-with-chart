import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const GridButton = styled(Grid)`
  display: flex;
  justify-content: center;
`
const BlueButton = styled(Button)`
  background-color: #337ab7 !important;
  color: white !important;
  display: inline-block !importants;
  text-align: center;
  margin: 10px !important;
  padding: 12px;
  border-radius: 12px;
  vertical-align: top;
  height: 80px;
  cursor: pointer;
`

export default function CtaButton({ text }) {
  return (
    <GridButton item xs={12} sm={6}>
      <BlueButton variant="contained">{text}</BlueButton>
    </GridButton>
  )
}

CtaButton.propTypes = {
  text: PropTypes.string
}

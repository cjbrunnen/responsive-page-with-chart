import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CtaButton from './CtaButton'

import sampleImg from './images/leicester-sample-img.png'
const sampleUrl = 'https://sitemorse.com/sa/295325/1/eb66bd81'

const GridParent = styled(Grid)`
  background-color: #f2f2f2;
  padding: 15px;
`
const GridLeft = styled(Grid)`
  object-fit: contain;
`
const GridRight = styled(Grid)`
  text-align: left;
  overflow-wrap: break-word;
  word-wrap: break-word;
`
const SecondaryText = styled(Typography)`
  font-family: 'Arial Black', 'Arial Bold';
  font-size: 22px;
`
const SecondaryTextLink = styled(Typography)`
  font-family: 'Arial Black', 'Arial Bold';
  font-size: 20px;
  a {
    color: black;
  }
`

export default function Cta() {
  return (
    <Container maxWidth="md">
      <GridParent container>
        <GridLeft item xs={12} md={5}>
          <img src={sampleImg} alt="sample" />
        </GridLeft>
        <GridRight item container md={7} xs={12}>
          <Grid item xs={12}>
            <SecondaryText>Unique link for this page:</SecondaryText>
            <SecondaryTextLink>
              <a href={sampleUrl}>{sampleUrl}</a>
            </SecondaryTextLink>
          </Grid>
          <Grid item container xs={12}>
            <CtaButton text="Purchase the detailed results" />
            <CtaButton text="View Priorities (FREE)" />
          </Grid>
        </GridRight>
      </GridParent>
    </Container>
  )
}

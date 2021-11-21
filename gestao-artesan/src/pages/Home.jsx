import React from 'react'
import { Container, Grid } from '@mui/material';
import BoxContainer from '../component/BoxContainer';


function Home() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Grid
            container
            direction="column"
          >
            <Grid item xs={6}>
              <BoxContainer title="Resumo dos Pedidos" style={{ display: 'flex' }}>

              </BoxContainer>
            </Grid>
            <Grid item xs={6}>
              <BoxContainer title="Fluxo de Entrada" style={{ display: 'flex' }}>

              </BoxContainer>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
        <Grid
            container
            direction="column"
          >
            <Grid item xs={8}>
              <BoxContainer title="" style={{ display: 'flex' }}>

              </BoxContainer>
            </Grid>
            <Grid item xs={4}>
              <BoxContainer title="Top Fornecedores" style={{ display: 'flex' }}>

              </BoxContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>

  )
}

export default Home
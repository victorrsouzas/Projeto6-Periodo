import React from 'react'
import { Grid, Typography } from '@mui/material';
import BoxContainer from '../component/BoxContainer';
import CalendarPicker from '@mui/lab/CalendarPicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CardCompras from '../component/cardCompras';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Graph1 from '../component/LegendEffectOpacity';
import ListTable from '../component/ListTable';
import Graph2 from '../component/pie'
import Graph3 from '../component/pie2'

const columns = [
  {
    field: 'pedido', headerName: '# pedido', width: 80, type: 'string',
  },
  {
    field: 'Fornecedor', width: 150, type: 'string'
  },
  {
    field: "Entrega", headerName: 'Entrega', width: 150, type: 'date'
  },
  {
    field: 'Status', headerName: "Status", width: 350, type: 'string', flex: 0.3
  },

];

const initialRows = [
  { id: 1, pedido: 24451, Fornecedor: "Turiarte", Entrega: "16/05/2021", Status: "Concluido" },
  { id: 2, pedido: 24431, Fornecedor: "Monte Siao", Entrega: "07/07/2021", Status: "Pendente" },
  { id: 3, pedido: 24211, Fornecedor: "Família Zezinho", Entrega: "25/07/2021", Status: "Atrasado" },
  { id: 4, pedido: 24451, Fornecedor: "Renda Filé", Entrega: "25/05/2021", Status: "Atrasado" },
  { id: 5, pedido: 24671, Fornecedor: "NACIB", Entrega: "22/06/2021", Status: "Concluido" },
  { id: 6, pedido: 24671, Fornecedor: "Luis Gravata", Entrega: "12/08/2021", Status: "Concluido" },
];

function Home() {
  const [date, setDate] = React.useState(new Date());
  return (

    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Grid
          container
          direction="column"
        >
          <Grid item xs={4}>
            <BoxContainer title="Resumo dos Pedidos" style={{ display: 'flex' }}>
              <ListTable columns={columns} initialRows={initialRows} />

            </BoxContainer>
          </Grid>
          <Grid item xs={4}>
            <BoxContainer title="Resumo Geral dos Pedidos" style={{ display: 'flex' }}>

              <Graph1 />
            </BoxContainer>
          </Grid>
          <Grid item xs={4}>
            <BoxContainer title="Reposição de Mercadorias" style={{ display: 'flex' }}>
              <Typography fontWeight="500" color="#7B442A" >
                Fornecedor: Turiarte
              </Typography>
              <Graph2 />
            </BoxContainer>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid
          container
          direction="column"
        >
          <Grid item xs={6}>

            <BoxContainer title="" style={{ display: 'flex' }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CalendarPicker date={date} minDate={new Date()} onChange={(newDate) => setDate(newDate)} />
              </LocalizationProvider>
              <CardCompras icon={<ShoppingCartOutlinedIcon />} name={"Compras"} title={"Solicitar pedido ao fornecedor X"} />
              <br />
              <CardCompras icon={<CreditCardIcon />} name={"Pagamentos"} title={"Solicitar relação ao Financeiro"} />
              <br />
              <CardCompras icon={<GroupRoundedIcon />} name={"Fornecedor"} title={"Cobrar entrega Fornecedor X"} />
            </BoxContainer>

          </Grid>
          <Grid item xs={6}>
            <BoxContainer title="Top Fornecedores" style={{ display: 'flex' }}>
              <Graph3 />
            </BoxContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>


  )
}

export default Home
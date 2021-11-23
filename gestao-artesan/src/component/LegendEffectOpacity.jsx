import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from "@mui/material"
const data = [
  {
    name: 'Jun',
    Estoque: 4000,
    Atrasados: 2400,
    amt: 2400,
  },
  {
    name: 'Jul',
    Estoque: 3000,
    Atrasados: 1398,
    amt: 2210,
  },
  {
    name: 'Ago',
    Estoque: 2000,
    Atrasados: 9800,
    amt: 2290,
  },
  {
    name: 'Set',
    Estoque: 2780,
    Atrasados: 3908,
    amt: 2000,
  },
  {
    name: 'Out',
    Estoque: 1890,
    Atrasados: 4800,
    amt: 2181,
  },
  {
    name: 'Nov',
    Estoque: 2390,
    Atrasados: 3800,
    amt: 2500,
  },
  {
    name: 'Dez',
    Estoque: 3490,
    Atrasados: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/customized-legend-event-l19fo';

  state = {
    opacity: {
      Estoque: 1,
      Atrasados: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Em R$', angle: -90, position: 'insideLeft' }}/>
            <Tooltip />
            <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
            <Line type="monotone" dataKey="Atrasados" strokeOpacity={opacity.Atrasados} stroke="#d88484" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Estoque" strokeOpacity={opacity.Estoque} stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <Typography fontWeight="500" color="#7B442A" >
            Ano 2021
        </Typography>
       
      </div>
    );
  }
}

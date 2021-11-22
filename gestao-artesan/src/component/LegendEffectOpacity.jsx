import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from "@mui/material"
const data = [
  {
    name: 'Jun',
    Sim: 4000,
    Nao: 2400,
    amt: 2400,
  },
  {
    name: 'Jul',
    Sim: 3000,
    Nao: 1398,
    amt: 2210,
  },
  {
    name: 'Ago',
    Sim: 2000,
    Nao: 9800,
    amt: 2290,
  },
  {
    name: 'Set',
    Sim: 2780,
    Nao: 3908,
    amt: 2000,
  },
  {
    name: 'Out',
    Sim: 1890,
    Nao: 4800,
    amt: 2181,
  },
  {
    name: 'Nov',
    Sim: 2390,
    Nao: 3800,
    amt: 2500,
  },
  {
    name: 'Dez',
    Sim: 3490,
    Nao: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/customized-legend-event-l19fo';

  state = {
    opacity: {
      Sim: 1,
      Nao: 1,
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
            <Line type="monotone" dataKey="Nao" strokeOpacity={opacity.Nao} stroke="#d88484" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Sim" strokeOpacity={opacity.Sim} stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <Typography fontWeight="500" color="#7B442A" >
            Ano 2021
        </Typography>
       
      </div>
    );
  }
}

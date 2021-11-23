import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,

  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,

  Label
} from 'recharts';

const data = [
  {
    name: 'Turiarte',

    pv: 1199,

  },
  {
    name: 'Monte Siao',

    pv: 167,

  },
  {
    name: 'F.Zezinho',

    pv: 298,

  },
  {
    name: 'Renda Filé',

    pv: 800,

  },
  {
    name: 'NACIB',

    pv: 1008,

  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/composed-chart-in-responsive-container-pkqmy';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" >
              <Label value="Fornecedores" offset={0} position="bottom" />
            </XAxis>
            <YAxis label={{ value: 'Em R$', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="pv" barSize={20} fill="#7B442A" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

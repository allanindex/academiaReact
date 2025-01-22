import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getIntroOfPage = (label:any) => {
  if (label === 'Page A') {
    return "Page A";
  }
  if (label === 'Page B') {
    return "Page B";
  }
  if (label === 'Page C') {
    return "Page C";
  }
  if (label === 'Page D') {
    return 'Page D';
  }
  if (label === 'Page E') {
    return 'Page E';
  }
  if (label === 'Page F') {
    return 'Page F';
  }
  return '';
};

const CustomTooltip = ({ active, payload, label }:any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" >
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
      </div>
    );
  }

  return null;
};

export default class Example2 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/tooltip-with-customized-content-vgl956';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <XAxis dataKey="name" stroke='white'/>
          <YAxis stroke='white'/>
          <Tooltip content={<CustomTooltip />}/>
          <Bar dataKey="pv" barSize={35} fill="#063B7C" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Fev', uv: 300, pv: 2200, amt: 2100 },
    { name: 'Mar', uv: 200, pv: 2500, amt: 2200 },
    { name: 'Abr', uv: 278, pv: 2000, amt: 1900 },
    { name: 'Mai', uv: 189, pv: 1800, amt: 1700 },
    { name: 'Jun', uv: 239, pv: 2000, amt: 1900 },
    { name: 'Jul', uv: 349, pv: 2100, amt: 2000 },
    { name: 'Ago', uv: 430, pv: 2400, amt: 2300 },
    { name: 'Set', uv: null, pv: 2100, amt: 2000 },
    { name: 'Out', uv: null, pv: 2500, amt: 2400 },
    { name: 'Nov', uv: null, pv: 2200, amt: 2100 },
    { name: 'Dez', uv: null, pv: 2300, amt: 2200 },
];

const MyLineChart = () => (
    <ResponsiveContainer>
  <LineChart data={data}>
    <XAxis dataKey="name" stroke='#bdbdbd' axisLine={false} tickLine={false} />
    <YAxis axisLine={false} tickLine={false}  stroke={'#bdbdbd'}/>
    <Tooltip />
    <CartesianGrid horizontal={true}  vertical={false} strokeDasharray="3 3" stroke='rgba(245, 245, 245, 0.33)'/>
    <Line type="monotone" dataKey="uv" stroke=" #063B7C" strokeWidth={'3px'} />
  </LineChart>
  </ResponsiveContainer>
);

export default MyLineChart;
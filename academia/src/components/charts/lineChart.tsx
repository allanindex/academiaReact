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
    { name: 'Set', uv: 300, pv: 2100, amt: 2000 },
    { name: 'Out', uv: 400, pv: 2500, amt: 2400 },
    { name: 'Nov', uv: 200, pv: 2200, amt: 2100 },
    { name: 'Dez', uv: 278, pv: 2300, amt: 2200 },
];

const MyLineChart = () => (
    <ResponsiveContainer>
  <LineChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="uv" stroke="#F15927" strokeWidth={'3px'} />
  </LineChart>
  </ResponsiveContainer>
);

export default MyLineChart;
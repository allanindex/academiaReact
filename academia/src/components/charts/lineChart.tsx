import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useColorMode, useColorModeValue, ColorModeButton } from "@/components/ui/color-mode";
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
    <XAxis dataKey="name" stroke={useColorModeValue('#bdbdbd', "black")} axisLine={false} tickLine={false} />
    <YAxis axisLine={false} tickLine={false}  stroke={useColorModeValue('#bdbdbd', "black")}/>
    <Tooltip />
    <CartesianGrid horizontal={false}  vertical={false} strokeDasharray="3 3" stroke={useColorModeValue('#bdbdbd', "black")}/>
    <Line type="monotone" dataKey="uv" stroke=" #063B7C" strokeWidth={'3px'} />
  </LineChart>
  </ResponsiveContainer>
);

export default MyLineChart;
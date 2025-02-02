import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Premium', value: 900, color: '#042042' },
  { name: 'Platinum', value: 300, color: '#1e8fd6' },
  { name: 'Basic', value: 300, color: '#ffffff' },
];
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "rgba(18, 21, 27, 0.81)",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          fontSize: "14px",
        }}
      >
        <p>{`${payload[0].name}`}</p>
        <p>{`${payload[0].value} alunos`}</p>
      </div>
    );
  }

  return null;
};
export default class Example extends PureComponent {
  state = {
    activeIndex: 0,
  };

  render() {
    return (

        <PieChart width={200} height={200}>
          <Pie
          z={'12'}
            activeIndex={this.state.activeIndex}

            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
    );
  }
}

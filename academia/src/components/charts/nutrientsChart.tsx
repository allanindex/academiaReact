import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useColorModeValue } from '../ui/color-mode';
const data = [
  { name: 'Carboidratos', value: 70 },
  { name: 'Proteínas', value: 55 },
  { name: 'Gorduras', value: 90 },
];
const maxValue = 100; 
const CustomBackgroundBar = (props: any) => {
  const { x, y, width, height } = props;
  return <rect x={x} y={y} width={width} height={height} rx={4} ry={4} fill={useColorModeValue(" #131517", " #c9c9c9")} />;
};
export default function Nutrients() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 30, left: 55, bottom: 0 }}
      >
        <XAxis type="number" domain={[0, maxValue]} tick={false} axisLine={false} />
        <YAxis type="category" dataKey="name" tick={{fill:useColorModeValue('white', 'black')}}/>
        <Tooltip />
        <Bar
          dataKey="value"
          fill=" #074685"
          barSize={30}
          background={<CustomBackgroundBar />}
         
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

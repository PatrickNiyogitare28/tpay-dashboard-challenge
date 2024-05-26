'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';

type DataPoint = {
  month: string;
  amount: number;
};

const data: DataPoint[] = [
  { month: 'Jan', amount: 4000 },
  { month: 'Feb', amount: 3000 },
  { month: 'Mar', amount: 2000 },
  { month: 'Apr', amount: 2780 },
  { month: 'May', amount: 1890 },
  { month: 'Jun', amount: 5000 }, // Highest value
  { month: 'Jul', amount: 3490 },
  { month: 'Aug', amount: 2000 },
  { month: 'Sep', amount: 2780 },
  { month: 'Oct', amount: 1890 },
  { month: 'Nov', amount: 2390 },
  { month: 'Dec', amount: 3490 },
];

const activeMonth = 'Jun';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.month}: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const MyBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis
          dataKey="month"
          tick={{ fontSize: 12, fill: '#000' }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="amount"
          barSize={80}
          className="rounded-md"
          radius={[5, 5, 5, 5]}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.month === activeMonth ? '#8884d8' : '#edf2f4'}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;

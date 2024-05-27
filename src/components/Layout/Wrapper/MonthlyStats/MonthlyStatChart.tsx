'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'January',
    uv: 20,
    pv: 98,
    amt: 22,
    newDataKey: 7,
  },
  {
    name: 'February',
    uv: 27,
    pv: 39,
    amt: 20,
    newDataKey: 15,
  },
];

const legend = [
  {
    value: '10%',
    color: '#d6e2e9',
  },
  {
    value: '40%',
    color: '#9f86c0',
  },
  {
    value: '60%',
    color: '#be95c4',
  },
  {
    value: '80%',
    color: '#5e548e',
  },
];

export default function MonthlyStatsChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            // left: 20,
            // bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={'12px'} />
          <YAxis fontSize={'12px'} />
          <Tooltip />
          <Bar barSize={80} dataKey="pv" stackId="a" fill="#5e548e" />
          <Bar dataKey="uv" stackId="a" fill="#9f86c0" />
          <Bar dataKey="amt" stackId="a" fill="#be95c4" />
          <Bar dataKey="newDataKey" stackId="a" fill="#d6e2e9" />
        </BarChart>
      </ResponsiveContainer>
      <div className="w-full flex justify-around mb-2">
        <div className="flex gap-4 ">
          {legend.map((leg, index) => (
            <div key={index} className="flex gap-2 items-center">
              <div
                className={`w-2 h-2 rounded-full bg-[${leg.color}]`}
                style={{ backgroundColor: leg.color }}
              />
              <label className="text-xs font-bold">{leg.value}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

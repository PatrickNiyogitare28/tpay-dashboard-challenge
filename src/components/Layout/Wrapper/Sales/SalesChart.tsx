import { AreaChart, Card, Title } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 23',
    Sales: 167,
  },
  {
    date: 'Feb 23',
    Sales: 125,
  },
  {
    date: 'Mar 23',
    Sales: 156,
  },
  {
    date: 'Apr 23',
    Sales: 165,
  },
  {
    date: 'May 23',
    Sales: 153,
  },
  {
    date: 'Jun 23',
    Sales: 124,
  },
];

export default function SalesChart() {
  const customTooltip = (props: any) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map((category: any, idx: number) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis">
                {category.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="mb-2">
        <AreaChart
          className="mt-4 h-30"
          data={chartdata}
          style={{ height: '150px' }}
          index="date"
          categories={['Sales']}
          colors={['blue']}
          showYAxis={false}
          showXAxis={false}
          showLegend={false}
          showGridLines={false}
          customTooltip={customTooltip}
        />

        <div className="w-full flex justify-between items-center">
          {Array.from({ length: 11 }, (_, index) => index + 1).map(
            (val, index) => (
              <div key={index} className="pb-2">
                <div
                  className={`text-xs font-bold ${index === 8 ? 'bg-primary text-white p-2 px-3 rounded-md' : 'text-gray-500'}`}
                >
                  {val}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}

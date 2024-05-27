import useStats from './hooks/useStats';
import { SparkLineChart } from '@tremor/react';

export default function Statistics() {
  const { statistics } = useStats(); // Assuming useStats returns both statistics and chartdata

  return (
    <div className="w-full flex gap-2 py-2">
      {statistics.map((stat, index) => (
        <div
          key={index}
          className={`w-3/6 ${index === 1 ? 'bg-danger-light' : 'bg-switch-light'} p-4 rounded-md shadow`}
        >
          <div className="flex gap-2 items-center h-[max-content]">
            <div>
              <label className="text-sm text-gray-600 font-semibold">
                {stat.title}
              </label>
              <p className="text-md font-bold">{stat.amount}</p>
            </div>
            <div>
              <SparkLineChart
                data={stat.chartData} // Assuming chartdata is correctly formatted
                index="date"
                categories={['Performance']}
                colors={[stat.color]}
              />
            </div>
          </div>
          <div className="flex mt-4 items-center w-full justify-between">
            <label className="text-xs">Compared to last month</label>
            <label className="bg-white py-1 px-3 rounded-md text-[12px]">
              {stat.rate}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

import Statistics from '@/components/Statistics';
import Navigation from './Navigation';
import Report from './Report';
import Orders from './Orders';
import MonthlyStats from './MonthlyStats';
import Sales from './Sales';
import TotalOrders from './Sales/TotalOrders';

export default function Wrapper() {
  return (
    <div className="px-6 bg-[#f8f9fa]">
      <Navigation />

      <div className="min-h-[80vh] flex gap-8 mt-4">
        <div className="w-4/6 min-h-full">
          <Statistics />
          <Report />
          <Orders />
        </div>
        <div className="w-2/6 min-h-full rounded-md">
          <MonthlyStats />
          <Sales />
          <TotalOrders />
        </div>
      </div>
    </div>
  );
}

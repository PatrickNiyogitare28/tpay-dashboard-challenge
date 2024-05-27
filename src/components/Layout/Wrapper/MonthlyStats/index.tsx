import MonthlyStatsChart from './MonthlyStatChart';
import { DownloadSimple, DotsThree } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';

export default function MonthlyStats() {
  return (
    <div className="bg-white shadow-md rounded-md p-2">
      <div className="flex justify-between mt-3 mb-4 px-4">
        <h1 className="text-sm font-semibold">Orders List</h1>

        <div className="flex gap-3">
          <Button variant="outline" size="icon">
            <DownloadSimple className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <DotsThree className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <MonthlyStatsChart />
    </div>
  );
}

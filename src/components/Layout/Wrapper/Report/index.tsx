import DemographicBarChart from '@/components/Charts/BarChart';
import ReportTabs from './Tabs';
import { DownloadSimple, DotsThree } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';

export default function Report() {
  return (
    <div className="bg-white mt-4 py-2 px-4 shadow-md rounded-md w-full">
      <div className="flex justify-between pt-2">
        <div className="flex gap-4 items-center">
          <h1 className="text-sm font-semibold">Sales Report</h1>
          <ReportTabs />
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="icon">
            <DownloadSimple className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <DotsThree className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-2">
        <label className="text-xs text-gray-400">Average per annual</label>
        <h1 className="text-xl font-semibold">$38,500</h1>
      </div>
      <DemographicBarChart />
    </div>
  );
}

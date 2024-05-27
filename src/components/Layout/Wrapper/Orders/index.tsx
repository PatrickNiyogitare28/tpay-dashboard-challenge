import { OrdersTable } from './Table';
import {
  DownloadSimple,
  DotsThree,
  FunnelSimple,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';

export default function Orders() {
  return (
    <div className="rounded-md bg-white py-2 px-4 shadow mt-8 mb-4">
      <div className="flex justify-between mt-3 mb-4">
        <h1 className="text-sm font-semibold">Orders List</h1>

        <div className="flex gap-3">
          <Button variant="outline" size="icon">
            <FunnelSimple className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <DownloadSimple className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <DotsThree className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <OrdersTable />
    </div>
  );
}

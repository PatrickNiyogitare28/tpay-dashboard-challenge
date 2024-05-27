'use client';

import { Button } from '@/components/ui/button';
import SalesChart from './SalesChart';
import { CaretDown } from '@phosphor-icons/react';
import TotalOrders from './TotalOrders';

export default function Sales() {
  return (
    <div className="bg-switch w-full shadow-md mt-8 rounded-md px-6">
      <div className="flex justify-between mt-4">
        <h1 className="text-sm text-gray-600 font-semibold items-center">
          Montly Sales
        </h1>
        <Button className="bg-white text-[10px] shadow hover:text-white flex gap-2 items-center">
          <label>January</label>
          <CaretDown size={18} className="font-bold" />
        </Button>
      </div>
      <div className="mt-2">
        <label className="text-xs text-gray-600">Total annual sales</label>
        <div className="flex gap-2 items-center">
          <label className="text-primary font-xl font-semibold text-2xl">
            $59,690
          </label>
          <div className="text-xs bg-success px-2 py-[5px] rounded-md text-white">
            45% +
          </div>
        </div>
      </div>
      <SalesChart />
    </div>
  );
}

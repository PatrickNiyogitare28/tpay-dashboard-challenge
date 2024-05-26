'use client';
import {
  LetterCircleP,
  Percent,
  GearSix,
  FunnelSimple,
} from '@phosphor-icons/react';
import { useState } from 'react';

export default function NavigationTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex gap-6 border-b-[1px] border-b-gray-300 mt-4">
      <div
        className={`flex gap-2 px-2 py-3 items-center font-semibold ${activeIndex === 0 ? ' border-b-2 border-b-gray-600 text-primary' : ' text-gray-500 '} cursor-pointer`}
        onClick={() => setActiveIndex(0)}
      >
        <LetterCircleP size={20} />
        <label className="text-xs">Value comparision</label>
      </div>

      <div
        className={`flex gap-2 px-2 py-3 items-center font-semibold ${activeIndex === 1 ? ' border-b-2 border-b-gray-600 text-primary' : ' text-gray-500 '} cursor-pointer`}
        onClick={() => setActiveIndex(1)}
      >
        <Percent size={20} className="text-gray-400" />
        <label className="text-xs">Average values</label>
      </div>

      <div
        className={`flex gap-2 px-2 py-30 items-center font-semibold ${activeIndex === 2 ? ' border-b-2 border-b-gray-600 text-primary' : ' text-gray-500 '} cursor-pointer`}
        onClick={() => setActiveIndex(2)}
      >
        <GearSix size={20} />
        <label className="text-xs">Configure analaysis</label>
      </div>

      <div
        className={`flex gap-2 px-2 py-30 items-center font-semibold ${activeIndex === 3 ? ' border-b-2 border-b-gray-600 text-primary' : ' text-gray-500 '} cursor-pointer`}
        onClick={() => setActiveIndex(3)}
      >
        <FunnelSimple size={20} />
        <label className="text-xs">Filter analaysis</label>
      </div>
    </div>
  );
}

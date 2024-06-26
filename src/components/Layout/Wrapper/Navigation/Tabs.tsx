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
        className={`flex gap-2 px-2 py-3 items-center font-semibold cursor-pointer transition-all duration-300 ${activeIndex === 0 ? 'border-b-2 border-b-gray-600 text-primary' : 'text-gray-500'}`}
        onClick={() => setActiveIndex(0)}
      >
        <LetterCircleP size={20} />
        <label className="text-xs">Value comparison</label>
      </div>

      <div
        className={`flex gap-2 px-2 py-3 items-center font-semibold cursor-pointer transition-all duration-300 ${activeIndex === 1 ? 'border-b-2 border-b-gray-600 text-primary' : 'text-gray-500'}`}
        onClick={() => setActiveIndex(1)}
      >
        <Percent size={20} />
        <label className="text-xs">Average values</label>
      </div>

      <div
        className={`flex gap-2 px-2 py-3 items-center font-semibold cursor-pointer transition-all duration-300 ${activeIndex === 2 ? 'border-b-2 border-b-gray-600 text-primary' : 'text-gray-500'}`}
        onClick={() => setActiveIndex(2)}
      >
        <GearSix size={20} />
        <label className="text-xs">Configure analysis</label>
      </div>

      <div
        className={`flex gap-2 px-2 py-3 items-center font-semibold cursor-pointer transition-all duration-300 ${activeIndex === 3 ? 'border-b-2 border-b-gray-600 text-primary' : 'text-gray-500'}`}
        onClick={() => setActiveIndex(3)}
      >
        <FunnelSimple size={20} />
        <label className="text-xs">Filter analysis</label>
      </div>
    </div>
  );
}

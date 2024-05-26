import Statistics from '@/components/Statistics';
import Navigation from './Navigation';

export default function Wrapper() {
  return (
    <div className="px-6">
      <Navigation />

      <div className="min-h-[80vh] flex gap-2 mt-4">
        <div className="w-4/6 min-h-full">
          <Statistics />
        </div>
        <div className="w-2/6 min-h-full bg-switch rounded-md"></div>
      </div>
    </div>
  );
}

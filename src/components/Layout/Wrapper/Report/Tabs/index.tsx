import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ReportTabs() {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList  defaultValue={"annual"} className='bg-transparent gap-2'>
          <TabsTrigger value="annual" className='bg-gray-100 text-xs shadow'>Annual</TabsTrigger>
          <TabsTrigger value="months" className='bg-gray-100 text-xs shadow'>Months</TabsTrigger>
          <TabsTrigger value="weeks" className='bg-gray-100 text-xs shadow'>Weeks</TabsTrigger>
          <TabsTrigger value="days" className='bg-gray-100 text-xs shadow'>Days</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

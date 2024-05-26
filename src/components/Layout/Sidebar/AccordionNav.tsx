import NavItem from '@/components/Shared/NavItem';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MdSpaceDashboard } from 'react-icons/md';
import { HiMiniChartBarSquare } from 'react-icons/hi2';
import { RiPieChart2Fill } from 'react-icons/ri';
import AnalyticsAccordionTabs from './AnalyticsAccordionTabs';
import { IoDocumentText } from 'react-icons/io5';
import { IoIosNotifications } from 'react-icons/io';
import Account from './Account';

export default function AccordionNav() {
  return (
    <div className="mt-8 flex flex-col justify-between min-h-[80vh]">
      <div>
        <Accordion type="single" collapsible className="px-6 w-full">
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className="text-white hover:no-underline">
              <NavItem
                icon={<MdSpaceDashboard color="white" size={24} />}
                label="Dashboard"
              />
            </AccordionTrigger>
            <AccordionContent className="ml-9">
              <label className="text-white opacity-[0.5] text-[13px] hover:opacity-[1] cursor-pointer">
                Metrics
              </label>
            </AccordionContent>
            <AccordionContent className="ml-9">
              <label className="text-white opacity-[0.5] text-[13px] hover:opacity-[1] cursor-pointer">
                Statistics
              </label>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="px-6 mt-2">
          <NavItem
            icon={<HiMiniChartBarSquare color="white" size={24} />}
            label="Key Metrics"
          />
        </div>

        <div className="mt-6 mb-2 py-2 border-y border-t-gray-600 border-b-gray-600">
          <Accordion type="single" collapsible className="px-6  w-full">
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="text-white hover:no-underline">
                <NavItem
                  icon={<RiPieChart2Fill color="white" size={24} />}
                  label="Analytics"
                />
              </AccordionTrigger>
              <AnalyticsAccordionTabs />
            </AccordionItem>
          </Accordion>
        </div>

        <Accordion type="single" collapsible className="px-6 w-full">
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className="text-white hover:no-underline">
              <NavItem
                icon={<IoDocumentText color="white" size={24} />}
                label="Documents"
              />
            </AccordionTrigger>
            <AccordionContent className="ml-9">
              <label className="text-white opacity-[0.5] text-[13px] hover:opacity-[1] cursor-pointer">
                All
              </label>
            </AccordionContent>
            <AccordionContent className="ml-9">
              <label className="text-white opacity-[0.5] text-[13px] hover:opacity-[1] cursor-pointer">
                Reports
              </label>
            </AccordionContent>
            <AccordionContent className="ml-9">
              <label className="text-white opacity-[0.5] text-[13px] hover:opacity-[1] cursor-pointer">
                Saved
              </label>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="px-6 mt-2">
          <div className="flex justify-between">
            <NavItem
              icon={<IoIosNotifications color="white" size={24} />}
              label="Notifications"
            />
            <div className="bg-primary-100 px-3 items-center flex rounded-full">
              <label className="text-xs text-white">14</label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Account />
      </div>
    </div>
  );
}

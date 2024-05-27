import { MagnifyingGlass, Bell, Gear } from '@phosphor-icons/react/dist/ssr';

export default function NavHeader() {
  return (
    <div className="flex justify-between mt-4 items-center">
      <h1 className="text-xl text-primary font-semibold">
        Viewer Demographics
      </h1>

      <div className="flex gap-2">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Type keyword to search"
            className="pl-10 pr-4 py-3 bg-transparent border rounded-md focus:outline-none focus:border-primary-300 focus:border-2 text-xs"
          />
          <MagnifyingGlass
            className="absolute left-3 text-primary-100"
            size={20}
          />
        </div>
        <div className="cursor-pointer p-2 border border-gray-400 w-[max-content] rounded-md flex items-center hover:border-primary-100">
          <Bell size={20} className="text-primary-100" />
        </div>
        <div className="p-2 bg-primary cursor-pointer  flex items-center w-[max-content] rounded-md hover:bg-primary-100">
          <Gear size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
}

import Sidebar from './Sidebar';
import Wrapper from './Wrapper';

export default function Layout() {
  return (
    <div className="flex w-screen h-screen overflow-x-hidden">
      <div className="w-[15%] bg-primary h-full overflow-y-scroll">
        <Sidebar />
      </div>
      <div className="w-[85%] overflow-y-scroll">
        <Wrapper />
      </div>
    </div>
  );
}

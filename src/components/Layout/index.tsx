import Sidebar from "./Sidebar";
import Wrapper from "./Wrapper";

export default function Layout(){
    return (
        <div className="flex w-screen h-screen overflow-x-hidden">
          <div className="w-1/5 bg-primary h-full overflow-y-scroll">
           <Sidebar />
          </div>
          <div className="w-4/5">
           <Wrapper />
          </div>
        </div>
    )
}
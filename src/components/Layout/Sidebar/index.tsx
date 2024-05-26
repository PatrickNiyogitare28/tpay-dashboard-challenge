import AccordionNav from './AccordionNav';
import SidebarHeader from './Header';
export default function Sidebar() {
  return (
    <div>
      <div className="p-4">
        <SidebarHeader />
      </div>
      <AccordionNav />
    </div>
  );
}

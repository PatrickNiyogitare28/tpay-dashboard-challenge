import AccordionNav from "./AccordionNav";
import SidebarHeader from "./Header";
import Image from "next/image";
export default function Sidebar(){
    return (
        <div>
            <div className="p-4">
                <SidebarHeader />
            </div>
            <AccordionNav />
        </div>
    )
}
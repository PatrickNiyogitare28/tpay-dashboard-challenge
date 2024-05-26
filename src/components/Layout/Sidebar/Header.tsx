import Image from "next/image"
export default function SidebarHeader() {
    return (
        <div className="flex gap-4 items-center px-2">
            <div className="bg-white p-2 rounded-full w-[max-content]">
                <Image src="/assets/logo.svg" width={20} height={20} alt="Supadash" />
            </div>
            <div>
                <h1 className="text-white text-sm font-bold ">SUPA-DASH</h1>
            </div>
        </div>
    )
}
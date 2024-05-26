import { ReactNode } from 'react';
import { MdSpaceDashboard } from 'react-icons/md';

interface Props {
  icon: ReactNode;
  label: string;
}
export default function NavItem({ icon, label }: Props) {
  return (
    <div className="flex gap-3 items-center cursor-pointer">
      {icon}
      <label className="text-[14px] text-white cursor-pointer">{label}</label>
    </div>
  );
}

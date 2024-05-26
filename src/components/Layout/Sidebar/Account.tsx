import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

export default function Account() {
  return (
    <div className="w-full py-8 px-4">
      <div className="bg-primary-100 p-4 px-4 rounded-md">
        <div className="flex justify-between items-center">
          <Image
            src="/assets/avatar.png"
            width={50}
            height={50}
            className="rounded-full"
            alt="Profile"
          />
          <ArrowRight size={20} color="white" />
        </div>

        <div className="flex-col flex mt-4">
          <label className="text-white font-semibold text-[12px]">
            JANE Doe
          </label>
          <label className="text-white font-light text-xs">
            janedoe@gmail.com
          </label>
        </div>
      </div>
    </div>
  );
}

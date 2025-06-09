import Image from "next/image";

import PrinterIcon from "@/assets/admin/icon/print.svg";
import AngleRightIcon from "@/assets/admin/icon/angle-right.svg";
import ArrowRightIcon from "@/assets/admin/icon/arrow-right.svg";

export default function AdminDashboardTableFooter() {
  return (
    <div className="sticky right-0 bottom-0 bg-white h-41p px-4 flex items-center justify-between">
      <button className="flex items-center space-x-1">
        <div className="w-6 h-6">
          <Image src={PrinterIcon} className="w-full h-full" alt="printer" />
        </div>
        <span className="font-BDOGrotesk300 text-xs text-c828282">Print</span>
      </button>

      <div className="flex h-33p items-center space-x-6">
        <button className="flex items-center rounded-lg space-x-1 h-33p px-4 bg-cF1F1F1">
          <div className="h-4 w-4">
            <Image
              src={AngleRightIcon}
              alt="arrow"
              className="w-full h-full scale-x-[-1]"
            />
          </div>
          <span className="text-c080808 text-xs pb-[1.5px] font-BDOGrotesk500">
            Previous
          </span>
        </button>
        <div className="text-c050505 font-BDOGrotesk500 text-xs">1 of 20</div>
        <button className="flex items-center rounded-lg space-x-1 h-33p px-4 bg-cF1F1F1">
          <span className="text-c080808 text-xs pb-[1.5px] font-BDOGrotesk500">
            Next
          </span>
          <div className="h-4 w-4">
            <Image src={AngleRightIcon} alt="arrow" className="w-full h-full" />
          </div>
        </button>
      </div>

      <div className="flex items-center space-x-5">
        <p className="text-c9E9E9E font-BDOGrotesk500 text-xs">
          11 of 210 Records
        </p>
        <div className="flex justify-between h-41p w-133p border border-c9E9E9E rounded-xl overflow-hidden">
          <input
            placeholder="Jump to..."
            className="px-3 outline-none text-sm border-none w-full "
          />
          <button className="flex-shrink-0 h-41p w-41p flex items-center rounded-xl justify-center bg-c9E9E9E/25">
            <Image src={ArrowRightIcon} alt="icon" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

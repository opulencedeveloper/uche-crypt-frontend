import Image from "next/image";

import CloseModalIcon from "@/assets/admin/icon/black-close.svg";
import { AdminDashBoardModalProps } from "@/types/global";

export default function AdminDashboardModal({
  inputTitle,
  inputType,
  onClose,
  proceedButtonText,
  subtitle,
  title,
}: AdminDashBoardModalProps) {
  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div>
          <span className="block text-black text-22p font-geist700">
            {title}
          </span>
          <span className="text-c828282 font-geist500 text-base">
            {subtitle}
          </span>
        </div>

        <button onClick={onClose} className="mt-2">
          <Image src={CloseModalIcon} alt="close" />
        </button>
      </div>

      <div className="mb-35p">
        <label
          htmlFor="text-input"
          className="text-sm font-geist500 text-dark1"
        >
          {inputTitle}
        </label>
        <input
          placeholder="Enter email"
          type={inputType}
          id="text-input"
          className="w-full h-11 mt-2 px-4 border border-e5e5e5 rounded-xl text-sm placeholder:text-sm outline-none  "
        />
      </div>

      <div className="flex h-49p space-x-9p">
        <button
          onClick={onClose}
          className="h-full flex-1 rounded-xl bg-cF4F4F5 flex items-center justify-center"
        >
          <span className="text-black font-geist500 text-base">Cancel</span>
        </button>
        <button className="h-full flex-1 rounded-xl bg-primarygreen1 flex items-center justify-center">
          <span className="font-geist500 text-white">{proceedButtonText}</span>
        </button>
      </div>
    </div>
  );
}

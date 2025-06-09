import Image from "next/image";

import { SubAdminModalProps } from "@/types/global";

import CloseModalIcon from "@/assets/admin/icon/black-close.svg";
import AtIcon from "@/assets/admin/icon/at-sign.svg";

export default function SubAdminModal({ onClose }: SubAdminModalProps) {
  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div>
          <span className="block text-black text-22p font-geist700">
            Sub - admin
          </span>
          <span className="text-c828282 font-geist500 text-base">
            Add sub-admin
          </span>
        </div>

        <button onClick={onClose} className="mt-2">
          <Image src={CloseModalIcon} alt="close" />
        </button>
      </div>

      <div className="mb-35p flex flex-col space-y-18p">
        <div>
          <label
            htmlFor="text-input"
            className="text-sm font-geist500 text-dark1"
          >
            Email
          </label>
          <input
            placeholder="Enter email"
            type="email"
            id="text-input"
            className="w-full h-11 mt-2 px-4 border border-e5e5e5 rounded-xl text-sm placeholder:text-sm outline-none  "
          />
        </div>
        <div>
          {" "}
          <label
            htmlFor="text-input"
            className="text-sm font-geist500 text-dark1"
          >
            Permission
          </label>
          <div className="flex items-center mt-2 h-11 px-4 border border-e5e5e5 rounded-xl">
            {" "}
            <input
              placeholder="Select permission"
              type="email"
              id="text-input"
              className="w-full h-full border-none text-sm placeholder:text-sm outline-none  "
            />
            <div className="h-5 w-5 flex-shrink-0">
              <Image src={AtIcon} className="h-full w-full" alt="@ sign" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-49p space-x-9p">
        <button
          onClick={onClose}
          className="h-full flex-1 rounded-xl bg-cF4F4F5 flex items-center justify-center"
        >
          <span className="text-black font-geist500 text-base">Cancel</span>
        </button>
        <button className="h-full flex-1 rounded-xl bg-primarygreen1 flex items-center justify-center">
          <span className="font-geist500 text-white">Send invite</span>
        </button>
      </div>
    </div>
  );
}

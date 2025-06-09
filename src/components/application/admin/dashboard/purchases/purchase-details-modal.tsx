import Image from "next/image";

import CloseModalIcon from "@/assets/admin/icon/black-close.svg";
import { PurchaseDetailsModalProps } from "@/types/global";
import PurchaseDetailsModalItem from "./purchase-details-modal-item";

export default function PurchaseDetailsModal({
  onClose,
}: PurchaseDetailsModalProps) {
  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div>
          <span className="block text-black text-22p font-geist700">
            Purchase details
          </span>
          <span className="text-c828282 font-geist500 text-base">
            View complete information about this purchase
          </span>
        </div>

        <button onClick={onClose} className="mt-2">
          <Image src={CloseModalIcon} alt="close" />
        </button>
      </div>

      <div className="mb-8 flex flex-col space-y-4">
        <PurchaseDetailsModalItem label="User:" value="John Doe" />
        <PurchaseDetailsModalItem label="Email:" value="JohnDoe@gmail.com" />
        <PurchaseDetailsModalItem label="Date:" value="2025-06-15" />
        <PurchaseDetailsModalItem label="Referral:" value="sampato ogbonna" />
        <div className="flex justify-between items-center text-black text-base">
          <span className="font-geist700">Status</span>
          <div className="flex items-center w-max h-7 rounded-xl px-6  bg-cFFEBEA">
            <span className="text-cFF3B30 font-BDOGrotesk300 text-xs">
              Pending
            </span>
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
          <span className="font-geist500 text-white">Approve</span>
        </button>
      </div>
    </div>
  );
}

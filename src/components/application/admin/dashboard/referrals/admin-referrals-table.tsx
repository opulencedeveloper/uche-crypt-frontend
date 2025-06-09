"use client";

import Image from "next/image";
import { useState } from "react";

import AdminDashboardTableFooter from "../ui/admin-dashboard-table-footer";

import SearchIcon from "@/assets/images/search.svg";
import DropDownIcon from "@/assets/admin/icon/drop-down.svg";
import CloseIcon from "@/assets/admin/icon/close.svg";
import CheckMarkIcon from "@/assets/admin/icon/green-check.svg";
import EyeIcon from "@/assets/admin/icon/eye-icon.svg";
import AnimatedModal from "../../ui/animated-modal";
import AdminDashboardModal from "../ui/admin-dashboard-modal";

export default function AdminReferralsTable() {
  const [openGrantAccessModal, setOpenGrantAccessModal] = useState(false);
  const [openPurchaseDetailsModal, setOpenPurchaseDetailsModal] = useState(false);

  return (
    <>
      <div className="p-4 mb-3  rounded-xl border border-e5e5e5 flex-1">
        <div className="flex items-center overflow-hidden h-9 w-204p bg-rgba118118128 space-x-2 pl-4 rounded-10p">
            <div className="h-4 w-4 flex-shrink-0">
              <Image src={SearchIcon} alt="search" className="w-full h-full" />
            </div>
            <input
              placeholder="Search"
              className="pr-4 outline-none border-none bg-transparent text-sm placeholder:text-c828282 placeholder:text-sm font-geistRegular"
            />
          </div>

        <table className="min-w-full mt-8">
          <thead>
            <tr>
              <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
              Referrer
              </th>
              <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
                Referred User
              </th>
              <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
                Date
              </th>
            
              <th className="text-right text-sm font-geistRegular text-c828282 pb-2">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 font-geistRegular">
              <td className="py-14p whitespace-nowrap text-sm pr-2">
              <div className="flex flex-col gap-y-2">
                <span className="text-black"> Serah Johnson</span>
                <span className="text-c828282">Johndoe@gmail.com</span>
              </div>
              </td>
               <td className="py-14p whitespace-nowrap text-sm pr-2">
              <div className="flex flex-col gap-y-2">
                <span className="text-black"> Serah Johnson</span>
                <span className="text-c828282">Johndoe@gmail.com</span>
              </div>
              </td>
              <td className="py-14p whitespace-nowrap text-sm text-black pr-2">
                2025-06-15
              </td>
             
              <td className="py-14p whitespace-nowrap text-right text-sm font-medium pl-2">
                <div className="flex justify-end">
                   <div className="flex items-center w-max h-7 rounded-xl px-6  bg-cFFEBEA">
                  <span className="text-cFF3B30 font-BDOGrotesk300 text-xs">
                    Pending
                  </span>
                </div>
                </div>
              </td>

            
            </tr>
          </tbody>
        </table>
      </div>
      <AdminDashboardTableFooter />
    </>
  );
}

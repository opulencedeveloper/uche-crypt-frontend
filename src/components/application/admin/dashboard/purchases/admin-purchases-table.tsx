"use client";

import Image from "next/image";
import { useState } from "react";

import AdminDashboardTableFooter from "../ui/admin-dashboard-table-footer";
import AnimatedModal from "../../ui/animated-modal";
import AdminDashboardModal from "../ui/admin-dashboard-modal";
import PurchaseDetailsModal from "./purchase-details-modal";

import SearchIcon from "@/assets/images/search.svg";
import DropDownIcon from "@/assets/admin/icon/drop-down.svg";
import CloseIcon from "@/assets/admin/icon/close.svg";
import CheckMarkIcon from "@/assets/admin/icon/green-check.svg";
import EyeIcon from "@/assets/admin/icon/eye-icon.svg";


export default function AdminPurchasesTable() {
  const [openGrantAccessModal, setOpenGrantAccessModal] = useState(false);
  const [openPurchaseDetailsModal, setOpenPurchaseDetailsModal] = useState(false);

  return (
    <>
      <div className="p-4 mb-3  rounded-xl border border-e5e5e5 flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center overflow-hidden h-9 w-204p bg-rgba118118128 space-x-2 pl-4 rounded-10p">
            <div className="h-4 w-4 flex-shrink-0">
              <Image src={SearchIcon} alt="search" className="w-full h-full" />
            </div>
            <input
              placeholder="Search"
              className="pr-4 outline-none border-none bg-transparent text-sm placeholder:text-c828282 placeholder:text-sm font-geistRegular"
            />
          </div>

          <button
            onClick={() => setOpenGrantAccessModal(true)}
            className="flex items-center space-x-10p h-37p pl-3 pr-4 bg-primarygreen1 rounded-xl"
          >
            <div className="h-4 w-4 mr-">
              <Image
                src={DropDownIcon}
                alt="drop down"
                className="h-full w-full"
              />
            </div>
            <span className="text-white font-geistRegular text-sm">
              Grant access
            </span>
          </button>

          <AnimatedModal
            isOpen={openGrantAccessModal}
            onClose={() => setOpenGrantAccessModal(false)}
          >
            <AdminDashboardModal
              title="Grant Access"
              subtitle="Grant user access to course"
              inputTitle="Email"
              inputType="email"
              proceedButtonText="Grant access"
              onClose={() => setOpenGrantAccessModal(false)}
            />
          </AnimatedModal>
        </div>
        <table className="min-w-full mt-8">
          <thead>
            <tr>
              <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
                User
              </th>
              <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
                Email
              </th>
              <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
                Date
              </th>
              <th className="text-left pl-5 text-sm font-geistRegular text-c828282 pb-2">
                Status
              </th>
              <th className="text-right text-sm font-geistRegular text-c828282 pb-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 font-geistRegular">
              <td className="py-14p whitespace-nowrap text-sm text-black pr-2">
                John Doe
              </td>
              <td className="py-14p whitespace-nowrap text-sm text-black pr-2">
                john@example.com
              </td>
              <td className="py-14p whitespace-nowrap text-sm text-black pr-2">
                2025-06-15
              </td>
              <td className="py-14p whitespace-nowrap text-sm text-black pr-2">
                <div className="flex items-center w-max h-7 rounded-xl px-6  bg-cFFEBEA">
                  <span className="text-cFF3B30 font-BDOGrotesk300 text-xs">
                    Pending
                  </span>
                </div>
              </td>
              <td className="py-14p whitespace-nowrap text-right text-sm font-medium pl-2">
                <div className="flex items-center gap-x-2 justify-end">
                  <button
                  onClick={() =>  setOpenPurchaseDetailsModal(true)}
                  className="h-6 w-6">
                    <Image
                      src={EyeIcon}
                      className="w-full h-full"
                      alt="close"
                    />
                  </button>
                  <button className="rounded-md h-8 w-8 border border-e5e5e5 flex items-center justify-center">
                    <Image
                      src={CloseIcon}
                      className="h-10p w-10p"
                      alt="close"
                    />
                  </button>
                  <button className="rounded-md h-8 w-8 border border-e5e5e5 flex items-center justify-center">
                    <Image
                      src={CheckMarkIcon}
                      className="h-4 w-4"
                      alt="check"
                    />
                  </button>
                </div>
              </td>

               <AnimatedModal
            isOpen={openPurchaseDetailsModal}
            onClose={() =>  setOpenPurchaseDetailsModal(false)}
          >
            <PurchaseDetailsModal 
             onClose={() => setOpenPurchaseDetailsModal(false)}
            />
          </AnimatedModal>
        
            </tr>
          </tbody>
        </table>
      </div>
      <AdminDashboardTableFooter />
    </>
  );
}

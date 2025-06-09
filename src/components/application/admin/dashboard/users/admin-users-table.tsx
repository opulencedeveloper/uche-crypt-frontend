"use client";

import Image from "next/image";
import { useState } from "react";

import EditIcon from "@/assets/admin/icon/edit.svg";
import SearchIcon from "@/assets/images/search.svg";
import AnimatedModal from "../../ui/animated-modal";
import AdminDashboardModal from "../ui/admin-dashboard-modal";
import AdminDashboardTableFooter from "../ui/admin-dashboard-table-footer";

export default function UsersTable() {
  const [openEditUserModal, setOpenEditUserModal] = useState(false);

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
              User
            </th>
            <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
              Email
            </th>
            <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
              Referrals
            </th>
            <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
              Referrals (%)
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
              23
            </td>
            <td className="py-14p whitespace-nowrap text-sm text-black pr-2">
              23%
            </td>
            <td className="py-14p whitespace-nowrap text-right text-sm font-medium pl-2">
              <div className="flex justify-end">
                <button
                  className="h-6 w-6"
                  onClick={() => setOpenEditUserModal(true)}
                >
                  <Image src={EditIcon} className="w-full h-full" alt="edit" />
                </button>
              </div>
              <AnimatedModal
                isOpen={openEditUserModal}
                onClose={() => setOpenEditUserModal(false)}
              >
                <AdminDashboardModal
                  title="Edit User"
                  subtitle="Update  referral percentage"
                  inputTitle="Percentage (%)"
                  inputType="text"
                  proceedButtonText="Save"
                  onClose={() => setOpenEditUserModal(false)}
                />
              </AnimatedModal>
            </td>
          </tr>
        </tbody>
      </table>

     
    </div>
     <AdminDashboardTableFooter />
    </>
  );
}

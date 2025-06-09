import Image from "next/image";

import AdminDashboardTableHeader from "../ui/admin-dashboard-table-header";

import CloseIcon from "@/assets/admin/icon/close.svg";
import CheckMarkIcon from "@/assets/admin/icon/green-check.svg";


export default function AdminDashboardRecentPurchases() {

    return <div className="p-4 rounded-xl border border-e5e5e5 flex-1">
        <AdminDashboardTableHeader title="Recent purchases" subtitle="Approve or reject recent course purchases" />
 <table className="min-w-full mt-8">
            <thead>
                <tr>
                    <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
                        User
                    </th>
                    <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
                        Mail
                    </th>
                    <th className="text-left pl-5 text-sm font-geistRegular text-c828282 pb-2">
                        Status
                    </th>
                    <th className="text-right text-sm font-geistRegular text-c828282 pb-2">
                        Action
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
                    <td className="py-14p whitespace-nowrap text-sm  pr-2">
                        <div className="flex items-center w-max h-7 rounded-xl px-6  bg-cFFEBEA">
                            <span className="text-cFF3B30 font-BDOGrotesk300 text-xs">Pending</span>
                        </div>
                    </td>
                    <td className="py-14p whitespace-nowrap text-right text-sm font-medium pl-2">
                        <div className="flex gap-x-2 justify-end">
                            <button className="rounded-md h-8 w-8 border border-e5e5e5 flex items-center justify-center">
                                <Image src={CloseIcon} className="h-10p w-10p" alt="close" />
                            </button>
                            <button className="rounded-md h-8 w-8 border border-e5e5e5 flex items-center justify-center">
                                <Image src={CheckMarkIcon} className="h-4 w-4" alt="check" />
                            </button>
                        </div>
                    </td>
                </tr>



            </tbody>
        </table>
   
    </div>


}

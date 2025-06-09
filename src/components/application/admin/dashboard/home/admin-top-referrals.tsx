import AdminDashboardTableHeader from "../ui/admin-dashboard-table-header";

import CloseIcon from "@/assets/admin/icon/close.svg";
import CheckMarkIcon from "@/assets/admin/icon/green-check.svg";
import Image from "next/image";


export default function AdminDashboardTopReferrals() {

    return <div className="p-4 rounded-xl border border-e5e5e5 flex-1">
        <AdminDashboardTableHeader title="Top Referrers" subtitle="Approve or reject recent course purchases" />
  <table className="min-w-full mt-8">
            <thead>
                <tr>
                    <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
                        User
                    </th>
                    <th className="text-left text-sm font-geistRegular text-c828282 pb-2">
                       Referrals
                    </th>
                    <th className="text-left pl-5 text-sm font-geistRegular text-c828282 pb-2">
                        Revenue
                    </th>
                    <th className="text-right text-sm font-geistRegular text-c828282 pb-2">
                       Percentage
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 font-geistRegular">
                    <td className="py-14p whitespace-nowrap text-sm text-black pl-2">
                        John Doe
                    </td>
                    <td className="py-14p whitespace-nowrap text-sm text-black pr-2">
                        john@example.com
                    </td>
                    <td className="py-14p whitespace-nowrap text-sm text-black pr-2">
                     $18,000
                    </td>
                    <td className="py-14p whitespace-nowrap text-right text-sm text-black pr-2">
                        15%
                    </td>
                </tr>



            </tbody>
        </table>
       
    </div>


}

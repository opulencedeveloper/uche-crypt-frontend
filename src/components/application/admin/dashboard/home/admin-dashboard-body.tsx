import AdminDashboardCard from "./admin-dashboard-card";

import AdminDashboardRecentPurchases from "./admin-dashboard-recent-purchases";
import AdminDashboardTopReferrals from "./admin-top-referrals";

import UserIcon from "@/assets/admin/icon/user.svg";
import TotalPurchaseIcon from "@/assets/admin/icon/money-send.svg";
import TotalReferralIcon from "@/assets/admin/icon/share.svg";
import TotalSalesIcon from "@/assets/admin/icon/wallet.svg"


export default function AdminDashboardBody() {

    return <div className="mt-6 pl-4 pr-5 w-full">
        <div className="grid grid-cols-4 gap-3 w-full">
        <AdminDashboardCard
            title="Total users"
            subtitle="7,045"
            subTitleColor="text-c2BA39E"
            percentageChange="10"
            percentageChangeColor="text-c2BA39E"
            bgColor="bg-cE6FFFE"
            icon={UserIcon}
        />
        <AdminDashboardCard
            title="Total Purchases"
            subtitle="7,045"
            subTitleColor="text-c80711B"
            percentageChange="10"
            percentageChangeColor="text-c80711B"
            bgColor="bg-cFFFCEB"
            icon={TotalPurchaseIcon}
        />
        <AdminDashboardCard
            title="Total referrals"
            subtitle="7,045"
            subTitleColor="text-c9E52F7"
            percentageChange="10"
            percentageChangeColor="text-c9E52F7"
            bgColor="bg-cF6F0FD"
            icon={TotalReferralIcon}
        />
        <AdminDashboardCard
            title="Total sales"
            subtitle="7,045"
            subTitleColor="text-primarygreen1"
            percentageChange="10"
            percentageChangeColor="text-primarygreen1"
            bgColor="bg-cE7FEF4"
            icon={TotalSalesIcon}
        />
        </div>
        <div className="flex gap-x-3 overflow-x-auto w-full pb-10 mt-3">
             <AdminDashboardRecentPurchases />
             <AdminDashboardTopReferrals />
        </div>
        
       
    </div>


}

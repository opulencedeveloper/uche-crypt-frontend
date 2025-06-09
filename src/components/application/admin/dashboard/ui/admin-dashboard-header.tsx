import Image from "next/image";

import NotificationIcon from "@/assets/admin/icon/notification.svg";
import { AdminDashboardHeaderProps } from "@/types/global";


export default function AdminDashboardHeader({title, subtitle}: AdminDashboardHeaderProps) {

    return <header className="sticky top-0 right-0 bg-white h-81p flex justify-between items-center px-4 border-t border-b border-e5e5e5">
        <div>
            <h1 className="text-black font-geist700 text-22p block">{title}</h1>
            <h2 className="text-base text-c828282 font-geist500">{subtitle}</h2>
        </div>

        <div className="flex items-center gap-x-6">
            <button className="w-6 h-6">
                <Image src={NotificationIcon} alt="bell" className="w-full h-full" />
            </button>
            <div className="h-10 w-10 rounded-full bg-cD4EADF flex items-center justify-center">
                <span className="font-bold text-primarygreen1 text-sm">OS</span>
            </div>
        </div>
    </header>


}

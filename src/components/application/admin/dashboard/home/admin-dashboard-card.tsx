import Image from "next/image"

import { AdminDashboardCardProps } from "@/types/global"

export default function AdminDashboardCard({ title, subtitle, bgColor, icon, percentageChange, percentageChangeColor, subTitleColor }: AdminDashboardCardProps) {

    return <div className={`flex flex-col gap-y-5p p-4 rounded-xl ${bgColor}`}>
        <div className="h-4 w-4">
            <Image src={icon} className="h-full w-full" alt=";" />
        </div>
        <span className="text-black font-geistRegular text-base">{title}</span>
        <span className={`font-geist700 text-28 ${subTitleColor}`}>{subtitle}</span>
        <p className="text-xs">
            <span className={`font-BDOGrotesk500 ${percentageChangeColor}`}>+{percentageChange}% </span>
            <span className="text-c636363 font-geistRegular">From last month</span>
        </p>

    </div>


}

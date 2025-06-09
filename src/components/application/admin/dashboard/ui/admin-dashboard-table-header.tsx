import { AdminDashboardTableHeaderProps } from "@/types/global";


export default function AdminDashboardTableHeader({ title, subtitle }: AdminDashboardTableHeaderProps) {

    return <div>
        <span className="block text-18p text-black font-geist500">{title}</span>
        <span className="text-c828282 text-sm font-geistRegular">{subtitle}</span>
    </div>


}

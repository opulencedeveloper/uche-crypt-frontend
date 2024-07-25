"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useRouter } from "next/navigation";

import Image from "next/image";
import LogOut from "@/assets/images/profile-dropdown/logout.svg";
import MyLearning from "@/assets/images/profile-dropdown/my-learning.svg";
import ChevronRight from "@/assets/images/contact-dropdown/chevron-right.svg";

export default function ProfileDropdown() {
  const router = useRouter();

  return (
    <NavigationMenu title="Profile">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            <div className="w-10 h-10 rounded-full bg-[#D4EADF] flex items-center justify-center">
              <p className="text-primarygreen1 font-bold text-[13.3px]">A</p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className=" navigation-menu-card md:w-[331px] border-none h-max bg-white rounded-xl p-6 flex flex-col gap-3">
            <div className="w-full flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-[#D4EADF] flex items-center justify-center">
                <p className="text-primarygreen1 font-bold text-[13.3px]">A</p>
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-bold text-sm text-dark1 leading-[21px]">
                  Asamp ologwu
                </h3>
                <p className="text-[#8F90A6] text-base leading-6 font-normal truncate">
                  ologwusamuel67@gmail.com
                </p>
              </div>
            </div>
            <div className="w-full border-b border-[#E9E9E9]"></div>
            <div
              onClick={() => router.push("/my-learning")}
              className="w-full bg-white p-3 rounded-[8px] hover:bg-[#F1FFF9] cursor-pointer flex justify-between items-start"
            >
              <div className="flex  items-start gap-3">
                <Image src={MyLearning} alt="" width={24} height={24} />
                <div className="flex flex-col gap-0.5">
                  <p className="text-dark1 text-sm font-bold leading-[21px]">
                    My learning
                  </p>
                  <p className="text-[#6B7588] w-max text-base font-normal leading-6">
                    View your current courses
                  </p>
                </div>
              </div>
              <Image src={ChevronRight} alt="" />
            </div>

            <div className="w-full bg-[#FFF5F873] p-3 rounded-[8px]  cursor-pointer flex gap-3 items-center">
              <Image src={LogOut} alt="" />
              <h3 className="text-sm font-bold text-[#E53535]">Logout</h3>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLink } from "@/types/global";

import LogoImage from "@/assets/images/navigation/logo.svg";
import DashBoardActiveIcon from "@/assets/admin/icon/dashboard-active.svg";
import UsersInActiveIcon from "@/assets/admin/icon/users-inactive.svg";
import PurchasesInActiveIcon from "@/assets/admin/icon/purchases-inactive.svg";
import ReferralsInactiveIcon from "@/assets/admin/icon/referrals-inactive.svg";
import SettingsInactiveIcon from "@/assets/admin/icon/setting-inactive.svg";
import LogOutIcon from "@/assets/admin/icon/logout.svg";

const navLinks: NavLink[] = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    activeIcon: DashBoardActiveIcon,
    inActiveIcon: DashBoardActiveIcon,
  },
  {
    label: "Users",
    href: "/admin/users",
    activeIcon: DashBoardActiveIcon,
    inActiveIcon: UsersInActiveIcon,
  },
  {
    label: "Purchases",
    href: "/admin/purchases",
    activeIcon: DashBoardActiveIcon,
    inActiveIcon: PurchasesInActiveIcon,
  },
  {
    label: "Referrals",
    href: "/admin/referrals",
    activeIcon: DashBoardActiveIcon,
    inActiveIcon: ReferralsInactiveIcon,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    activeIcon: DashBoardActiveIcon,
    inActiveIcon: SettingsInactiveIcon,
  },
];

export default function AdminDashboardNavigation() {
  const pathname = usePathname();

  return (
    <section className="flex flex-col justify-between overflow-y-auto gap-y-7 h-full py-6 px-4 bg-fffefb border border-e5e5e5 w-[237px]">
      <div>
        <div className="w-[199.36px] h-[21px]">
          <Link href="/">
            <Image
              width={199.36}
              height={21}
              className="h-full w-full"
              src={LogoImage}
              alt="Logo Image"
            />
          </Link>
        </div>

        <nav className="mt-8 w-full space-y-3">
          {navLinks.map((link) => {
            const currentPathName = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-x-2 h-[37px] w-full px-4 rounded-lg ${
                  currentPathName ? "bg-rgba87235161" : ""
                }`}
              >
                <div className="h-4 w-4">
                  <Image
                    className="w-full h-full"
                    src={currentPathName ? link.activeIcon : link.inActiveIcon}
                    alt={link.label}
                    height={20}
                    width={20}
                  />
                </div>
                <span
                  className={`font-geistRegular text-sm  ${
                    currentPathName ? "text-c006633" : "text-black"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <button className="flex items-center space-x-2 pl-2 bg-n">
        <div className="h-4 w-4 ">
          <Image
            className="w-full h-full"
            src={LogOutIcon}
            alt="admin log out"
            height={20}
            width={20}
          />
        </div>
        <span className="font-geistRegular text-sm">Logout</span>
      </button>
    </section>
  );
}

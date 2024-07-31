"use client";
import Link from "next/link";

import Image from "next/image";
import LogoImage from "@/assets/images/navigation/logo.png";
import ArrowUpImage from "@/assets/images/navigation/arrow-narrow-up-right.png";

import ContactHovermenu from "./contact-hover-menu";
import ProfileDropdown from "./profile-dropdown";
import MobileNavbar from "./mobile-navbar";

import { useUser } from "@/contexts/user";

export default function Navigation() {
  const { user }: any = useUser();

  return (
    <nav className="w-full h-[68px] tablet:h-84 px-6 tablet:px-16 flex justify-between items-center bg-honeydew">
      <Link href="/">
        <Image
          className="tablet:w-[199.36px] tablet:h-[21px] h-[16.64px] w-[158px]"
          width={199.36}
          height={21}
          src={LogoImage}
          alt="Logo Image"
        />
      </Link>

      {/* Nav Links */}
      <div className="tablet:flex hidden items-center gap-6">
        <Link className="font-normal text-base text-dark1" href="/about">
          About me
        </Link>

        <ContactHovermenu />

        <div className="border-r border-dark4 h-11"></div>
        {!user ? (
          <>
            <Link
              className="font-normal text-base login-text flex items-center gap-1"
              href="/login"
            >
              LogIn
              <Image src={ArrowUpImage} alt="" />
            </Link>
            <Link
              className="bg-primarygreen1 h-11 flex justify-center items-center text-base font-bold text-white rounded-xl w-184"
              href="/about"
            >
              Sign up
            </Link>
          </>
        ) : (
          <ProfileDropdown user={user} />
        )}
      </div>
      <MobileNavbar />
    </nav>
  );
}

"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import XMark from "@/assets/images/navigation/x-mark.svg";
import LogoImage from "@/assets/images/navigation/logo.svg";
import HamburberMenuImage from "@/assets/images/navigation/hamburger.svg";
import ChevronRight from "@/assets/images/contact-dropdown/chevron-right.svg";
import ArrowUp from "@/assets/images/home/arrow-narrow-up-right.svg";
import LogOut from "@/assets/images/profile-dropdown/logout.svg";

import WhatsAppLink from "./whatsapp-link";
import EmailLink from "./email-link";
import { useUser } from "@/contexts/user";

interface Params {
  handleLogout: () => void;
}

export default function MobileNavbar({ handleLogout }: Params) {
  const [open, setOpen] = useState(false);
  const { user }: any = useUser();

  return (
    <div className="flex tablet:hidden">
      <button onClick={() => setOpen(true)}>
        <Image src={HamburberMenuImage} alt="" />
      </button>
      <div
        className={`z-50 fixed left-0 bg-black/5 w-full h-screen ${
          open ? "top-0 delay-0" : "top-[-120vh] delay-300"
        }`}
      >
        <div
          className={`mobile-menu-dropdown duration-500 bg-white w-full h-max p-6 flex flex-col gap-6 rounded-xl ${
            open ? "translate-y-0" : "-translate-y-[120%]"
          }`}
        >
          <div className="w-full flex justify-between items-center">
            <Link onClick={() => setOpen(false)} href="/">
              <Image
                className="h-2.5 w-[95px]"
                src={LogoImage}
                alt="Logo Image"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="w-[26.5px] h-[26.5px] rounded-full bg-[#292D32]/40 flex justify-center items-center"
            >
              <Image src={XMark} alt="" />
            </button>
          </div>
          <div className="w-full border-b border-[#E9E9E9]"></div>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="w-full flex justify-between  items-center"
          >
            <p className="text-dark1 text-base font-normal ">About me</p>
            <Image src={ChevronRight} alt="" />
          </Link>
          <div className="w-full border-b border-[#E9E9E9]"></div>
          <p className="text-dark1 text-base font-normal ">Contact me</p>
          <WhatsAppLink />
          <EmailLink />
          <div className="w-full border-b border-[#E9E9E9]"></div>
          {user ? (
            <>
              <Link
                onClick={() => setOpen(false)}
                href="/my-learning"
                className="w-full flex justify-between  items-center"
              >
                <p className="text-dark1 text-base font-normal ">My learning</p>
                <Image src={ChevronRight} alt="" />
              </Link>
              <div
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                className="w-full flex justify-between  items-center"
              >
                <p className="text-[#E53535] text-base font-normal ">Logout</p>
              </div>
            </>
          ) : (
            <>
              {" "}
              <Link
                onClick={() => setOpen(false)}
                className="font-normal w-full justify-center text-base text-dark1 flex items-center gap-1"
                href="/login"
              >
                LogIn
                <Image src={ArrowUp} alt="" width={12} height={12} />
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="bg-primarygreen1 h-11 flex justify-center items-center text-base font-bold text-white rounded-xl w-full"
                href="/register"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

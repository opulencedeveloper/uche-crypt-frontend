"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import XMark from "@/assets/images/navigation/x-mark.svg";
import LogoImage from "@/assets/images/navigation/logo.png";
import HamburberMenuImage from "@/assets/images/navigation/hamburger.svg";
import ChevronRight from "@/assets/images/contact-dropdown/chevron-right.svg";
import ArrowUp from "@/assets/images/home/arrow-narrow-up-right.png";

import WhatsAppLink from "./whatsapp-link";
import EmailLink from "./email-link";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

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
            <Image
              className="h-2.5 w-[95px]"
              src={LogoImage}
              alt="Logo Image"
            />
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
          <Link
            className="font-normal w-full justify-center text-base text-dark1 flex items-center gap-1"
            href="/login"
          >
            LogIn
            <Image src={ArrowUp} alt="" width={12} height={12} />
          </Link>
          <Link
            className="bg-primarygreen1 h-11 flex justify-center items-center text-base font-bold text-white rounded-xl w-full"
            href="/about"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

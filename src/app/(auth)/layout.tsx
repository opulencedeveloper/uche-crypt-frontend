"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Background from "@/assets/images/home/background.png";
import LogoImage from "@/assets/images/navigation/logo.svg";
import LearnImage from "@/assets/images/auth-layout/learn.svg";
import CryptoExpertImage from "@/assets/images/auth-layout/crypto-expert.svg";

import GoBackLink from "@/components/ui/go-back-link";

export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      router.push("/my-learning");
    }
  }, []);

  return (
    <main className="w-full h-screen bg-oldlace relative overflow-y-auto">
      <div className="fixed h-full w-full overflow-hidden">
        <Image
          src={Background}
          alt=""
          className="w-full z-10 h-full absolute top-[50%] left-0"
        />
      </div>
      <div className="tablet:sticky static pt-8 tablet:pt-0 top-12 z-40 left-0 w-full flex flex-col tablet:flex-row gap-8 tablet:gap-0 justify-center items-center mb-8 tablet:mb-0">
        <div className="tablet:absolute w-full tablet:w-max static left-[177px] -translate-y-[7px]">
          <GoBackLink />
        </div>
        <Link href="/">
          <Image width={199.36} height={21} src={LogoImage} alt="Logo Image" />
        </Link>
      </div>
      <Image
        src={LearnImage}
        alt=""
        className="z-20 hidden  h-max  tablet:block fixed   top-[59px] right-[131px] "
      />
      <Image
        src={CryptoExpertImage}
        alt=""
        className="z-20 tablet:w-[130px] w-[125px] fixed bottom-5 tablet:top-[calc(50%-45px)] left-[calc(50vw-62.5px)] tablet:left-[124px]"
      />
      <div className="bg-transparent px-5 tablet:px-0 absolute z-40 tablet:top-[133px] w-full h-[calc(100%-250px)] flex items-start tablet:h-max">
        {children}
      </div>
    </main>
  );
}

import Link from "next/link";

import Image from "next/image";
import Background from "@/assets/images/home/background.png";
import LogoImage from "@/assets/images/navigation/logo.png";
import LearnImage from "@/assets/images/auth-layout/Learn.png";
import CryptoExpertImage from "@/assets/images/auth-layout/crypto-expert.png";

import GoBackLink from "@/components/ui/go-back-link";

export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <div className="bg-transparent static tablet:absolute z-30 tablet:top-[133px] w-full h-[calc(100%-270px)] flex items-start tablet:h-max">
        {children}
      </div>
    </main>
  );
}

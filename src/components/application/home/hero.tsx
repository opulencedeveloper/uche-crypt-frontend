"use client";
import Link from "next/link";
import Image from "next/image";

import Background from "@/assets/images/home/background.png";
import BankNote from "@/assets/images/home/bank-note.png";
import Signature from "@/assets/images/home/signature.png";
import Bitcoin from "@/assets/images/home/bitcoin.png";
import GreenCoin from "@/assets/images/home/green-coin.png";
import BitcoinPurple from "@/assets/images/home/bitcoin-purple.png";
import Ethereum from "@/assets/images/home/ethereum.png";
import ListImage from "@/assets/images/home/list.svg";

// Components
import SectionTitle from "../../ui/section-title";

export default function Hero() {
  return (
    <section className="w-full tablet:h-homeHero h-[calc(100vh-68px)] overflow-hidden bg-oldlace relative">
      <Image
        src={Background}
        alt=""
        className="w-full h-full absolute top-[calc(50%-84px)] left-0"
      />
      <div className="w-full flex flex-col top-0 left-0 justify-center items-center h-full absolute">
        <div className="w-759 max-w-full mb-2 relative flex flex-col items-center">
          <Image
            src={Bitcoin}
            className="absolute tablet:top-[-22px] tablet:right-[-53px] h-[124px] tablet:h-[147.95px] w-max -top-[124px] right-0"
            alt=""
          />

          <Image
            src={GreenCoin}
            className="absolute tablet:top-[62px] h-[84px] w-max tablet:left-[-86px] top-[-90px] left-[18px]"
            alt=""
          />

          <Image
            src={BitcoinPurple}
            className="absolute tablet:bottom-[-40px] bottom-[-130px] left-[21px] h-[89px] w-max tablet:left-[-34px]"
            alt=""
          />

          <Image
            src={Ethereum}
            className="absolute h-[99px] w-max tablet:bottom-[-33px] tablet:right-[-33px] bottom-[-133px] right-1"
            alt=""
          />

          <SectionTitle title="Welcome to uchecrypt" />
          <h1 className="my-2 text-center font-bold text-5xl tablet:text-62 leading-[62px] tablet:leading-80 text-deepGreen">
            Your Gateway to Cryptocurrency{" "}
            <span className="text-amber">Excellence</span>
          </h1>
          <p className="text-center font-normal text-lg tablet:text-28 leading-7 tablet:leading-42 text-dark1 mb-8">
            Learn, Connect, Stay Updated – Thrive in Digital Assets.
          </p>
          <div className="flex items-center gap-[18.35px]">
            <Image src={ListImage} alt="" />
            <Link
              className="bg-primarygreen1 h-fixed52 flex justify-center items-center text-base font-bold text-white rounded-xl px-34 gap-2"
              href="/courses"
            >
              <Image src={BankNote} alt="" /> Buy my courses
            </Link>
          </div>
        </div>
        <Image src={Signature} alt="" />
      </div>
    </section>
  );
}

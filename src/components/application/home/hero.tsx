"use client";
import Link from "next/link";
import Image from "next/image";

import Background from "@/assets/images/home/background.png";
import BankNote from "@/assets/images/home/bank-note.svg";

// Coins
import Tether from "@/assets/images/home/tether.svg";
import Ethereum from "@/assets/images/home/ethereum.svg";
import Bitcoin from "@/assets/images/home/bitcoin.svg";
import LineCoin from "@/assets/images/home/line-coin.svg";

// Components
import SectionTitle from "../../ui/section-title";

interface Params {
  courses: any[];
}

export default function Hero({ courses }: Params) {
  return (
    <section className="w-full h-max overflow-hidden bg-oldlace relative">
      <Image
        src={Background}
        alt=""
        className="w-full h-full absolute top-[calc(50%-84px)] left-0"
      />
      <div className="w-full flex flex-col top-0 left-0 justify-center items-center h-max py-[62px]">
        <div className="w-[850px] sm:max-w-[90%] max-w-full mb-2 relative flex flex-col items-center">
          <Image
            src={Tether}
            className="absolute h-max  w-[18px] mini:w-[36px]  sm:w-[88px] lg:w-max top-[-60px] lg:top-[-19px] left-[13px] lg:left-[-62px]"
            alt=""
          />
          <Image
            src={Ethereum}
            className="absolute h-max w-[30px] mini:w-[48px]  sm:w-[80px] lg:w-max top-[-14px]  sm:top-[-12px] right-[13px] lg:right-[-97.7px]"
            alt=""
          />

          <Image
            src={Bitcoin}
            className="absolute h-max w-[26px] lg:w-max bottom-[24px] mini:w-[44px] sm:w-[76px] right-[13px]  lg:bottom-0 lg:right-[-85.8px]"
            alt=""
          />
          <Image
            src={LineCoin}
            className="absolute h-max w-[21px]  lg:w-max sm:w-[70px] bottom-[24px] mini:w-[39px] lg:bottom-[-23.7px] left-[13px] lg:left-[-6.65px] translate-x-0 lg:translate-x-[-100%]"
            alt=""
          />

          <SectionTitle title="Welcome to uchecrypt" />
          <h1 className="my-2 text-center font-bold text-[28px] mini:text-4xl max-w-full md:text-[55px] md:leading-[70px]  lg:text-62 leading-10 mini:leading-[54px] lg:leading-80 text-deepGreen">
            The Ultimate <br className="lg:hidden block" /> Cryptocurrency{" "}
            <br className="sm:hidden block" /> and DeFi <br />
            <span className="text-amber">Mastery Course</span>
          </h1>
          <p className="text-center sm:max-w-[80%] max-w-[90%] mini:max-w-[280px] lg:max-w-full font-normal text-xs mini:text-base tablet:text-28 leading-7 tablet:leading-42 text-dark1 mb-4 mini:mb-8">
            Learn and Become a profitable Crypto Trader with this course
          </p>

          <Link
            className="bg-primarygreen1 mb-6 h-[45px] mini:h-fixed52 flex justify-center items-center text-xs mini:text-base font-bold text-white rounded-xl px-34 gap-2"
            href="/courses"
          >
            <Image src={BankNote} alt="" /> Buy my courses
          </Link>
        </div>
        <iframe
          className="rounded-2xl w-[850px] max-w-[calc(100%-60px)] h-max mini:h-[270px] md:h-[375px]"
          width="100%"
          height="315"
          src={courses[0]?.video_url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

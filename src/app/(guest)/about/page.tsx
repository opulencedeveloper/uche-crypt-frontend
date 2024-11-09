import Image from "next/image";
import Frame from "@/assets/images/about/frame.svg";
import Background from "@/assets/images/about/background.png";
import Signature from "@/assets/images/home/signature.svg";
import UcheCryptText from "@/assets/images/about/signature.svg";
import UcheCrypt from "@/assets/images/about/uche-crypt.png";
import NewsLetter from "@/components/application/home/news-letter";

import SectionTitle from "@/components/ui/section-title";

export default function Page() {
  return (
    <section className="mt-[46px] flex flex-col items-center">
      <SectionTitle title="About me" />
      <h2 className="mt-1 text-center font-bold text-[32px] leading-[48px] tablet:text-5xl tablet:leading-72 text-amber mb-42">
        Yes<span className="heading-gradient-text">, i’m Uche Crypt</span>
      </h2>
      <div className="w-full relative lg:mb-3 mb-2 px-[29.32px] tablet:px-[78px] max-w-[1163px] flex justify-center bg-[#FCF8ED] overflow-hidden tablet:rounded-xl h-max">
        <Image src={UcheCrypt} alt="" className="tablet:h-full h-max w-full" />
        <Image
          src={UcheCryptText}
          alt=""
          className="absolute right-[20%] bottom-[45%] lg:w-[141px] w-[53px] h-max"
        />
        <Image
          src={Frame}
          alt=""
          className="absolute  left-[35%] top-[20.41px] tablet:top-[55px] w-5 lg:w-[54px] h-max"
        />
      </div>
      <div className="w-full mb-[42px] relative max-w-[1163px] bg-[#FCF8ED] h-max pt-[22px] lg:pt-[43px] overflow-hidden">
        <Image
          src={Background}
          alt=""
          className="w-full h-max object-contain absolute bottom-0 left-0"
        />
        <div className="w-full mb-5 flex flex-col lg:px-28 px-[32px] gap-6 text-[#0B0A00] font-normal text-base leading-6">
          <p>
            I’m a passionate crypto trader who first discovered Bitcoin in 2015.
            My journey in cryptocurrency truly began in 2020 when I bought
            Ethereum, only to sell it at a loss after it crashed the same day.
            Despite this setback, I returned to the crypto space in 2021 with
            just $35, driven by a determination to learn, grow, and build
            wealth. Over time, I’ve sharpened my trading skills and deepened my
            knowledge, achieving financial freedom through crypto.
          </p>
          <p>
            {" "}
            In 2023, I started sharing my insights about Crypto to help others
            achieve similar success. With over 300k followers across YouTube,
            Twitter, TikTok, and Telegram, my content is empowering others to
            create generational wealth in crypto.
          </p>
          <p>
            Go through my telegram group and other socials and you will find
            people thanking me for helping them make money from a particular
            coin I talked about, a strategy, an Airdrop, or even a platform, the
            feedback from my community speaks for itself.
          </p>
          <p>
            My growing influence has also led to collaborations with reputable
            crypto companies and products like Bybit, Toobit, Mizar, Maestro
            Sniper Bot, Bonkbot, Umoja, and Moonberg.
          </p>
          <p>
            Join me on this journey to financial independence, and let’s build
            wealth together.
          </p>
        </div>
        <Image src={Signature} alt="" className="mb-[41px] ml-[41px]" />
      </div>
      <div className="mb-[42px] w-full max-w-[1163px] border-b border-[#E9E9E9]"></div>
      <NewsLetter />
    </section>
  );
}

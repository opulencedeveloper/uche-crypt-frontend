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
            This is Cryptocurrency Education and Product Channel, Finance,
            Blockchain and other Random Educational Content.
          </p>
          <p>
            {" "}
            I make informational and how-to videos about cryptocurrency,
            blockchain, and financial technology.
          </p>
          <p>
            My channel is about breaking down complex concepts and processes
            related to crypto, finance, and economics in ways that are easy for
            everyone to understand.
          </p>
          <p>
            Whether you are interested in learning about how bitcoin works or
            looking to buy altcoins as an investment, subscribe to my channel to
            learn more about this exciting, new technology.
          </p>
          <p>
            As you can see, my videos break things down into easy-to-follow
            steps, so everyone can enjoy. Sharing our journey and helping others
            make money online.
          </p>
          <p>
            Videos are not &apos;buy&lsquo; or &lsquo;sell&lsquo; signals of any
            kind. Investing and trading in cryptocurrencies is VERY RISKY.
          </p>
          <p>
            Subscribe to my channel and let me know what questions you have
            about bitcoin, ethereum, blockchain, tangle, or any other types of
            cryptocurrency and I&lsquo;ll be glad to help.
          </p>
        </div>
        <Image src={Signature} alt="" className="mb-[41px] ml-[41px]" />
      </div>
      <div className="mb-[42px] w-full max-w-[1163px] border-b border-[#E9E9E9]"></div>
      <NewsLetter />
    </section>
  );
}

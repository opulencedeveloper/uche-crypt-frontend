"use client";
import { useState } from "react";
import { useNewsLetter } from "@/hooks/news-letter";

import SectionTitle from "@/components/ui/section-title";

import Image from "next/image";
import RollingSpinner from "@/assets/images/home/rolling-spinner.svg";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { subscribe } = useNewsLetter();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    subscribe({ setLoading, email });
  };

  return (
    <section className="tablet:mb-42 overflow-hidden relative mb-[32px] w-full bg-[#012616] tablet:py-[75.46px] py-[51px]  flex flex-col justify-center items-center px-[15.5px] tablet:px-[67px]">
      <div
        style={{ backgroundImage: "url(/images/tron-bg.png)" }}
        className="absolute z-10 top-0 w-full h-full left-[55%] tablet:left-0 bg-contain bg-right-bottom bg-no-repeat tablet:bg-right"
      ></div>
      <div className="w-[413px] z-20 max-w-full flex flex-col items-center">
        <SectionTitle title="Newsletter" background="#00663330" color="white" />
        <h2 className="mt-1 text-center leading-[48px] text-[32px] font-bold text-white mb-8">
          Get latest with <span className="text-[#FEDA79]">UcheCrypt</span>{" "}
          <br className="block tablet:hidden" /> Vibe, Join community.
        </h2>
        <form
          onSubmit={handleFormSubmit}
          className="w-full flex flex-col gap-3"
        >
          <input
            required
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input h-[53px] outline-none text-sm font-normal text-[#828282] placeholder:text-[#828282] bg-white w-full rounded-xl py-[9px] px-3"
          />
          <button
            type="submit"
            className="w-full h-[52px] rounded-xl flex justify-center items-center bg-primarygreen1 text-white font-medium text-base"
          >
            {loading ? (
              <Image src={RollingSpinner} alt="" className=" h-7 w-max" />
            ) : (
              "Confirm"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

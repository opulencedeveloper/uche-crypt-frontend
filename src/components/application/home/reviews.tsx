"use client";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Avatar from "@/assets/images/reviews/avatar.svg";
import Star from "@/assets/images/reviews/star.svg";

import reviews from "@/resources/home/reviews.json";
import SectionTitle from "@/components/ui/section-title";

export default function Reviews() {
  const pathname = usePathname();

  return (
    <section className=" w-full pt-[41px] tablet:pb-[63px] pb-[35px] bg-[#FAFAFA] tablet:my-42 tablet:pl-[27px] mb-[46px] tablet:px-[63px] flex flex-col items-center">
      {pathname === "/" ? (
        <SectionTitle title="Reviews" />
      ) : (
        <p className="text-center text-[#6B7588] text-base tablet:text-[22px] font-normal leading-[33px]">
          Testimonies
        </p>
      )}

      <h2 className="mt-1 px-3 tablet:px-0 text-center font-bold text-[28px] tablet:text-5xl leading-[40px] tablet:leading-72 text-primarygreen1 tablet:mb-4 mb-[23px]">
        What <span className="text-amber">learners</span>{" "}
        <span className="heading-gradient-text"> are saying</span>
      </h2>
      <div className="w-full overflow-x-auto scroll-hidden">
        <div className="w-max flex gap-3 px-[27px]">
          {reviews.map((item) => {
            return (
              <div
                key={item.name}
                className="bg-white border   border-[#D1D1D6] rounded-xl px-3 py-[18px] w-[319px] h-40 flex flex-col justify-between"
              >
                <div className="flex gap-2 items-start">
                  <Image src={Avatar} alt="" className="w-8 h-8 rounded-full" />
                  <div className="flex flex-col">
                    <h2 className="text-[#3A3A3C] font-bold text-lg leading-[27px]">
                      {item.name}
                    </h2>
                    <div className="flex items-center">
                      <Image src={Star} alt="" />
                      <p className="text-[8px] leading-[13px] text-black font-bold">
                        {item.rating}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-dark1 text-sm leading-[21px] font-normal">
                  {item.message}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import StrikeThroughText from "@/components/ui/strike-through-text";

import BankNote from "@/assets/images/home/bank-note.png";
import CourseImage from "@/assets/images/course-details/course.png";

import { benefits } from "@/resources/course-details/benefits";

export default function CourseOverview() {
  return (
    <div className="w-full lg:my-42 mt-[26px] lg:gap-9 px-6 xl:px-0 items-start lg:flex-row flex-col mb-6 flex">
      <div className="lg:w-[calc(100%-508px)] w-full flex flex-col">
        <h1 className="text-dark1 font-bold text-5xl leading-72 mb-8 hidden lg:block">
          Introduction to Crypto Prt.- beginner friendly
        </h1>
        <p className="text-[22px] text-[#6B7588] leading-[33px] font-normal mb-8 hidden lg:block">
          This course is designed for the absolute beginner. No previous
          experience with Crypto is required to start.
        </p>
        <Image
          src={CourseImage}
          alt="Course Image"
          className="w-full h-max lg:mb-8 mb-6"
        />
        <h1 className="text-dark1 font-bold text-[32px] leading-[48px] mb-3 block lg:hidden">
          Introduction to Crypto Prt.- beginner friendly
        </h1>
        <p className="text-base text-[#6B7588] leading-6 font-normal mb-6 lg:hidden block">
          This course is designed for the absolute beginner. No previous
          experience with Crypto is required to start.
        </p>
        <h3 className="text-black font-medium text-lg lg:text-[22px] leading-7 lg:leading-[33px] mb-6 lg:mb-8">
          Who is the course for?
        </h3>
        <p className="lg:text-[22px] text-base text-[#6B7588] leading-6 mb-6 lg:mb-0 lg:leading-[33px] font-normal">
          Anyone looking to build a successful Crypto Space. Anyone who has
          never heard crypto before or wants to improve his or her knowledge.
        </p>
      </div>
      <div className="w-[472px] max-w-full p-6 bg-[#FAFAFA] rounded-xl">
        <div className="w-full flex flex-col gap-4 lg:mb-[22px]">
          {benefits.map((item) => {
            return (
              <div key={item.title} className="flex items-center gap-2">
                <Image src={item.image} alt="" className="w-6 h-6" />
                <p className="text-dark1 font-medium text-[22px] leading-[33px]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="lg:flex hidden flex-col mb-[26px]">
          <h2 className="text-black font-bold text-[62px] leading-[45px]">
            $34
          </h2>
          <StrikeThroughText />
        </div>
        <button className="bg-primarygreen1 hidden h-fixed52 w-full lg:flex justify-center items-center text-base font-bold text-white rounded-xl px-34 gap-2">
          <Image src={BankNote} alt="" /> Buy course
        </button>
      </div>
    </div>
  );
}

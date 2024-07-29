import Image from "next/image";

import StrikeThroughText from "@/components/ui/strike-through-text";

import BankNote from "@/assets/images/home/bank-note.png";

import { benefits } from "@/resources/course-details/benefits";

interface Params {
  course: any;
}

export default function CourseOverview({ course }: Params) {
  return (
    <div className="w-full lg:my-42 mt-[26px] lg:gap-9 px-6 xl:px-0 items-start lg:flex-row flex-col mb-6 flex">
      <div className="lg:w-[calc(100%-508px)] w-full flex flex-col">
        <h1 className="text-dark1 font-bold text-5xl leading-72 mb-8 hidden lg:block">
          {course.title}
        </h1>
        <p className="text-[22px] text-[#6B7588] leading-[33px] font-normal mb-8 hidden lg:block">
          {course.description}
        </p>

        <iframe
          className="rounded-[6px] h-[221px] lg:h-[350px] lg:mb-8 mb-6"
          width="100%"
          src={course.video_url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

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
          {course.introduction}
        </p>
      </div>
      <div className="w-[472px] max-w-full p-6 bg-[#FAFAFA] rounded-xl">
        <div className="w-full flex flex-col gap-4 lg:mb-[22px]">
          {benefits.map((item) => {
            if (course.details.includes(item.title)) {
              return (
                <div key={item.title} className="flex items-center gap-2">
                  <Image src={item.image} alt="" className="w-6 h-6" />
                  <p className="text-dark1 font-medium text-[22px] leading-[33px]">
                    {item.title}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div className="lg:flex hidden flex-col mb-[26px]">
          <h2 className="text-black font-bold text-[62px] leading-[45px]">
            ${course.price}
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

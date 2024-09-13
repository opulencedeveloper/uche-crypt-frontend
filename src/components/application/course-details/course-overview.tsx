import Image from "next/image";

import StrikeThroughText from "@/components/ui/strike-through-text";

import BankNote from "@/assets/images/home/bank-note.svg";

import { benefits } from "@/resources/course-details/benefits";

interface Params {
  course: any;
  bought: boolean;
  handleBuyCourse: () => void;
}

export default function CourseOverview({
  course,
  handleBuyCourse,
  bought,
}: Params) {
  return (
    <div className="w-full lg:my-42 mt-3.5 mini:mt-[26px] lg:gap-9 px-6 xl:px-0 items-start lg:flex-row flex-col mb-6 flex">
      <div className="lg:w-[calc(100%-508px)] w-full flex flex-col">
        <h1 className="text-dark1 font-bold tablet:text-[48px] tablet:leading-72 mb-8 hidden lg:block">
          {course.title}
        </h1>
        <h1 className="text-dark1 font-bold text-lg mini:text-[28px] mini:leading-[40px] mb-3 block lg:hidden">
          {course.title}
        </h1>
        <p className="text-[22px] text-[#6B7588] leading-[33px] font-normal mb-8 hidden lg:block">
          {course.description}
        </p>

        <p className="mini:text-base text-[#6B7588] text-sm mini:leading-6 font-normal mb-6 lg:hidden block">
          This course is designed for the absolute beginner. No previous
          experience with Crypto is required to start.
        </p>
        <h3 className="text-black font-medium text-base mini:text-lg lg:text-[22px] mini:leading-7 lg:leading-[33px] mb-4">
          Who is the course for?
        </h3>
        <p className="lg:text-[22px] text-sm mini:text-base text-[#6B7588] mini:leading-6 mb-6 lg:mb-0 lg:leading-[33px] font-normal">
          {course.introduction}
        </p>
      </div>
      <div className="w-[472px] max-w-full p-4 mini:p-6 bg-[#FAFAFA] rounded-xl">
        <div className="w-full flex flex-col gap-2 mini:gap-4 lg:mb-[22px]">
          {benefits.map((item) => {
            if (course.details.includes(item.title)) {
              return (
                <div key={item.title} className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt=""
                    className="mini:w-6 mini:h-6 h-max w-3.5"
                  />
                  <p className="text-dark1 font-medium tablet:text-[22px] text-sm mini:text-lg leading-7 tablet:leading-[33px]">
                    {item.title}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div className="flex mt-4 mini:mt-[22px] flex-col mb-5 mini:mb-[26px]">
          <h2 className="text-black font-bold text-[30px] mini:text-[40px] leading-5 mini:leading-7 tablet:text-[62px] tablet:leading-[45px]">
            ${course.price}
          </h2>
          <StrikeThroughText />
        </div>
        <button
          onClick={handleBuyCourse}
          className="bg-primarygreen1 h-11 mini:h-fixed52 w-full flex justify-center items-center text-[13px] mini:text-base font-bold text-white rounded-xl px-34 gap-2"
        >
          {bought ? (
            <>Go to course</>
          ) : (
            <>
              <Image src={BankNote} alt="" /> Buy course
            </>
          )}
        </button>
      </div>
    </div>
  );
}

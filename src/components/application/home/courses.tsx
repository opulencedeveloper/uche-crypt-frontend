import Link from "next/link";
import Image from "next/image";

import BankNote from "@/assets/images/home/bank-note.svg";
import ArrowRight from "@/assets/images/home/arrow-narrow-up-right.svg";

import SectionTitle from "@/components/ui/section-title";

interface MyCoursesParams {
  courses: any;
}

export default function MyCourses({ courses }: MyCoursesParams) {
  const course = courses;

  return (
    <section className="bg-white w-full py-8 flex justify-center">
      <div className="w-[calc(100%-54px)] max-w-[1022px] lg:flex-row flex-col items-center flex justify-between gap-4">
        <div className="w-full flex flex-col items-center sm:items-start">
          <SectionTitle title="My courses" />

          <h2 className="mt-2 font-bold md:text-4xl text-xl mini:text-3xl lg:text-5xl sm:text-start text-center lg:leading-72 text-amber mb-4 sm:mb-[31px]">
            <span className="heading-gradient-text">
              {" "}
              Ready to Explore Crypto?
            </span>
            <br />
            Buy my course&quot;!
          </h2>
          <Link
            className="bg-primarygreen1 mb-6 h-[45px] mini:h-fixed52 flex justify-center items-center text-xs mini:text-base font-bold text-white rounded-xl px-34 gap-2"
            href="/courses"
          >
            <Image src={BankNote} alt="" /> Buy my courses
          </Link>
        </div>
        <div className="w-338 max-w-full lg:max-w-none min-w-0 lg:min-w-[338px] h-max mini:h-394 rounded-xl border border-[#D1D1D6] bg-[#FFFEF9] p-2 mini:py-4 mini:px-3 flex flex-col items-center gap-2 justify-between">
          <iframe
            className="rounded-lg"
            width="100%"
            height="168"
            src={course?.video_url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <h3 className="font-bold text-black text-sm mini:text-lg mini:leading-[27px]">
            {course?.title}
          </h3>
          <p className="text-dark1 truncate-lines font-normal text-xs mini:text-sm mini:leading-[21px] pr-2">
            {course?.description?.length < 156
              ? course.description
              : course?.description?.slice(0, 156) + "..."}
          </p>
          <div className="w-full border-b border-[#EAEAEA]"></div>
          <div className="w-full flex items-center justify-between">
            <Link
              href={`/courses/${course?.slug}`}
              className="flex items-center gap-1 text-primarygreen1"
            >
              <p className="mini:text-base text-sm font-normal">Learn more</p>{" "}
              <Image src={ArrowRight} alt="" />
            </Link>
            <h2 className="font-bold text-lg mini:text-[22px] text-black">
              ${course?.price}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

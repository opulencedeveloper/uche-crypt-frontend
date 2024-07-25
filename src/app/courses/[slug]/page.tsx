import GuestLayout from "@/layouts/guest";

import Reviews from "@/components/application/home/reviews";
import RenderCourses from "@/components/application/course-details/render-courses";
import CourseContent from "@/components/application/course-details/course-content";

import Image from "next/image";
import BankNote from "@/assets/images/home/bank-note.png";

export default function Page({ params }: any) {
  return (
    <GuestLayout>
      <CourseContent />
      <Reviews />
      <section className="bg-white mb-42 w-full flex justify-center">
        <div className="w-full max-w-[1150px] flex flex-col">
          <h2 className="text-black px-6 xl:px-0 font-bold text-[32px] leading-[48px] mb-3 lg:mb-8">
            Other courses
          </h2>
          <RenderCourses />
        </div>
      </section>
      <div className="w-screen h-[72px] bg-primarygreen1 fixed bottom-0 left-0 lg:hidden flex justify-between items-center px-6">
        <h1 className="text-[32px] leading-[48px] text-[#57EBA1] font-bold">
          $34
        </h1>
        <button className="bg-transparent w-max flex justify-center items-center text-base font-normal text-white gap-2">
          <Image src={BankNote} alt="" /> Buy course
        </button>
      </div>
    </GuestLayout>
  );
}

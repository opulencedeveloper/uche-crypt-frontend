"use client";
import { useLearning } from "@/contexts/learning";
import { useUser } from "@/contexts/user";
import { useEffect, useState } from "react";
import Image from "next/image";

import GoBackLink from "@/components/ui/go-back-link";
import CourseOverview from "./course-overview";

import PlayButton from "@/assets/images/course-details/play-circle.svg";
import BankNote from "@/assets/images/home/bank-note.svg";
import Contents from "./contents";

import { useRouter } from "next/navigation";
import PaymentModal from "./payment-modal";

interface Params {
  course: any;
}

export default function CourseContent({ course }: Params) {
  const [bought, setBought] = useState(false);
  const [paymentModalVisibility, setPaymentModalVisibility] = useState(false);

  const { courses }: any = useLearning();
  const { user }: any = useUser();

  const router = useRouter();

  const handleBuyCourse = () => {
    if (bought) {
      router.push("/my-learning/" + course._id);
      return;
    }

    setPaymentModalVisibility(true);
  };

  useEffect(() => {
    if (user) {
      courses.forEach((item: any) => {
        if (item._id === course._id) {
          setBought(true);
        }
      });
    }
  }, [user]);

  return (
    <>
      <PaymentModal
        courseId={course?._id || ""}
        amount={course?.price || 0}
        open={paymentModalVisibility}
        setOpen={setPaymentModalVisibility}
      />
      <div className="w-screen z-30 h-[72px] bg-primarygreen1 fixed bottom-0 left-0 lg:hidden flex justify-between items-center px-6">
        <h1 className="text-[32px] leading-[48px] text-[#57EBA1] font-bold">
          ${course.price}
        </h1>
        <button
          onClick={handleBuyCourse}
          className="bg-transparent w-max flex justify-center items-center text-base font-normal text-white gap-2"
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
      <section className="w-full mt-[38px] flex justify-center">
        <div className="flex flex-col w-full max-w-[1174px]">
          <GoBackLink />
          <CourseOverview
            bought={bought}
            handleBuyCourse={handleBuyCourse}
            course={course}
          />
          {/* <div className="relative px-6 xl:px-0 h-max lg:h-[467px] w-full rounded-[22px] mb-6 lg:mb-8 overflow-hidden">
          <Image
            src={CourseImage}
            alt="Course Image"
            className="w-full lg:h-full h-max object-cover "
          />
          <button>
            <Image
              src={PlayButton}
              alt=""
              className="absolute lg:w-[105px] lg:h-[105px] w-[79px] h-[79px] top-[calc(50%-52.5px)] left-[calc(50%-52.5px)]"
            />
          </button>
        </div> */}

          <div className="w-full px-6 xl:px-0">
            <iframe
              className="mini:h-[221px] bg-black h-max lg:h-[467px] rounded-[6px] lg:rounded-[22px] mb-6 lg:mb-8"
              width="100%"
              src={`${course.video_url}?loop=false&amp;autoplay=false&amp;muted=false&amp;gesture=media&amp;playsinline=true&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=false&amp;customControls=true`}
              title="Player for 2. Types of Trading"
              data-ready="true"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
              allowFullScreen
            ></iframe>
          </div>

          <Contents
            bought={bought}
            handleBuyCourse={handleBuyCourse}
            contents={course.course_content}
          />
        </div>
      </section>
    </>
  );
}

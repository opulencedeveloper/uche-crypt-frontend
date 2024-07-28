import Image from "next/image";

import GoBackLink from "@/components/ui/go-back-link";
import CourseOverview from "./course-overview";

import PlayButton from "@/assets/images/course-details/play-cricle.png";
import CourseImage from "@/assets/images/course-details/course.png";
import Contents from "./contents";

interface Params {
  course: any;
}

export default function CourseContent({ course }: Params) {
  return (
    <section className="w-full mt-[38px] flex justify-center">
      <div className="flex flex-col w-full max-w-[1174px]">
        <GoBackLink />
        <CourseOverview course={course} />
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

        <iframe
          className="h-max lg:h-[467px] rounded-[22px] mb-6 lg:mb-8"
          width="100%"
          src={course.video_url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <Contents contents={course.course_content} />
      </div>
    </section>
  );
}

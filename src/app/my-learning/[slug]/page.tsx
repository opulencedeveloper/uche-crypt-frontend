import GuestLayout from "@/layouts/guest";

import GoBackLink from "@/components/ui/go-back-link";
import RenderCourses from "@/components/application/course-details/render-courses";
import SearchField from "@/components/application/search-field";
import CourseSections from "@/components/application/my-learning/course-sections";

import Video from "@/components/application/my-learning/video";

export default function Page({ params }: any) {
  return (
    <GuestLayout>
      <section className="w-full mt-[38px] flex justify-center pb-[142px]">
        <div className="flex flex-col w-full max-w-[1150px]">
          <GoBackLink />

          <div className="w-full hidden lg:flex justify-between mb-3 mt-8">
            <div className="h-9 w-[361px]">
              <SearchField />
            </div>
          </div>

          <div className="w-full px-6 xl:px-0 lg:flex-row flex-col gap-[17px] items-start mb-16 flex">
            <CourseSections />

            <Video />
          </div>

          <div className="w-full flex flex-col">
            <h2 className="text-black px-6 xl-px-0 font-bold text-[32px] leading-[48px] mb-8">
              Other courses
            </h2>
            <RenderCourses />
          </div>
        </div>
      </section>
    </GuestLayout>
  );
}

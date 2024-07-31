import GoBackLink from "@/components/ui/go-back-link";
import RenderCourses from "@/components/application/course-details/render-courses";

import CourseOverview from "@/components/application/my-learning/course-overview";

export default function Page({ params }: any) {
  return (
    <section className="w-full mt-[38px] flex justify-center pb-[142px]">
      <div className="flex flex-col w-full max-w-[1150px]">
        <GoBackLink />

        <CourseOverview slug={params.slug} />

        <div className="w-full flex flex-col">
          <h2 className="text-black px-6 xl-px-0 font-bold text-[32px] leading-[48px] mb-8">
            Other courses
          </h2>
          <RenderCourses courses={[]} />
        </div>
      </div>
    </section>
  );
}

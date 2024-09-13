import GoBackLink from "@/components/ui/go-back-link";

import CourseOverview from "@/components/application/my-learning/course-overview";

export default function Page({ params }: any) {
  return (
    <section className="w-full mt-6 mini:mt-[38px] flex justify-center pb-[142px]">
      <div className="flex flex-col w-full max-w-[1150px]">
        <GoBackLink />

        <CourseOverview slug={params.slug} />
      </div>
    </section>
  );
}

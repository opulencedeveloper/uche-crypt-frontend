import GoBackLink from "@/components/ui/go-back-link";

import EnrolledCourses from "@/components/application/my-learning/enrolled-courses";

export default function Page() {
  return (
    <section className="w-full mt-[24px] mini:mt-[38px] flex justify-center pb-8 lg:pb-[142px]">
      <div className="flex flex-col w-full max-w-[1150px]">
        <GoBackLink path="/" />

        <EnrolledCourses />
      </div>
    </section>
  );
}

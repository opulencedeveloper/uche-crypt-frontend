import GoBackLink from "@/components/ui/go-back-link";
import AllCourses from "@/components/application/course-details/all-courses";

import { getCourses } from "@/resources/home/get-courses";

export default async function Page() {
  const courses = await getCourses();

  return (
    <section className="w-full mt-6 mini:mt-[38px] flex justify-center pb-8 sm:pb-[142px]">
      <div className="flex flex-col w-full max-w-[1150px]">
        <GoBackLink />

        <AllCourses courses={courses?.data || []} />
      </div>
    </section>
  );
}

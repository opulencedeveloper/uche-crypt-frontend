import GoBackLink from "@/components/ui/go-back-link";
import RenderCourses from "@/components/application/course-details/render-courses";
import SearchField from "@/components/application/search-field";

export default function Page() {
  return (
    <section className="w-full mt-[38px] flex justify-center pb-8 sm:pb-[142px]">
      <div className="flex flex-col w-full max-w-[1150px]">
        <GoBackLink />

        <div className="w-full px-6 xl:px-0 lg:flex-row flex-col gap-y-8  flex justify-between my-8">
          <h2 className="text-black font-bold text-[32px] leading-[48px] ">
            Online Courses
          </h2>

          <div className="h-9 w-[361px] max-w-full">
            <SearchField />
          </div>
        </div>

        <RenderCourses />
      </div>
    </section>
  );
}

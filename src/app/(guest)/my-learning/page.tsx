import GoBackLink from "@/components/ui/go-back-link";
import RenderCourses from "@/components/application/course-details/render-courses";

export default function Page() {
  return (
    <section className="w-full mt-[38px] flex justify-center pb-8 lg:pb-[142px]">
      <div className="flex flex-col w-full max-w-[1150px]">
        <GoBackLink />

        <div className="w-full px-6 xl-px-0  flex justify-between mb-3 mt-6 lg:mt-8">
          <h2 className="text-black font-bold text-[32px] leading-[48px] ">
            My learning <span className="text-[#6B7588]">(3)</span>
          </h2>
        </div>

        <RenderCourses />
      </div>
    </section>
  );
}

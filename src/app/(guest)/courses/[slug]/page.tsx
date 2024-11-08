import Reviews from "@/components/application/home/reviews";
import CourseContent from "@/components/application/course-details/course-content";
import { getCourse } from "@/resources/home/get-courses";

export default async function Page({ params }: any) {
  const course = await getCourse(params.slug);

  return (
    <section className="w-full">
      {course ? (
        <>
          <CourseContent course={course?.data} />
          <Reviews />
        </>
      ) : (
        <div className="w-full items-center py-24 px-5 flex justify-center">
          <h2 className="tablet:text-4xl text-2xl font-bold text-center text-dark1">
            Error fetching course
          </h2>
        </div>
      )}
    </section>
  );
}

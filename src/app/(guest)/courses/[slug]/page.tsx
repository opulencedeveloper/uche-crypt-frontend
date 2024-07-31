import Reviews from "@/components/application/home/reviews";
import RenderCourses from "@/components/application/course-details/render-courses";
import CourseContent from "@/components/application/course-details/course-content";

export default async function Page({ params }: any) {
  const courses = await getCourses();
  const course = await getCourse(params.slug);

  return (
    <section className="w-full">
      {course ? (
        <>
          <CourseContent course={course.data} />
          <Reviews />
          <section className="bg-white mb-42 w-full flex justify-center">
            <div className="w-full max-w-[1150px] flex flex-col">
              <h2 className="text-black px-6 xl:px-0 font-bold text-[32px] leading-[48px] mb-3 lg:mb-8">
                Other courses
              </h2>
              <RenderCourses courses={courses?.data} />
            </div>
          </section>
        </>
      ) : (
        <div className="w-full py-16 flex justify-center">
          <h2 className="text-4xl font-bold text-dark1">404</h2>
        </div>
      )}
    </section>
  );
}

async function getCourse(slug: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/course/" + slug,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (res.ok) {
    return res.json();
  }
}

async function getCourses() {
  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/courses", {
    next: {
      revalidate: 60,
    },
  });

  if (res.ok) {
    return res.json();
  }
}

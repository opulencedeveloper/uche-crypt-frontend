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
              <h2 className="text-black px-6 xl:px-0 font-bold text-[28px] leading-[40px] tablet:text-[32px] tablet:leading-[48px] mb-3 lg:mb-8">
                Other courses
              </h2>
              <RenderCourses courses={courses?.data || []} />
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
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/course/" + slug,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    if (!res.ok) {
      console.error("Failed to fetch course:", res.status, res.statusText);
      return null; // Fallback to null if course fetching fails
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching course:", error);
    return null; // Return null in case of error
  }
}

async function getCourses() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/courses", {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch courses:", res.status, res.statusText);
      return null; // Fallback to null if courses fetching fails
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
    return null; // Return null in case of error
  }
}

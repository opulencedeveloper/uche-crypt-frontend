import GoBackLink from "@/components/ui/go-back-link";
import AllCourses from "@/components/application/course-details/all-courses";

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

async function getCourses() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/courses", {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    return null;
  }
}

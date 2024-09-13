import Hero from "@/components/application/home/hero";
import MyCourses from "@/components/application/home/courses";
import Reviews from "@/components/application/home/reviews";
import MyYouTubeChannel from "@/components/application/home/my-youtube";
import NewsLetter from "@/components/application/home/news-letter";

export default async function Page() {
  const courses = await getCourses();
  const youtubeCourses = await getYoutubeCourses();

  return (
    <>
      <Hero courses={courses?.data} />
      <MyCourses courses={courses?.data} />
      <Reviews />
      <MyYouTubeChannel youtubeVideos={youtubeCourses?.data} />
      <NewsLetter />
    </>
  );
}

async function getCourses() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/courses", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Error fetching courses: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    return null; // Return null or an empty object as a fallback
  }
}

async function getYoutubeCourses() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/courses/youtube",
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Error fetching YouTube courses: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    return null; // Return null or an empty object as a fallback
  }
}

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
      <Hero />
      <MyCourses courses={courses?.data} />
      <Reviews />
      <MyYouTubeChannel youtubeVideos={youtubeCourses?.data} />
      <NewsLetter />
    </>
  );
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

async function getYoutubeCourses() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/courses/youtube",
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

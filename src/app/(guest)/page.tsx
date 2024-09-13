import Hero from "@/components/application/home/hero";
import MyCourses from "@/components/application/home/courses";
import Reviews from "@/components/application/home/reviews";
import MyYouTubeChannel from "@/components/application/home/my-youtube";
import NewsLetter from "@/components/application/home/news-letter";

import { getYoutubeCourses, getCourses } from "@/resources/home/get-courses";

export default async function Page() {
  const courses = await getCourses();
  const youtubeCourses = await getYoutubeCourses();

  const course = courses?.data ? courses.data[0] : null;

  return (
    <>
      <Hero courses={course} />
      <MyCourses courses={course} />
      <Reviews />
      <MyYouTubeChannel youtubeVideos={youtubeCourses?.data} />
      <NewsLetter />
    </>
  );
}

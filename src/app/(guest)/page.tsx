import Hero from "@/components/application/home/hero";
import MyCourses from "@/components/application/home/courses";
import Reviews from "@/components/application/home/reviews";
import MyYouTubeChannel from "@/components/application/home/my-youtube";
import NewsLetter from "@/components/application/home/news-letter";

import { getYoutubeCourses, getCourses } from "@/resources/home/get-courses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto currency and memecoin /defi mastery course",
  description:
    "This comprehensive program is designed for beginners and enthusiasts alike, offering in-depth insights into cryptocurrency, memecoins, decentralized finance (DeFi), and blockchain technology. Our expert-led course covers everything from crypto fundamentals to advanced strategies, ensuring you gain the skills to thrive in the world of digital assets. With hands-on training, real-world case studies, and a supportive learning community, you'll master trading, investing, and navigating the crypto landscape.",
  keywords: [
    "Cryptocurrency course",
    "Memecoin",
    "DeFi mastery",
    "digital finance",
    "blockchain technology",
    "crypto investing",
    "decentralized finance",
    "learn crypto",
  ],
};

export default async function Page() {
  const courses = await getCourses();
  const youtubeCourses = await getYoutubeCourses();

  const course = courses?.data ? courses.data[0] : null;

  return (
    <>
      <Hero course={course} />
      <MyCourses courses={course} />
      <Reviews />
      <MyYouTubeChannel youtubeVideos={youtubeCourses?.data} />
      <NewsLetter />
    </>
  );
}

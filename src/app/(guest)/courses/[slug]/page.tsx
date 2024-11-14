import Reviews from "@/components/application/home/reviews";
import CourseContent from "@/components/application/course-details/course-content";
import { getCourse } from "@/resources/home/get-courses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Complete Guide to Cryptocurrency and DeFi Mastery",
  description:
    "Enroll in Cryptocurrency and Memecoin/DeFi Mastery Course and gain the knowledge and skills to profit confidently in the crypto market. This course simplifies complex crypto concepts, guiding you step-by-step from beginner to expert, whether you’re entirely new or already knowledgeable. Learn how to avoid common mistakes, understand DeFi, and apply proven strategies for building wealth in cryptocurrency. Ideal for beginners, aspiring crypto enthusiasts, and anyone seeking to create generational wealth, this course provides the insights and tools you need to start making money from crypto today.",
  keywords: [
    "Buy crypto course",
    "Cryptocurrency mastery",
    "DeFi mastery course",
    "crypto for beginners",
    "learn cryptocurrency",
    "build generational wealth",
    "make money with crypto",
    "crypto investment strategies",
    "wallet",
    "bitcoin",
    "binance",
    "bybit",
    "spot trading",
    "futures trading",
    "profit",
    "crypto withdrawal",
    "blockchain",
    "solana",
    "ethereum",
    "coins",
    "tokenomics",
    "coinmarketcap",
    "memecoins",
    "trading",
  ],
};

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

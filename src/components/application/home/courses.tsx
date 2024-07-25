import Link from "next/link";
import Image from "next/image";

import MemeCombat from "@/assets/images/home/meme-combat.png";
import ArrowRight from "@/assets/images/home/arrow-narrow-up-right.png";
import ArrowRightGreen from "@/assets/images/home/arrow-narrow-up-right-green.png";

import SectionTitle from "@/components/ui/section-title";

interface MyCoursesParams {
  courses: any;
}

export default function MyCourses({ courses }: MyCoursesParams) {
  return (
    <section className="bg-white w-full py-0 tablet:py-37 my-10 tablet:my-42 pl-[25px] tablet:px-67 flex flex-col items-center">
      <SectionTitle title="My courses" />
      <h2 className="mt-1 block tablet:hidden  text-center font-bold text-[32px]  leading-[48px] text-amber mb-6">
        <span className="heading-gradient-text">Excited to dive into</span>{" "}
        <br /> <span className="heading-gradient-text">the world of</span>{" "}
        crypto?
      </h2>
      <h2 className="mt-1 tablet:block hidden  text-center font-bold text-5xl leading-72 text-amber mb-6">
        <span className="heading-gradient-text"> Ready to Explore Crypto?</span>
        <br />
        Buy my course&quot;!
      </h2>
      <div className="w-full overflow-x-auto mb-[43px] scroll-hidden">
        <div className="w-max pr-[25px] flex gap-3">
          {/* Here You map Through the Courses */}
          {courses.map((item: any) => {
            return (
              <div
                key={item._id}
                className="w-338 h-394 rounded-xl border border-[#D1D1D6] bg-[#FFFEF9] py-4 px-3 flex flex-col items-center gap-2 justify-between"
              >
                <iframe
                  className="rounded-lg"
                  width="100%"
                  height="315"
                  src={item.video_url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <h3 className="font-bold text-black text-lg leading-[27px]">
                  {item.title}
                </h3>
                <p className="text-dark1 font-normal text-sm leading-[21px] pr-2">
                  {item.description}
                </p>
                <div className="w-full border-b border-[#EAEAEA]"></div>
                <div className="w-full flex items-center justify-between">
                  <Link
                    href={`/courses/${item.slug}`}
                    className="flex items-center gap-1 text-primarygreen1"
                  >
                    <p className="text-base font-normal">Learn more</p>{" "}
                    <Image src={ArrowRight} alt="" />
                  </Link>
                  <h2 className="font-bold text-[22px] text-black">
                    ${item.price}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link href="" className="flex items-center gap-1 text-primarygreen1">
        <p className="text-base font-normal">See all courses</p>{" "}
        <Image src={ArrowRightGreen} alt="" />
      </Link>
    </section>
  );
}

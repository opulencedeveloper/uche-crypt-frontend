import Image from "next/image";
import Link from "next/link";

import SectionTitle from "@/components/ui/section-title";

import ArrowRightGreen from "@/assets/images/home/arrow-narrow-up-right-green.png";

export default function MyYouTubeChannel({
  youtubeVideos,
}: {
  youtubeVideos: any;
}) {
  return (
    <section className="tablet:mb-42 mb-[22px] w-full my-youtube-section py-9 tablet:py-34 flex flex-col items-center pl-6 tablet:px-[67px]">
      <SectionTitle title="My youtube" background="#FFCBCB" color="#E53535" />
      <h2 className="mb-6 pr-6 tablet:pr-0 text-center leading-[40px] tablet:leading-72 text-[28px] tablet:text-5xl font-bold text-dark1">
        Get more <span className="text-[#840910]">update</span> from my{" "}
        <br className="hidden tablet:block" /> Youtube channel
      </h2>
      <div className="w-full overflow-x-auto mb-6 scroll-hidden">
        <div className="w-max flex gap-3 pr-6">
          {/* Here You map Through the Courses */}
          {youtubeVideos.map((item: any) => {
            return (
              <Link
                href={item.video_url}
                key={item._id}
                className="w-[324px] h-[200px] rounded-xl border border-[#D1D1D6] bg-white p-1 flex justify-center items-center"
              >
                <iframe
                  className="rounded-lg"
                  width="100%"
                  height="100%"
                  src={item.video_url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Link>
            );
          })}
        </div>
      </div>
      <Link
        href="https://youtube.com/@uchecrypt"
        className="flex items-center gap-1 text-primarygreen1"
      >
        <p className="text-base font-normal">Go to my channel</p>{" "}
        <Image src={ArrowRightGreen} alt="" />
      </Link>
    </section>
  );
}

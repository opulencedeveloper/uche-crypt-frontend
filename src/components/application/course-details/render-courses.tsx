import Link from "next/link";

import Image from "next/image";
import ArrowRight from "@/assets/images/home/arrow-narrow-up-right.svg";

export default function RenderCourses({
  courses,
  bought,
}: {
  courses: any;
  bought?: boolean;
}) {
  return (
    <div className="w-full px-6 xl:px-0 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-4 sm:gap-y-8">
      {/* Here You map Through the Courses */}
      {courses.map((item: any) => {
        return (
          <div
            key={item?._id}
            className=" mini:h-394 h-max rounded-xl border border-[#D1D1D6] bg-white p-2 mini:p-4 flex flex-col items-center gap-2 justify-between"
          >
            <iframe
              className="rounded-[6px] bg-black"
              width="100%"
              height="168"
              src={`${item?.video_url}?loop=false&amp;autoplay=false&amp;muted=false&amp;gesture=media&amp;playsinline=true&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=false&amp;customControls=true`}
              data-ready="true"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
              allowFullScreen
            ></iframe>
            <Link
              className="w-full flex flex-col gap-2"
              href={
                bought ? `/my-learning/${item._id}` : `/courses/${item.slug}`
              }
            >
              <h3 className="font-bold text-black mini:text-lg text-sm mini:leading-[27px] pr-4">
                {item?.title}
              </h3>
              <p className="text-dark1 font-normal text-xs mini:text-sm mini:leading-[21px] pr-2">
                {item?.description?.length < 156
                  ? item.description
                  : item?.description?.slice(0, 156) + "..."}
              </p>
              <span className="w-full border-b border-[#EAEAEA]"></span>
              <span className="w-full flex items-center justify-between">
                <span className="flex items-center gap-1 text-primarygreen1">
                  <p className="mini:text-base text-sm font-normal">
                    {bought ? "Go to course" : "Learn more"}
                  </p>{" "}
                  <Image src={ArrowRight} alt="" />
                </span>
                {!bought && (
                  <h2 className="font-bold text-lg mini:text-[22px] text-black">
                    ${item.price}
                  </h2>
                )}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

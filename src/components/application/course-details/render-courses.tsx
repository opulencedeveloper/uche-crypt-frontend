import Link from "next/link";

import Image from "next/image";
import MemeCombat from "@/assets/images/home/meme-combat.png";
import ArrowRight from "@/assets/images/home/arrow-narrow-up-right.png";

const courses = new Array(9).fill(crypto.randomUUID());

export default function RenderCourses() {
  return (
    <div className="w-full px-6 xl:px-0 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-4 sm:gap-y-8">
      {/* Here You map Through the Courses */}
      {courses.map((item) => {
        return (
          <div
            key={item}
            className=" h-394 rounded-xl border border-[#D1D1D6] bg-white p-4 flex flex-col items-center gap-2 justify-between"
          >
            <Image
              src={MemeCombat}
              alt=""
              className="w-full h-[168px] object-cover rounded-[6px]"
            />
            <h3 className="font-bold text-black text-lg leading-[27px] pr-4">
              Introduction to Crypto Prt.- beginner friendly
            </h3>
            <p className="text-dark1 font-normal text-sm leading-[21px] pr-2">
              This course is designed for the absolute beginner. No previous
              experience with Crypto is required to start.
            </p>
            <div className="w-full border-b border-[#EAEAEA]"></div>
            <div className="w-full flex items-center justify-between">
              <Link
                href=""
                className="flex items-center gap-1 text-primarygreen1"
              >
                <p className="text-base font-normal">Learn more</p>{" "}
                <Image src={ArrowRight} alt="" />
              </Link>
              <h2 className="font-bold text-[22px] text-black">$35</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

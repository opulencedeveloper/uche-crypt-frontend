import Image from "next/image";
import PlayButton from "@/assets/images/course-details/play-cricle.png";

export default function Video() {
  return (
    <div className="lg:w-[516px] w-full border border-[#D1D1D6] bg-black rounded-xl h-[340px] hidden lg:flex justify-center items-center">
      <button>
        <Image src={PlayButton} alt="" width={53} height={53} className="" />
      </button>
    </div>
  );
}

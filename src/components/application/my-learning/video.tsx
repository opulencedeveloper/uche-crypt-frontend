import Image from "next/image";
import PlayButton from "@/assets/images/course-details/play-cricle.png";

interface Params {
  url: string;
}

export default function Video({ url }: Params) {
  return (
    <>
      {/* <div className="lg:w-[516px] w-full border border-[#D1D1D6] bg-black rounded-xl h-[340px] hidden lg:flex justify-center items-center">
      <button>
        <Image src={PlayButton} alt="" width={53} height={53} className="" />
      </button>
    </div> */}

      <iframe
        id="video-box"
        className="lg:w-[516px] w-full border border-[#D1D1D6] bg-black mt-5 lg:mt-0 rounded-xl h-[255px] lg:h-[340px] "
        width="100%"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

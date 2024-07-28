import Image from "next/image";
import SearchImage from "@/assets/images/search.png";
import Microphone from "@/assets/images/voice.png";

interface Params {
  value: string;
  setValue: (value: string) => void;
}

export default function SearchField({ value, setValue }: Params) {
  return (
    <div className="relative px-2 w-full h-full rounded-[10px] bg-[#7676801F] flex items-center justify-between">
      <div className="w-[25px]">
        <Image src={SearchImage} alt="" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[calc(100%-42px)] text-[#3C3C4399] placeholder:text-[#3C3C4399] text-[17px] font-normal bg-transparent outline-none"
        placeholder="Search"
      />
      <button>
        <Image src={Microphone} alt="" />
      </button>
    </div>
  );
}

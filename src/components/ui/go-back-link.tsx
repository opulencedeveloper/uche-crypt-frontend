"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowLeft from "@/assets/images/arrow-left.svg";

interface Params {
  path?: string;
}

export default function GoBackLink({ path }: Params) {
  const router = useRouter();

  const handleBackClick = () => {
    if (path) {
      router.push(path);
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleBackClick}
      className="flex w-max items-center gap-1 text-dark1 text-sm mini:text-base font-normal pl-6 xl:pl-0"
    >
      <Image src={ArrowLeft} alt="" /> Back
    </button>
  );
}

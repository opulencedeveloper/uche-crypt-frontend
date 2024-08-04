"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ArrowLeft from "@/assets/images/arrow-left.svg";

export default function GoBackLink() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex w-max items-center gap-1 text-dark1 text-base font-normal pl-6 xl:pl-0"
    >
      <Image src={ArrowLeft} alt="" /> Back
    </button>
  );
}

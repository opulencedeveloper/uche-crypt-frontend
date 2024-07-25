import Link from "next/link";
import Image from "next/image";

import ArrowLeft from "@/assets/images/arrow-left.png";

export default function GoBackLink() {
  return (
    <Link
      href="/"
      className="flex w-max items-center gap-1 text-dark1 text-base font-normal pl-6 xl:pl-0"
    >
      <Image src={ArrowLeft} alt="" /> Back
    </Link>
  );
}

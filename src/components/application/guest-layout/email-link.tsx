import Image from "next/image";
import Email from "@/assets/images/contact-dropdown/mail.svg";

import ChevronRight from "@/assets/images/contact-dropdown/chevron-right.svg";
import Link from "next/link";

export default function EmailLink() {
  return (
    <Link
      href="mailto:info.uchecrypt@gmail.com"
      className="w-full cursor-pointer flex justify-between items-start"
    >
      <div className="flex items-start gap-3">
        <Image src={Email} alt="" width={15.88} height={16} />
        <div className="flex flex-col gap-0.5">
          <p className="text-dark1 text-sm font-bold leading-[21px]">Email</p>
          <p className="text-[#6B7588] text-base font-normal leading-6">
            info.uchecrypt@gmail.com
          </p>
        </div>
      </div>
      <Image src={ChevronRight} alt="" />
    </Link>
  );
}
